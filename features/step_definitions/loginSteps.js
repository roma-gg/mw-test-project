const {Given, Then, When} = require('@cucumber/cucumber');
const {LoginPage} = require('../../pages/loginPage');
const Utilities = require("../../helpers/utilities");
const config = require("../../config");
const {DashboardPage} = require("../../pages/dashboardPage");

// TODO: Handle proper initialization (currently, the `loginPage` is being initialized in steps
//       after the `page` has been set up in the Before hook, to ensure correct ordering).
let loginPage;

Given('user is on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.navigateToLoginPage();
});

When('user login with valid credentials', async function () {
    await loginPage.submitValidCredentials();
});

When('user login with invalid credentials', async function () {
    await loginPage.submitInvalidCredentials();
});

Then('user stays on the login page', async function () {
    await loginPage.verifyLoginFormIsVisible();
});

When('user login with valid email and invalid password', async function () {
    await loginPage.submitValidEmailAndInvalidPassword();
});

Given('user is logged in', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.loginWithValidCredentials();

    await Utilities.verifyTitle(config.pageNames.dashboardPage, this.page);

    const dashboardPage = new DashboardPage(this.page);
    await dashboardPage.verifyPageIsVisible();
});