module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/config/jest/typescriptTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.css$': '<rootDir>/config/jest/cssMapper.js'
  },
  moduleFileExtensions: [
    'mjs',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'web.js',
    'js',
    'web.jsx',
    'jsx',
    'json',
    'node'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.test.json'
    }
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.ts',
  globalSetup: '<rootDir>/config/jest/globalSetup.js',
  globalTeardown: '<rootDir>/config/jest/teardown.js',
  testEnvironment: '<rootDir>/config/jest/puppeteer_environment.js'
};
