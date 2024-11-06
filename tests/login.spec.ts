import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { RegistrationPage } from '../pages/RegistrationPage';

  test('User should be able to log in with valid credentials', async ({ page }) => {
    
    const mainPage = new MainPage(page);
    const registrationPage = new RegistrationPage(page);

    await mainPage.goToUrl();
    await mainPage.clickSignInBtn();
    await registrationPage.login();
    await mainPage.expectLogin();

});
