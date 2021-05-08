let budgetValue = [0];
let expenseListItems = ["(test)"];
let inputName = document.querySelector("#expense-input-name");
let inputAmount = document.querySelector("#expense-input-amount");
let inputBudget = document.querySelector("#budget-input");
let budgetForm = document.querySelector(".budget-form");
let expenseForm = document.querySelector(".expense-form");
let budgetValueContainer = document.querySelector("#budget-value-container");
let expenseListContainer = document.querySelector("#expense-list-container");
let budgetButton = document.querySelector("#budget-button");
//budgetButton.classList.add("income-button");
//budgetButton.addEventListener("click", incomeOrExpense);
let expenseButton = document.querySelector("#expense-button");
//expenseButton.classList.add("expense-button");
//expenseButton.addEventListener("click", incomeOrExpense);

budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputBudget.trim() === "") {
        return;
    }
    budgetValue.push(inputBudget.trim());
    updateList();
    document.querySelector(".budget-form").reset();
});

expenseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameAmountObject = {
        id: Date.now(),
        name: document.getElementById("expense-input-name").value,
        amount: document.getElementById("expense-input-amount").value
    }
    console.log(nameAmountObject);
    if (nameAmountObject.name.trim() === "" || nameAmountObject.amount.trim() === "") {
        return;
    }
    expenseListItems.push(nameAmountObject.name.trim() + ": " + nameAmountObject.amount.trim());
    updateList();
    document.querySelector(".expense-form").reset();
});

function createList(items) {
    let itemList = document.createElement("ul");
    items.forEach((item) => {
        let newListItem = document.createElement("li");
        newListItem.innerText = item;
        //newListItem.classList.add("");
        itemList.append(newListItem);
    });
    return itemList;
}

function updateList() {
    expenseListContainer.innerHTML = "";
    expenseListContainer.append(createList(expenseListItems));
}

function updateValue() {
    budgetValueContainer.innerHTML = "";
    budgetValueContainer.append(createList(budgetValue));
}

updateList();
