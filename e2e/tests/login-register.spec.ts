import { test } from '../fixture/customfixture';

test('Register Test', async ({ registerPage }) => {
  await registerPage.visit();
  await registerPage.clickRegister();
  await registerPage.registerUser();
  await registerPage.verifyWelcomeScreenPostResgiter();
  await registerPage.takeScreenshot('afterresgiteration');
  await registerPage.clickLogout();
  await registerPage.loginUser();
  // await page.locator('input[name="username"]').fill(userName);
  // await page.locator('input[name="password"]').fill(ENV.PASSWORD);
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  // await expect(
  //   page.getByRole('heading', { name: 'Accounts Overview' }),
  // ).toBeVisible();
});
