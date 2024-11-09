import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { YourInformationPageLocators } from "../locators/yourInformationPageLocators";

export class YourInformationPage extends BasePage {
  locators: YourInformationPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new YourInformationPageLocators(page);
  }

  //Public functions
  public async enterShippingDetails(firstName, lastName, zipCode) {
    //Insert username and password
    await this.browserUtils.insertValueIntoField(this.locators.firstNameField, firstName);
    await this.browserUtils.insertValueIntoField(this.locators.lastNameField, lastName);
    await this.browserUtils.insertValueIntoField(this.locators.zipCodeNameField, zipCode);

    //Submit login
    await this.locators.continueButton.click();
  }

  public async checkShippingDetailsError(errorMessage: string) {
    const locator = this.locators.errorMessage;
    await expect(locator).toHaveText(errorMessage);
  }
}
