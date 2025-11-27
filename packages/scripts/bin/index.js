#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const TEMPLATES_DIR = path.join(ROOT, 'src', 'templates');

const pkgJsonPath = path.join(ROOT, 'package.json');
let pkgVersion = '0.0.0';

try {
    const pkgJson = fs.readJsonSync(pkgJsonPath);
    pkgVersion = pkgJson.version || pkgVersion;
} catch (e) {
    pkgVersion = '0.0.0';
}

function getTemplates() {
    if (!fs.existsSync(TEMPLATES_DIR)) return [];
    return fs
        .readdirSync(TEMPLATES_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
}

async function runInitCommand({ name, template }) {
    const availableTemplates = getTemplates();

    if (availableTemplates.length === 0) {
        console.log(chalk.red('❌ No templates found in "templates" directory.'));
        process.exit(1);
    }

    // Resolve template
    if (!template) {
        if (availableTemplates.length === 1) {
            template = availableTemplates[0];
            console.log(chalk.cyan(`ℹ️ Using template: "${template}"`));
        } else {
            const { chosenTemplate } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'chosenTemplate',
                    message: 'Select a template:',
                    choices: availableTemplates
                }
            ]);
            template = chosenTemplate;
        }
    }

    if (!availableTemplates.includes(template)) {
        console.log(
            chalk.red(
                `❌ Unknown template "${template}". Available: ${availableTemplates.join(', ')}`
            )
        );
        process.exit(1);
    }

    // Resolve name
    if (!name) {
        const { projectName } = await inquirer.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter your project name:',
                default: 'my-app',
                validate: (input) =>
                    /^([A-Za-z\-\_\d])+$/i.test(input)
                        ? true
                        : 'Name may only include letters, numbers, underscores and hyphens.'
            }
        ]);
        name = projectName;
    }

    const targetPath = path.resolve(process.cwd(), name);
    const sourcePath = path.join(TEMPLATES_DIR, template);

    if (fs.existsSync(targetPath)) {
        console.log(chalk.red(`❌ Directory "${name}" already exists.`));
        process.exit(1);
    }

    console.log(
        chalk.cyan(
            `\n📁 Initializing "${template}" template as "${name}" in ${targetPath}...\n`
        )
    );

    await fs.copy(sourcePath, targetPath);

    // Update package.json name if exists
    const pkgPath = path.join(targetPath, 'package.json');
    if (fs.existsSync(pkgPath)) {
        const pkg = await fs.readJson(pkgPath);
        pkg.name = name;
        await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    }

    console.log(chalk.green('✅ Project created successfully!\n'));
    console.log(chalk.cyan('Next steps:'));
    console.log(`  cd ${name}`);
    console.log('  npm install');
    console.log('  npm run dev');

    const { installNow } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'installNow',
            message: 'Install dependencies now?',
            default: true
        }
    ]);

    if (installNow) {
        console.log(chalk.cyan('\n📦 Installing dependencies...\n'));
        try {
            execSync('npm install --legacy-peer-deps', { cwd: targetPath, stdio: 'inherit' });
            console.log(chalk.green('\n✅ Dependencies installed. All set!\n'));
        } catch (err) {
            console.log(
                chalk.red(
                    '\n⚠️ Failed to install dependencies automatically. Please run "npm install" manually.\n'
                )
            );
        }
    }
}

const program = new Command();

program
    .name('@ab.uitools/scripts')
    .description('CLI utilities for @ab.uitools')
    .version(pkgVersion)
    .option('--name <name>', 'Project name')
    .option('--template <template>', 'Template to use (e.g. react, next)')
    .action((options) => {
        runInitCommand(options).catch((err) => {
            console.error(chalk.red('\nUnexpected error:\n'), err);
            process.exit(1);
        });
    });

program.parse(process.argv);
