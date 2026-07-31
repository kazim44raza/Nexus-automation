import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/about',
  '/work',
  '/services/voice-agents',
  '/services/chatbots',
  '/services/whatsapp-automation',
  '/services/business-automation',
  '/services/appointment-booking',
  '/services/lead-qualification',
  '/services/customer-support',
  '/industries/healthcare',
  '/blog',
  '/resources',
  '/privacy',
  '/terms',
  '/contact',
  '/404'
];

const viewports = [
  { width: 390, height: 844, name: 'mobile' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1440, height: 900, name: 'desktop' },
  { width: 1920, height: 1080, name: 'widescreen' }
];

async function run() {
  const browser = await chromium.launch();
  
  if (!fs.existsSync('docs/screenshots')) {
    fs.mkdirSync('docs/screenshots', { recursive: true });
  }

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const route of routes) {
      console.log(`Capturing ${route} at ${vp.name}...`);
      const url = `http://localhost:3000${route}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        const routeName = route === '/' ? 'home' : route.replace(/\//g, '-').replace(/^-/, '');
        await page.screenshot({ path: `docs/screenshots/${routeName}-${vp.name}.png`, fullPage: true });
      } catch (e) {
        console.error(`Failed to capture ${route}: ${e.message}`);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('Screenshots complete.');
}

run();
