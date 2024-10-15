import { expect, type Locator, type Page } from "@playwright/test";
import { AbstractPage } from "./abstractPage";

export class SearchPage extends AbstractPage {
	//readonly searchField: Locator;
	//readonly searchAction: Locator;
	readonly item: Locator;
	readonly itemCard: Locator;
	readonly itemDetail: Locator;
	readonly closeItemDetail: Locator;
	readonly addItem: Locator;
	readonly itemNumber: Locator;

	constructor(page: Page) {
		super(page);
		//this.searchField = page.locator("#searchGlobal");
		//this.searchAction = page.locator("[type='submit']");
		this.itemCard = page.locator('[data-test="productCard"]');
		this.itemDetail = page.locator("#productDetail");
		this.closeItemDetail = page.locator(
			'div[role="button"][class*="modal-close-class"]',
		);
		this.addItem = page.locator('button[data-gtm-button="addPiece"]');
		this.itemNumber = page.locator('span[data-test="lblCount"]');
	}

	async whatIsURL() {
		return this.page.url();
	}

	async compareURLs(url: string) {
		await expect(this.page).toHaveURL(url);
	}

	async verifyResults(item: string) {
		await expect(this.page.getByText(item)).toBeVisible();
	}

	async clickFirstExistingItem() {
		await this.itemCard.first().click();
	}

	async verifyItemDetails() {
		await expect(this.itemDetail).toBeVisible();
	}

	async closeDetails() {
		await this.closeItemDetail.click();
	}

	async verifyClosedDetails() {
		await expect(this.itemDetail).not.toBeVisible();
	}

	async addToCart() {
		await this.addItem.click();
	}

	async verifyItemInCart() {
		await expect(this.itemNumber).toBeVisible();
	}
}
