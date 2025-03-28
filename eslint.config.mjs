import js from '@eslint/js'
import globals from 'globals'
import typescriptParser from  '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint';
import { fixupPluginRules } from "@eslint/compat";
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import perfectionist from 'eslint-plugin-perfectionist';

const baseConfig = tseslint.config({
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/dist/**', '**/node_modules/**', 'dist', 'node_modules'],
    languageOptions: {
        ecmaVersion: 2015,
        globals: globals.browser,
        parser: typescriptParser,
    },
    plugins: {
        'react-hooks': fixupPluginRules(reactHooks),
        'react-refresh': reactRefresh,
        '@typescript-eslint': tsEslintPlugin,
        'prettier': prettier,
        'unused-imports': unusedImports,
        'perfectionist': perfectionist
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        ...tsEslintPlugin.configs.recommended.rules,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": false // Disable enforcement of @ts-expect-error over @ts-ignore
            }
        ],
        "@typescript-eslint/consistent-type-imports": [ "error", { "prefer": "type-imports" } ],
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                tabWidth: 2,
                trailingComma: 'es5',
                singleQuote: true,
                arrowParens: 'avoid',
            },
            {
                usePrettierrc: false,
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'perfectionist/sort-imports': [
            'error',
            {
                type: 'alphabetical',
                order: 'desc',
                ignoreCase: true,
                // internalPattern: ['~/**'],
                newlinesBetween: 'always',
                maxLineLength: undefined,
                groups: [
                    'type',
                    ['builtin', 'external'],
                    'internal',
                    ['parent-type', 'sibling-type', 'index-type'],
                    ['parent', 'sibling', 'index'],
                    'object',
                    'unknown',
                ],
                customGroups: { type: {}, value: {} },
            },
        ],
    },
})

const storybookConfig = tseslint.config({
  files: ['packages/storybook/**/*.{ts,tsx}'],
  rules: {
    "@typescript-eslint/no-explicit-any": "off" // Disable for Storybook
  }
})

export default tseslint.config(
    baseConfig,
    storybookConfig
)