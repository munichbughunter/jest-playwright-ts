/* eslint-disable no-undef */
// required line as long as there are no imports defined in this file
export { };

describe('First UI Test', () => {
    it('open testing page', async () => {
        await page.goto('https://github.com/microsoft/playwright');
        expect(await page.title()).toBe('GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.');
    });
});
