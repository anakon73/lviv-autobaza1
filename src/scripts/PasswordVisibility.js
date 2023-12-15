const passInput = document.getElementById("passwordInput")
const openEyeImage = document.getElementById("openEyeImage")
const closeEyeImage = document.getElementById("closeEyeImage")

const showPassBtn = document.getElementById("showPass")

function changeVisibility() {
  passInput.type = passInput.type === "password" ? "text" : "password"

  if (openEyeImage.classList.contains("hidden")) {
    openEyeImage.classList.remove("hidden")
    closeEyeImage.classList.add("hidden")
  } else {
    openEyeImage.classList.add("hidden")
    closeEyeImage.classList.remove("hidden")
  }
}

showPassBtn.addEventListener("click", changeVisibility)
