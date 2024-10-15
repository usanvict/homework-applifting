import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly homeSearchField: Locator;
	readonly homeSearchAction: Locator;

	constructor(page: Page) {
		this.page = page;
		this.homeSearchField = page.locator("#searchGlobal");
		this.homeSearchAction = page.locator("[type='submit']");
	}

	async visit() {
		await this.page.goto("https://www.rohlik.cz/?hp=true");
	}

	async whatIsURL() {
		return this.page.url();
	}

	async compareURLs(url: string) {
		await expect(this.page).toHaveURL(url);
	}

	async homeFillInItem(itemName: string) {
		await this.homeSearchField.fill(itemName);
	}

	async homeLookForItem() {
		await this.homeSearchAction.click();
	}

	async homeFindItem(itemName: string) {
		await this.homeFillInItem(itemName);
		await this.homeLookForItem();
	}
}
