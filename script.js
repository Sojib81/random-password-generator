function generatePassword() {
  const length = 12;
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+><:''";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * characters.length);
    password += characters[randomChar];
  }
  return password;
}

const displayPassword = document.getElementById("password");

document.getElementById("btn-generate").addEventListener("click", () => {
  // console.log("Btn clicked");

  const password = generatePassword();
  displayPassword.value = password;
});

function copyPassword() {
  displayPassword.select();
  document.execCommand("copy");
}

// document.getElementById("copy-icon").addEventListener("click", () => {
//   const displayPassword = document.getElementById("password");
// });
//console.log(password);
