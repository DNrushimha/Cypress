describe('Navigating to Mattresses Page', () => {
    it('should navigate to the Mattresses page', () => {
        cy.visit('https://uat.fortywinks.com.au/bed-bases/').viewport(1280, 720);


        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR').click();

        cy.get("div:nth-of-type(3) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div.swiper-slide-next img").click();

        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();

        cy.get("div:nth-of-type(3) div.swiper-wrapper > div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(3) div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(3) img").click();
        //  cy.get("div:nth-of-type(4) div.swiper-wrapper > div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(5) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();


        cy.get("div:nth-of-type(5) div.swiper-slide-active img").click();
        cy.get("div.text-lg p").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div.swiper-slide-next img").click();
        cy.get("div.Breadcrumb").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.contains('Medium').click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(4) div.swiper-wrapper > div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(5) div > div > div:nth-of-type(5) img").click();
        //cy.get("div:nth-of-type(5) div:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.LogosTileContainer a:nth-of-type(1) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(2) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(5) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(6) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(7) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("a:nth-of-type(8) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div.swiper-slide-active img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div.swiper-slide-next img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div:nth-of-type(3) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(9) div:nth-of-type(4) img").click();
        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-active img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();
        cy.get("div.ArticleTileItemCarousel div.swiper-slide-next img").click();
        cy.get(':nth-child(1) > a > ._header_menu_item_text__GAqZR > .cursor-pointer').click();






    });
});


