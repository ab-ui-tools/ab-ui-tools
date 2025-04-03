import yargs from 'yargs';
// @ts-ignore
import crossSpawn from 'cross-spawn';
// @ts-ignore
import chalk from 'chalk';

import { Script, Template } from '../common/types';

const templates = Object.values(Template);
const scripts = Object.values(Script);

const argv = yargs
  .usage(`Usage: $0 <${scripts.join(' | ')}> [options]`)
  .command(Script.ReplaceModule, 'Replace dist for project')
  .option('projectPath', {
    type: 'string',
    default: '../../main-client',
    description: 'Specify your project path where you want to copy dist',
  })
  .command(Script.Init, 'Init empty project.')
  // .version(chalk.green(buildScriptsVersion))
  // .option('template', {
  //   type: 'string',
  //   default: Template.MFE,
  //   description: 'Template which will be used to create a project.',
  // })
  .option('projectName', { type: 'string', default: 'wf-project', description: 'Specify your project name' })
  .option('watchAll', { type: 'boolean', default: false, description: 'Watch all test files' })
  .option('watch', { type: 'boolean', default: false, description: 'Watch files' })
  .alias('h', 'help')
  .alias('v', 'version')
  .parseSync();

const { _, watch, watchAll, passWithNoTests, projectName, template, projectPath } = argv;
const [script, ...rest] = _;

if (!scripts.includes(script as Script)) {
  console.error(chalk.red(`Provide script name one of ${scripts.toString()}`));
  console.error(chalk.yellow(`Unknown script "${script ?? ''}". Perhaps you need to update @wf/build-scripts?`));

  process.exit(1);
}

if (script === Script.Init && !templates.includes(template as Template)) {
  console.error(chalk.red(`Provide template one of ${templates.toString()}`));
  console.error(chalk.yellow(`Unknown template "${template ?? ''}". Perhaps you need to update @wf/build-scripts?`));

  process.exit(1);
}

let result;

switch (script) {
  case Script.Init: {
    result = crossSpawn.sync(
      process.execPath,
      [require.resolve('./scripts/init'), `--projectName=${String(projectName)}`, `--template=${String(template)}`],
      { stdio: 'inherit' }
    );
    break;
  }

  default:
    break;
}

if (result?.signal) {
  if (result.signal === 'SIGKILL') {
    console.log(
      chalk.red(
        'The build failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
      )
    );
  } else if (result.signal === 'SIGTERM') {
    console.log(
      chalk.red(
        'The build failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
      )
    );
  }

  console.log(chalk.red(result.signal));
  process.exit(1);
}

if (result?.error) {
  console.log(chalk.red('Something went wrong!'));
  console.error(result.error);
}

process.exit((result?.status as number) ?? 1);

process.on('unhandledRejection', error => {
  console.log(chalk.red('Something went wrong!'));
  console.log(error);

  throw error;
});
