const Page = require('./page');
const MainPage = require('./main.page');
const Header = require('./pageComponents/header');
const Footer = require('./pageComponents/footer');
const Search = require('./pageComponents/search');
const BasketPage = require('./basket.page');
const BaseElements = require('../helpers/baseElements');
const GoodsPage = require('./goods.page');
const AuthPage = require('./auth.page');
const HelpPage = require('../pageobjects/help.page');

class PageFactory {
    constructor(page) {
        this.page = new Page(page);
        this.mainPage = new MainPage(page);
        this.header = new Header(page);
        this.footer = new Footer(page);
        this.search = new Search(page);
        this.basketpage = new BasketPage(page);
        this.baseElements = new BaseElements(page);
        this.goodspage = new GoodsPage(page);
        this.authpage = new AuthPage(page);
        this.helppage = new HelpPage(page);

    }
}

module.exports = PageFactory;

