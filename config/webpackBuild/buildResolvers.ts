import { ResolveOptions } from 'webpack';

export function buildResolvers(src: string): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': src,
    },
  };
}
