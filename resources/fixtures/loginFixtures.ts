import { LoginPage } from "../pages/loginPage";
import { testWithUtils } from "./commonFixtures";

type LoginFixtures = {
  loginPage: LoginPage;
};

export const test = testWithUtils.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
