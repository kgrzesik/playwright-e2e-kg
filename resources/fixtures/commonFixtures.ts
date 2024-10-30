import { test } from "@playwright/test";
import { BrowserUtils } from "../utilities/helpers/browserUtils";

type CommonFixtures = {
  browserUtils: BrowserUtils;
};

export const testWithUtils = test.extend<CommonFixtures>({
  browserUtils: async ({ page }, use) => {
    const browserUtils = new BrowserUtils(page);
    await use(browserUtils);
  },
});
