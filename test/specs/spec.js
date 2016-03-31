// describe('Home page', function() {
//     it('should have a price match guarantee', function() {
//         return browser
//             .url('/')
//             .getText('.price-match-guarantee')
//             .then(function(text) {
//                expect(text).toContain('PRICE MATCH GUARANTEE');
//             });
//     });
//  });

//  describe('home page', function() {
//     it('clicks theatre link in navigation', function() {
//         return browser
//             .click('.nav-link [title="Theatre"]')
//             .getText('.nav-link [title="Theatre"].current')
//             .then(function(text) {
//                 expect(text).toContain('Theatre');
//             });
//     });
// });



//  // describe('Click find button', function() {
//  //     it('clicks find button', function() {
//  //         return browser
//             // .click('.tab-content .active .visible-xs [type="submit"].submit-cannonball:not(.search-flight-hotel)')
//  //             // .url('/vg1/search/results.action?idRequest=1000202827007')
//  //            .waitForExist('#tab-list')
//  //            .getText('#tab-list')
//  //            .then(function(text){
//  //                expect(text).toContain('Requested dates');

//  //             });
//  //     });
//  // });


// describe('Theatre', function() {
//     it('clicks the show you want to select', function() {
//         var selector='.right-column .lowest-price .including';
//         return browser
//             .click('.feature-box:first-child .feature-box-link')
//             .waitForExist(selector)
//             .getText(selector)
//             .then(function(text) {
//                 expect(text).toContain('including all fees');
//             });
//     });
// });


// describe('Theatre', function() {
//     it('clicks the check availibility button', function() {
//         return browser
//             .click('.check-availability')
//             .getText('[name="details"]')
//             .then(function(text) {
//                 expect(text).toContain('Choose a date and time to see available seats and prices');
//             });
//     });
// });

// describe('Theatre', function() {
//     it('has a offer available', function() {
//         return browser
//             .getText('.offer-hint')
//             .then(function(text) {
//                 expect(text).toContain('Offer available');
//             });
//     });
// });

// describe('Theatre', function() {
//     it('clicks number of tickets', function() {
//         return browser
//             .click('.event')  //calender picks first date
//             .click('.dropdown-toggler') //drop down item
//             .click('.dropdown-menu[role="menu"] li:nth-child(3) a') //picks 3 tickets
//             .getText('.dropdown-toggler').then(function(text) {
//                 expect(text).toContain('3 tickets');
//             });
//     });
// });

// describe('Theatre', function() {
//     it('clicks on ticke', function() {
//         var selector= '.band:nth-child(1) .ticket-price';
//         return browser
//             .waitForExist(selector)
//             .click(selector)
//             .pause(2000)
//              .getText('.form-item-inner-text')
//             .then(function(text) {
//                 expect(text).toContain('3 tickets');
//             });
//     });
// });

// // describe('Theatre', function() {
// //     it('clicks buy now', function() {
// //         return browser
// //             .click('.lmn-icon-angle-right')
// //             .pause(2000)
// //              .getText('.timedOut')
// //             .then(function(text) {
// //                 expect(text).toContain('Book now');
// //             });
// //     });
// // });












//  describe('home page', function() {
//     it('has a burger menu', function() {
//         return browser
//             .url('/')
//             .getText('#menuToggler')
//             .then(function(text) {
//                 expect(text).toContain('menu');
//             });
//     });
//     it('has a logo',function(){
//         return browser
//             .getText('.logo')
//             .then(function(text) {
//                 expect(text).toContain('loveholidays.com');
//             })
//             .click('.search-action');

//     });
// });

// describe('search results page', function() {
//     it('has more than one holiday to choose from', function() {
//         return browser
//             .waitForExist('.hotel-name')
//             .elements('.hotel-name')
//             .then(function(els) {
//                 expect(els.value.length).toBeGreaterThan(1);
//             })
//             .click('.hotel-name .backlink');
//     });
// });


// describe('the gallery on the hotel page', function() {
//     it('has a button to show more images', function() {
//         // test starts on results page.
//         return browser
//             .getText('.show-more-indicators')
//             .then(function(text) {
//                 expect(text).toContain('Show more images');
//             })
//             .click('.hotel-pricing-info .btn-success');
//     });
// });

