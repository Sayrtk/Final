const Page = require('./page');

class BasketPage extends Page {
    constructor(page) {
        super(page);
        this.page = page;
    }

    get submitOrderBtn() {
        return '//button[@aria-label="Оформить заказ"]';
    }

    get deleteBtn() {
        return '[aria-label="Убрать из корзины"]'
    }

    get addToFavBtn() {
        return '.icon_checkout-cart-add-to-wish';
    }

    get itemBrand() {
        return '//b[normalize-space()="New Balance"]';
    }

    get itemsAmountInBasket() {
        return '._2nDQux_vhwKS-9vr-ehCl1';
    }

    get emptyBasketText() {
        return '._2JSp8mN_DdUcjyfOLCxGOj';
    }

    get basketArea() {
        return '[aria-label="Корзина"]'
    }

}

module.exports = BasketPage; 