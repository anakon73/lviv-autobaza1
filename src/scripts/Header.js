const header = document.getElementById("header")
const menuBtn = document.getElementById("menuBtn")
const dropMenu = document.getElementById("dropMenu")
const closeHeaderButton = document.getElementById("closeHeaderButton")

const open = () => {
  menuBtn.classList.add("hidden")

  dropMenu.classList.remove("hidden")
  dropMenu.classList.add("flex")

  closeHeaderButton.classList.remove("hidden")

  header.classList.add("bg-blue-600", "h-full", "absolute", "w-full")

  document.body.classList.add("overflow-hidden")
}

const close = () => {
  menuBtn.classList.remove("hidden")

  dropMenu.classList.remove("flex")
  dropMenu.classList.add("hidden")

  closeHeaderButton.classList.add("hidden")

  header.classList.remove("bg-blue-600", "h-full", "absolute", "w-full")

  document.body.classList.remove("overflow-hidden")
}

menuBtn.addEventListener("click", open)

closeHeaderButton.addEventListener("click", close)
