import { Locator, Page } from "@playwright/test";

export class BrowserUtils {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async insertValueIntoField(pageElement: Locator, value: string): Promise<void> {
    await pageElement.clear();
    await pageElement.fill(value);
  }

  public async checkIfValueExistsInDictionary(value: string, dictionary: any): Promise<void> {
    if (!Object.values(dictionary).includes(value)) {
      throw new Error('Value: "' + value + '" is not in dictionary: ' + Object.values(dictionary));
    }
  }
}
