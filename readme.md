# Playwright Test Refactored Using Page Objects Model 

I decided to create this project in javascript. Because the video instructions were also in javascript. I tried first with typescript and got confused. 

- `originalTest.js` is the original test. 
- `refactoredTest.js` is the refactored test.
- `pages` folder contains the POM classes.
- Maybe this is not correct logic, but I was taught by someone else not to hide the expects/assertions in the POM, so I kept them in the test script itself.

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