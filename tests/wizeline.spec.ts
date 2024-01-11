import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { InventoryPage } from '../pages/inventory-page';
import { ShoppingCart } from '../pages/shopping-cart';

const URL = 'https://www.saucedemo.com/';
let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let shoppingCart: ShoppingCart;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    loginPage = new LoginPage(page);
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.clickToLogin();
    inventoryPage = new InventoryPage(page);
    shoppingCart = new ShoppingCart(page);
});

test.describe('Sauce web labs website', () => {
    test('add item sauce labs onesie to the cart', async () => {
        await inventoryPage.click_to_add_to_cart();
        await inventoryPage.assert_is_remote_cta_visible();
        await inventoryPage.click_to_shopping_cart();
    });
    test('confirm correct item was added', async () => {
        await shoppingCart.assert_item_information();
    });


});
