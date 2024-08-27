const {When, Then} = require("@cucumber/cucumber");
const {SearchPage} = require("../../pages/searchPage");

// TODO: Handle proper initialization (currently, the `loginPage` is being initialized in steps
//       after the `page` has been set up in the Before hook, to ensure correct ordering).
let searchPage;

When('user search for picked message from dashboard', async function () {
    const pickedMessage = this.message;
    searchPage = await new SearchPage(this.page);
    await searchPage.searchWithQuery(pickedMessage);
});

Then('user sees message found', async function () {
    await searchPage.verifyMessageFound();
});

When('user searches for picked from dashboard message', async function () {
    const pickedEmail = this.email;
    searchPage = await new SearchPage(this.page);
    await searchPage.searchWithQuery(pickedEmail);
});

Then('user sees no message found', async function () {
    await searchPage.verifyNoMessagesFound();
});

When('user searches with empty query', async function () {
    searchPage = await new SearchPage(this.page);
    await searchPage.searchWithQuery("");
});