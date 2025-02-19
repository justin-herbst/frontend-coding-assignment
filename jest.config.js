/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { configFile: "./babel.jest.config.js" },
    ],
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@babel|other-allowlisted-module)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
