import { expect } from "@playwright/test";

export async function loadHomepage(page) {
    await page.goto("https://www.rohlik.cz/?hp=true");
}

export async function findItem(page, item) {
    await page.fill("#searchGlobal", item);
    await page.locator("[type='submit']").click();
}

export async function verifyResults(page, item) {
    await expect(page.getByText(item)).toBeVisible();
}

export async function clickFirstExistingItem(page) {
    await page.locator('[data-test="productCard"]').first().click();
}

export async function verifyItemDetails(page) {
    await expect(page.locator("#productDetail")).toBeVisible();
}

export async function closeDetails(page) {
    await page.locator('div[role="button"][class*="modal-close-class"]').click();
}

export async function verifyClosedDetails(page) {
    await expect(page.locator("#productDetail")).not.toBeVisible();
}

export async function addToCart(page) {
    await page.locator('button[data-gtm-button="addPiece"]').click();
}

export async function verifyItemInCart(page) {
    await expect(page.locator('span[data-test="lblCount"]')).toBeVisible();
}