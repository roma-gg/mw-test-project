const {expect} = require("playwright/test");

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.searchLink = page.getByRole('link', {name: 'Search'});
        this.messagesListForm = page.getByRole('list');
        this.messagesList = page.locator("//li//p[2]//span");
        this.emailsList = page.locator("//li//p[1]//span");
        this.statsForm = page.getByRole('definition').first();
    }

    async verifyPageIsVisible() {
        await expect(this.searchLink).toBeVisible();
        await expect(this.messagesListForm).toBeVisible();
    }

    async verifyQuantityOfMessagesDisplayed(expectedQuantity) {
        let actualQuantity = await this.messagesList.count();
        expect(actualQuantity).toBe(expectedQuantity);
    }

    async verifyStatsAreVisible() {
        await expect(this.statsForm).toBeVisible();
    }

    async getRandomMessageText() {
        const randomIndex = Math.floor(Math.random() * await this.messagesList.count());
        return this.messagesList.nth(randomIndex).textContent();
    }

    async getRandomMessageEmail() {
        const randomIndex = Math.floor(Math.random() * await this.emailsList.count());
        return this.emailsList.nth(randomIndex).textContent();
    }

    async navigateToSearchPage() {
        await this.searchLink.click();
    }
}

module.exports = {DashboardPage};