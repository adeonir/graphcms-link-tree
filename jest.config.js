module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/*.ts(x)?',
    '!src/graphql/*',
    '!src/lib/*',
    '!src/migrations/*',
    '!src/pages/*',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/config.ts'],
  modulePaths: ['<rootDir>/src', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
