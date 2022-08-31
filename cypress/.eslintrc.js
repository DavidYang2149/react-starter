module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: ['plugin:cypress/recommended'],
  rules: {
    // 'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'off',
    // 'cypress/assertion-before-screenshot': 'warn',
    // 'cypress/no-force': 'warn',
    // 'cypress/no-async-tests': 'error',
    // 'cypress/no-pause': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120 }],
  },
};
