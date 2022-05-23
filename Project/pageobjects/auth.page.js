const Page = require('./page');

class AuthPage extends Page {
    constructor(page) {
        super(page);
    }

    //sign in 
    get emailForSignIn() {
        return '//input[@aria-label="Электронная почта"]'
    }

    get passwordForSignIn() {
        return '//input[@placeholder="Введите пароль"]'
    }

    get confirmSignInBtn() {
        return '.x-button_40.x-button_intrinsic-width._1SiPT2ceVbbZGRaX2oL2Op'
    }

    get wrongPasswordModal() {
        return '._3eXa06GaKn-rZjSX0ryBqC';
    }

    // sign up
    get authEmailField() {
        return '//a[contains(text(),"Войти")]';
    }

    get passwordField() {
        return '//input[@placeholder="Введите пароль"]';
    }

    get signInBtn() {
        return '//button[@aria-label="Войти"]';
    }

    get forgotPasswordBtn() {
        return '//a[contains(text(),"Забыли пароль?")]';
    }

    get emailFieldForRecovery() {
        return 'div[class="_8kAcc8K6NmCLDybQk8Sv8"] input[placeholder="Введите свой email"]'
    }

    get submitRecoveryBtn() {
        return '//button[contains(text(),"Отправить")]';
    }

    get textAfterRecoveryConfirmation() {
        return '//span[contains(@class,"xANrT2wwsC2dCW2s0sSyg")]';
    }

    get createAccountBtn() {
        return '//a[contains(text(),"Создать аккаунт")]';
    }

    get emailForSignUp() {
        return 'div[class="zgC70ih0Ko8GDOgB2HztV"] input[placeholder="Введите свой email"]';
    }

    get newsCheckbox() {
        return '//div[contains(@title,"Подписаться на новости и скидки")]//div[contains(@class,"x-checkbox__box")]';
    }

    get password() {
        return '//input[contains(@placeholder,"Придумайте пароль")]';
    }

    get confirmPassword() {
        return '//input[@placeholder="Повторите пароль"]';
    }

    get userName() {
        return '//input[@placeholder="Введите свое имя"]';
    }

    get privacyPolicy() {
        return '//form[@class="_3dr8g_1eJXN-ElQNuG-g2a"]//div[@name="policyAgreement"]//div[@class="x-checkbox__box"]';
    }

    get sumtitRegBtn() {
        return '.x-button_intrinsic-width._27JVPsn4v4UPukX_BOxWUd';
    }

    get textAfterSignUp() {
        return '//div[@class="_2iLgRnNCb_TzR34bnEcNeD"]//span[1]';
    }

    get buttonAfterSignUp() {
        return '//button[contains(text(),"Супер!")]';
    }

    get signInError() {
        return '._2xyPzMQ7VZwaQbGuJjmVDX';
    }



}

module.exports = AuthPage; 