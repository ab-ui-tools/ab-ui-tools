import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen',
  },
  addons: [
    { name: 'storybook-design-token', options: { preserveCSSVars: true } },
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    // TODO check do wee need outlining
    // '@storybook/addon-outline',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    // @ts-ignore
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      }
    );
    // @ts-ignore
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx', '.css', '.scss');
    // if (configType === 'DEVELOPMENT') {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '~@ab.uitools/ui-library': path.resolve(__dirname, '../../ui-library/dist'),
      '@ab.uitools/ui-library/dist': path.resolve(__dirname, '../../ui-library/dist'),
      '@ab.uitools/ui-library': path.resolve(__dirname, '../../ui-library/dist'),
      '@ab.uitools/ui-library/*': path.resolve(__dirname, '../../ui-library/dist/*'),
    };

    config.watch = true;
    // }

    return config;
  },
};

export default config;
