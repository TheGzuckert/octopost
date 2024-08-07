import eslintCommunityComments from '@eslint-community/eslint-plugin-eslint-comments';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import { defineFlatConfig } from 'eslint-define-config';
import eslintPluginArrayFunc from 'eslint-plugin-array-func';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginImportHelpers from 'eslint-plugin-import-helpers';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHook from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginRegexp from 'eslint-plugin-regexp';
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginVitest from 'eslint-plugin-vitest';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

import 'eslint-plugin-only-warn';

export default defineFlatConfig([
  {
    ignores: [
      'dist',
      'dist-electron',
      'node_modules',
      'playwright-report',
      'playwright/.cache',
      'coverage',
    ],
  },
  js.configs.recommended,

  // Typescript
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
    },
    rules: {
      '@typescript-eslint/array-type': [
        'warn',
        { default: 'array', readonly: 'array' },
      ],
      '@typescript-eslint/await-thenable': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/class-literal-property-style': 'warn',
      '@typescript-eslint/class-methods-use-this': 'warn',
      '@typescript-eslint/consistent-generic-constructors': [
        'warn',
        'constructor',
      ],
      '@typescript-eslint/consistent-indexed-object-style': ['warn', 'record'],
      '@typescript-eslint/consistent-type-assertions': [
        'warn',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/default-param-last': 'warn',
      '@typescript-eslint/dot-notation': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/max-params': ['warn', { max: 3 }],
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/method-signature-style': ['warn', 'property'],
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      '@typescript-eslint/no-dynamic-delete': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-for-in-array': 'warn',
      '@typescript-eslint/no-implied-eval': 'warn',
      '@typescript-eslint/no-import-type-side-effects': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/no-loop-func': 'warn',
      '@typescript-eslint/no-loss-of-precision': 'warn',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          detectObjects: false,
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreClassFieldInitialValues: true,
          ignoreDefaultValues: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
        },
      ],
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-misused-new': 'warn',
      '@typescript-eslint/no-misused-promises': [
        'warn',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-mixed-enums': 'warn',
      '@typescript-eslint/no-namespace': 'warn',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-throw-literal': 'warn',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-useless-empty-export': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/parameter-properties': 'warn',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/prefer-destructuring': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-namespace-keyword': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/prefer-return-this-type': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/prefer-ts-expect-error': 'warn',
      '@typescript-eslint/promise-function-async': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'warn',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-plus-operands': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/return-await': 'warn',
      '@typescript-eslint/sort-type-constituents': 'warn',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/typedef': 'warn',
      '@typescript-eslint/unbound-method': 'warn',
      '@typescript-eslint/unified-signatures': 'warn',
      'class-methods-use-this': 'off',
      'dot-notation': 'off',
      'max-params': 'off',
      'no-loss-of-precision': 'off',
      'no-magic-numbers': 'off',
      'no-unused-vars': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json', './tsconfig.node.json'],
        },
      },
    },
  },

  // React
  {
    files: ['**/*.jsx', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@eslint-community/eslint-comments': eslintCommunityComments,
      'import-helpers': eslintPluginImportHelpers,
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      'react-refresh': eslintPluginReactRefresh,
    },
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': [
        'warn',
        { allowWholeFile: true },
      ],
      '@eslint-community/eslint-comments/no-aggregating-enable': 'warn',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'warn',
      '@eslint-community/eslint-comments/no-unused-disable': 'warn',
      '@eslint-community/eslint-comments/no-unused-enable': 'warn',
      '@eslint-community/eslint-comments/require-description': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-ambiguous-text': 'warn',
      'jsx-a11y/anchor-has-content': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/autocomplete-valid': 'warn',
      'jsx-a11y/heading-has-content': 'warn',
      'jsx-a11y/html-has-lang': 'warn',
      'jsx-a11y/iframe-has-title': 'warn',
      'jsx-a11y/img-redundant-alt': 'warn',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/lang': 'warn',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'jsx-a11y/no-access-key': 'warn',
      'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/no-distracting-elements': 'warn',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'jsx-a11y/scope': 'warn',
      'jsx-a11y/tabindex-no-positive': 'warn',
      'react-refresh/only-export-components': 'warn',
      'react/boolean-prop-naming': 'warn',
      'react/button-has-type': 'off',
      'react/forbid-dom-props': ['warn', { forbid: ['style'] }],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/hook-use-state': 'warn',
      'react/iframe-missing-sandbox': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-child-element-spacing': 'warn',
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      'react/jsx-closing-tag-location': 'warn',
      'react/jsx-equals-spacing': ['warn', 'never'],
      'react/jsx-filename-extension': [
        1,
        { allow: 'as-needed', extensions: ['.jsx', '.tsx'] },
      ],
      'react/jsx-first-prop-new-line': 'warn',
      'react/jsx-fragments': 'warn',
      'react/jsx-handler-names': [
        'warn',
        {
          eventHandlerPropPrefix: false,
        },
      ],
      'react/jsx-key': 'warn',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-script-url': 'warn',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-undef': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/no-array-index-key': 'warn',
      'react/no-children-prop': 'warn',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'warn',
      'react/no-deprecated': 'warn',
      'react/no-find-dom-node': 'warn',
      'react/no-invalid-html-attribute': 'warn',
      'react/no-multi-comp': ['warn', { ignoreStateless: true }],
      'react/no-namespace': 'warn',
      'react/no-object-type-as-default-prop': 'warn',
      'react/no-render-return-value': 'warn',
      'react/no-string-refs': 'warn',
      'react/no-this-in-sfc': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/no-unknown-property': 'warn',
      'react/no-unstable-nested-components': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/style-prop-object': 'warn',
      'react/void-dom-elements-no-children': 'warn',
    },
    settings: {
      react: {
        version: '18.2.0',
      },
    },
  },

  // All JS/TS
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'array-func': eslintPluginArrayFunc,
      import: eslintPluginImport,
      'import-helpers': eslintPluginImportHelpers,
      'no-secrets': eslintPluginNoSecrets,
      perfectionist: eslintPluginPerfectionist,
      promise: eslintPluginPromise,
      regexp: eslintPluginRegexp,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'array-func/avoid-reverse': 'warn',
      'array-func/from-map': 'warn',
      'array-func/no-unnecessary-this-arg': 'warn',
      'array-func/prefer-array-from': 'warn',
      'array-func/prefer-flat': 'warn',
      'array-func/prefer-flat-map': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],
      'import-helpers/order-imports': [
        'warn',
        {
          alphabetize: { ignoreCase: true, order: 'asc' },
          groups: [
            '/^react.*/',
            '/^next/',
            'module',
            [
              '/^\\~interfaces/',
              '/^\\~store/',
              '/^\\~snippets/',
              '/^\\~hooks/',
              '/^\\~services/',
              '/^\\~transformers/',
              '/^\\~constants/',
              '/^\\~utils/',
              '/^\\~enums/',
              '/^\\~types/',
              '/^\\~config/',
            ],
            '/^(\\.|\\.\\.)(\\/[a-z]{1}\\w+)*$/',
            '/^\\~components/',
            '/^(\\.|\\.\\.)(\\/[\\w]+)*((\\/[A-Z]{1}\\w+)){1}$/',
            '/\\~styles/',
            '/^(\\.|\\.\\.).*(\\.scss)$/',
            '/^(\\.|\\.\\.).*(\\.(svg|png|jpg|jpeg))$/',
          ],
          newlinesBetween: 'always',
        },
      ],
      'import/default': 'warn',
      'import/export': 'warn',
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-absolute-path': 'warn',
      'import/no-anonymous-default-export': [
        'warn',
        { allowArray: true, allowObject: true },
      ],
      'import/no-cycle': 'warn',
      'import/no-deprecated': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-empty-named-blocks': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-self-import': 'warn',
      'import/no-unused-modules': 'warn',
      'import/order': 'off', // keep disable to not conflict with import-helpers/order-imports
      'no-console': 'warn',
      'no-loop-func': 'off',
      'no-secrets/no-secrets': 'warn',
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-astro-attributes': 'warn',
      'perfectionist/sort-enums': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-imports': 'off', // keep disable to not conflict with import-helpers/order-imports
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-maps': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-objects': 'warn',
      'promise/always-return': 'warn',
      'promise/catch-or-return': 'warn',
      'promise/no-callback-in-promise': 'warn',
      'promise/no-multiple-resolved': 'warn',
      'promise/no-nesting': 'warn',
      'promise/no-new-statics': 'warn',
      'promise/no-promise-in-callback': 'warn',
      'promise/no-return-in-finally': 'warn',
      'promise/no-return-wrap': 'warn',
      'promise/param-names': 'warn',
      'promise/prefer-await-to-then': 'warn',
      'regexp/confusing-quantifier': 'warn',
      'regexp/control-character-escape': 'warn',
      'regexp/negation': 'warn',
      'regexp/no-contradiction-with-assertion': 'warn',
      'regexp/no-dupe-characters-character-class': 'warn',
      'regexp/no-empty-alternative': 'warn',
      'regexp/no-empty-capturing-group': 'warn',
      'regexp/no-empty-character-class': 'warn',
      'regexp/no-empty-group': 'warn',
      'regexp/no-empty-lookarounds-assertion': 'warn',
      'regexp/no-empty-string-literal': 'warn',
      'regexp/no-escape-backspace': 'warn',
      'regexp/no-extra-lookaround-assertions': 'warn',
      'regexp/no-invalid-regexp': 'warn',
      'regexp/no-invisible-character': 'warn',
      'regexp/no-lazy-ends': 'warn',
      'regexp/no-legacy-features': 'warn',
      'regexp/no-misleading-capturing-group': 'warn',
      'regexp/no-misleading-unicode-character': 'warn',
      'regexp/no-missing-g-flag': 'warn',
      'regexp/no-non-standard-flag': 'warn',
      'regexp/no-obscure-range': 'warn',
      'regexp/no-optional-assertion': 'warn',
      'regexp/no-potentially-useless-backreference': 'warn',
      'regexp/no-super-linear-backtracking': 'warn',
      'regexp/no-useless-assertions': 'warn',
      'regexp/no-useless-backreference': 'warn',
      'regexp/no-useless-dollar-replacements': 'warn',
      'unicorn/better-regex': 'warn',
      'unicorn/catch-error-name': 'warn',
      'unicorn/consistent-destructuring': 'warn',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/escape-case': 'warn',
      'unicorn/expiring-todo-comments': 'warn',
      'unicorn/explicit-length-check': 'warn',
      'unicorn/new-for-builtins': 'warn',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'warn',
      'unicorn/no-array-method-this-argument': 'warn',
      'unicorn/no-array-push-push': 'warn',
      'unicorn/no-await-expression-member': 'warn',
      'unicorn/no-console-spaces': 'warn',
      'unicorn/no-document-cookie': 'warn',
      'unicorn/no-empty-file': 'warn',
      'unicorn/no-for-loop': 'warn',
      'unicorn/no-instanceof-array': 'warn',
      'unicorn/no-invalid-remove-event-listener': 'warn',
      'unicorn/no-lonely-if': 'warn',
      'unicorn/no-negated-condition': 'warn',
      'unicorn/no-nested-ternary': 'warn',
      'unicorn/no-new-array': 'warn',
      'unicorn/no-new-buffer': 'warn',
      'unicorn/no-static-only-class': 'warn',
      'unicorn/no-this-assignment': 'warn',
      'unicorn/no-unnecessary-await': 'warn',
      'unicorn/no-unnecessary-polyfills': 'warn',
      'unicorn/no-unreadable-array-destructuring': 'warn',
      'unicorn/no-unreadable-iife': 'warn',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/no-useless-fallback-in-spread': 'warn',
      'unicorn/no-useless-length-check': 'warn',
      'unicorn/no-useless-promise-resolve-reject': 'warn',
      'unicorn/no-useless-spread': 'warn',
      'unicorn/no-useless-switch-case': 'warn',
      'unicorn/no-useless-undefined': 'warn',
      'unicorn/no-zero-fractions': 'warn',
      'unicorn/number-literal-case': 'warn',
      'unicorn/numeric-separators-style': 'warn',
      'unicorn/prefer-add-event-listener': 'warn',
      'unicorn/prefer-array-find': 'warn',
      'unicorn/prefer-array-index-of': 'warn',
      'unicorn/prefer-array-some': 'warn',
      'unicorn/prefer-at': 'warn',
      'unicorn/prefer-blob-reading-methods': 'warn',
      'unicorn/prefer-code-point': 'warn',
      'unicorn/prefer-date-now': 'warn',
      'unicorn/prefer-default-parameters': 'warn',
      'unicorn/prefer-dom-node-append': 'warn',
      'unicorn/prefer-dom-node-dataset': 'warn',
      'unicorn/prefer-dom-node-remove': 'warn',
      'unicorn/prefer-dom-node-text-content': 'warn',
      'unicorn/prefer-event-target': 'warn',
      'unicorn/prefer-export-from': 'warn',
      'unicorn/prefer-includes': 'warn',
      'unicorn/prefer-json-parse-buffer': 'warn',
      'unicorn/prefer-keyboard-event-key': 'warn',
      'unicorn/prefer-logical-operator-over-ternary': 'warn',
      'unicorn/prefer-modern-dom-apis': 'warn',
      'unicorn/prefer-modern-math-apis': 'warn',
      'unicorn/prefer-native-coercion-functions': 'warn',
      'unicorn/prefer-negative-index': 'warn',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prefer-number-properties': 'warn',
      'unicorn/prefer-object-from-entries': 'warn',
      'unicorn/prefer-optional-catch-binding': 'warn',
      'unicorn/prefer-prototype-methods': 'warn',
      'unicorn/prefer-query-selector': 'warn',
      'unicorn/prefer-reflect-apply': 'warn',
      'unicorn/prefer-regexp-test': 'warn',
      'unicorn/prefer-set-has': 'warn',
      'unicorn/prefer-set-size': 'warn',
      'unicorn/prefer-string-replace-all': 'warn',
      'unicorn/prefer-string-slice': 'warn',
      'unicorn/prefer-string-starts-ends-with': 'warn',
      'unicorn/prefer-string-trim-start-end': 'warn',
      'unicorn/prefer-switch': 'warn',
      'unicorn/relative-url-style': 'warn',
      'unicorn/require-array-join-separator': 'warn',
      'unicorn/require-number-to-fixed-digits-argument': 'warn',
      'unicorn/require-post-message-target-origin': 'warn',
      'unicorn/switch-case-braces': 'warn',
      'unicorn/template-indent': 'warn',
      'unicorn/throw-new-error': 'warn',
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.jsx'],
      },
    },
  },

  // JS/MJS in root
  {
    files: ['*.js', '*.mjs'],
    ignores: ['src', 'electron'],
    rules: {
      'no-console': 'off',
    },
  },

  // Hooks
  {
    files: ['**/use*.*'],
    plugins: {
      'react-hooks': eslintPluginReactHook,
    },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'unicorn/consistent-function-scoping': 'off',
    },
  },

  // Services
  {
    files: ['**/services/**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },

  // Vitest
  {
    files: ['**/*.spec.*', '**/setupTests.ts', '**/*.mock.ts'],
    ignores: ['**/*.ct.spec.*', '**/*.ct.test.*'],
    languageOptions: {
      globals: {
        ...globals.jest,
        vi: true,
      },
    },
    plugins: {
      'testing-library': eslintPluginTestingLibrary,
      vitest: eslintPluginVitest,
    },
    rules: {
      ...eslintPluginVitest.configs.recommended.rules,
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'testing-library/await-async-events': 'warn',
      'testing-library/await-async-queries': 'warn',
      'testing-library/await-async-utils': 'warn',
      'testing-library/no-await-sync-events': 'warn',
      'testing-library/no-await-sync-queries': 'warn',
      'testing-library/no-container': 'warn',
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'warn',
      'testing-library/no-global-regexp-flag-in-query': 'warn',
      'testing-library/no-manual-cleanup': 'warn',
      'testing-library/no-node-access': 'warn',
      'testing-library/no-promise-in-fire-event': 'warn',
      'testing-library/no-render-in-lifecycle': 'warn',
      'testing-library/no-unnecessary-act': 'warn',
      'testing-library/no-wait-for-multiple-assertions': 'warn',
      'testing-library/no-wait-for-side-effects': 'warn',
      'testing-library/no-wait-for-snapshot': 'warn',
      'testing-library/prefer-explicit-assert': 'warn',
      'testing-library/prefer-find-by': 'warn',
      'testing-library/prefer-implicit-assert': 'warn',
      'testing-library/prefer-presence-queries': 'warn',
      'testing-library/prefer-query-by-disappearance': 'warn',
      'testing-library/prefer-query-matchers': 'warn',
      'testing-library/prefer-screen-queries': 'warn',
      'testing-library/prefer-user-event': 'warn',
      'testing-library/render-result-naming-convention': 'warn',
      'unicorn/consistent-function-scoping': 'warn',
    },
  },

  // Playwright
  {
    files: ['**/*.ct.spec.*'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {
      '@typescript-eslint/await-thenable': 'off',
      'react/forbid-dom-props': 'off',
    },
  },

  // Story
  {
    files: ['**/*.stories.*'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'no-console': 'off',
      'no-secrets/no-secrets': 'off',
      'react/forbid-dom-props': 'off',
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/no-children-prop': 'off',
      'react/no-multi-comp': 'off',
      'react/prop-types': 'off',
      'write-good-comments/write-good-comments': 'off',
    },
  },

  // Electron
  {
    files: ['**/electron/*'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './electron/tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'no-console': 'off',
      'no-undef': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },

  // Playwright config folder
  {
    files: ['playwright/**/*'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'unicorn/no-empty-file': 'off',
    },
  },

  // Ladle config folder
  {
    files: ['.ladle/**/*'],
    rules: {
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'unicorn/no-empty-file': 'off',
    },
  },

  // Config files
  {
    files: ['**/*.config.*'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },

  eslintConfigPrettier,
]);
