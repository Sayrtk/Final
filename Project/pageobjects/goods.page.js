const Page = require('./page');

class GoodsPage extends Page {
    constructor(page) {
        super(page);
    }

    get catalogTitle() {
        return '._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title';
    }

    get item() {
        return '._3dch7Ytt3ivpea7TIsKVjb.x-product-card__pic.x-product-card__pic-catalog';
    }

    get addToBasketBtn() {
        return '//span[contains(text(),"Добавить в корзину")]'
    }

    get goToKorzinaBtn() {
        return '.x-button_link.x-button_link_32.x-button_intrinsic-width'
    }

    get sizeDropdown() {
        return '.omvWJXbwzlp3TzvRfRP6B'
    }

    get listOfSizes() {
        return '.O7KAVeyES2Dm7FutyoPSf'
    }

    get itemIsAddedToKorzinaText() {
        return '//div[@class="d-modal__header"]';
    }

    get itemIsAddedToBasket() {
        return '//div[@class="d-modal d-modal_nav-style_close d-modal_default"]';
    }

    get priceWithoutDiscount() {
        return ('.x-product-card-description__price-single.x-product-card-description__price-WEB8507_price_no_bold')
    }

    get firstFilter() {
        return '._2RvJd9uB9bww2dMeikLFGO';
    }

    get allFilters() {
        return '.okxMrBZLwAeOqL7zQV-ZZ';
    }

    get typesInsideFilters() {
        return '._1miTFB0zeCCHFYVTXRv4vG';
    }

    get setFilterBtn() {
        return 'text=Применить'
    }

    get allBrands() {
        return '._1G-nCR_Vh0EDPDX6CPOgZd'
    }

    get resetFilter() {
        return '.icon__filter_reset'
    }

    get resetAllFilters() {
        return '._1ntS0axGZSB_YERBZY9eNW'
    }

    get newLabel() {
        return '._1HVtliqmrPb2bIG6xwIDiB.PxfFitJeassoTJCWFBaFR.brm-300gk_uJHcVn8DNeN';
    }

    get discountLabel() {
        return '._1HVtliqmrPb2bIG6xwIDiB._3gKF8JbPdGWYvoO_otXiIk.brm-300gk_uJHcVn8DNeN';
    }

    get brand() {
        return '.x-product-card-description__brand-name';
    }

    get brandLink() {
        return '.brands__link'
    }

    get searchInBrandFilter() {
        return '//input[@placeholder="Найдите бренд"]';
    }



}

module.exports = GoodsPage; 