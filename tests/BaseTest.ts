import { test as base, Page } from '@playwright/test'; 
import { PageManager } from '../ApplicationLogic/Pages/PageManager';
import { CredsEnum } from '../ApplicationLogic/Enums/CredsEnum';

export type TestOptions = {
    domain: string;
};
export const test = base.extend<TestOptions & {page: Page, pageManager: PageManager}> ({
    domain: ['', {option: true}],
    page: async ({browser}, use) => {
        const page = await browser.newPage();
        await page.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx');
        await new PageManager(page).loginPage.LogIn(CredsEnum.Login, CredsEnum.Password);
        await use(page);
    },
    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page);
        await use(pageManager);
    },
});
