const buttonStudents = document.getElementById("students");
buttonStudents.addEventListener("click", () => {
  buttonStudents.classList.add("headerСolor");
  if (buttonStudents.innerHTML.includes("Самые любимые студенты")) {
    buttonStudents.classList.remove("headerСolor");
    buttonStudents.innerHTML = "Студенты";
  } else {
    buttonStudents.innerHTML = "Самые любимые студенты";
  }
});

// const buttonStudents = document.getElementById("students");
// buttonStudents.addEventListener("click", function () {
//   buttonStudents.textContent =
//     buttonStudents.textContent === "Студенты"
//       ? "Самые любимые студенты"
//       : "Студенты";
// });

const buttonAdd = document.getElementById("add");
const list = document.getElementById("list");
const input = document.getElementById("field");
input.placeholder = "Введите имя...";

buttonAdd.addEventListener("click", () => {
  input.classList.remove("error");
  if (input.value === "") {
    input.classList.add("error");
    return;
  }

  const listElement = document.createElement("li");
  listElement.textContent = `${input.value}`;
  list.appendChild(listElement);
  // buttonAdd.disabled = true;
  input.value = "";
  // input.disabled = true;
});

const buttonDelete = document.getElementById("delete");
buttonDelete.addEventListener("click", () => {
  input.classList.remove("error");
  const lastElement = document.querySelector("li:last-child");
  lastElement.remove();
});


// let today = new Date();
// let day = String(today.getDate()).padStart(2, '0');
// let month = String(today.getMonth() + 1).padStart(2, '0');
// let year = today.getFullYear();
// let hours = String(today.getHours()).padStart(2, '0');
// let minutes = String(today.getMinutes()).padStart(2, '0');
// let currentDate = `${day}.${month}.${year} ${hours}:${minutes}`;

var now = new Date();
var datetimeF = now.toLocaleString();
document.getElementById("datetime").innerHTML = datetimeF;


