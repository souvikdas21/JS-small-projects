const itemsDiv = document.getElementById("items");
const input = document.getElementById("inp");
const storageKey = "items";

let items = [];

function renderItems() {
    itemsDiv.innerHTML = "";
    items.forEach((item, idx) => {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx);

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    });
}

function loadItems() {
    const storedItems = localStorage.getItem(storageKey);
    if (storedItems) {
        items = JSON.parse(storedItems);
    }
    renderItems();
}

function saveItems() {
    localStorage.setItem(storageKey, JSON.stringify(items));
}

function addItem() {
    const value = input.value.trim();
    if (!value) {
        alert("You can't add an empty item");
        return;
    }
    items.push(value);
    renderItems();
    saveItems();
    input.value = "";
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
    saveItems();
}

document.addEventListener("DOMContentLoaded", loadItems);
