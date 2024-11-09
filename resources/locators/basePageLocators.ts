import { Locator, Page } from "@playwright/test";

export class BasePageLocators {
  public page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public get burgerButton(): Locator {
    return this.page.locator("button[id=react-burger-menu-btn]");
  }

  public get cartButton(): Locator {
    return this.page.locator("a[data-test=shopping-cart-link]");
  }
  public sidebarButton(option: string): Locator {
    return this.page.locator("#" + option + "_sidebar_link");
  }
  public get errorMessage(): Locator {
    return this.page.locator("h3[data-test=error]");
  }
  public get titleField(): Locator {
    return this.page.locator(".title");
  }
}
