import { BasePage } from "../../Pages/BasePage";

export class UserMenu extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    UserMenuOptions = {
        UserPage: this.container.locator('"User Page"'), 
        ManageGeneratedDocuments: this.container.locator('"Manage Generated Documents"'), 
        QuoteLayout: this.container.locator('"Quote Layout"'), 
        Reports: this.container.locator('"Reports"'), 
        SignOut: this.container.locator('"Sign Out"'),
    };
};
