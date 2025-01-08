# Playwright Test Refactored Using Page Objects Model 

This repo contains a test I previously wrote and wanted to use as practice in transferring into a test that utilizes the POM classes. With the help from my mentor and this video https://www.youtube.com/watch?v=rAec3mZFhF0&t=1582s

### Tech Stack 
- Javascript
- Node.js
- Playwright

### Files
- `originalTest.js` is the original test. 
- `refactoredTest.js` is the refactored test.
- `pages` folder contains the POM classes.
  

#### Flow of the test:

1. Go to amazon music page. 
2. Click on the podcast section. 
3. Click on the first podcast.
4. Click on the share button. 
5. Read the share link shown the text field.
6. Click the copy button which automatically adds the link to the clipboard.
7. Compare the link in the clipboard with the link shown in the text field and assert that they are the same.

#### Screenshots for visual reference:

- `page.getByRole('link', { name: 'Podcasts' })`<img src="./screenshots/1.png">

- `page.locator('music-vertical-item').first()` <img src="./screenshots/2.png">
- `page.getByTestId('detailHeaderButton2')`<img src="./screenshots/3.png">
- `page.getByTestId("dialog").locator("input")`<img src="./screenshots/4.png">
- `page.locator('music-button').filter({ hasText: 'Copy link' }).getByRole('button')`<img src="./screenshots/5.png">

#### Important notes:
- I used the `page.getByTestId` method to locate some elements.
- `testIdAttribute: 'id'` is added in the `playwright.config.js file.`
