import fs from 'fs';
import { chromium, Page } from 'playwright';

const baseUrl = 'http://127.0.0.1:1111';

const externalLinks: string[] = [];
const internalLinks: string[] = [];

const validExtension = (link: string) => {
  const fileExtension = /\.([A-Za-z]+)$/;
  const extension = fileExtension.exec(link)
  return !(extension && ['pdf'].includes(extension[1]))
}

const anchorLink = (link: string) => {
  const lastPart = link.split("/").pop()
  return lastPart && lastPart[0] === '#'
}

const crawlPages = async (page: Page, url: string): Promise<void> => {
  if (internalLinks.includes(url)) return;
  internalLinks.push(url);
  
  console.log(`Visiting: ${url}`);
  await page.goto(url);

  const links = await page.$$eval('a[href]', (anchors: HTMLAnchorElement[]) =>
    anchors.map((a) => (a as HTMLAnchorElement).href)
  );

  for (const link of links) {
    console.log('Found', link)
    if (link.startsWith(baseUrl)) {
        
        if ((validExtension(link)) && (!anchorLink(link)) &&
        (!internalLinks.includes(link))) {
          await crawlPages(page, link);
        }
    } else if (link.startsWith('http')) {       
      if (!externalLinks.includes(link))
        externalLinks.push(link);
    }
  }
};

const runCrawl = async() => {
  const browser = await chromium.launch();
  const page = await browser.newPage(); 
  await crawlPages(page, baseUrl);
  await browser.close();

  fs.writeFileSync('externalLinks.json', JSON.stringify(externalLinks, null, 2));
  fs.writeFileSync('internalLinks.json', JSON.stringify(internalLinks, null, 2));
}

runCrawl()