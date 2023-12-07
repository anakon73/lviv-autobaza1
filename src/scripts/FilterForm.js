const showBtn = document.getElementById("showFilterForm")
const closeBtn = document.getElementById("closeBtn")
const applyBtn = document.getElementById("applyBtn")
const filterForm = document.getElementById("filterForm")
const filterFormOverlay = document.getElementById("filterFormOverlay")

const open = () => {
  filterForm.classList.remove("-translate-x-full")
  filterFormOverlay.classList.remove("hidden")
  filterFormOverlay.classList.add("block")
  document.body.classList.add("overflow-hidden")
}

const close = () => {
  filterForm.classList.add("-translate-x-full")
  filterFormOverlay.classList.remove("block")
  filterFormOverlay.classList.add("hidden")
  document.body.classList.remove("overflow-hidden")
}

showBtn.addEventListener("click", open)
closeBtn.addEventListener("click", close)
applyBtn.addEventListener("click", close)
filterFormOverlay.addEventListener("click", close)

window.onresize = () => {
  if (
    window.innerWidth >= 1024 &&
    filterFormOverlay.classList.contains("block")
  )
    close()
}
