const {Then, When} = require("@cucumber/cucumber");
const {DashboardPage} = require("../../pages/dashboardPage");
const Utilities = require("../../helpers/utilities");
const config = require("../../config");

// TODO: Handle proper initialization (currently, the `dashboardPage` is being initialized in steps
//       after the `page` has been set up in the Before hook, to ensure correct ordering).
let dashboardPage;

Then('user is launched on dashboard page', async function () {
    await this.page.waitForLoadState();
    await Utilities.verifyTitle(config.pageNames.dashboardPage, this.page);

    dashboardPage = new DashboardPage(this.page);
    await dashboardPage.verifyPageIsVisible();
});

Then('user sees list of {int} messages', async function (expectedQtyOfMessages) {
    dashboardPage = new DashboardPage(this.page);
    await dashboardPage.verifyQuantityOfMessagesDisplayed(expectedQtyOfMessages);
});

Then('user sees last 30 days stats', async function () {
    await dashboardPage.verifyStatsAreVisible();
});

When('user picks one message from dashboard', async function () {
    dashboardPage = new DashboardPage(this.page);
    this.message = await dashboardPage.getRandomMessageText();
});

When('user navigates to Search page', async function () {
    dashboardPage = new DashboardPage(this.page);
    await dashboardPage.navigateToSearchPage();
});

When("user picks message sender's email from dashboard", async function () {
    dashboardPage = new DashboardPage(this.page);
    this.email = await dashboardPage.getRandomMessageEmail();
});