declare module 'react-dev-utils/ForkTsCheckerWarningWebpackPlugin' {
  import { type Plugin } from 'webpack';
  import { type ForkTsCheckerWebpackPluginOptions } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPluginOptions';

  export default class ForkTsCheckerWebpackPlugin implements Plugin {
    constructor(options?: ForkTsCheckerWebpackPluginOptions);
  }
}
