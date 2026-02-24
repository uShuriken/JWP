import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    await page.goto('https://www.joannewilliamsphysiotherapy.co.nz/', { waitUntil: 'networkidle' });

    try {
        const img = await page.locator('img[src*="Logo"]').first();
        await img.screenshot({ path: 'public/logo.png', omitBackground: true });
        console.log('Logo saved successfully as public/logo.png');
    } catch (err) {
        console.error('Failed to capture logo', err);
    }

    await browser.close();
})();
