import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER CONSOLE ERROR:', msg.text());
    }
  });
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  console.log("Navigating to https://azorvin.com...");
  await page.goto('https://azorvin.com', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await browser.close();
  process.exit(0);
})();
