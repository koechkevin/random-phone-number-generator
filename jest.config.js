module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.(js|jsx)', '!src/index.js', '!src/app.js', '!src/views/index.js'],
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/setupFiles.js'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/views/__mocks__/fileMock.js',
  },
  verbose: false,
};
