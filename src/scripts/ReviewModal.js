/** @type HTMLDialogElement */
const modalWindow = document.getElementById("modalWindow")
const openBtn = document.getElementById("openReviewModal")
const closeBtn = document.getElementById("closeReviewModal")
const xMarkClose = document.getElementById("xMarkClose")
const form = document.getElementById("form")
const sendBtn = document.getElementById("sendBtn")
const successfully = document.getElementById("successfully")

const onClose = () => {
  form.classList.remove("hidden")
  form.classList.add("flex")

  successfully.classList.add("hidden")
  successfully.classList.remove("flex")

  document.body.classList.remove("overflow-hidden")

  modalWindow.close()
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") onClose()
})

openBtn.addEventListener("click", () => {
  modalWindow.showModal()
  document.body.classList.add("overflow-hidden")
})

if (document.getElementById("openReviewModalMobile") !== null || undefined) {
  const openBtnMobile = document.getElementById("openReviewModalMobile")

  openBtnMobile.addEventListener("click", () => {
    modalWindow.showModal()
    document.body.classList.add("overflow-hidden")
  })
}

closeBtn.addEventListener("click", onClose)
xMarkClose.addEventListener("click", onClose)

modalWindow.addEventListener("click", (e) => {
  if (e.target === modalWindow) onClose()
})

sendBtn.addEventListener("click", () => {
  console.log(form)
  console.log(successfully)

  form.classList.add("hidden")
  form.classList.remove("flex")

  successfully.classList.remove("hidden")
  successfully.classList.add("flex")
})

if (form) form.addEventListener("click", (e) => e.preventDefault())
