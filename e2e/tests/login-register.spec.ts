import { test } from '../fixture/customFixture';

test('Register Test', async ({ registerPage }) => {
  await registerPage.visit();
  await registerPage.clickRegister();
  await registerPage.registerUser();
  await registerPage.verifyWelcomeScreenPostResgiter();
  await registerPage.takeScreenshot('afterresgiteration');
  await registerPage.clickLogout();
  await registerPage.loginUser();
});
