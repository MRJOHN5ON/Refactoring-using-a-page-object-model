import { test, expect } from '@playwright/test';
import { ProductSearches } from '../pages/productSearches';

test(`adds product from to cart, applies 2-year warranty, and verifies cart count and item quantities`, async ({ page }) => {
    const productSearches = new ProductSearches(page);
    const expectedCartCount = "2";
    const expectedItemSubtotal = "Subtotal (2 items):";

    await productSearches.gotoProductWith2yearWarrantyURL();
    await productSearches.addToCart();

    await expect(productSearches.twoYearWarrantyCheckbox).toBeVisible();
    await productSearches.clickTwoYearWarrantyCheckbox();
    await expect(productSearches.twoYearWarrantyCheckbox).toBeChecked();

    await expect(productSearches.addProtectionButton).toBeVisible();
    await productSearches.clickAddProtectionBt();

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









})

