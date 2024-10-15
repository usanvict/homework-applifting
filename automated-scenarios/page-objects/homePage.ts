import { expect, type Locator, type Page } from "@playwright/test";
import { AbstractPage } from "./abstractPage";

export class HomePage extends AbstractPage {
	async visit() {
		await this.page.goto("https://www.rohlik.cz/?hp=true");
	}

	async whatIsURL() {
		return this.page.url();
	}

	async compareURLs(url: string) {
		await expect(this.page).toHaveURL(url);
	}
}
