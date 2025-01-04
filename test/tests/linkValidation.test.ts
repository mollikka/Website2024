import { expect } from 'chai';
import { chromium, Browser, Page } from 'playwright';
import * as externalLinks from '../externalLinks.json'
import * as internalLinks from '../internalLinks.json'

describe('validate links', function () {
  let browser: Browser;
  let page: Page;

  this.timeout(60000);

  before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  after(async () => {
    await browser.close();
  });

  describe('external links', () => {
    externalLinks.forEach((link) => {
      describe(link, () => {
        it(`Page found`, async () => {
          const response = await page.goto(link);
          expect(response?.status()).to.equal(200);
        });
      });
    });
  });

  describe('internal links', () => {
    internalLinks.forEach((link) => {
      describe(link, () => {
        it(`Page found`, async () => {
          const response = await page.goto(link);
          expect(response?.status()).to.equal(200);
        });
      });
    });
  });
});
