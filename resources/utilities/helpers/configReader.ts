import path from "path";
import PropertiesReader from "properties-reader";

export class ConfigReader {
  //Public functions
  public static getUser(key: string) {
    // Read file config.properties
    const properties = PropertiesReader(path.join(__dirname, "../../configs/config.properties"));

    // Get the login and password
    const credentials = properties.get(key);

    return credentials;
  }
}
