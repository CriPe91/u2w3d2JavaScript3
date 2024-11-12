const counterElement = document.getElementById("counter");
let count = 0;

function updateCounter() {
  count++;
  counterElement.textContent = count;
}
setInterval(updateCounter, 1000);

class registrazioneForm {
  constructor(name) {
    this.name = name;
  }
}

const form = document.querySelector("form");
const lastNameSaved = document.querySelector("h1");
const events = [];

form.onsubmit = function (e) {
  e.preventDefault();
  const inputName = document.querySelector("input");
  events.push(inputName.value);
  localStorage.setItem("nameSaved", JSON.stringify(events));
  const namesArray = JSON.parse(localStorage.getItem("nameSaved"));
  namesArray.forEach((inputName) => {
    lastNameSaved.innerText = inputName;
  });
};

const btnRemove = document.getElementById("reset");
