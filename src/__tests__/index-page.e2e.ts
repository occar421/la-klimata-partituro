describe('/ (Home Page)', () => {
  // @ts-ignore
  let page: Puppeteer.Page;
  beforeAll(
    async () => {
      // @ts-ignore
      page = await global.__BROWSER__.newPage();
      // tslint:disable-next-line:no-http-string
      await page.goto('http://localhost:5000');
    },
    5000);

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Welcome to React');
  });
});
