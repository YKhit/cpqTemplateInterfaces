import { BasePage } from "../../Pages/BasePage";

export class SetupMenu extends BasePage {
    constructor(page, container) {
        super(page, container); 
    };

    SetupMenuOptions = {
        Setup: this.container.locator('"Setup"'), 
        DeveloperConsole: this.container.locator('" Developer Console"'), 
        ScriptWorkbench: this.container.locator('" Script Workbench"'), 
        Log: this.container.locator('" Log"'),
    };
};
