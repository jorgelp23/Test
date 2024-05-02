import { test, expect } from '@playwright/test';

test('NewLogin', async ({ page }) => {

  //Open page
  await page.goto('https://demo.craterapp.com/');
  await page.pause();

  await page.locator('input[name="email"]').fill('jorgelp@gmail.com');
  await page.locator('input[name="password"]');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.pause();

}); 