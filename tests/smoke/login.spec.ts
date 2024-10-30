import { expect } from "@playwright/test";
import { test } from "../../resources/fixtures/loginFixtures";
import { ConfigReader } from "../../resources/utilities/helpers/configReader";
import { AccountTypes } from "../../resources/utilities/dictionaries/accountsTypes";
import { PageTitles } from "../../resources/utilities/dictionaries/pageTitles";

test("Login using correct user and password", async ({ loginPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Check if the fields are empty
  await expect(loginPage.locators.usernameInput).toHaveValue("");
  await expect(loginPage.locators.passwordInput).toHaveValue("");

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);
});
