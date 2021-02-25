module.exports = {
  roots: ["<rootDir>/src/tests/"], // Paths, where we can find our tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^Scripts(.*)$": "<rootDir>/src/scripts$1",
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true, // for more info about our test's results
  collectCoverage: true, // Grapfic for console + create dir coverage with statement
  collectCoverageFrom: [
    '<rootDir>/src/scripts/**/*.ts',
    '<rootDir>/src/scripts/**/*.tsx',
    '<rootDir>/src/scripts/**/*.js',
    '<rootDir>/src/scripts/**/*.jsx',
  ]
}