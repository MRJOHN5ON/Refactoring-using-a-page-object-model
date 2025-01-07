
exports.Podcast = class Podcast {

    constructor(page){
        this.page = page
        this.podcastLinkBt = page.getByRole('link', { name: 'Podcasts' })
        this.firstPodcast = page.locator('music-vertical-item').first()
        this.shareBt = page.getByTestId('detailHeaderButton2')
        this.linkField = page.getByTestId("dialog").locator("input")
        this.copyButton = page.locator('music-button').filter({ hasText: 'Copy link' }).getByRole('button')
    }

    async gotoMusicHomepage() {
        await this.page.goto('https://music.amazon.com/');
    }

    async clickOnPodcasts() {
        await this.podcastLinkBt.click()
    }

    async clickOnFirstPodcast() {
        await this.firstPodcast.click()
    }

    async clickOnShareBt() {
        await this.shareBt.click()

    }
    async getLinkField() {
        return await this.linkField.inputValue()
    }
    async clickOnCopyButton() {
        await this.copyButton.click({force: true})
    }

    async clickOnCopyButtonAndReadClipboard(context) {
        await context.grantPermissions(["clipboard-read", "clipboard-write"]);
        await this.clickOnCopyButton()
        const clipboardContent = await this.page.evaluate(() => navigator.clipboard.readText());
        return clipboardContent;
    }
}