const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");


const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.textContent = user.login;
  userName.style.display = "flex";
  modalAuth.style.display = "none";
}

const logout = () => {
  buttonOut.style.display = "none";
  userName.textContent = "";
  userName.style.display = "none";
  buttonAuth.style.display = "flex";
  localStorage.removeItem("user");
}

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
})

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputLogin.value != "") {
    const user = {
      login: inputLogin.value,
      password: inputPassword.value
    }
    localStorage.setItem("user", JSON.stringify(user));
    login(user);
  } else {
    alert("Логин не введен");
  }
})

buttonOut.addEventListener("click", () => {
  logout();
})

if (localStorage.getItem("user"))
  login(JSON.parse(localStorage.getItem("user")));