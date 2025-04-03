import path from 'path';
import fse from 'fs-extra';
import chalk from 'chalk';

import { getProcessOptions } from '../../utils/common';

const { template, projectName } = getProcessOptions();

if (!template || !projectName) {
  console.log(chalk.red('template and/or projectName is not provided'));

  process.exit(1);
}

const packageJSON = require(path.resolve(__dirname, `../../../../templates/${template ?? ''}/package.json`));
packageJSON.name = projectName;

fse.writeFileSync(
  path.resolve(__dirname, `../../../../templates/${template}/package.json`),

  JSON.stringify(packageJSON, null, 2)
);

const folderName = `./${projectName}`;

try {
  if (!fse.existsSync(folderName)) {
    fse.mkdirSync(folderName);
  } else {
    console.log(chalk.red(`You already have directory with the name ${projectName}`));
  }
} catch (err) {
  console.error(err);
}

try {
  fse.copySync(path.resolve(__dirname, `../../../../templates/${template}`), `./${projectName}`);
} catch (err) {
  console.log(err);
}

console.log(chalk.green('Project successfully created!'));
process.exit();
