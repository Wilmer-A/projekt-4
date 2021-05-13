let budgetValue = 0;
let totalExpenses = 0;
let balance = 0;
let expenseListItems = [];
let inputBudget = document.querySelector("#budget-input");
let inputName = document.querySelector("[expense-input-name]");
let inputAmount = document.querySelector("[expense-input-amount]");
let budgetForm = document.querySelector('[budget-form]');
let expenseForm = document.querySelector('[expense-form]');
let budgetValueContainer = document.querySelector("#budget-value-container");
budgetValueContainer.classList.add("generated-text");
let expenseListContainer = document.querySelector("#expense-list-container");
let totalExpensesContainer = document.querySelector("#total-expenses-container");
totalExpensesContainer.classList.add("generated-text");
let balanceContainer = document.querySelector("#balance-container");
balanceContainer.classList.add("generated-text");

budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputBudget.value.trim() === "") {
        return;
    }
    budgetValue = inputBudget.value.trim();
    balance = budgetValue - totalExpenses;
    updateList();
    document.getElementById('budget-input').value = "";
});

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameAmountObject = {
        name: document.getElementById('expense-input-name').value,
        amount: document.getElementById('expense-input-amount').value
    }
    if (nameAmountObject.name.trim() === "" || nameAmountObject.amount.trim() === "") {
        return;
    }
    expenseListItems.push(nameAmountObject.name.trim() + ": " + nameAmountObject.amount.trim() + " kronor");
    document.getElementById('expense-input-name').value = "";
    document.getElementById('expense-input-amount').value = "";
    totalExpenses += parseFloat(nameAmountObject.amount.trim());
    balance = budgetValue - totalExpenses;
    updateList();
});

function createList(items) {
    let itemList = document.createElement("ul");
    items.forEach((item) => {
        let newListItem = document.createElement("li");
        newListItem.innerText = item;
        newListItem.classList.add("object-in-list");
        newListItem.addEventListener("click", removeItem);
        let removeButton = document.createElement("button");
        removeButton.innerHTML = '<i class="fas fa-times-circle"></i>';
        removeButton.classList.add("remove-button");
        newListItem.append(removeButton);
        itemList.append(newListItem);
    });
    return itemList;
}

function removeItem(event) {
    let clickTarget = event.target;
    if (clickTarget.classList.contains("remove-button")){
        itemToRemove = clickTarget.parentElement.innerText;
        expenseListItems = expenseListItems.filter((item) => item !== itemToRemove);
        updateList();
    }
}

function updateList() {
    expenseListContainer.innerHTML = "";
    expenseListContainer.append(createList(expenseListItems));
    budgetValueContainer.innerHTML = "";
    budgetValueContainer.append(budgetValue + " kronor");
    totalExpensesContainer.innerHTML = "";
    totalExpensesContainer.append(totalExpenses + " kronor");
    balanceContainer.innerHTML = "";
    balanceContainer.append(balance + " kronor");
}

updateList();
