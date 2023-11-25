const searchMobile = document.getElementById("searchMobile")
const searchInputMobile = document.getElementById("searchInputMobile")
const searchBtnMobile = document.getElementById("searchBtnMobile")

let isOpen = false

let searchValue = searchInputMobile.value

searchInputMobile.oninput = () => {
  searchValue = searchInputMobile.value

  if (searchInputMobile.value === "") {
    onClose()
    overlay.classList.remove("hidden")
    searchResult.classList.add("hidden")
  } else {
    onOpen()
  }
}

const onOpen = () => {
  isOpen = true
  if (isOpen && searchValue !== "") {
    overlay.classList.remove("hidden")
    searchResult.classList.remove("hidden")
    searchResult.classList.add("flex")
  }
}

const onClose = () => {
  isOpen = false
  if (!isOpen) {
    overlay.classList.add("hidden")
    searchResult.classList.add("hidden")
    searchResult.classList.remove("flex")
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    onClose()
    searchInputMobile.blur()
  }
})

searchBtnMobile.addEventListener("click", (e) => {
  e.preventDefault()
  if (searchValue !== "") {
    window.location.href = "/results/"
    return
  }
  if (!isOpen) {
    overlay.classList.remove("hidden")
    searchResult.classList.add("hidden")
  }
})

searchMobile.addEventListener("click", onOpen)
overlay.addEventListener("click", onClose)

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && isOpen && searchValue !== "") {
    window.location.href = "/results/"
  }
})
