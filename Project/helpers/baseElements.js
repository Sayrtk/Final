const Page = require('../pageobjects/page');

class BaseElements extends Page {
    constructor(page) {
        super(page);
    }

    async click(element) {
        await this.page.locator(element).waitFor('visible');
        await this.page.locator(element).click();
    }

    async fill(element, text) {
        await this.page.locator(element).waitFor('visible');
        await this.page.locator(element).fill(text);
    }

    async check(element) {
        await this.page.locator(element).waitFor('visible');
        await this.page.locator(element).check();
    }

    async hover(element) {
        await this.page.locator(element).waitFor('visible');
        await this.page.locator(element).focus();
    }

    async selectItemFromTheList(element, number) {
        await this.page.locator(element).nth(number).waitFor("visible");
        await this.page.locator(element).nth(number).scrollIntoViewIfNeeded();
        await this.page.locator(element).nth(number).click();
    }



}

module.exports = BaseElements; 