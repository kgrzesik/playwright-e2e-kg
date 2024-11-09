import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { OverviewPageLocators } from "../locators/overviewPageLocators";
import { ProductNames } from "../utilities/dictionaries/productNames";

export class OverviewPage extends BasePage {
  locators: OverviewPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new OverviewPageLocators(page);
  }

  //Public functions
  public async checkCartItemName(itemName: ProductNames) {
    const locatorFound = this.locators.cartItems(itemName);
    await expect(locatorFound).toBeVisible();
  }

  public async checkPrices() {
    const allItemsPrices: string[] = await this.locators.inventoryItemPrice.allTextContents();

    //Calculate the prices
    const totalItemPrice: number = allItemsPrices.map((price) => parseFloat(price.replace("$", ""))).reduce((sum, numericValue) => sum + numericValue, 0);
    const salesTax: number = totalItemPrice * 0.08;
    const totalPrice: number = totalItemPrice + salesTax;

    //Get prices from website
    const totalItemPriceOnPage: number = parseFloat((await this.locators.itemTotalPrice.textContent()).split("$")[1].trim());
    const salesTaxOnPage: number = parseFloat((await this.locators.taxPrice.textContent()).split("$")[1].trim());
    const totalPriceOnPage: number = parseFloat((await this.locators.totalPrice.textContent()).split("$")[1].trim());

    //Check prices
    await expect(totalItemPrice.toFixed(2)).toEqual(totalItemPriceOnPage.toFixed(2));
    await expect(salesTax.toFixed(2)).toEqual(salesTaxOnPage.toFixed(2));
    await expect(totalPrice.toFixed(2)).toEqual(totalPriceOnPage.toFixed(2));
  }

  public async finshOrder() {
    await this.locators.finishButton.click();
  }
}
