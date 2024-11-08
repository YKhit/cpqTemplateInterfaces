import { BasePage } from "../../Pages/BasePage";

export class HeaderMenu extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    Buttons = {
        UserMenu: this.container.locator('[id="userMenu"]'), 
        RecentlyViewed: this.container.locator('[id="recentlyVisitedMenu"]'), 
        NewProjectOrQuotation: this.container.locator('[aria-label="New Project/Quotation"]'),
    };    
};
