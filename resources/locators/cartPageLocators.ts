import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class CartPageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public cartItem(productName): Locator {
    return this.page.locator(".cart_item", { hasText: productName });
  }

  public get continueShoppingButton(): Locator {
    return this.page.locator("button[data-test=continue-shopping]");
  }

  public get checkoutButton(): Locator {
    return this.page.locator("button[data-test=checkout]");
  }
}
