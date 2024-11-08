import { BasePage } from "../../Pages/BasePage";

export class ManageConfigurator extends BasePage {
    constructor(page, container) {
        super(page, container);
    };

    Buttons = {
        AddToQuote: this.container.locator('"Add to Quote"'), 
    };

    async ChooseAddItem(name: string) {
        await this.container.locator(`//span[contains(.,"${name}")]/preceding-sibling::input//parent::*/parent::*`).click();
    };
};
