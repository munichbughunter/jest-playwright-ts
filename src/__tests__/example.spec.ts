export { };

describe('First UI Test', () => {
    it('open testing page', async () => {
        await page.goto(`${process.env.APP_BASE_URL}`);
        expect(await page.title()).toBe('GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.');
    });
});
