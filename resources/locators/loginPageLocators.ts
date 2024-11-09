import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class LoginPageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public get usernameInput(): Locator {
    return this.page.locator("input[data-test=username]");
  }

  public get passwordInput(): Locator {
    return this.page.locator("input[data-test=password]");
  }

  public get loginButton(): Locator {
    return this.page.locator("input[data-test=login-button]");
  }
}
