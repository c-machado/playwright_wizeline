import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';

const URL = 'https://www.saucedemo.com/';
let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    loginPage = new LoginPage(page);
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickToLogin();
});

test.describe('Sauce web labs website', () => {

    // test('is the user logged in?', async () => {
    //     await loginPage.enterUsername();
    //     await loginPage.enterPassword();
    //     await loginPage.clickToLogin();
    // });

    test('add item sauce labs onesie to the cart', async () => {
        await inventoryPage.click_to_add_to_cart();
      });
      
});