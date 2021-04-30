let incomeListItems = [];
let expenseListItems = [];
let inputName = document.querySelector("[list-input-name]");
let inputAmount = document.querySelector("[list-input-amount]");
let listForm = document.querySelector("[list-form]");
let incomeListContainer = document.querySelector("#income-list-container");
let expenseListContainer = document.querySelector("#expenses-list-container");

let incomeButton = document.querySelector("#income-button");
incomeButton.classList.add("income-button");
incomeButton.addEventListener("click", incomeOrExpense);
let expenseButton = document.querySelector("#expense-button");
expenseButton.classList.add("expense-button");
expenseButton.addEventListener("click", incomeOrExpense);

function incomeOrExpense (event) {
    let targetButton = event.target;
    if (targetButton.classList.contains("income-button")){
        targetButton.classList.add("income-item");
        targetButton.classList.remove("expense-item");
    }
    if (targetButton.classList.contains("expense-button")){
        targetButton.classList.add("expense-item");
        targetButton.classList.remove("income-item");
    }
}

listForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let nameAmountObject = {
        id: Date.now(),
        name: document.getElementById("list-input-name").value,
        amount: document.getElementById("list-input-amount").value
    }
    console.log(nameAmountObject);
    if (nameAmountObject.name.trim() === "" || nameAmountObject.amount.trim() === "") {
        return;
    }
    if (incomeButton.classList.contains("income-item")){
        incomeListItems.push(nameAmountObject.name.trim() + ": " + nameAmountObject.amount.trim());
    }
    if (incomeButton.classList.contains("expense-item")){
        expenseListItems.push(nameAmountObject.name.trim() + ": " + nameAmountObject.amount.trim());
    }
    updateList();
    document.querySelector('form').reset();
});

function createList(items) {
    let itemList = document.createElement("ul");
    items.forEach((item) => {
        let newListItem = document.createElement("li");
        newListItem.innerText = item;
        newListItem.classList.add("object-text");
        itemList.append(newListItem);
    });
    return itemList;
}

function updateList() {
    incomeListContainer.innerHTML = "";
    expenseListContainer.innerHTML = "";
    incomeListContainer.append(createList(incomeListItems));
    expenseListContainer.append(createList(expenseListItems));
}

updateList();
