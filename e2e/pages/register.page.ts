import { expect, Page } from '@playwright/test';
import { ENV } from '../../framework-config/env.config';

class RegisterPage {
  private readonly registerBtnLocator;
  private readonly firstNameLocator; // Fixed typo
  private readonly lastNameLocator;
  private readonly streetLocator;
  private readonly cityLocator;
  private readonly stateLocator;
  private readonly zipcodeLocator;
  private readonly phoneNumberLocator;
  private readonly ssnLocator;
  private readonly usernameLocator;
  private readonly passwordLocator;
  private readonly repeatPasswordLocator;
  private readonly submitRegisterBtnLocator;
  private readonly welcomeScreenVerficationLocator;
  private readonly username;
  private readonly logOutBtnLocator;
  private readonly accountCreatedSuccessfullyMessageLocator;
  private readonly loginUserNameLocator;
  private readonly loginPasswordLocator;
  private readonly loginBtnLocator;
  private readonly afterLoginScreenValidator;

  constructor(private readonly page: Page) {
    this.username = Math.random().toString(36).substring(2, 10);
    this.registerBtnLocator = this.page.getByRole('link', { name: 'Register' });
    this.firstNameLocator = this.page.locator('[id="customer\\.firstName"]');
    this.lastNameLocator = this.page.locator('[id="customer\\.lastName"]');
    this.streetLocator = this.page.locator(
      '[id="customer\\.address\\.street"]',
    );
    this.cityLocator = this.page.locator('[id="customer\\.address\\.city"]');
    this.stateLocator = this.page.locator('[id="customer\\.address\\.state"]');
    this.zipcodeLocator = this.page.locator(
      '[id="customer\\.address\\.zipCode"]',
    );
    this.phoneNumberLocator = this.page.locator(
      '[id="customer\\.phoneNumber"]',
    );
    this.ssnLocator = this.page.locator('[id="customer\\.ssn"]');
    this.usernameLocator = this.page.locator('[id="customer\\.username"]');
    this.passwordLocator = this.page.locator('[id="customer\\.password"]');
    this.repeatPasswordLocator = this.page.locator('#repeatedPassword');
    this.submitRegisterBtnLocator = this.page.getByRole('button', {
      name: 'Register',
    });
    this.welcomeScreenVerficationLocator = this.page.getByRole('heading', {
      name: 'Welcome ' + this.username,
    });
    this.logOutBtnLocator = this.page.getByRole('link', { name: 'Log Out' });
    this.loginUserNameLocator = this.page.locator('input[name="username"]');
    this.loginPasswordLocator = this.page.locator('input[name="password"]');
    this.loginBtnLocator = this.page.getByRole('button', { name: 'Log In' });
    this.accountCreatedSuccessfullyMessageLocator = this.page.getByText(
      'Your account was created successfully. You are now logged in.',
    );
    this.afterLoginScreenValidator = this.page.getByRole('heading', {
      name: 'Accounts Overview',
    });
  }

  async clickRegister() {
    await this.registerBtnLocator.click();
  }

  async visit() {
    console.log(`Navigating to: ${ENV.URL}`);
    if (!ENV.URL) throw new Error('ENV.URL is undefined or empty.');
    await this.page.goto(ENV.URL, { waitUntil: 'domcontentloaded' });
  }

  async registerUser() {
    await this.firstNameLocator.fill('Chandra');
    await this.lastNameLocator.fill('Kumar');
    await this.streetLocator.fill('Pune');
    await this.cityLocator.fill('Pune');
    await this.stateLocator.fill('Maharashtra');
    await this.zipcodeLocator.fill('854202');
    await this.phoneNumberLocator.fill('88754788896');
    await this.ssnLocator.fill('00214');
    await this.usernameLocator.fill(this.username);
    await this.passwordLocator.fill(ENV.PASSWORD);
    await this.repeatPasswordLocator.fill(ENV.PASSWORD);
    await this.submitRegisterBtnLocator.click();
  }

  async verifyWelcomeScreenPostResgiter() {
    await expect(this.welcomeScreenVerficationLocator).toBeVisible();
  }

  async clickLogout() {
    await this.logOutBtnLocator.click();
  }

  async accountCreatedSuccessfullyMessage() {
    await this.accountCreatedSuccessfullyMessageLocator.toBeVisible();
  }

  async takeScreenshot(fileName: string) {
    await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
      fullPage: true,
    });
  }

  async loginUser() {
    await this.loginUserNameLocator.fill(this.username);
    await this.loginPasswordLocator.fill(ENV.PASSWORD);
    await this.loginBtnLocator.click();
    await expect(this.logOutBtnLocator).toBeVisible();
    await expect(this.afterLoginScreenValidator).toBeVisible();
  }
}

export default RegisterPage;
