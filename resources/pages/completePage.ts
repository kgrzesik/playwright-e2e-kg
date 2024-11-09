import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { CompletePageLocators } from "../locators/completePageLocators";

export class CompletePage extends BasePage {
  locators: CompletePageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CompletePageLocators(page);
  }

  //Public functions
  public async checkMessage(message: string) {
    const locator = this.locators.completeHeader;
    await expect(locator).toHaveText(message);
  }

  public async backToHomePage() {
    await this.locators.backHomeButton.click();
  }
}
