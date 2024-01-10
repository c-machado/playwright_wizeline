import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly add_to_cart_btn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.add_to_cart_btn = page.locator('#add-to-cart-sauce-labs-backpack');
    }

    async click_to_add_to_cart() {
        await this.add_to_cart_btn.click();
    }

    async click_to_add(page:Page) {
        await page.locator('#add-to-cart-sauce-labs-backpack').click();
    }
}