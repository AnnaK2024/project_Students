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
