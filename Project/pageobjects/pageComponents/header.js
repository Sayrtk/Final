class Header {

    constructor(page) {
        this.page = page;
    }

    get lamodaMainTitle() {
        return '[aria-label="Главная"]';
    }

    get menuItem() {
        return '[role="menuitem"]';
    }

    get destinationLocation() {
        return '[class="v-popover"]';
    }

    get listOfCitiesInLocation() {
        return '._29RJmG5djxTAgADcAjSrHW';
    }

    get clothesTab() {
        return '//a[@role="menuitem"][contains(text(),"Одежда")]';
    }

    get basketBtn() {
        return '//span[@class="_3GnPsTm8WrXaKRietMp0Yj"]';
    }

    get beautyTab() {
        return '//a[contains(text(),"Красота")]'
    }

    get profileBtn() {
        return '.popover-target > span'
    }

    get logoutBtn() {
        return '//a[contains(text(),"Выйти")]'
    }

    get gomelDestinationLocation() {
        return 'a[role="button"]:has-text("г. Гомель")'
    }

    get textAfterLocationChanging() {
        return '._1csvkmr7vv0DNR7_FHYI5C'
    }

}

module.exports = Header; 
