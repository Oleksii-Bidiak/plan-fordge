import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,

  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.jest,
        ...globals.browser,
        __IS_DEV__: true,
        __API__: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    files: ['**/*.{ts,tsx,js}'],
    rules: {
      'no-extra-boolean-cast': 'off',
      'lines-between-class-members': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 0,
      'no-undef': 'off',
      'react-hooks/exhaustive-deps': 'error',
      'react/no-array-index-key': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      'react-hooks': reactHooks,
      prettier: eslintPluginPrettier,
    },
  },
  {
    ignores: [
      'node_modules',
      'jest*',
      '*.test.ts',
      '*.test.tsx',
      'dist',
      'es',
      'lib',
    ],
  },
]
