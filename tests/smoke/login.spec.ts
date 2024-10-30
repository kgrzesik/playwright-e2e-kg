import { expect } from "@playwright/test";
import { test } from "../../resources/fixtures/loginFixtures";
import { ConfigReader } from "../../resources/utilities/helpers/configReader";
import { AccountTypes } from "../../resources/utilities/dictionaries/accountsTypes";
import { PageTitles } from "../../resources/utilities/dictionaries/pageTitles";
import { SidebarButtons } from "../../resources/utilities/dictionaries/sidebarButtons";

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

test("Login - validation", async ({ loginPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Check if the fields are empty
  await expect(loginPage.locators.usernameInput).toHaveValue("");
  await expect(loginPage.locators.passwordInput).toHaveValue("");

  //Login - empty username and password
  await loginPage.loginToApp("", "");
  await loginPage.checkLoginError("Epic sadface: Username is required");

  //Login - empty password
  await loginPage.loginToApp("invalidUsername", "");
  await loginPage.checkLoginError("Epic sadface: Password is required");

  //Login - empty username
  await loginPage.loginToApp("", "invalidPassword");
  await loginPage.checkLoginError("Epic sadface: Username is required");

  //Login with incorrect data
  await loginPage.loginToApp("invalidUsername", "invalidPassword");
  await loginPage.checkLoginError("Epic sadface: Username and password do not match any user in this service");
});

test("Logout", async ({ loginPage, mainPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);

  //Logout
  mainPage.logout(SidebarButtons.LOGOUT);

  //Check if the fields are empty
  await expect(loginPage.locators.usernameInput).toHaveValue("");
  await expect(loginPage.locators.passwordInput).toHaveValue("");
});
