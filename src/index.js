const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");

let data = [];

const render = () => {
  cards.innerHTML = data
    .map(
      (item) => `
    <div class=" border  p-4 rounded-md flex justify-between items-center  bg-white mb-[10px] ">
    <div>
    <h1 class="font-bold text-[32px]">${item.first_name}</h1>
    <p class="font-bold mb-[10px]">${item.address}</p>
    </div>
      <div>
      <button onclick="editItem(${item.id})" class="bg-green-500 p-4 rounded-md text-white">edit</button>
      <button onclick="deleteItem(${item.id})" class="bg-red-500 p-4 rounded-md text-white">delete</button>
      </div>
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
