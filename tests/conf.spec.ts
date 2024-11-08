import { test } from './BaseTest';
import { expect } from '@playwright/test';

test.describe('LogIn process', () => {
    test('Main chain', async ({cpqPageManager}) => {
      //CPQ
      await cpqPageManager.categoriesDetails.Buttons.CollapseAndExpandSubcategory.click();
      await cpqPageManager.categoriesDetails.SelectNecessaryCategory('QA:Laptops');
      await cpqPageManager.mainCatalog.ClickOnButtons.Configure(' ASUS Zan (ASUL) Neque porro');
      await cpqPageManager.cpqBaseApplicationPage.Delay(6000);
      await cpqPageManager.manageConfigurator.ChooseAddItem('HD150');
      await cpqPageManager.manageConfigurator.ChooseAddItem('DVD12X');
      await cpqPageManager.cpqBaseApplicationPage.Delay(2000);
      const TotalQuoteSum = await cpqPageManager.summaryMenu.GetPrice();
      await cpqPageManager.manageConfigurator.Buttons.AddToQuote.click();
      await cpqPageManager.quoteInfo.DropDowns.Status.selectOption({ label: 'VN Preparing' });
      await cpqPageManager.products.ValidateProducts('ASUL', 'DVD12X');
      await cpqPageManager.totals.CompareTotals(TotalQuoteSum);
      await expect(cpqPageManager.totals.Fields.Price).toContainText(TotalQuoteSum);
      await cpqPageManager.quoteHeader.Buttons.SaveQuote.click();
  });
});
