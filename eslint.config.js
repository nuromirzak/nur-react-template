import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, importPlugin.flatConfigs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'arrow-body-style': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always'],
      'import/no-default-export': 'error',
      'quotes': ['error', 'double', { 'allowTemplateLiterals': true }],
      'comma-dangle': ['error', 'always-multiline'],
      'semi': ['error', 'always'],
      'eol-last': ['error', 'always'],
    },
  },
)
