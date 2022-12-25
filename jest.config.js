module.exports = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  globalSetup: "<rootDir>/jest.setup.js",
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [ "<rootDir>/components/**/*.vue" ]
};