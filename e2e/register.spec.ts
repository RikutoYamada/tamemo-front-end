import { test, expect } from '@playwright/test'

test('has register text', async ({ page }) => {
  const timeStamp = Date.now()
  const userName = 'testuser' + timeStamp
  const email = 'testemail' + timeStamp + '@gmail.com'
  await page.goto('http://localhost:3000/register')

  await page.getByRole('textbox', { name: 'ユーザー名' }).fill(userName)
  await page.getByRole('textbox', { name: 'メール' }).fill(email)
  await page.getByRole('textbox', { name: 'パスワード' }).fill('password')
  await page.getByRole('button', { name: '会員登録' }).click()

  await expect(page.getByRole('button', { name: 'ログアウト' })).toBeVisible()
})
