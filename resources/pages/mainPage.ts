import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { MainPageLocators } from "../locators/mainPageLocators";
import { SidebarButtons } from "../utilities/dictionaries/sidebarButtons";

export class MainPage extends BasePage {
  locators: MainPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new MainPageLocators(page);
  }

  //Public functions
  public async logout(option: SidebarButtons) {
    //Open sidebar
    await this.locators.burgerButton.click();

    //Logout
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
}
