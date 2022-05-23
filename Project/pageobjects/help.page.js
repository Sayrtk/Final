const Page = require('./page');

class HelpPage extends Page {

    get search() {
        return '//input[@placeholder="Есть вопрос? Найдите ответ"]';
    }

    get searchSubmitBtn() {
        return '.ya-site-form__search-input-layout-r > input';
    }

    //how to make an order page
    get likeBtn() {
        return '.help-center-thumbsup-red';
    }

    get thanksAnswer() {
        return '.help-center-glossary__thanks';
    }

    //support form 
    get supportForm() {
        return '.help-center__controls-text_feedback';
    }

    get feedbackForm() {
        return '.dropup-chats__feedback.dropup-link.js-help-center-feedback'
    }

    get themeTitle() {
        return '.button_outline.button_s';
    }

    get returnBackTitle() {
        return '.select__item:nth-child(4)'
    }

    get textArea() {
        return '.text-field.text-field_textarea';
    }

    get numberOfOrder() {
        return '//input[@name="order"]';
    }

    get name() {
        return '//input[@placeholder="Ваше имя"]';
    }

    get email() {
        return '//input[@placeholder="Эл. почта"]';
    }

    get submitQuestionBtn() {
        return '//button[@type="submit"]';
    }

    get errorPopup() {
        return '.popup__error';
    }

    get helpLink() {
        return 'https://www.lamoda.by/help/?from=footer'
    }

}

module.exports = HelpPage; 