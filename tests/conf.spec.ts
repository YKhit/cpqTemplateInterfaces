import { test } from './BaseTest';
import { expect } from '@playwright/test';

test.describe('LogIn process', () => {
    test('Main chain', async ({pageManager}) => {
      //CPQ
      await pageManager.categoriesDetails.Buttons.CollapseAndExpandSubcategory.click();
      await pageManager.categoriesDetails.SelectNecessaryCategory('QA:Laptops');
      await pageManager.mainCatalog.ClickOnButtons.Configure(' ASUS Zan (ASUL) Neque porro');
      await pageManager.baseApplicationPage.Delay(6000);
      await pageManager.manageConfigurator.ChooseAddItem('HD150');
      await pageManager.manageConfigurator.ChooseAddItem('DVD12X');
      await pageManager.baseApplicationPage.Delay(2000);
      const TotalQuoteSum = await pageManager.summaryMenu.GetPrice();
      await pageManager.manageConfigurator.Buttons.AddToQuote.click();
      await pageManager.quoteInfo.DropDowns.Status.selectOption({ label: 'VN Preparing' });
      await pageManager.products.ValidateProducts('ASUL', 'DVD12X');
      await pageManager.totals.CompareTotals(TotalQuoteSum);
      await expect(pageManager.totals.Fields.Price).toContainText(TotalQuoteSum);
      await pageManager.quoteHeader.Buttons.SaveQuote.click();
  });
});
