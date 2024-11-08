import { BasePage } from "../../Pages/BasePage";
import { expect } from "@playwright/test";

export class Products extends BasePage {
    constructor(page, container) {
        super(page, container);
    };

    async ValidateProducts(productName: string, productSubcategoryName: string){
        await expect(this.container.locator('[id="itemsTable"]').nth(0)).toContainText(productName);
        await expect(this.container.locator("//tbody[@id='itemsTable']/tr[2]/td[2]/div[1]")).toContainText(productSubcategoryName);
    };
};

