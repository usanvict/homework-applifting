import { test, expect } from "@playwright/test"
import { clickFirstExistingItem, closeDetails, findItem, loadHomepage, verifyItemDetails, verifyResults, verifyClosedDetails, addToCart, verifyItemInCart } from "../helpers/item-actions";

test.describe("Searching for items", () => {

    test.beforeEach("Load homepage", async ({ page }) => {
        await loadHomepage(page);
    })

    test("User searches for existing item and can open item", async ({ page }) => {
        await findItem(page, "Cibule");
        await verifyResults(page, '"Cibule"');
        await clickFirstExistingItem(page);
        await verifyItemDetails(page);
    })

    test("User searches for non-existing invalid item", async ({ page }) => {
        await findItem(page, "nsnfdkjs");
        await verifyResults(page, '"nsnfdkjs"');
    })

    test("User searches for non-existing valid item", async ({ page }) => {
        await findItem(page, "Pocitadlo");
        await verifyResults(page, '"Pocitadlo"');
    })

    test("User searches for empty item", async ({ page }) => {
        await page.fill("#searchGlobal", "");
        const url = page.url();
        await page.locator("[type='submit']").click();
        await expect(page).toHaveURL(url)
    })

    test("User can change search", async ({ page }) => {
        await findItem(page, "Cibule");
        await verifyResults(page, '"Cibule"');
        await findItem(page, "nsnfdkjs");
        await verifyResults(page, '"nsnfdkjs"');
    })

    test("user can continue browsing", async ({ page }) => {
        await findItem(page, "Cibule");
        await verifyResults(page, '"Cibule"');
        await clickFirstExistingItem(page);
        await verifyItemDetails(page);
        await closeDetails(page);
        await verifyClosedDetails(page);
    })

    test("User can continue search after item has been added to cart", async ({ page }) => {
        await findItem(page, "Cibule");
        await verifyResults(page, '"Cibule"');
        await clickFirstExistingItem(page);
        await verifyItemDetails(page);
        await addToCart(page);
        await verifyItemInCart(page);
        await closeDetails(page);
        await verifyClosedDetails(page);
    })
})