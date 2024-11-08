import { BasePage } from "../../Pages/BasePage";

export class MainCatalog extends BasePage {
    constructor(page, container) {
        super(page, container)
    };
    ClickOnButtons = {
        Configure: async (productName: string) => this.container.getByText(productName).getByRole('link', { name: 'Configure' }).click(),
    };
};
