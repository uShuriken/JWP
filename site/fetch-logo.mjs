import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    console.log('Navigating...');
    const response = await page.goto('https://www.joannewilliamsphysiotherapy.co.nz/wp-content/uploads/2021/08/Joanne-Williams-Physio-Logo-1.png');

    if (response.status() === 200) {
        const buffer = await response.body();
        fs.writeFileSync('public/logo.png', buffer);
        console.log('Logo saved to public/logo.png!');
    } else {
        console.log('Failed to fetch image directly. Status:', response.status());
        // fallback
        await page.goto('https://www.joannewilliamsphysiotherapy.co.nz/');
        const logo = await page.$('.custom-logo');
        if (logo) {
            await logo.screenshot({ path: 'public/logo.png' });
            console.log('Logo saved via screenshot!');
        } else {
            console.log('Could not find logo on homepage.');
        }
    }

    await browser.close();
})();
