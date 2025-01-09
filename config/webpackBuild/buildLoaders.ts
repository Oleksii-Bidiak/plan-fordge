import { BuildOptions } from './types/config'
import { RuleSetRule } from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildSvgLoader } from './loaders/buildSvgrLoaders'
import { buildAssetLoader } from './loaders/buildAssetLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const { isDev } = options

  const assetLoader = buildAssetLoader()
  const svgLoader = buildSvgLoader()
  const cssLoaders = buildCssLoaders(isDev)
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  return [
    assetLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoaders,
  ]
}
