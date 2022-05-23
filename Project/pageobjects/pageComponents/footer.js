class Footer {

    constructor(page) {
        this.page = page;
    }

    get socialNetworksBtns() {
        return '.social-items';
    }

    get elementsFromHelpSection() {
        return '//*[@class="x-footer__link"]';
    }

    get changeCountryBtn() {
        return '._1AR2XhEV5E8I6iCinUOpAs';
    }

    get ukrainValueInListOfCountries() {
        return '//span[contains(text(),"Украина")]';
    }

    get userCurrentLocation() {
        return '//span[@class="LJ3NPCpMRlyDB2O_cszSZ"]';
    }

    get helpPageBtn() {
        return '.x-footer__link:nth-child(2)';
    }

    get howToMakeAnOrderLink() {
        return '.x-footer__link:nth-child(3)';
    }

    get mobVersion() {
        return '.x-footer__text_version > a'
    }

    get mobVersionUrl() {
        return 'https://www.lamoda.by/women-home/?sv=mob'
    }

}

module.exports = Footer; 
