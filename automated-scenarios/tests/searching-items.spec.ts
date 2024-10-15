import { test } from "@playwright/test";
import { SearchPage } from "../page-objects/searchPage";

test.describe("Searching for items", () => {
	let searchPage: SearchPage;

	test.beforeEach("Load homepage", async ({ page }) => {
		searchPage = new SearchPage(page);
		searchPage.visitHomepage();
	});

	test("User searches for existing item and can open item", async () => {
		searchPage.findItem("Cibule");
		searchPage.verifyResults('"Cibule');
		searchPage.clickFirstExistingItem();
		searchPage.verifyItemDetails();
	});

	test("User searches for non-existing invalid item", async () => {
		searchPage.findItem("nsnfdkjs");
		searchPage.verifyResults('"nsnfdkjs"');
	});

	test("User searches for non-existing valid item", async () => {
		searchPage.findItem("Pocitadlo");
		searchPage.verifyResults('"Pocitadlo"');
	});

	test("User searches for empty item", async () => {
		searchPage.fillInItem("");
		const url = searchPage.whatIsURL();
		searchPage.lookForItem();
		searchPage.compareURLs(await url);
	});

	test("User can change search", async () => {
		searchPage.findItem("Cibule");
		searchPage.verifyResults('"Cibule"');
		searchPage.findItem("nsnfdkjs");
		searchPage.verifyResults('"nsnfdkjs"');
	});

	test("User can continue browsing", async () => {
		searchPage.findItem("Cibule");
		searchPage.verifyResults('"Cibule"');
		searchPage.clickFirstExistingItem();
		searchPage.verifyItemDetails();
		searchPage.closeDetails();
		searchPage.verifyClosedDetails();
	});

	test("User can continue search after item has been added to cart", async () => {
		searchPage.findItem("Cibule");
		searchPage.verifyResults('"Cibule"');
		searchPage.clickFirstExistingItem();
		searchPage.verifyItemDetails();
		searchPage.addToCart();
		searchPage.verifyItemInCart();
		searchPage.closeDetails();
		searchPage.verifyClosedDetails();
	});
});
