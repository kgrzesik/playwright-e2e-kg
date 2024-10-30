import path from "path";
import PropertiesReader from "properties-reader";
import { AccountTypes } from "../dictionaries/accountsTypes";

export class ConfigReader {
  //Public functions
  public static getUser(key: AccountTypes) {
    // Read file config.properties
    const properties = PropertiesReader(path.join(__dirname, "../../configs/config.properties"));

    // Get the login and password
    const credentials = JSON.parse(properties.get(key));

    return credentials;
  }
}
