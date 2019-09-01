module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    siteURL: 'http://localhost:3000',
    delay: 50
  },
  testURL: 'http://localhost:3000',
  testMatch: ['<rootDir>/__e2e__/**/*.test.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  modulePaths: [],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node'
  ],
  verbose: true
  // reporters: [
  //   'default',
  //   [
  //     'jest-html-reporters',
  //     {
  //       publicPath: './e2e-report',
  //       filename: 'report.html',
  //       expand: true,
  //     },
  //   ],
  // ],
}
