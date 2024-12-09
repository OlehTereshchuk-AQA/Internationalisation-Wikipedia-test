const { Main } = require('./Main');
const {expect} = require("@playwright/test");
// require('dotenv').config();

class PreferencesPage extends Main {

    async chooseUkrainianLanguage(){
        let currentLanguage = await this.page.locator('.oo-ui-dropdownWidget-handle').first().textContent();
        let ukLanguage = 'uk - українська';

        console.log(currentLanguage);

        await this.page.locator('#mw-input-wplanguage > div').click();

        await this.page.getByRole('option',{name: ukLanguage}).click();
        await this.page.locator('[type="submit"]').click();

        await this.waitForElementByText('Інтернаціоналізація');
        expect('Ваші налаштування збережено.').toBeDefined();


    }

    async chooseEnglishLanguage(){
        let currentLanguage = await this.page.locator('.oo-ui-dropdownWidget-handle').first().textContent();
        let enLanguage = 'en - English';

        console.log(currentLanguage);

        await this.page.locator('#mw-input-wplanguage > div').click();

        await this.page.getByRole('option',{name: enLanguage}).click();
        await this.page.locator('[type="submit"]').click();

        await this.waitForElementByText('Internationalisation');
        expect('Your preferences have been saved.').toBeDefined();



    }

}

module.exports = { PreferencesPage };