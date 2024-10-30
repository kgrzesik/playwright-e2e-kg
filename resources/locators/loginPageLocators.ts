import { Locator, Page } from "@playwright/test";

export class LoginPageLocators {
  page: Page;
  constructor(page: Page) {
    this.page = page;
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
