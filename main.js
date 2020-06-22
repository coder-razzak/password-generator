function getPassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
  let passwordLength = 16;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function clearTootip() {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "";
}
