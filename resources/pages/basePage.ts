import { expect, Page } from "@playwright/test";
import { BrowserUtils } from "../utilities/helpers/browserUtils";
import { PageTitles } from "../utilities/dictionaries/pageTitles";

export class BasePage {
  public page: Page;
  protected browserUtils: BrowserUtils;
  private baseUrl: any;

  constructor(page: Page) {
    this.page = page;

    //Helpers
    this.browserUtils = new BrowserUtils(page);
    this.baseUrl = process.env.baseUrl;
  }

  //Public functions
  public async navigateToPage(): Promise<void> {
    await this.page.goto(this.baseUrl);
    await this.checkPageTitle(PageTitles.SWAG_LABS);
  }

  public async checkPageTitle(title: PageTitles): Promise<void> {
    await expect(this.page).toHaveTitle(title);
  }
}
