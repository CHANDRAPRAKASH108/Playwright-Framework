import { test } from '../fixture/customfixture';

test('Register Test', async ({ registerPage }) => {
  await registerPage.visit();
  await registerPage.clickRegister();
  await registerPage.registerUser();
  await registerPage.verifyWelcomeScreenPostResgiter();
  await registerPage.takeScreenshot('afterresgiteration');
  await registerPage.clickLogout();
  await registerPage.loginUser();
});
