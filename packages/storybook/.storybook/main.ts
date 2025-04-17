import type { StorybookConfig } from '@storybook/react-webpack5';

// @ts-ignore
import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
    check: false, // Add this to disable type checking during build
  },
  addons: [
    { name: 'storybook-design-token', options: { preserveCSSVars: true } },
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
