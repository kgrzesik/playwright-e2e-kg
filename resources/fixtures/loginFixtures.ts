import { LoginPage } from "../pages/loginPage";
import { MainPage } from "../pages/mainPage";
import { testWithUtils } from "./commonFixtures";

type LoginFixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
};

export const test = testWithUtils.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
});
