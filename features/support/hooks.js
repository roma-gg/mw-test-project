const { chromium } = require('@playwright/test');
const { BeforeAll, AfterAll, Before, After} = require('@cucumber/cucumber');

let browser
let context;

BeforeAll(async function() {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
})

Before(async function() {
    this.page = await context.newPage();
    await this.page.waitForLoadState();
});

After(async function () {
    await this.page.close();
});

AfterAll(async function() {
    await browser.close();
})