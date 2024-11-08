import { test as base, Page } from '@playwright/test'; 
import { CpqPageManager} from '../ApplicationLogic/Pages/PageManager';
import { CpqCredsEnum } from '../ApplicationLogic/Enums/CredsEnum';

export type TestOptions = {
    domain: string;
}
export const test = base.extend<TestOptions & {cpqPage: Page, cpqPageManager: CpqPageManager}> ({
    domain: ['', {option: true}],
    cpqPage: async ({browser}, use) => {
        const cpqPage = await browser.newPage();
        await cpqPage.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx');
        await new CpqPageManager(cpqPage).cpqLoginPage.LogIn(CpqCredsEnum.Login, CpqCredsEnum.Password);
        await use(cpqPage);
    },
    cpqPageManager: async ({cpqPage}, use) => {
        const cpqPageManager = new CpqPageManager(cpqPage);
        await use(cpqPageManager);
    },
})