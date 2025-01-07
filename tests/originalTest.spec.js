import { test, expect } from '@playwright/test';


test('Choose any podcast. Verify the shareable link matches the text copied from the Copy Link button', async ({ page, context }) => {
    await page.goto('https://music.amazon.com/');
    // click on podcasts
    await page.getByRole('link', { name: 'Podcasts' }).click();
    await expect(page).toHaveURL('https://music.amazon.com/podcasts');

    // click on the first podcast shown
    await page.locator('music-vertical-item').first().click();
    await expect(page).toHaveURL(/https:\/\/music\.amazon\.com\/podcasts\/.+/);

    //click the share button
    const shareButton = page.getByTestId('detailHeaderButton2');
    await shareButton.click();

    const linkField = await page.getByTestId("dialog").locator("input").inputValue();
    expect(linkField).toContain('https://music.amazon.com/podcasts/');

    //press the copy link button
    const copyButton = page.locator('music-button').filter({ hasText: 'Copy link' }).getByRole('button');

    // create a function to read the clipboard content
    const copyWithButton = async function (page, context, copyButton) {
        await context.grantPermissions(["clipboard-read", "clipboard-write"]);
        await copyButton.click();
        const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
        return clipboardContent;
    };

    const clipboardText = await copyWithButton(page, context, copyButton);

    // verify the clipboard content is the same as the link field
    expect(clipboardText).toEqual(linkField);
});
