let budgetValue = 0;
budgetValue += " kronor";
let expenseListItems = []
let inputBudget = document.querySelector("#budget-input");
let inputName = document.querySelector("[expense-input-name]");
let inputAmount = document.querySelector("[expense-input-amount]");
let budgetForm = document.querySelector('[budget-form]');
let expenseForm = document.querySelector('[expense-form]');
let budgetValueContainer = document.querySelector("#budget-value-container");
let expenseListContainer = document.querySelector("#expense-list-container");
let budgetButton = document.querySelector("#budget-button");
let expenseButton = document.querySelector("#expense-button");

budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputBudget.value.trim() === "") {
        return;
    }
    budgetValue = inputBudget.value.trim();
    budgetValue += " kronor";
    updateBudget();
    document.getElementById('budget-input').value = "";
});

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameAmountObject = {
        id: Date.now(),
        name: document.getElementById('expense-input-name').value,
        amount: document.getElementById('expense-input-amount').value
    }
    console.log(nameAmountObject);
    if (nameAmountObject.name.trim() === "" || nameAmountObject.amount.trim() === "") {
        return;
    }
    expenseListItems.push(nameAmountObject.name.trim() + " - " + nameAmountObject.amount.trim() + " kronor");
    updateList();
    document.getElementById('expense-input-name').value = "";
    document.getElementById('expense-input-amount').value = "";
});

function createList(items) {
    let itemList = document.createElement("ul");
    items.forEach((item) => {
        let newListItem = document.createElement("li");
        newListItem.innerText = item;
        newListItem.classList.add("object-in-list");
        itemList.append(newListItem);
    });
    return itemList;
}

function updateList() {
    expenseListContainer.innerHTML = "";
    expenseListContainer.append(createList(expenseListItems));
}

function updateBudget() {
    budgetValueContainer.innerHTML = "";
    budgetValueContainer.append(budgetValue);
}

updateList();

updateBudget();
