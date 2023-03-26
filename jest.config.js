module.exports = {
    "rootDir": ".",
    "moduleFileExtensions": [
        "js",
        "json",
        "ts"
    ],
    "modulePaths": [
        "<rootDir>/src",
        "<rootDir>/test"
    ],
    "testRegex": ".*test.ts$",
    "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
        "**/*.(t|j)s"
    ],
    "coverageDirectory": "coverage",
    "testEnvironment": "node"
}
