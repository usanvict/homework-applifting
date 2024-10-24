import { test } from "@playwright/test";
import { SearchPage } from "../page-objects/searchPage";
import { HomePage } from "../page-objects/homePage";

test.describe("Searching for items", () => {
	let homePage: HomePage;
	let searchPage: SearchPage;

	test.beforeEach("Load homepage", async ({ page }) => {
		homePage = new HomePage(page);
		searchPage = new SearchPage(page);
		await homePage.visit();
	});

	test("User searches for existing item and can open item", async () => {
		await homePage.findItem("Cibule");
		await searchPage.verifyResults('"Cibule"');
		await searchPage.clickFirstExistingItem();
		await searchPage.verifyItemDetails();
	});

	test("User searches for non-existing invalid item", async () => {
		await homePage.findItem("nsnfdkjs");
		await searchPage.verifyResults('"nsnfdkjs"');
	});

	test("User searches for non-existing valid item", async () => {
		await homePage.findItem("Pocitadlo");
		await searchPage.verifyResults('"Pocitadlo"');
	});

	test("User searches for empty item", async () => {
		await homePage.fillInItem("");
		const url = searchPage.whatIsURL();
		await homePage.lookForItem();
		await searchPage.compareURLs(await url);
	});

	test("User can change search", async () => {
		await homePage.findItem("Cibule");
		await searchPage.verifyResults('"Cibule"');
		await searchPage.findItem("nsnfdkjs");
		await searchPage.verifyResults('"nsnfdkjs"');
	});

	test("User can continue browsing", async () => {
		await searchPage.findItem("Cibule");
		await searchPage.verifyResults('"Cibule"');
		await searchPage.clickFirstExistingItem();
		await searchPage.verifyItemDetails();
		await searchPage.closeDetails();
		await searchPage.verifyClosedDetails();
	});

	test("User can continue search after item has been added to cart", async () => {
		await searchPage.findItem("Cibule");
		await searchPage.verifyResults('"Cibule"');
		await searchPage.clickFirstExistingItem();
		await searchPage.verifyItemDetails();
		await searchPage.addToCart();
		await searchPage.verifyItemInCart();
		await searchPage.closeDetails();
		await searchPage.verifyClosedDetails();
	});
});
