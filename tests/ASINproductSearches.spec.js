import { test, expect } from '@playwright/test'
import { ProductSearches } from '../pages/productSearches'


test('search for product by ASIN retrieved from customer reviews', async ({ page }) => {
    const productSearches = new ProductSearches(page);
    const searchQuery = 'Powell Peralta Geegah Ripper Skate Deck';
    const productName = 'Geegah Ripper Skate Deck';

    // go to amazon.com
    await productSearches.gotoHomePage();

    // search for product by using enter button
    await expect(productSearches.searchBox).toBeVisible();
    await productSearches.searchForProductEnter(searchQuery);

    // click on the first product
    await page.getByRole('link', { name: productName }).first().click();

    // verify product title
    const initialSearchTitle = await productSearches.productTitle.textContent();

    // find the asin from the customer reviews
    await expect(productSearches.ASINCustomerReviews).toBeVisible();
    const ASINCustomerReviews = await productSearches.ASINCustomerReviews.getAttribute('data-asin')
    expect(ASINCustomerReviews).toBeTruthy();

    // search for the product using the asin
    await productSearches.searchForProductEnter(ASINCustomerReviews);

    // click on the first product
    await page.getByRole('link', { name: productName }).first().click()
    const asinSearchTitle = await productSearches.productTitle.textContent();

    // verify that the initial search results title and the search results title using the asin are the same
    expect(initialSearchTitle).toBe(asinSearchTitle);

})
