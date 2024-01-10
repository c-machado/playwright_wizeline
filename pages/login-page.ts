import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username_field: Locator;
    readonly password_field: Locator;
    readonly login_btn: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.username_field = page.getByPlaceholder('Username')
        this.password_field = page.getByPlaceholder('Password')
        this.login_btn = page.locator('#login-button')
    }

    async enterUsername() {
        await this.username_field.fill('standard_user')
    }

    async enterPassword() {
        await this.password_field.fill('secret_sauce')
    }
    async clickToLogin(){
        await this.login_btn.click()
    }
}

export default LoginPage;