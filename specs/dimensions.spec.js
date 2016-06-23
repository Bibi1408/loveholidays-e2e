xdescribe('dimensions', function () {
    // var dateSelected;
    describe('Home Page', function() {
        it('has a search form that we can fill out', function() {
            return browser
                .goToHomePage()
                .setValue('#destination ','Spain')
                // enters Spain into field and clicks destination.
                .homePageSearchFormClickADestination()
                .waitForExist('.search-destination-predict-value-list a')
                // .click('#date-button')
                // .waitForExist('.calendar .day')
                // .getHTML('.calendar .day')
    //             tests done by Siobhan up to this point.
    //             .then(function(html) {
    //                 var dayElementString = html[0];
    //                 var dayDateArray = dayElementString.match(/calendar-day-(\d{4})-(\d{2})-(\d{2})/);
    //                 dateSelected = new Date(parseInt(dayDateArray[1], 10), parseInt(dayDateArray[2], 10)-1, parseInt(dayDateArray[3], 10));
    //             })
    //             .click('.calendar .day')
    //             .pause(4000)
    //             .homePageClickSearchButton();
    //     });
    });
    // describe('Next page', function () {
    //     it('sees the dateSelected var', function () {
    //         return browser
    //             .waitForExist('.search-summary-list li')
    //             .getHTML('.search-summary-container')
    //             .then(function(html) {
    //                 expect(html).toContain('Departure Date: 0'+dateSelected.getDate()+'-0'+(dateSelected.getMonth()+1)+'-'+dateSelected.getFullYear());
    //             });
    //     });
     });
// These tests done by Alex as a teaching lesson.

    xdescribe('Holidays', function() {
        it('has destination fields filled in from home page', function() {
            return browser
                .waitForExist('.search-summary-list li')
                .getHTML('.search-summary-container')
                .then(function(html) {
                    // console.log('wooo', html, typeof html);
                    expect(html).toContain('Spain');
                });

        });
        it('sort order form exists', function() {
            return browser
                .isExisting('#sort-order')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                })
                .holidaysPageHotelNameLink();

        });
    });

    describe('Holiday page', function() {
        it('has weather ', function() {
            var priceOverviewOnSideBar ='.price-overview-section';
            return browser
                .waitForExist('priceOverviewOnSideBar')
                .isExisting('#when-to-go')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });
        });
        it('has price overview ', function() {
            return browser
                .isExisting('priceOverviewOnSideBar')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                })
                .hotelAvailabilityButtonOnSideBar();
        });
    });

    describe('holiday availability', function() {
        it('has price per person link', function() {
            return browser
                .isExisting('#panda-group-pricing')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });

        });
        it('has temp widget', function() {
            return browser
                .holidaysPageTemperatureWidget()
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                });

        });
        it('has room options and extras', function() {
            return browser
                .getText('.cta-link')
                .then(function(text) {
                    expect(text).toContain('Room options and extras available at the next step');
                })
                .holidayAvailabilityContinueButton();
        });
    });


    describe('Book flight-hotel - booking summary', function() {
        it('has room type, transfer service click radio', function() {
            return browser
                .bookFlightRoomRadio()
                .click('[name="transfernumber"][value="1"]')
                .isExisting('.insurance-see-all')
                .then(function(isExisting) {
                    expect(isExisting).toBe(true);
                })
                .bookingSummaryContinueButton();
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