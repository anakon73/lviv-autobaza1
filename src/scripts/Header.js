const header = document.getElementById("header")
const menuBtn = document.getElementById("menuBtn")
const dropMenu = document.getElementById("dropMenu")
const closeHeaderButton = document.getElementById("closeHeaderButton")

const open = () => {
  dropMenu.classList.add("opacity-100")
  dropMenu.classList.remove("-translate-y-full", "opacity-0")

  document.body.classList.add("overflow-hidden")
}

const close = () => {
  dropMenu.classList.remove("opacity-100")
  dropMenu.classList.add("-translate-y-full", "opacity-0")

  document.body.classList.remove("overflow-hidden")
}

menuBtn.addEventListener("click", open)

closeHeaderButton.addEventListener("click", close)

window.onresize = () => {
  if (window.innerWidth >= 768) close()
}
