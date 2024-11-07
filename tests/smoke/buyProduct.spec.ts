import { ConfigReader } from "../../resources/utilities/helpers/configReader";
import { AccountTypes } from "../../resources/utilities/dictionaries/accountsTypes";
import { PageTitles } from "../../resources/utilities/dictionaries/pageTitles";
import { test } from "../../resources/fixtures/buyProductFixtures";
import { ProductNames } from "../../resources/utilities/dictionaries/productNames";
import { faker } from "@faker-js/faker";

test("Add product to cart and remove it", async ({ loginPage, mainPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);

  //Add to cart
  await mainPage.addProductToCart(ProductNames.BACKPACK);
  await mainPage.addProductToCart(ProductNames.BIKE_LIGHT);
  await mainPage.addProductToCart(ProductNames.BOLT_T_SHIRT);
  await mainPage.addProductToCart(ProductNames.JACKET);
  await mainPage.addProductToCart(ProductNames.ONESIE);
  await mainPage.addProductToCart(ProductNames.RED_T_SHIRT);

  //Remove from cart
  await mainPage.removeProductFromCart(ProductNames.BACKPACK);
  await mainPage.removeProductFromCart(ProductNames.BIKE_LIGHT);
  await mainPage.removeProductFromCart(ProductNames.BOLT_T_SHIRT);
  await mainPage.removeProductFromCart(ProductNames.JACKET);
  await mainPage.removeProductFromCart(ProductNames.ONESIE);
  await mainPage.removeProductFromCart(ProductNames.RED_T_SHIRT);
});

test("Add product to cart and remove it from Cart page", async ({ loginPage, mainPage, cartPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);

  //Add to cart
  await mainPage.addProductToCart(ProductNames.BACKPACK);
  await mainPage.addProductToCart(ProductNames.BIKE_LIGHT);
  await mainPage.addProductToCart(ProductNames.BOLT_T_SHIRT);
  await mainPage.addProductToCart(ProductNames.JACKET);
  await mainPage.addProductToCart(ProductNames.ONESIE);
  await mainPage.addProductToCart(ProductNames.RED_T_SHIRT);

  //Go to cart page
  await mainPage.goToCartPage();

  //Remove from cart
  await cartPage.removeProductFromCart(ProductNames.BACKPACK);
  await cartPage.removeProductFromCart(ProductNames.BIKE_LIGHT);
  await cartPage.removeProductFromCart(ProductNames.BOLT_T_SHIRT);
  await cartPage.removeProductFromCart(ProductNames.JACKET);
  await cartPage.removeProductFromCart(ProductNames.ONESIE);
  await cartPage.removeProductFromCart(ProductNames.RED_T_SHIRT);
});

test("Validate the field on Your Information Page", async ({ loginPage, mainPage, cartPage, yourInformationPage }) => {
  //Navigate to login page
  await loginPage.navigateToPage();

  //Login
  const credentials = ConfigReader.getUser(AccountTypes.STANDARD_USER);
  await loginPage.loginToApp(credentials.login, credentials.password);
  await loginPage.checkPageTitle(PageTitles.SWAG_LABS);

  //Add to cart
  await mainPage.addProductToCart(ProductNames.JACKET);

  //Go to your information page
  await mainPage.goToCartPage();
  await cartPage.goToYourInformationPage();

  //Not enter any field
  await yourInformationPage.enterShippingDetails("", "", "");
  await yourInformationPage.checkShippingDetailsError("Error: First Name is required");

  //Enter only: first name
  await yourInformationPage.enterShippingDetails(faker.person.firstName(), "", "");
  await yourInformationPage.checkShippingDetailsError("Error: Last Name is required");

  //Enter only: last name
  await yourInformationPage.enterShippingDetails("", faker.person.lastName(), "");
  await yourInformationPage.checkShippingDetailsError("Error: First Name is required");

  //Enter only: zip code
  await yourInformationPage.enterShippingDetails("", "", faker.location.zipCode());
  await yourInformationPage.checkShippingDetailsError("Error: First Name is required");

  //Enter only: first name, last name
  await yourInformationPage.enterShippingDetails(faker.person.firstName(), faker.person.lastName(), "");
  await yourInformationPage.checkShippingDetailsError("Error: Postal Code is required");

  //Enter only: first name ,zip code
  await yourInformationPage.enterShippingDetails(faker.person.firstName(), "", faker.location.zipCode());
  await yourInformationPage.checkShippingDetailsError("Error: Last Name is required");

  //Enter only: last name, zip code
  await yourInformationPage.enterShippingDetails("", faker.person.lastName(), faker.location.zipCode());
  await yourInformationPage.checkShippingDetailsError("Error: First Name is required");
});
