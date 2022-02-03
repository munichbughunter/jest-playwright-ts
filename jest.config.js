module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    transform: {
        '\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './reports/html',
                filename: 'report.html',
                expand: true,
            },
        ],
    ],
    testMatch: [
        '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
    ],
};
