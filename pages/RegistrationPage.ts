import { expect, type Locator, type Page } from '@playwright/test';
const email = 't8414568@gmail.com';
const password = 'Test12345';

export class RegistrationPage {

    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.emailField = page.locator('id=:r1:');
        this.passwordField = page.locator('id=:r2:');
        this.loginBtn = page.locator('[type=submit]');

    }

    async login() {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }

}