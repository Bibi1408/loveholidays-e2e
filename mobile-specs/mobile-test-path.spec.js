describe('mobile-test-path', function() {
    describe('SRP holidays', function(){
        it('has image showing hotel', function(){
            return browser
                .url('/holidays/?state=AgoUKFAAIKHLYYEAAAQA')
                // .waitForExist('.hotel-details__image')
                .isExisting('.hotel-details__image')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has heading showing hotel name', function(){
            return browser
                // .waitForExist('.hotel-details__header')
                .isExisting('.hotel-details__header')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has pink pay only deposit today banner', function(){
            return browser
                .isExisting('.search-result-card-offer__selling-points')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has a modal link that is clickable', function(){
            return browser
                .click('.offer-card__type__modal-link')
                .isExisting('.modal__content__title')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('shows modal pop-up', function(){
            return browser
                .isExisting('.modal__content')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('closes the modal', function(){
            return browser
                .click('.modal__content__close')
                .isExisting('.modal__content__title')
                .then(function(isExisting){
                    expect(isExisting).toBe(false);
                });
        });
        it('has a banner', function(){
            return browser
                .isExisting('.hotel-details__sash__inner')
                // .waitForExist('.hotel-details__sash__inner')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                })
                .click('.search-result-card-offer__pandaBtn .link-button');
        });
    });
    describe('Avaibability page', function(){
        it('has a heading of the hotel name on beginning or page', function(){
            return browser
                .isExisting('.hotel-details__name')
                // .waitForExist('.hotel-details__name')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has stars under title', function(){
            return browser
                .isExisting('.hotel-details__star-rating .star')
                // .waitForExist('.hotel-details__star-rating .star')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('hotel only and holidays tab ', function(){
            return browser
                .waitForExist('.tabList')
                .isExisting('.tabList')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
        it('has price break down link', function(){
            return browser
                .waitForExist('.offer__breakdown')
                .isExisting('.offer__breakdown')
                .then(function(isExisting){
                    expect(isExisting).toBe(true);
                });
        });
    //     it('clicks done button', function(){
    //          return browser
    //             .click('.subpage-masthead')
    //             .waitForExist('.subpage-masthead')
    //             .then(function(waitForExist){
    //                expect(waitForExist).toBe(true)
    //             });
    //     });
    });
    //     it('', function(){
    //         return browser
    //         .isExisting('')
    //             .then(function(isExisting){
    //                 expect(isExisting).toBe(true)
    //             })
    //     })
    // })

    // });
    // describe('', function(){
    //     it('', function(){
    //         return browser
    //             .isExisting('')
    //             .then(function(isExisting){
    //                 expect(isExisting).toBe(true)
    //             });
    //     });
    //     it('', function(){
    //         return browser
    //         .isExisting('')
    //             .then(function(isExisting){
    //                 expect(isExisting).toBe(true)
    //             });
    //     });
    // });
});
