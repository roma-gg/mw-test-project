const {expect} = require("playwright/test");

class SearchPage {

    constructor(page) {
        this.page = page;
        this.queryInput = page.locator('#query');
        this.searchButton = page.getByRole('button', {name: 'Search'});
        this.foundMessagesList = page.locator('//li//p//span');
    }

    async searchWithQuery(query) {
        await this.queryInput.fill(query);
        await this.searchButton.click();
        await this.page.waitForLoadState();
    }

    async verifyMessageFound() {
        const messagesFound = await this.foundMessagesList.count();
        expect(messagesFound).toBeGreaterThan(0);
    }

    async verifyNoMessagesFound() {
        const messagesFound = await this.foundMessagesList.count();
        expect(messagesFound).toEqual(0);
    }
}

module.exports = {SearchPage}