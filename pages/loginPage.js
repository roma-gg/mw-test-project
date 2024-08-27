const {faker} = require('@faker-js/faker');
const {expect} = require('playwright/test');
const config = require("../config");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.getByRole('button', {name: 'Sign in'});
    }

    async loginWithValidCredentials() {
        await this.navigateToLoginPage();
        await this.submitValidCredentials();
    }

    async navigateToLoginPage() {
        await this.page.goto(config.baseUrl);
    }

    async submitValidCredentials() {
        await this.emailInput.fill(config.credentials.email);
        await this.passwordInput.fill(config.credentials.password);
        await this.signInButton.click();
    }

    async submitInvalidCredentials() {
        await this.emailInput.fill(faker.internet.email());
        await this.fillInFakePassword();
        await this.signInButton.click();
    }

    async submitValidEmailAndInvalidPassword() {
        await this.emailInput.fill(config.credentials.email);
        await this.fillInFakePassword();
        await this.signInButton.click();
    }

    async fillInFakePassword() {
        await this.passwordInput.fill(faker.internet.password());
    }

    async verifyLoginFormIsVisible() {
        await this.page.waitForLoadState();
        expect(await this.emailInput.isVisible()).toBe(true);
        expect(await this.signInButton.isVisible()).toBe(true);
    }
}

module.exports = {LoginPage};