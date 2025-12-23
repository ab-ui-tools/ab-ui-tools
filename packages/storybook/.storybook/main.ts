import type { StorybookConfig } from '@storybook/react-webpack5';

// @ts-ignore
import path from 'path';

// Set DESIGN_TOKEN_GLOB if not already set via environment variable
// The addon scans from the storybook package directory, so we use a relative path
// This works in both dev and build because the monorepo structure is preserved
if (!process.env.DESIGN_TOKEN_GLOB) {
  // Relative path from storybook package root to ui-library tokens
  // Works in both development and build/deployment
  process.env.DESIGN_TOKEN_GLOB = '../ui-library/src/assets/styles/tokens/**/*.scss';
}

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
    check: false, // Add this to disable type checking during build
  },
  addons: [
    {
      name: 'storybook-design-token',
      options: {
        preserveCSSVars: true,
      },
    },
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    // TODO check do wee need outlining
    // '@storybook/addon-outline',
    '@storybook/addon-links',
    // '@storybook/addon-essentials', // Consider adding this
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      oneOf: [
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                implementation: require('sass'),
              },
            },
          ],
        },

        {
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                implementation: require('sass'),
                sassOptions: {
                  includePaths: [path.resolve(__dirname, '../src/assets/styles')],
                },
              },
            },
          ],
        },
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      ],
    });
    // @ts-ignore
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.css', '.scss');
    // if (configType === 'DEVELOPMENT') {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '~@ab.uitools/ui-library': path.resolve(__dirname, '../../ui-library/src'),
      '@ab.uitools/ui-library': path.resolve(__dirname, '../../ui-library/src'),
      '@ab.uitools/ui-library/*': path.resolve(__dirname, '../../ui-library/src/*'),
    };
    // }

    return config;
  },
};

export default config;
