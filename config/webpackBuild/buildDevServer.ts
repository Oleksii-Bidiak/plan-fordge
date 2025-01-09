import type { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(port: number): WebpackDevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    compress: true,
  }
}
