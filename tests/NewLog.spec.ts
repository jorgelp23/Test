import { test, expect } from '@playwright/test';

test('NewLogin', async ({ page }) => {

  //Open page
  await page.goto('https://demo.craterapp.com/');
  await page.pause();

  await page.locator('input[name="email"]');
  await page.locator('input[name="password"]');

  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByText('Crater Invoice, Inc.').isVisible();

  await page.pause();

}); 