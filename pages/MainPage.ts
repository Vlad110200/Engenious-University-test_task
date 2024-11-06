import { expect, type Locator, type Page } from '@playwright/test';
const userTitle = 'Vladyslav Lysenko';

export class MainPage {

    readonly page: Page;
    readonly signInBtn: Locator;
    readonly navLinkRegistration: Locator;
    readonly navLinkLogin: Locator;
    readonly burgerMenu: Locator;
    readonly userCardTitle: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInBtn = page.locator('text="Sign In"');
        this.navLinkRegistration = page.locator('a', { hasText: 'Registration' } );
        this.navLinkLogin = page.locator('a', { hasText: 'Login' } );
        this.burgerMenu = page.locator('[variant="contained"]');
        this.userCardTitle = page.locator('[class="MuiTypography-root MuiTypography-body1 User_card__title__005az  css-j5b5w"]');
        this.logoutBtn = page.locator('button', { hasText: 'Logout' });
      }

    async goToUrl() {
        this.page.goto('https://university.engenious.io/');
    }

    async clickSignInBtn() {
        await this.signInBtn.click();
        await expect(this.navLinkRegistration).toBeVisible();
        await expect(this.navLinkLogin).toBeVisible();
        await expect(this.page).toHaveURL(/registration/);
        await this.navLinkLogin.click();
        await expect(this.page).toHaveURL(/login/);
    }

    async expectLogin() {

        await this.burgerMenu.click();
        await expect(this.userCardTitle).toHaveText(userTitle);
        await expect(this.logoutBtn).toBeVisible();

    }

}