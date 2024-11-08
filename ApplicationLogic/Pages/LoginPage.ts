import { BasePage } from "./BasePage";

export class CpqLoginPage extends BasePage {
    constructor(page, container) {
        super(page, container);
    };

    TextBoxes = {
        Login: this.container.locator("//input[contains(@name, 'Username')]"),
        Password: this.container.locator("//input[contains(@name, 'txtPassword')]"),
    };
    
    Buttons = {
        Login: this.container.locator("//input[contains(@name, 'Login')]"),
    };

    Lines = {
        ForgotPassword: this.container.locator("//a[contains(@id, 'ForgetPassword')]"),
    };

    async LogIn(login: string, password: string) {
        await this.TextBoxes.Login.fill(login); 
        await this.TextBoxes.Password.fill(password); 
        await this.Buttons.Login.click();
    };
};
