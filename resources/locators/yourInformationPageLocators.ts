import { Locator, Page } from "@playwright/test";
import { BasePageLocators } from "./basePageLocators";

export class YourInformationPageLocators extends BasePageLocators {
  constructor(page: Page) {
    super(page);
  }

  public get cancelButton(): Locator {
    return this.page.locator("#cancel");
  }

  public get continueButton(): Locator {
    return this.page.locator("#continue");
  }

  public get firstNameField(): Locator {
    return this.page.locator("#first-name");
  }

  public get lastNameField(): Locator {
    return this.page.locator("#last-name");
  }

  public get zipCodeNameField(): Locator {
    return this.page.locator("#postal-code");
  }
}
