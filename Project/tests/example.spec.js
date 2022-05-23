const { test, expect } = require('@playwright/test');
const PageFactory = require('../pageobjects/pageFactory');


test.beforeEach(async ({ page }) => {
  const I = new PageFactory(page);
  await I.page.navigate('https://www.lamoda.by/women-home/');
});

test.describe('lamoda final tests', () => {

  test('check title of the womens clothing tab', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.header.clothesTab);
    await expect(page).toHaveTitle(/Женская одежда/);
  })

  test('check ability to return to the main page by click on Lamoda button', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.header.beautyTab);
    await I.baseElements.click(I.header.lamodaMainTitle);
    await expect(page).toHaveURL('https://www.lamoda.by/');
  })

  test('check search for new balance items', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.search.searchInput);
    await I.baseElements.fill(I.search.searchInput, 'new balance');
    await I.baseElements.click(I.search.submitSearchBtn);
    await expect(await page.locator(I.goodspage.catalogTitle)).toContainText('New Balance');
  })

  test('check changing current location of the user', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.footer.changeCountryBtn);
    await I.baseElements.click(I.footer.ukrainValueInListOfCountries);
    await expect(await page.locator(I.footer.userCurrentLocation)).toContainText('Украина');
  })

  test('check changing location destination', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.header.destinationLocation);
    await I.baseElements.click(I.header.gomelDestinationLocation);
    await expect(await page.locator(I.header.textAfterLocationChanging)).toContainText(['Вы находитесь в ', 'г. Гомель']);
  })

  test('check sign in', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.mainPage.signInBtn);
    await I.baseElements.fill(I.authpage.emailForSignIn, 'testacc18may@gmail.com');
    await I.baseElements.fill(I.authpage.passwordForSignIn, '12345678Ab');
    await page.waitForTimeout(2000);
    await I.baseElements.click(I.authpage.confirmSignInBtn);
    await expect(page.locator(I.header.profileBtn)).toBeVisible(); //может упасть из-за капчи  
  })

  test('check sign up', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.mainPage.signInBtn);
    await I.baseElements.click(I.authpage.createAccountBtn);
    const email = `test${new Date().getTime() / 1000}@test.com`;
    await I.baseElements.fill(I.authpage.emailForSignUp, email)
    await I.baseElements.check(I.authpage.newsCheckbox);
    await I.baseElements.fill(I.authpage.password, '1234567Ab');
    await I.baseElements.fill(I.authpage.confirmPassword, '1234567Ab');
    await I.baseElements.fill(I.authpage.userName, 'Tester');
    await I.baseElements.check(I.authpage.privacyPolicy);
    await page.waitForTimeout(2000);
    await I.baseElements.click(I.authpage.sumtitRegBtn);
    await expect(await page.locator(I.header.profileBtn)).toBeVisible(); //может упасть из-за капчи 
  })

  test('check ability to recover the user password', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.mainPage.signInBtn);
    await I.baseElements.click(I.authpage.forgotPasswordBtn);
    await I.baseElements.fill(I.authpage.emailFieldForRecovery, 'test@gmail.com');
    await expect(await page.locator(I.authpage.textAfterRecoveryConfirmation)).toContainText('Восстановление пароля');
  })

  test('check ability to subscribe on news', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.fill(I.mainPage.emailInput, 'test@gmail.com');
    await I.baseElements.check(I.mainPage.policyAgreementBtn);
    await I.baseElements.click(I.mainPage.forHerBtn);
    await expect(await page.locator(I.mainPage.SubsriptionSuccessMessage)).toContainText(['Спасибо!', 'Письмо с промокодом уже на почте']);
  })

  test('check item adding to the basket', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.search.searchInput);
    await I.baseElements.fill(I.search.searchInput, 'new balance');
    await I.baseElements.click(I.search.submitSearchBtn);
    await I.baseElements.selectItemFromTheList(I.goodspage.item, 0);
    await I.baseElements.click(I.goodspage.sizeDropdown);
    await I.baseElements.selectItemFromTheList(I.goodspage.listOfSizes, 5);
    await page.waitForSelector(I.goodspage.addToBasketBtn);
    await I.baseElements.click(I.goodspage.addToBasketBtn);
    await I.baseElements.click(I.header.basketBtn);
    await expect(await page.locator(I.goodspage.itemIsAddedToKorzinaText)).toContainText('Товар добавлен в корзину');
  })

  test('check item removal from basket', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.header.beautyTab);
    await I.baseElements.selectItemFromTheList(I.goodspage.item, 0);
    await I.baseElements.click(I.goodspage.addToBasketBtn);
    await page.waitForTimeout(2000);
    await I.baseElements.click(I.goodspage.goToKorzinaBtn);
    await I.baseElements.click(I.header.basketBtn);
    await I.baseElements.click(I.basketpage.basketArea);
    await page.waitForSelector(I.basketpage.deleteBtn);
    await I.baseElements.click(I.basketpage.deleteBtn); //иногда тест зависает на этой кнопке, но чаще проходит 
    await expect(await page.locator(I.basketpage.emptyBasketText)).toContainText('В корзине нет товаров');
  })

  test('check that new arrivals filter can be applied in clothes tab', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.selectItemFromTheList(I.header.menuItem, 4);
    await page.waitForTimeout(2000);
    await I.baseElements.selectItemFromTheList(I.goodspage.allFilters, 0);
    await I.baseElements.selectItemFromTheList(I.goodspage.typesInsideFilters, 3);
    await expect(await page.locator(I.goodspage.firstFilter)).toHaveText('По новинкам');
  })

  test('check filters reset', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.selectItemFromTheList(I.header.menuItem, 4);
    await I.baseElements.selectItemFromTheList(I.goodspage.allFilters, 4);
    await I.baseElements.click(I.goodspage.searchInBrandFilter);
    await I.baseElements.click(I.goodspage.allBrands);
    await expect(await page.locator(I.goodspage.resetAllFilters)).toBeEnabled();
  })

  test('check that all items have discount label in sale tab', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.selectItemFromTheList(I.header.menuItem, 12);
    await page.waitForTimeout(3000);
    let discountItems = await page.$$(I.goodspage.discountLabel);
    let amount = await discountItems.length;
    console.log(discountItems.length);
    await expect(await page.locator(I.goodspage.discountLabel)).toHaveCount(amount);
  })

  test('like the article in how to make an order section', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.footer.howToMakeAnOrderLink);
    await I.baseElements.click(I.helppage.likeBtn);
    await expect(await page.locator(I.helppage.thanksAnswer)).toHaveText('Спасибо!');
  })

  test('check that its impossible to send feedback form with invalid information', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.footer.howToMakeAnOrderLink);
    await I.baseElements.click(I.helppage.supportForm);
    await I.baseElements.click(I.helppage.feedbackForm);
    await I.baseElements.click(I.helppage.themeTitle);
    await I.baseElements.click(I.helppage.returnBackTitle);
    await I.baseElements.fill(I.helppage.textArea, 'Sample text');
    await I.baseElements.fill(I.helppage.numberOfOrder, '1234567ABW');
    await I.baseElements.fill(I.helppage.name, 'Tester');
    await I.baseElements.fill(I.helppage.email, 'test@gmail.com');
    await I.baseElements.click(I.helppage.submitQuestionBtn);
    await expect(await page.locator(I.helppage.errorPopup)).toBeEnabled();
  })

  test('check that mob version of site can be enabled', async ({ page }) => {
    const I = new PageFactory(page);
    await I.baseElements.click(I.footer.mobVersion);
    await expect(await page).toHaveURL('https://www.lamoda.by/women-home/?sv=mob');
  })

})


