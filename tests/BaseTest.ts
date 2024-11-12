import { test as base, Page } from '@playwright/test'; 
import { PageManager} from '../ApplicationLogic/Pages/PageManager';
import { CredsEnum } from '../ApplicationLogic/Enums/CredsEnum';

export type TestOptions = {
    domain: string;
}
export const test = base.extend<TestOptions & {page: Page, cpqPageManager: PageManager}> ({
    domain: ['', {option: true}],
    page: async ({browser}, use) => {
        const cpqPage = await browser.newPage();
        await cpqPage.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx');
        await new PageManager(cpqPage).cpqLoginPage.LogIn(CredsEnum.Login, CredsEnum.Password);
        await use(cpqPage);
    },
    cpqPageManager: async ({page}, use) => {
        const cpqPageManager = new PageManager(page);
        await use(cpqPageManager);
    },
})