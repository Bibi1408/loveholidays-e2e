xdescribe('test-path3',function(){
    describe('Home Page',function(){
        it('has destination field',function(){
            return browser
                .goToHomePage()
                .waitForExist('.search-destination-predict')
                // .isExisting('.search-destination-predict')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('fills out destination field and has a departure airport',function(){
            return browser
                .setValue('#destination ','Orlando')
                .homePageSearchFormClickADestination()
                .waitForExist('.search-destination-predict-value-list')
                .isExisting('.search-departureAirport')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has add another room link', function() {
            return browser
                .isExisting('.additionalRoom')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                })
                .homePageClickSearchButton();
        });
    });
    describe('Holiday page', function() {
        it('has picture of resorts', function() {
            return browser
                .waitForExist('#imagery')
                .isExisting('#imagery')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
               });
        });
        it('has a star rating in side bar', function() {
            return browser
                .isExisting('.large-star-rating ')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });
        });
        it('has a Trip Advisor rating in side bar', function() {
            return browser
                .isExisting('.tripadviser-rating')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });
        });
        it('has Holiday type in side bar', function() {
            return browser
                .getText('.check-field-title')
                .then(function(text) {
                    expect(text).toContain('Holiday Type');
                })
                .click('.imagery__link');
        });
    });
    describe('Holidays description page', function() {
        it('has a large picture of destination resort', function() {
            return browser
                .waitForExist('#main-tab-content')
                .isExisting('#main-tab-content')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });
        });
        it('has a small matching thumbnail picture of destination resort', function() {
            return browser
                .waitForExist('img[src="http://www.loveholidays.com/images/holidays/usa/florida/orlando/kuality-resort-1.CRD.jpg"]')
                .isExisting('img[src="http://www.loveholidays.com/images/holidays/usa/florida/orlando/kuality-resort-1.CRD.jpg"]')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });
        });
        it('has a add to short list link',function(){
            return browser
                .isExisting('.heart-label')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has show more images under large picture',function(){
            return browser
                .isExisting('.show-more-indicators')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                })
                .holidayAvailabilityContinueButton();

        });
    });
    describe('Holidays Availability',function(){
        it('has way to pay tool tip',function(){
            return browser
                .waitForExist('#ways-to-pay-tooltip-')
                .isExisting('#ways-to-pay-tooltip-')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has outbound timeline',function(){
            return browser
                .waitForExist('.noUi-base')
                .isExisting('.noUi-base')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
         it('has inbound timeline',function(){
            return browser
                .waitForExist('.slider-component')
                .isExisting('.slider-component')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                })
                .click('.btn-success');
        });
    });
    describe('Book flight and hotel page',function(){
        it('has free cancelation baner at top of the page',function(){
            return browser
                .waitForExist('#bookingFields')
                .isExisting('#bookingFields')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has holding luggage',function(){
            return browser
                .isExisting('.book-section-summary')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has travel insurence',function(){
            return browser
                .isExisting('#bookingInsurance .active')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has show all options',function(){
            return browser
                .isExisting('.insurance-see-all')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has price match gaurentee pop up modle ',function(){
            return browser
                .isExisting('#price-match-guarantee')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                })
                .click('.btn-success');
        });
    });
    describe('passenger details', function() {
        it('has form for hotel and fills in form', function() {
            return browser
                .waitForExist('#bookingPassengers')
                .fillOutPassengerDetailsForm()
                .bookingDetailsHeading()
                .then(function(text) {
                    expect(text).toContain('Select a Payment Plan');
                })
                .passagerDetailsContinueButton();
        });
    });
    describe('payment details', function() {
        it('most popular selected,', function() {
            return browser
                .paymentDetailsDepositLow()
                .isExisting('#cardSummary')
                .click('.cardtype-DEL')
                // .pause(25000)
                .paymentDetailsCardPaymentDeets()
                .getText('#page #bookingAmmendAddress')
                .then(function(text) {
                    expect(text).toContain('Mrs Tom Surnameage, 123 tester drive, tester township, n12 t24');
                });

        });
    });

});