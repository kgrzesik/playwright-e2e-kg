import { Page } from "@playwright/test";
import { LoginPageLocators } from "../locators/loginPageLocators";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  locators: LoginPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page);
  }

  //Public functions
  public async loginToApp(username: string, password: string) {
    //Insert username and password
    await this.browserUtils.insertValueIntoField(this.locators.loginButton, username);
    await this.browserUtils.insertValueIntoField(this.locators.passwordInput, username);

    //Submit login
    await this.locators.loginButton.click();
  }
}
