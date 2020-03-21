module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'quotes': ['warn', 'single', { 'avoidEscape': true, allowTemplateLiterals: true }],
        'no-trailing-spaces': 'warn',
        'semi': ['warn', 'always'],
        'semi-spacing': 'warn',
        'semi-style': ['warn', 'last'],
        'curly': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-console': 'warn',
        'space-before-blocks': 'warn',
        'no-whitespace-before-property': 'warn',
        'block-spacing': 'warn',
        'arrow-spacing': 'warn',
        'keyword-spacing': ['warn', { 'before': true }],
        'array-bracket-spacing': ['warn', 'never', {
            'objectsInArrays': false,
            'arraysInArrays': false
         }],
        'func-call-spacing': ['warn', 'never'],
        'no-extra-parens':'warn',
        'max-len': ['warn', { 'code': 120 }],
        'new-cap': ['warn', {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 'warn',
        'space-in-parens': ['warn', 'never'],
        'no-lone-blocks': 'warn',
        'no-return-await': 'warn',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'switch-colon-spacing': 'error',
        'default-case': 'error',
        'prefer-const': 'warn',
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'object-curly-spacing': ['warn', 'always'],
        'no-multiple-empty-lines': ['warn', {
            'max': 2,
            'maxBOF': 0,
            'maxEOF': 1
        }],
        'padded-blocks': ['warn', 'never'],
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        'key-spacing': ['warn', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict'
        }],
        'eol-last': ['warn', 'always'],
        'padded-blocks': ['error', 'never'],
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'warn',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/camelcase': 'warn',
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
        '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }]
    }
};
