const puppeteer = require('puppeteer');

const runner = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://example.com/', { waitUntil: 'networkidle2' });
  const title = await page.title();
  await page.close();
  await browser.close();

  return title;
};

module.exports = runner;
