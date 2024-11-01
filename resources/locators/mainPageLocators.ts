import { Locator, Page } from "@playwright/test";

export class MainPageLocators {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public get burgerButton(): Locator {
    return this.page.locator("button[id=react-burger-menu-btn]");
  }

  public get cartButton(): Locator {
    return this.page.locator("a[data-test=shopping-cart-link]");
  }

  public get sortContainer(): Locator {
    return this.page.locator("select[data-test=product-sort-container]");
  }

  public sidebarButton(option: string): Locator {
    return this.page.locator("#" + option + "_sidebar_link");
  }

  public get productNames(): Locator {
    return this.page.locator(".inventory_item_name");
  }

  public get productPrices(): Locator {
    return this.page.locator(".inventory_item_price");
  }
}
