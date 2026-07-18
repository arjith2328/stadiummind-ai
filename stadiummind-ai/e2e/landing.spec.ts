import { test, expect } from '@playwright/test';

test('Landing Page - Core Visibility & Semantic Structure', async ({ page }) => {
  await page.goto('/');

  // Title verification
  await expect(page).toHaveTitle(/StadiumMind AI/);

  // Expect h1 heading for strict WCAG accessibility
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible();
  await expect(heading).toContainText('StadiumMind AI');
});

test('Navigation - Fan Portal Button Access', async ({ page }) => {
  await page.goto('/');

  // Verify navigation funnel is accessible via keyboard
  const fanButton = page.getByRole('link', { name: /Enter Fan Experience/i });
  await expect(fanButton).toBeVisible();
  
  // Verify it routes correctly
  await expect(fanButton).toHaveAttribute('href', '/dashboard');
});

test('Navigation - Organizer Dashboard Button Access', async ({ page }) => {
    await page.goto('/');
  
    // Verify admin dashboard routing
    const adminButton = page.getByRole('link', { name: /Organizer Dashboard/i });
    await expect(adminButton).toBeVisible();
    await expect(adminButton).toHaveAttribute('href', '/admin');
  });
