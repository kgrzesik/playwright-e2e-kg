import { ConfigReader } from "../../resources/utilities/helpers/configReader";
import { AccountTypes } from "../../resources/utilities/dictionaries/accountsTypes";
import { PageTitles } from "../../resources/utilities/dictionaries/pageTitles";
import { test } from "../../resources/fixtures/sortProductsFixtures";
import { SortOptions } from "../../resources/utilities/dictionaries/sortOptions";

test("Sort Products", async ({ loginPage, mainPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);

  //Change sort option by name A to Z
  await mainPage.chooseSortOption(SortOptions.NAME_A_TO_Z);
  await mainPage.checkSortingOnPage(SortOptions.NAME_A_TO_Z);

  //Change sort option by name Z to A
  await mainPage.chooseSortOption(SortOptions.NAME_Z_TO_A);
  await mainPage.checkSortingOnPage(SortOptions.NAME_Z_TO_A);

  //Change sort option by price hight to low
  await mainPage.chooseSortOption(SortOptions.PRICE_HIGHT_TO_LOW);
  await mainPage.checkSortingOnPage(SortOptions.PRICE_HIGHT_TO_LOW);

  //Change sort option by price low to high
  await mainPage.chooseSortOption(SortOptions.PRICE_LOW_TO_HIGH);
  await mainPage.checkSortingOnPage(SortOptions.PRICE_LOW_TO_HIGH);
});
