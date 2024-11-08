import { Page} from "@playwright/test";
import { CpqLoginPage } from "./LoginPage";
import { CpqBaseApplicationPage } from "./BaseApplicationPage";
import { CategoriesDetails } from "../Components/Home/CategoryDetails";
import { MainCatalog } from "../Components/Home/MainCatalog";
import { ManageConfigurator } from "../Components/Configurator/ManageConfigurator";
import { QuoteHeader } from "../Components/Quote/QuoteHeader";
import { QuoteInfo } from "../Components/Quote/QuoteInfo";
import { Products } from "../Components/Quote/Products";
import { Totals } from "../Components/Quote/Totals"; 
import { SummaryMenu } from "../Components/Configurator/SummaryMenu";
import { HeaderMenu } from "../Components/HeaderMenu/HeaderMenu";
import { UserMenu } from "../Components/HeaderMenu/UserMenu";
import { SideMenu } from "../Components/SideMenu/SideMenu";
import { SetupMenu } from "../Components/SideMenu/SetupMenu";

export class CpqPageManager {
    page: Page;
    headerMenu;
    userMenu;
    sideMenu;
    setupMenu;
    cpqLoginPage;
    cpqBaseApplicationPage;
    categoriesDetails;
    mainCatalog;
    manageConfigurator;
    summaryMenu;
    quoteHeader;
    quoteInfo;
    products;
    totals;

    constructor(page) {
        this.page = page;
        this.cpqLoginPage = new CpqLoginPage(page, this.page.locator('[class*="lg_col_2"]'));
        this.cpqBaseApplicationPage = new CpqBaseApplicationPage();
        this.headerMenu = new HeaderMenu(page, this.page.locator('[id="headerContainer"]').first());
        this.userMenu = new UserMenu(page, this.page.locator('[id="userMenuDropdownContainer"]'));
        this.sideMenu = new SideMenu(page, this.page.locator('[id="sideMenuContainer"]'));
        this.setupMenu = new SetupMenu(page, this.page.locator('[id="setupMenuDropdownContainer"]').first());
        this.categoriesDetails = new CategoriesDetails(page, this.page.locator('[id="categoryContainer"]'));
        this.mainCatalog = new MainCatalog(page, this.page.locator('[class*="catalog-products"]'));
        this.manageConfigurator = new ManageConfigurator(page, this.page.locator('[class*="configurator-section"]'));
        this.summaryMenu = new SummaryMenu(page, this.page.locator('[id="mainResponderContainer"]'));
        this.quoteHeader = new QuoteHeader(page, this.page.locator('[class*="cart-header-"]'));
        this.quoteInfo = new QuoteInfo(page, this.page.locator('[id="quote-info-section"]'));
        this.products = new Products(page, this.page.locator('[id="items-section"]'));
        this.totals = new Totals(page, this.page.locator('[id="totals-section"]'));
    };
};
