import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class CompletePageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public get completeHeader(): Locator {
    return this.page.locator(".complete-header");
  }

  public get backHomeButton(): Locator {
    return this.page.locator("#back-to-products");
  }
}
