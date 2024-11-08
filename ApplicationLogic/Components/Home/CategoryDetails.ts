import { BasePage } from "../../Pages/BasePage";

export class CategoriesDetails extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    Buttons = {
        CollapseAndExpandSubcategory: this.container.getByRole('link', { name: 'Collapse/Expand Subcategory' }).first(),
    };

    async SelectNecessaryCategory(option: string) {
        await this.container.getByRole('link', { name: option }).click();
    };
};
