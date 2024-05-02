import { test, expect } from '@playwright/test';

test('NewLogin', async ({ page }) => {

  //Open page
  await page.goto('https://demo.craterapp.com/');
  await page.pause();
 
  await page.getByRole('link', { name: 'Forgot Password?' }).click;

  await page.pause();

}); 