import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class MainPageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public get sortContainer(): Locator {
    return this.page.locator("select[data-test=product-sort-container]");
  }

  public get productNames(): Locator {
    return this.page.locator(".inventory_item_name");
  }

  public get productPrices(): Locator {
    return this.page.locator(".inventory_item_price");
  }

  public productsDescription(productName: string): Locator {
    return this.page.locator(".inventory_item_description", { hasText: productName });
  }
}
