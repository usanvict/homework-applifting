import { test, expect } from "@playwright/test"

test.describe("Searching for items", () => {

    test("Existing item", async ({ page }) => {
        await page.goto("https://www.rohlik.cz/?hp=true");

        await page.fill("#searchGlobal", "Cibule");

        await page.locator("[type='submit']").click();

        await expect(page.getByText('"Cibule"')).toBeVisible();
    })

    test("Non-existing invalid item", async ({ page }) => {
        await page.goto("https://www.rohlik.cz/?hp=true");

        await page.fill("#searchGlobal", "nsnfdkjs");

        await page.locator("[type='submit']").click();

        await expect(page.getByText('"nsnfdkjs"')).toBeVisible();
    })

    test("Non-existing valid item", async ({ page }) => {
        await page.goto("https://www.rohlik.cz/?hp=true");

        await page.fill("#searchGlobal", "Pocitadlo");

        await page.locator("[type='submit']").click();

        await expect(page.getByText('"Pocitadlo"')).toBeVisible();
    })

    test("Empty item", async ({ page }) => {
        await page.goto("https://www.rohlik.cz/?hp=true");

        await page.fill("#searchGlobal", "");

        const url = page.url();

        await page.locator("[type='submit']").click();

        await expect(page).toHaveURL(url)
    })
})