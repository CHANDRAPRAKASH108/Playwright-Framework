import { test, expect } from '@playwright/test';
import { ENV } from '../framework-config/env.config';

const userName = Math.random().toString().substr(10);

test('Register Test', async ({ page }) => {
  await page.goto(ENV.URL);
  var a;
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(
    page.getByRole('heading', { name: 'Signing up is easy!' }),
  ).toBeVisible();
  await page.locator('[id="customer\\.firstName"]').fill('Chandra ');
  await page.locator('[id="customer\\.lastName"]').fill('Kumar');
  await page.locator('[id="customer\\.address\\.street"]').fill('Pune');
  await page.locator('[id="customer\\.address\\.city"]').fill('Pune');
  await page.locator('[id="customer\\.address\\.state"]').fill('Maharastra');
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('854202');
  await page.locator('[id="customer\\.phoneNumber"]').fill('88754788896');
  await page.locator('[id="customer\\.ssn"]').fill('00214');
  await page.locator('[id="customer\\.username"]').fill(userName);
  await page.locator('[id="customer\\.password"]').fill(ENV.PASSWORD);
  await page.locator('#repeatedPassword').fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(
    page.getByRole('heading', { name: 'Welcome ' + userName }),
  ).toBeVisible();
  await expect(page.getByText('Your account was created')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
  await page
    .getByRole('paragraph')
    .filter({ hasText: 'Forgot login info?' })
    .click();
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
  await expect(page.locator('input[name="username"]')).toBeVisible();
  await page.locator('input[name="username"]').fill(userName);
  await page.locator('input[name="password"]').fill(ENV.PASSWORD);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('link', { name: 'Log Out' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Accounts Overview' }),
  ).toBeVisible();
});
