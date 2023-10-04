describe('Kids page', () => {
    it('checking the Kids Page', () => {
        cy.visit('https://uat.fortywinks.com.au/').viewport(1280, 720);

        //SHOP PRODUCT
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-next img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-next img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div:nth-of-type(7) img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div.CategoryTileItemCarousel div.swiper-slide-active img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(10) img").click();

        cy.get("li:nth-of-type(2) span.font-normal").click();
        cy.get("div:nth-of-type(11) img").click();

        //WE’RE HERE TO HELP
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-active img").click();

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();

        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.HelpCarousel div.swiper-slide-next img").click();

        //Quick ship 
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer > div > div > div:nth-of-type(1) img").click();

        //Interest free
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(2) img").click();

        //widest range
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(3) img").click();

        //Austarlian owned
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);
        cy.get("div.IconTileContainer div:nth-of-type(4) img").click();
        cy.visit('https://uat.fortywinks.com.au/kids-furniture/').viewport(1280, 720);


    });
});