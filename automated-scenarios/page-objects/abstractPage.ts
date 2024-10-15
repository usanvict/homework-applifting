import type { Page, Locator } from "@playwright/test";

export class AbstractPage {
	readonly page: Page;
	readonly searchField: Locator;
	readonly searchAction: Locator;

	constructor(page: Page) {
		this.page = page;
        this.searchField = page.locator("#searchGlobal");
		this.searchAction = page.locator("[type='submit']");
	}

	async fillInItem(itemName: string) {
		await this.searchField.fill(itemName);
	}

	async lookForItem() {
		await this.searchAction.click();
	}

	async findItem(itemName: string) {
		await this.fillInItem(itemName);
		await this.lookForItem();
	}
}
