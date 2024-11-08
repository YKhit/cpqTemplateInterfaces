import { Locator, Page } from '@playwright/test';

export interface IContainer {
  readonly page: Page;
  readonly container?: Locator;
};

export class BasePage implements IContainer {
  page: Page;
  container: Locator;
  
  constructor(page: Page, container: Locator) {
    this.page = page;
    this.container = container;
  };
};
