module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    // '**/tests/unit/**/*.spec.[jt]s?(x)',
    // '**/__tests__/*.[jt]s?(x)',
    // '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)',
    // '**/__tests__/*.(js|jsx|ts|tsx)',
    '**/tests/unit/**/*.spec.(js|jsx)',
    '**/__tests__/*.(js|jsx)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/examples/$1',
    '^@ml/(.*)$': '<rootDir>/examples/components/ml/$1',
  },
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
