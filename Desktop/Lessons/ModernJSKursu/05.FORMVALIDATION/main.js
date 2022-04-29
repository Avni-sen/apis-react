const form = document.querySelector("#form");
const passwordusername = document.getElementById("username");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    error(username, "Bu Alan Boş Bırakılamaz!");
  } else {
    if (username.value.length >= 10) {
      success(username);
    } else {
      error(username, "Kullancı Adı 10 Karakterden Uzun Olmalıdır!");
    }
  }
  if (email.value === "") {
    error(email, "Bu Alan Boş Bırakılamaz!");
  } else if (!validateEmail(email.value)) {
    error(email, "Mail Adresi Düzgün Formatta Değil!");
  } else {
    success(email);
  }
  if (password.value === "") {
    error(password, "Bu Alan Boş Bırakılamaz!");
  } else {
    if (password.value.length >= 8) {
      success(password);
    } else {
      error(password, "Şifreniz 8 Karakterden Uzun Olmalıdır!");
    }
  }
  if (rePassword.value === "") {
    error(rePassword, "Bu Alan Boş Bırakılamaz!");
  } else {
    if (rePassword.value === password.value) {
      success(rePassword);
    } else {
      error(rePassword, "Şifreniz Eşleşmiyor lütfen Kontrol Ediniz!");
    }
  }
});

function error(input, message) {
  input.className = "form-control is-invalid ";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid ";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
