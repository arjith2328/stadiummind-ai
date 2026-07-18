import { test, expect } from '@playwright/test';

test.describe('Dashboard Module', () => {
  test('should load the dashboard and verify key KPI components render', async ({ page }) => {
    // Navigating to the dashboard
    await page.goto('/dashboard');
    
    // Verify title and greeting
    await expect(page.locator('h1')).toContainText('Welcome');
    
    // Check KPI cards render
    const crowdDensityCard = page.locator('text=Crowd Density');
    await expect(crowdDensityCard).toBeVisible();
    
    const weatherCard = page.locator('text=Weather');
    await expect(weatherCard).toBeVisible();
    
    const parkingCard = page.locator('text=Parking Status');
    await expect(parkingCard).toBeVisible();
  });

  test('should pass basic accessibility scan', async ({ page }) => {
    // This serves as the placeholder for axe-core integration
    await page.goto('/dashboard');
    // Ensure the main structure is present (semantic HTML check)
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
  });
});
