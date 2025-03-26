import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginImportX from 'eslint-plugin-import-x';

export default tseslint.config(
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  { ignores: ['dist'] },
  {
    // eslint-disable-next-line import-x/no-named-as-default-member
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    settings: {
      'import/resolver': {
        typescript: {},
      },
    },

    plugins: {
      '@stylistic': stylistic,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn',
        { allowConstantExport: true }],
      '@stylistic/jsx-wrap-multilines': [0, 'parens-new-line'],
      '@stylistic/jsx-first-prop-new-line': [0, 'multiline'],
      '@stylistic/quotes': [
'error', 'single', { avoidEscape: true },
],
      '@stylistic/array-element-newline': ['error',
        {
          ArrayExpression: 'consistent',
          ArrayPattern: { minItems: 3 },
        }],
      '@stylistic/array-bracket-newline': ['error', { minItems: 3 }],
      '@stylistic/block-spacing': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
    },
  },
);
