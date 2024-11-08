import { expect } from "@playwright/test";
import { BasePage } from "../../Pages/BasePage";

export class Totals extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    Fields = {
        Price: this.container.locator('[class="numberCell"] [data-bind*="css"]').last(),
    };

    async CompareTotals(TotalToCompare: string){
        await expect(TotalToCompare).toBe((await this.Fields.Price.innerText()));
    };
};
