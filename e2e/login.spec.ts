import { test, expect } from '@playwright/test'

test('has login text', async ({ page }) => {
  await page.goto('http://localhost:3000/login')

  await page.getByRole('textbox', { name: 'メール' }).fill('rikuto@gmail.com')
  await page.getByRole('textbox', { name: 'パスワード' }).fill('rikuto')
  await page.getByRole('button', { name: 'ログイン' }).click()

  await expect(page.getByRole('button', { name: 'ログアウト' })).toBeVisible()
})
