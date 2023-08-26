export type ExpenseResponse = {
  id: number
  amount: number
  mainCategory: string
  subCategory: string
  detail: string
  expendedAt: string
}

export type NewExpense= {
  subExpenseCategoryId: string
  amount: number
  detail: string
  expendedAt: string
}

export type SubExpenseCategory = {
  createdAt: string
  id: number
  mainExpenseCategoryId: number
  name: string
  updatedAt: string
  userId: number
}
