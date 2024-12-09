require('dotenv').config();
const { Main } = require('./Main');
const {expect} = require("@playwright/test");
// require('dotenv').config();

class PreferencesPage extends Main {

    async changeLanguage(){
        let currentLanguage = await this.page.locator('[aria-labelledby="ooui-3 ooui-2"]').first().textContent();
        await this.page.waitForTimeout(500);
        let ukLanguage = 'uk - українська';
        let enLanguage = 'en - English';
        console.log(currentLanguage);

        await this.page.waitForSelector('#mw-input-wplanguage > div');

        if(currentLanguage === ukLanguage) {
            await this.page.locator('[aria-labelledby="ooui-3 ooui-2"]').click();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.getByRole('option',{name: enLanguage}).click();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator('[type="submit"]').click();

            await this.waitForElementByText('Internationalisation');
            expect('Your preferences have been saved.').toBeDefined();
        } else {
            await this.page.locator('[aria-labelledby="ooui-3 ooui-2"]').click();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.getByRole('option',{name: ukLanguage}).click();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.locator('[type="submit"]').click();

            await this.waitForElementByText('Інтернаціоналізація');
            expect('Ваші налаштування збережено.').toBeDefined();
        }

    }


}

module.exports = { PreferencesPage };