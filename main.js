let incomeListItems = ["Månadslön"];
let expensesListItems = ["Hyra"];
let listInput = document.querySelector("[list-input]");
let listForm = document.querySelector("[list-form]");
let listContainer = document.querySelector("#list-container");

listForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (listInput.value.trim() === "") {
        return;
    }
    incomeListItems.push(listInput.value.trim());
    updateList();
    listInput.value = "";
});

function createList(items) {
    let incomeList = document.createElement("ul");
    items.forEach((item) => {
        let newListItem = document.createElement("li");
        newListItem.innerText = item;
        newListItem.classList.add("todo-text");
        incomeList.append(newListItem);
    });
    return incomeList;
}

function updateList() {
    listContainer.innerHTML = "";
    listContainer.append(createList(incomeListItems));
}

updateList();
