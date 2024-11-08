import { BasePage } from "../../Pages/BasePage";

export class QuoteHeader extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    Buttons = {
        SaveQuote: this.container.locator('[role="button"]').locator('"Save Quote"'),
    };

};
