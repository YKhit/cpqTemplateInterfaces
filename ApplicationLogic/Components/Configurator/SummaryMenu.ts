import { BasePage } from "../../Pages/BasePage";

export class SummaryMenu extends BasePage {
    constructor(page, container) {
        super(page, container);
    };

    Elements = {
        Total: this.container.locator('[data-bind*="totalPrice"]'),
    };

    async GetPrice(){
        const TotalQuoteSum = (await this.Elements.Total.innerText()).slice(1);
        return TotalQuoteSum;
    };
};
