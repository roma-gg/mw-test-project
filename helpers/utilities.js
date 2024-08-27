const config = require('../config');
const {expect} = require("@playwright/test");

class Utilities {

    static async verifyTitle(pageName, page) {
        await page.waitForLoadState();
        const actualUrl = await Utilities.getPageUrl(page);
        const expectedUrlPattern = Utilities.getExpectedUrlPattern(pageName);

        expect(actualUrl).toContain(expectedUrlPattern);
    }

    static async getPageUrl(page) {
        await page.waitForLoadState();
        return page.url();
    }

    static getExpectedUrlPattern(pageName) {
        let expectedUrlPattern;

        if (pageName === config.pageNames.dashboardPage)
            expectedUrlPattern = config.urlPatterns.dashboardPage;
        else if (pageName === config.pageNames.searchPage)
            expectedUrlPattern = config.urlPatterns.searchPage;
        else
            throw new Error(`Unknown page name: ${pageName}`);

        return expectedUrlPattern;
    }
}

module.exports = Utilities;