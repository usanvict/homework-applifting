import { expect, Page } from "@playwright/test";

export async function loadHomepage(page: Page) {
    await page.goto("https://www.rohlik.cz/?hp=true");
}

export async function findItem(page: Page, item: string) {
    await page.fill("#searchGlobal", item);
    await page.locator("[type='submit']").click();
}

export async function verifyResults(page: Page, item: string) {
    await expect(page.getByText(item)).toBeVisible();
}

export async function clickFirstExistingItem(page: Page) {
    await page.locator('[data-test="productCard"]').first().click();
}

export async function verifyItemDetails(page: Page) {
    await expect(page.locator("#productDetail")).toBeVisible();
}

export async function closeDetails(page: Page) {
    await page.locator('div[role="button"][class*="modal-close-class"]').click();
}

export async function verifyClosedDetails(page: Page) {
    await expect(page.locator("#productDetail")).not.toBeVisible();
}

export async function addToCart(page: Page) {
    await page.locator('button[data-gtm-button="addPiece"]').click();
}

export async function verifyItemInCart(page: Page) {
    await expect(page.locator('span[data-test="lblCount"]')).toBeVisible();
}