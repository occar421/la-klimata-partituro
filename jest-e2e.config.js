module.exports = Object.assign({}, require('./jest.config'), {
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.e2e.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).e2e.ts?(x)'
  ],
  globalSetup: '<rootDir>/config/jest/globalSetup.js',
  globalTeardown: '<rootDir>/config/jest/teardown.js',
  testEnvironment: '<rootDir>/config/jest/puppeteerEnvironment.js',
  setupTestFrameworkScriptFile: undefined
});
