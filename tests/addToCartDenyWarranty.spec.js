import { test, expect } from "@playwright/test"
import { ProductSearches } from "../pages/productSearches"


test('adds product to cart, denies warranty and verifies cart count and item quantities', async ({ page }) => {
const productSearches = new ProductSearches(page);
const expectedCartCount = "1";
const expectedItemSubtotal = "Subtotal (1 item):";


await productSearches.gotoProductDenyWarrantyURL();
await expect (productSearches.addToCartBt).toBeVisible();
await productSearches.addToCart();

await expect(productSearches.noThanksButton).toBeVisible();
await productSearches.clickNoThanksBt();

await expect(productSearches.successMessage).toBeVisible();

await expect(productSearches.cartItemCount).toBeVisible();
await expect(productSearches.cartItemCount).toHaveText(expectedCartCount);

await expect(productSearches.viewCartBt).toBeVisible();
await productSearches.clickViewCartBt();

await expect(productSearches.itemSubtotal).toBeVisible();
const itemSubtotalText = (await productSearches.itemSubtotal.textContent())?.trim() || '';
expect(itemSubtotalText).toBe(expectedItemSubtotal);

await expect(productSearches.proceedToCheckoutButton).toBeVisible();
await productSearches.clickProceedToCheckoutBt();
await expect(page).toHaveURL(/signin/);


});
