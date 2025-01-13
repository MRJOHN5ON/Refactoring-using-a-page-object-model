import { test, expect } from '@playwright/test';
import { Podcast } from '../pages/podcast';

test('Choose any podcast. Verify the shareable link matches the text copied from the Copy Link button', async ({ page, context }) => {
    const podcast = new Podcast(page)

    await podcast.gotoMusicHomepage()
    await expect(page).toHaveURL('https://music.amazon.com/');

    await podcast.clickOnPodcasts()
    await expect(page).toHaveURL('https://music.amazon.com/podcasts');

    await podcast.clickOnFirstPodcast()
    await expect(page).toHaveURL(/https:\/\/music\.amazon\.com\/podcasts\/.+/);

    await podcast.clickOnShareBt()
    const linkField = await podcast.getLinkField()
  
    const clipboardText = await podcast.clickOnCopyButtonAndReadClipboard(context)

    
    expect(clipboardText).toEqual(linkField);













})