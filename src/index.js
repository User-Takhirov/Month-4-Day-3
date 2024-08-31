const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");

let data = [];

const render = () => {
  cards.innerHTML = data
    .map(
      (item) => `
    <div class=" border border-red-500 p-4 rounded-md  bg-white">
      <h1 class="font-bold text-[32px]">${item.first_name}</h1>
      <p>${item.address}</p>
      <button onclick="editItem(${item.id})" class="bg-green-500">edit</button>
      <button onclick="deleteItem(${item.id})" class="bg-red-500">delete</button>
    </div>
    `
    )
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = { id: Date.now() };
  for (let i of inputs) {
    obj[i.name] = i.value;
    i.value = "";
  }
  data.push(obj);
  render();
});

const deleteItem = (id) => {
  data = data.filter((item) => item.id !== id);
  render();
};

const editItem = (id) => {
  const first_name = prompt("First name");
  const address = prompt("Address");
  data = data.map((item) =>
    item.id === id ? { first_name, address, id } : item
  );

  render();
};