describe('price avalibility', function() {
    it('has a price per person', function() {
        return browser
            .url('/holidays/availability/tenerife/costa-del-silencio/alborada-beach-club.html?alltabs=1&state=AgoUKFAAIKHLYYEAAAQA&calDate=16983#view=HL&state=AgoUKFAAIKHLYYEAAAQA')


            .waitForExist('.price-per-person')
            .getText('.price-per-person')
            .then(function(text) {
                expect(text).toContain('Price Per Person');
            })
            .click('#offers-content .btn-success');
    });
});

describe('offer summary', function() {
    it('has a room type automatically selected', function() {
        return browser
            .waitForExist('#room_table_0 :checked')
            .elements('#room_table_0 :checked')
            .then(function(els) {
                expect(els.value.length).toBe(1);
            })
            .click('#bookingSubmit .call-to-action');
    });
});

// describe('passenger details', function() {
//     it('has form validation', function() {
//         return browser
//             .windowHandleMaximize()
//             .waitForExist('#bookingPassengers')
//             .click('#bookingSubmit .call-to-action')
//             .getText('#BookingErrorPanel')
//             .then(function(text) {
//                 expect(text).toContain('First name, Lead passenger');
//             });
//     });
// });
describe('passenger details', function() {
    it('has form for hotel', function() {
        return browser
            .windowHandleMaximize()
            .waitForExist('#bookingPassengers')
            .selectByIndex('#adult-0-title', 1)
            .setValue('#adult-0-firstName', 'Tom')
            .setValue('#adult-0-lastName', 'Surnameage')
            .click('#id_email')
            .element('#id_email').then(function(text) {
                text.value = 'foo';
            })
            // .execute(function() {
            //     document.querySelector('#id_email').value = 'mail@tomsurnamage.com'
            //     document.querySelector('#id_confirm_email').value = 'mail@tomsurnamage.com'
            //     document.querySelector('#id_contact').value = '07429696894'
            //     document.querySelector('#id_address1').value = '123 tester drive'
            //     document.querySelector('#id_town').value = 'tester township'
            //     document.querySelector('#id_postcode').value = 'n12 t24'
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
            .setValue('#page #id_address1', '123 tester drive')
            .setValue('#page #id_town', 'tester township')
            .setValue('#page #id_postcode', 'n12 t24')
            .click('#bookingSubmit .call-to-action')
            .waitForExist('#bookingDeposit h2')
            // .isVisible('#id_email').then(function(isExisting) {
            //     console.log(isExisting); // outputs: false
            // })
            // .getText('#id_email')
            .getText('#bookingDeposit h2')
            .then(function(text) {
                expect(text).toContain('Select a Payment Plan');
            });
    });
});
// describe('passenger details', function() {
//     it('has form for hotel', function() {
//         return browser
//             .waitForExist('#bookingPassengers')
//             .selectByIndex('#adult-0-title', 1)
//             .setValue('#adult-0-firstName', 'Tom')
//             .setValue('#adult-0-lastName', 'Surnameage')
//             // .pause(5000)
//             .click('#id_email')
//             .setValue('#id_email', 'mail@tomsurnamage.com')
//             // .setValue('#id_confirm_email', 'mail@tomsurnamage.com')
//             // .setValue('#id_contact', '07429696894')
//             .selectByIndex('#adult-0-birth_date_day', 1)
//             .selectByIndex('#adult-0-birth_date_month', 4)
//             .selectByIndex('#adult-0-birth_date_year', 19)
//             .selectByIndex('#adult-1-title', 0)
//             .setValue('#adult-1-firstName', 'Sam')
//             .setValue('#adult-1-lastName', 'Surnamage')
//             .selectByIndex('#adult-1-birth_date_day', 4)
//             .selectByIndex('#adult-1-birth_date_month', 5)
//             .selectByIndex('#adult-1-birth_date_year', 23)
//             .setValue('#id_address1', '123 tester drive')
//             .setValue('#id_town', 'tester township')
//             .setValue('#id_postcode', 'n12 t24')
//             .click('#bookingSubmit')
//             .waitForExist('#deposit-spread')
//             .getText('#deposit-spread')
//             .then(function(text) {
//                 expect(text).toContain('0% Monthly Payments');
//             });
//     });
// });