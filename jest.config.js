export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>setupTests.ts"],
  testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|tsx)"],
  testPathIgnorePatterns: ["<rootDir>/tests/e2e/"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    // "^.+\\.svg$": "jest-transform-stub",
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
  },
};
