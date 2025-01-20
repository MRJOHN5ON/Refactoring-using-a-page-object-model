exports.ProductSearches = class ProductSearches {

    constructor(page){
        this.page = page
        this.addToCartBt = page.getByTestId("add-to-cart-button");
        this.twoYearWarrantyCheckbox = page.locator('input[aria-label="2-Year Protection Plan $9.99"]');
        this.addProtectionButton = page.getByTestId('attachSiAddCoverage');
        this.successMessage = page.getByTestId('NATC_SMART_WAGON_CONF_MSG_SUCCESS');
        this.cartItemCount = page.getByTestId("nav-cart-count");
        this.viewCartBt = page.getByTestId("sw-gtc");
        this.itemSubtotal = page.getByTestId("sc-subtotal-label-activecart");
        this.proceedToCheckoutButton = page.getByTestId('desktop-ptc-button-celWidget');
        this.noThanksButton = page.getByTestId('attachSiNoCoverage-announce');
        this.searchBox = page.getByTestId("twotabsearchtextbox");
        this.searchBt = page.getByTestId('nav-search-submit-button');
        this.productTitle = page.getByTestId('titleSection');
        this.ASINCustomerReviews = page.locator('#averageCustomerReviews');
        
    }
      
    async gotoHomePage() {
        await this.page.goto('https://www.amazon.com/');
    }

    async searchForProductEnter(searchQuery) {
        await this.searchBox.fill(searchQuery)
        await this.searchBox.press('Enter')
    }
   
    async searchForProductClick(searchQuery) {
        await this.searchBox.fill(searchQuery)
        await this.searchBt.click();
    }

    async addToCart() {
        await this.addToCartBt.click({ force: true });
    }
    async clickAddProtectionBt() {
        await this.addProtectionButton.click({ force: true });
    }

    async clickTwoYearWarrantyCheckbox() {
        await this.twoYearWarrantyCheckbox.click({ force: true });
    }

    async clickViewCartBt() {
        await this.viewCartBt.click();
    }

    async clickProceedToCheckoutBt() {
        await this.proceedToCheckoutButton.click();
    }
    async clickNoThanksBt() {
        await this.noThanksButton.click({ force: true });
    }

    
}


