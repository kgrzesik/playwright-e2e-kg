import { CartPage } from "../pages/cartPage";
import { CompletePage } from "../pages/completePage";
import { LoginPage } from "../pages/loginPage";
import { MainPage } from "../pages/mainPage";
import { OverviewPage } from "../pages/overviewPage";
import { YourInformationPage } from "../pages/yourInformationPage";
import { testWithUtils } from "./commonFixtures";

type buyProductFixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
  cartPage: CartPage;
  yourInformationPage: YourInformationPage;
  overviewPage: OverviewPage;
  completePage: CompletePage;
};

export const test = testWithUtils.extend<buyProductFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
  cartPage: async ({ page }, use) => {
    const mainPage = new CartPage(page);
    await use(mainPage);
  },
  yourInformationPage: async ({ page }, use) => {
    const mainPage = new YourInformationPage(page);
    await use(mainPage);
  },
  overviewPage: async ({ page }, use) => {
    const mainPage = new OverviewPage(page);
    await use(mainPage);
  },
  completePage: async ({ page }, use) => {
    const mainPage = new CompletePage(page);
    await use(mainPage);
  },
});
