const counterElement = document.getElementById("counter");

// Recupera il valore salvato nel sessionStorage, se esiste
let count = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

// Aggiorna il contatore sullo schermo
function updateCounter() {
  count++;
  counterElement.textContent = count;

  // Salva il nuovo valore del contatore nel sessionStorage
  sessionStorage.setItem("count", count);
}

// Mostra il valore iniziale del contatore
counterElement.textContent = count;

// Avvia l'aggiornamento del contatore ogni secondo
setInterval(updateCounter, 1000);

class registrazioneForm {
  constructor(name) {
    this.name = name;
  }
}

const form = document.querySelector("form");
const lastNameSaved = document.querySelector("h1");
const ul = document.getElementById("nameList");
const events = [];

form.onsubmit = function (e) {
  e.preventDefault();
  const inputName = document.querySelector("input");
  events.push(inputName.value);
  localStorage.setItem("nameSaved", JSON.stringify(events));
  ul.innerHTML = "";
  events.forEach((inputName) => {
    const li = document.createElement("li");
    li.innerText = inputName;
    li.className = "list-group";
    ul.appendChild(li);
    lastNameSaved.innerText = inputName;
  });
};

const btnRemove = document.getElementById("remove");

btnRemove.onclick = function remove() {
  // Rimuove la lista di nomi da localStorage
  localStorage.removeItem("nameSaved");

  // rimuovi la ul
  ul.innerHTML = "";
};
const namesArray = JSON.parse(localStorage.getItem("nameSaved"));
