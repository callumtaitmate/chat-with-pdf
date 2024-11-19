const puppeteer = require("puppeteer-extra");
import { Browser } from "puppeteer";
const { executablePath } = require("puppeteer");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
import { SearchParams } from "@/app/search/page";

export async function fetchReports(searchParams: SearchParams) {

  const url = `https://www.annualreports.com/Companies?search=${searchParams.company}`;

  const browser: Browser = await puppeteer.launch({
    headless: true,
    executablePath: executablePath(),
  });
  const page = await browser.newPage();
  await page.goto(url);

  const reportResults = await page.evaluate(() => {
    const reportObjects = Array.from(document.querySelectorAll(".companyName"));

    const data = reportObjects.map((object: any) => ({
      company: object.querySelector("a").innerText,
      reportsLink: object.querySelector("a").getAttribute("href"),
    }));
    return data;
  });

  await browser.close();

  return reportResults;
}
