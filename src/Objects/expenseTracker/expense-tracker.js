const myAccount = {
    name: 'Matt Chan',
    expenses: 0,
    income: 0
}

const addExpense = (account, amount) => account.expenses += amount


// addIncome
const addIncome = (account, amount) => account.income += amount

// resetAccount
const resetAccount = (account) => {
    account.expenses = 0
    account.income = 0
}

const getAccountSummary = (account) => {
    const balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses`
}

addExpense(myAccount, 2.50)
addIncome(myAccount, 3.00)

console.log(getAccountSummary(myAccount))