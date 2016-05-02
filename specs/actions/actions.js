browser.addCommand('goToHomePage', function () {
    return this
        .url('/');
});
browser.addCommand('homePageSubmitToResults', function () {
    return this
        .click('.search-action');
});
browser.addCommand('searchResultsToHotelDetail', function () {
    return this
        .click('.hotel-name .backlink');
});
browser.addCommand('hotelDetailToPriceAvailibility', function () {
    return this
        .click('.hotel-pricing-info .btn-success');
});
browser.addCommand('priceAvailabilityToBookingSummary', function () {
    return this
        .click('#offers-content .btn-success');
});
browser.addCommand('bookingSummaryToPassagerDeets', function () {
    return this
        .click('#bookingSubmit .call-to-action');
});
browser.addCommand('fillOutPassengerDetailsForm', function () {
    return this

        .waitForExist('#adult-0-title')
        .selectByIndex('#adult-0-title', 1)
        .setValue('#adult-0-firstName', 'Tom')
        .setValue('#adult-0-lastName', 'Surnameage')
        // .click('#id_email')
        // .element('#id_email').then(function(text) {
        //     text.value = 'foo';
        // })
        .setValue('#bookingPassengers #id_email', 'mail@tomsurnamage.com')
        .setValue('#bookingPassengers #id_confirm_email', 'mail@tomsurnamage.com')
        .setValue('#bookingPassengers #id_contact', '07429696894')
        .selectByIndex('#adult-0-birth_date_day', 1)
        .selectByIndex('#adult-0-birth_date_month', 4)
        .selectByIndex('#adult-0-birth_date_year', 19)
        .selectByIndex('#adult-1-title', 0)
        .setValue('#adult-1-firstName', 'Sam')
        .setValue('#adult-1-lastName', 'Surnamage')
        .selectByIndex('#adult-1-birth_date_day', 4)
        .selectByIndex('#adult-1-birth_date_month', 5)
        .selectByIndex('#adult-1-birth_date_year', 23)
        // .click('#page #enable-manual-address')
        // .waitForExist('#page #id_address1')
        // .setValue('#page #id_address1', '123 tester drive')
        // .setValue('#page #id_town', 'tester township')
        // .setValue('#page #id_postcode', 'n12 t24')
        .execute(function() {
            if( $('#page #enable-manual-address').length )         // use this if you are using id to check
            {
                $('#page #enable-manual-address').click();
     // it exists
            }
            document.querySelector('#page #id_address1').value = '123 tester drive';
            document.querySelector('#page #id_town').value = 'tester township';
            document.querySelector('#page #id_manual_town').value = 'tester township';
            document.querySelector('#page #id_postcode').value = 'n12 t24';
            // document.query('#page #id_postcode').value ='n12 t24';
        })
        .click('#bookingSubmit .call-to-action');
});
// browser.addCommand('bankDetailsPayment'), function () {
//     return this
//         .click('.#deposit-low')
//         .click('.cardtype-DEL')
//         .click('#submission .call-to-action')
// });

browser.addCommand('homePageSearchFormClickADestination', function () {
    return this
        .waitForExist('.search-predict-list li')
        .click('.search-predict-list li');
});
browser.addCommand('homePageClickSearchButton',function(){
    return this
        .click('.btn-block');
});
browser.addCommand('holidaysPageHotelNameLink', function () {
    return this
        .waitForExist('.hotel-name .backlink')
        .click('.hotel-name .backlink');
});
browser.addCommand('hotelAvailabilityButtonOnSideBar',function(){
    return this
        .click('#sideBarCTA .state-persist-link');
});
browser.addCommand('holidaysPageTemperatureWidget', function () {
    return this
        .waitForExist('.temperature-widget-small')
        .isExisting('.temperature-widget-small');
});
browser.addCommand('holidayAvailabilityContinueButton',function(){
    return this
        .click('.btn-success');
});
browser.addCommand('bookingSummaryContinueButton',function(){
    return this
        .click('.call-to-action');
});
browser.addCommand('bookFlightRoomRadio', function () {
    return this
        .waitForExist('#page #room_0_1')
        .click('#page #room_0_1');
});
browser.addCommand('passagerDetailsContinueButton',function(){
    return this
        .click('.call-to-action');
});
browser.addCommand('bookingDetailsHeading',function(){
    return this
        .waitForExist('#bookingDeposit h2')
        .getText('#bookingDeposit h2');
});
browser.addCommand('paymentDetailsDepositLow',function(){
    return this
        .waitForExist('#deposit-low')
        .click('#deposit-low');
});
browser.addCommand('paymentDetailsCardPaymentDeets',function(){
    return this
        .setValue('#card_number','12345678901234')
        .selectByIndex('#page #expiry_month',2)
        .selectByIndex('#page #expiry_year',3)
        .setValue('#id_security_code','123');
});