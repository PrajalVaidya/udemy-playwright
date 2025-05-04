import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'खोज्नुहोस्' }).fill('ra');
  await page.getByRole('combobox', { name: 'खोज्नुहोस्' }).click();
  await page.getByRole('combobox', { name: 'खोज्नुहोस्' }).fill('rahul shetty');
  await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();
});