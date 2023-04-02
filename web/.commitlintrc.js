// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "body-max-line-length": [2, "always", "Infinity"],
        "body-min-length": [2, "always", 20],
        "header-case": [2, "always", "lower-case"],
        "header-max-length": [2, "always", 72],
        "type-enum": [
            2,
            "always",
            ["build", "ci", "docs", "feat", "fix", "i18n", "perf", "refactor", "release", "revert", "test"],
        ],
        "scope-enum": [
            2,
            "always",
            [
                "api",
                "autheliabot",
                "authentication",
                "authorization",
                "buildkite",
                "bundler",
                "cmd",
                "codecov",
                "commands",
                "configuration",
                "deps",
                "docker",
                "duo",
                "go",
                "golangci-lint",
                "handlers",
                "logging",
                "metrics",
                "middlewares",
                "mocks",
                "model",
                "notification",
                "npm",
                "ntp",
                "oidc",
                "random",
                "regulation",
                "renovate",
                "reviewdog",
                "server",
                "session",
                "storage",
                "suites",
                "templates",
                "totp",
                "utils",
                "web",
            ],
        ],
    },
    defaultIgnores: true,
    helpUrl: "https://www.authelia.com/contributing/guidelines/commit-message/",
};
