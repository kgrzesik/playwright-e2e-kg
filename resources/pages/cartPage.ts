import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { CartPageLocators } from "../locators/cartPageLocators";
import { ProductNames } from "../utilities/dictionaries/productNames";
import { ButtonNames } from "../utilities/dictionaries/buttonNames";

export class CartPage extends BasePage {
  locators: CartPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartPageLocators(page);
  }

  //Public functions
  public async removeProductFromCart(productName: ProductNames) {
    const numberOfProductInCartBefore = (await this.locators.cartButton.textContent()) || "0";
    const productButton = await this.locators.cartItem(productName).locator("button");
    await expect(productButton).toHaveText(ButtonNames.REMOVE);
    await productButton.click();
    const numberOfProductInCartAfter = (await this.locators.cartButton.textContent()) || "0";
    await expect(parseInt(numberOfProductInCartAfter)).toBe(parseInt(numberOfProductInCartBefore) - 1);
  }

  public async goToYourInformationPage() {
    await this.locators.checkoutButton.click();
  }
}
