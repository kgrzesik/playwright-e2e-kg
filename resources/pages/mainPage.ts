import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { MainPageLocators } from "../locators/mainPageLocators";
import { SidebarButtons } from "../utilities/dictionaries/sidebarButtons";
import { SortOptions } from "../utilities/dictionaries/sortOptions";
import { ProductNames } from "../utilities/dictionaries/productNames";
import { ButtonNames } from "../utilities/dictionaries/buttonNames";

export class MainPage extends BasePage {
  locators: MainPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new MainPageLocators(page);
  }

  //Public functions
  public async chooseOptionFromSide(option: SidebarButtons) {
    //Open sidebar
    await this.locators.burgerButton.click();

    switch (option) {
      case SidebarButtons.ALL_ITEMS:
        await this.locators.sidebarButton("inventory").click();
        break;
      case SidebarButtons.ABOUT:
        await this.locators.sidebarButton("about").click();
        break;
      case SidebarButtons.LOGOUT:
        await this.locators.sidebarButton("logout").click();
        break;
      case SidebarButtons.RESET_APP_STATE:
        await this.locators.sidebarButton("reset").click();
        break;
    }
  }

  public async chooseSortOption(option: SortOptions) {
    await this.locators.sortContainer.selectOption(option);
  }

  public async checkSortingOnPage(option: SortOptions) {
    switch (option) {
      case SortOptions.NAME_A_TO_Z:
        {
          //Get all product names
          const allProductsNames: string[] = await this.locators.productNames.allTextContents();
          //Sort table by name a to z
          const sortedProducts = [...allProductsNames].sort((a, b) => a.localeCompare(b));
          // Checking if values are the same
          expect(allProductsNames).toEqual(sortedProducts);
        }
        break;

      case SortOptions.NAME_Z_TO_A:
        {
          //Get all product names
          const allProductsNames: string[] = await this.locators.productNames.allTextContents();
          //Sort table by name z to a
          const sortedProducts = [...allProductsNames].sort((a, b) => b.localeCompare(a));
          // Checking if values are the same
          expect(allProductsNames).toEqual(sortedProducts);
        }
        break;
      case SortOptions.PRICE_HIGHT_TO_LOW:
        {
          //Get all product prices
          const allProductsPricesString: string[] = await this.locators.productPrices.allTextContents();
          const allProductsPrices: number[] = allProductsPricesString.map((allProductsPricesString) => parseFloat(allProductsPricesString.replace("$", "")));

          //Sort table by price to hight to low
          const sortedProducts = allProductsPrices.sort((a, b) => b - a);

          // Checking if values are the same
          expect(allProductsPrices).toEqual(sortedProducts);
        }
        break;
      case SortOptions.PRICE_LOW_TO_HIGH:
        {
          //Get all product prices
          const allProductsPricesString: string[] = await this.locators.productPrices.allTextContents();
          const allProductsPrices: number[] = allProductsPricesString.map((allProductsPricesString) => parseFloat(allProductsPricesString.replace("$", "")));

          //Sort table by price to low to hight
          const sortedProducts = allProductsPrices.sort((a, b) => a - b);

          // Checking if values are the same
          expect(allProductsPrices).toEqual(sortedProducts);
        }
        break;
    }
  }

  public async addProductToCart(productName: ProductNames) {
    const { numberOfProductInCartBefore, numberOfProductInCartAfter }: any = await this.getNumbersOfProduct(productName, ButtonNames.ADD_TO_CART);
    await expect(parseInt(numberOfProductInCartAfter)).toBe(parseInt(numberOfProductInCartBefore) + 1);
  }

  public async removeProductFromCart(productName: ProductNames) {
    const { numberOfProductInCartBefore, numberOfProductInCartAfter }: any = await this.getNumbersOfProduct(productName, ButtonNames.REMOVE);
    await expect(parseInt(numberOfProductInCartAfter)).toBe(parseInt(numberOfProductInCartBefore) - 1);
  }

  public async goToCartPage() {
    await this.locators.cartButton.click();
  }

  //Private functions
  private async getNumbersOfProduct(productName: ProductNames, buttonName: ButtonNames) {
    const numberOfProductInCartBefore = (await this.locators.cartButton.textContent()) || "0";
    const productButton = await this.locators.productsDescription(productName).locator("button");
    await expect(productButton).toHaveText(buttonName);
    await productButton.click();
    const numberOfProductInCartAfter = (await this.locators.cartButton.textContent()) || "0";

    return { numberOfProductInCartBefore, numberOfProductInCartAfter };
  }
}
