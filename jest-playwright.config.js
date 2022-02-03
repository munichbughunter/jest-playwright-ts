/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const allConfigurations = require('./config/playwright.json');

const { launchOptions, browsers } = allConfigurations;
const { BROWSERS = browsers.join() } = process.env;
const { HEADLESS = `${launchOptions.headless}` } = process.env;

module.exports = {
    ...allConfigurations,
    browsers: BROWSERS.split(','),
    exitOnPageError: false,
    launchOptions: {
        ...launchOptions,
        headless: HEADLESS.toLowerCase() === 'true',
    },
};
