const Page = require('./page');

class MainPage extends Page {
    constructor(page) {
        super(page);
    }

    get signInBtn() {
        return '//a[contains(text(),"Войти")]';
    }

    get emailInput() {
        return '[placeholder="Введите свой email"]';
    }

    get policyAgreementBtn() {
        return '//div[@class="x-checkbox__box"]';
    }

    get forHerBtn() {
        return '//button[contains(text(),"Для нее")]';
    }

    get termsOfActionBtn() {
        return '//a[contains(text(),"Условия акции")]';
    }

    get SubsriptionSuccessMessage() {
        return '._1CQI5BUZ8OkEcByQn_mGRv';
    }






}

module.exports = MainPage;
