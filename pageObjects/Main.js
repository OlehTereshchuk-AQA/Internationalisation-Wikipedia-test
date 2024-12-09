const username = process.env.WIKIUSERNAME;
const password = process.env.WIKIPASSWORD;

class Main {
    constructor(page) {
        this.page = page;
    }

    async authorization(linkName, buttonName){
        await this.page.getByRole('link', { name: linkName }).click();
        await this.page.locator('[name="wpName"]').fill(`${username}`);
        await this.page.locator('[type="password"]').fill(`${password}`);
        await this.page.getByRole('button', { name: buttonName }).click();
    }

    async preferencesOpen(){
        await this.page.locator('#vector-user-links-dropdown').click();
        await this.page.locator('#pt-preferences').click();
        await this.page.waitForSelector('.firstHeading.mw-first-heading');
    }

    async waitForElementByText(text, counter = 30) {
        let i = 0;
        let isPresented = await this.page.getByText(text).isVisible();
        while(!isPresented && i < counter) {
            await this.page.waitForTimeout(300);
            isPresented = await this.page.getByText(text).isVisible();
            i +=1;
        }
        return isPresented
    }


}

module.exports = { Main };