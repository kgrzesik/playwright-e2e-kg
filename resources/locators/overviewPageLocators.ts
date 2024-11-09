import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class OverviewPageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public get totalPrice(): Locator {
    return this.page.locator(".summary_total_label");
  }

  public get taxPrice(): Locator {
    return this.page.locator(".summary_tax_label");
  }

  public get itemTotalPrice(): Locator {
    return this.page.locator(".summary_subtotal_label");
  }

  public get inventoryItemPrice(): Locator {
    return this.page.locator(".inventory_item_price");
  }

  public get cancelButton(): Locator {
    return this.page.locator("#cancel");
  }

  public get finishButton(): Locator {
    return this.page.locator("#finish");
  }

  public cartItems(productName: string): Locator {
    return this.page.locator(".cart_item", { hasText: productName });
  }
}
