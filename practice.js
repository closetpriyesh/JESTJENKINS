const puppeteer = require("puppeteer");
const iPhone = puppeteer.devices["iPhone 6"];

test("practice", async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto("https://www.google.com");
  // other actions...

  expect(2).toBeTruthy();
});
