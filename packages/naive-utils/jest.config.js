module.exports = {
  roots: ["<rootDir>/__tests__"], // jest 搜索目录，默认为 ["<rootDir>"]
  moduleFileExtensions: ["jsx", "js", "ts", "tsx"],
  testMatch: ["**/**/__tests__/**/*.test.js?(x)"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageDirectory: "<rootDir>/__tests__/coverage"
};
