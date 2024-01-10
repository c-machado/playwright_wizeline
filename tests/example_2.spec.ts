import {test, expect, type Page} from '@playwright/test';
import HomePage from '../pages/home-page';
import TopMenuPage from '../pages/top-menu-page';

const URL = 'https://playwright.dev/';
const pageURL = /.*intro/;
let homePage: HomePage;
let topMenuPage: TopMenuPage;

test.beforeEach(async ({page}) =>{
    await page.goto(URL);
    homePage = new HomePage(page);
    topMenuPage = new TopMenuPage(page);
});

async function clickGetStarted(page:Page) {
    await page.getByRole('link', { name: 'Get started' }).click();
}

test.describe.skip('@example - Playwright website', () => {
    test('has title', async () => {
        await homePage.assertPageTitle();
      });
      
      test('get started link', async () => {
        await homePage.clickGetStarted();
        await topMenuPage.assertPageUrl(pageURL);
      });
      
      test('check Java page', async ({ page }) => {
        await test.step('Act', async () =>{
            await homePage.clickGetStarted();
            await topMenuPage.hoverNode();
            await topMenuPage.clickJava();
        });
        
        await test.step('Assert', async () => {
            await topMenuPage.assertPageUrl(pageURL);
            await topMenuPage.assertNodeDescriptionNotVisible();
            await topMenuPage.assertJavaDescriptionVisible();
        })
        
      });
});


