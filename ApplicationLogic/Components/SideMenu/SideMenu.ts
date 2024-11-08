import { BasePage } from "../../Pages/BasePage";

export class SideMenu extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    SideMenuTabs = {
        LoadExistingProjectQuotation: this.container.locator('[title="Load Existing Project/Quotation"]'), 
        Catalog: this.container.locator('[title="Catalog"]'), 
        Setup: this.container.locator('[title="Setup"]').first(),
    };
};
