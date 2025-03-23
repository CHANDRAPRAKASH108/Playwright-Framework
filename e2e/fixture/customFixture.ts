import RegisterPage from '../pages/register.page';
import { test as base } from '@playwright/test';

interface PageFixtures {
  registerPage: RegisterPage;
}

export const test = base.extend<PageFixtures>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
});

export { expect } from '@playwright/test';
