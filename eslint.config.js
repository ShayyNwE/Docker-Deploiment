const globals = require('globals')

module.exports = [
    {
        languageOptions: {
            ecmaVersions: 2021,
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
    },
]