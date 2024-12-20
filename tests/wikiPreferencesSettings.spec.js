
const { test, expect } = require('@playwright/test');
const { PreferencesPage } = require('../pageObjects/PreferencesPage');

test('wikiLanguageChange', async ({ page }) => {
  const preferencesPage = new PreferencesPage(page);

  //Auhorization
  await page.goto('https://uk.wikipedia.org/wiki/');
  await preferencesPage.authorization('Увійти','Вхід');

  //go to preferences
  await preferencesPage.preferencesOpen();

  //definition of the selected language
  let currentLanguage = await page.locator('.oo-ui-dropdownWidget-handle').first().textContent();
  console.log(currentLanguage);

  //Change language
  await preferencesPage.changeLanguage();



});


