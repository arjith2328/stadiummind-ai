import { test, expect } from '@playwright/test';

test.describe('AI Assistant Module', () => {
  test('should load AI Assistant interface and allow input', async ({ page }) => {
    await page.goto('/ai-assistant');
    
    // Verify AI header
    await expect(page.locator('h1')).toContainText('AI Assistant');
    
    // Verify system status
    const llmStatus = page.locator('text=LLM Status:');
    await expect(llmStatus).toBeVisible();
    const onlineBadge = page.locator('text=Online');
    await expect(onlineBadge).toBeVisible();
    
    // Mock user input interaction
    const chatInput = page.getByPlaceholder('Type your request...');
    await chatInput.fill('Where is the nearest exit?');
    await expect(chatInput).toHaveValue('Where is the nearest exit?');
    
    // We expect the send button to be visible
    const sendButton = page.locator('button').filter({ hasText: '' }).first();
    await expect(sendButton).toBeVisible();
  });
});
