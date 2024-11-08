import { expect } from "@playwright/test";
import { BasePage } from "../../Pages/BasePage";

export class QuoteInfo extends BasePage {
    constructor(page, container) {
        super(page, container);
    };

    DropDowns = {
        Status: this.container.locator('[id="orderStatusLabelId"]'),
    };

    Buttons = {
        DateCreated: this.container.locator('[id="dateCreated"]'), 
        CollapseAndExpand: this.container.locator('[title="Collapse/Expand Section"]'),
    };
    
    async CompareDateCreated(dateToCompare: string){
        const quoteDateCreated = await this.Buttons.DateCreated.innerText();
        await expect(quoteDateCreated).toBe(dateToCompare);
    };
};
