describe('happy path',function(){
    describe('home page', function() {
        it('has a burger menu', function() {
            return browser
                .goToHomePage()
                .getText('#menuToggler')
                .then(function(text) {
                    expect(text).toContain('menu');
                });
        });
        it('has a logo',function(){
            return browser
                .getText('.logo')
                .then(function(text) {
                    expect(text).toContain('loveholidays.com');
                })
                .homePageSubmitToResults();

        });
    });

    describe('search results page', function() {
        it('has more than one holiday to choose from', function() {
            var hotelTitle = '.hotel-name';
            return browser
                .waitForExist(hotelTitle)
                .elements(hotelTitle)
                .then(function(els) {
                    expect(els.value.length).toBeGreaterThan(1);
                    // els is an object which has a key on it called value. The value of value is an array.
                })
                .searchResultsToHotelDetail();
        });
    });

    describe('hotel page', function() {
        it('has a button to show more images in gallery section', function() {
            return browser
                .getText('.show-more-indicators')
                .then(function(text) {
                    expect(text).toContain('Show more images');
                })
                .hotelDetailToPriceAvailibility();
        });
    });

    describe('price availability', function() {
        it('has a price per person', function() {
            var pricePerPerson = '#trip-summary .price-per-person';
            return browser
                .waitForExist(pricePerPerson)
                .getText(pricePerPerson)
                .then(function(text) {
                    expect(text).toContain('Price Per Person');
                })
                .priceAvailabilityToBookingSummary();
        });
    });

    describe('booking summary', function() {
        it('has a room type automatically selected', function() {
            var roomType= '#room_table_0 :checked';
            // checked is a sudo selector, it selects the checked input.
            return browser
                .waitForExist(roomType)
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                })
                .bookingSummaryToPassagerDeets();
        });
    });

    describe('passenger details', function() {
        it('has form for hotel', function() {
            var headingTwoPaymentPlan='#bookingDeposit h2';
            return browser
                .waitForExist('#bookingPassengers')
                .fillOutPassengerDetailsForm()
                .waitForExist('headingTwoPaymentPlan')
                .getText('headingTwoPaymentPlan')
                .then(function(text) {
                    expect(text).toContain('Select a Payment Plan');
                });
        });
    });
});

