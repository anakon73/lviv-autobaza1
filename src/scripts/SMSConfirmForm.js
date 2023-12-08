// document.querySelector(".digits").addEventListener("input", function (e) {
//   e.target.value = e.data.replace(/[^0-9]/g, "")
//   if (
//     e.target.value !== "" &&
//     e.target.nextElementSibling &&
//     e.target.nextElementSibling.nodeName === "INPUT"
//   ) {
//     e.target.nextElementSibling.focus()
//   }
// })

document.querySelector(".digits").addEventListener("keydown", (event) => {
  if (event.code === "Backspace") {
    event.target.value = ""
    event.preventDefault()
    if (event.target.previousElementSibling) {
      event.target.previousElementSibling.focus()
    }
  } else if (event.code === "ArrowRight") {
    event.target.nextElementSibling.focus()
  } else if (
    event.code === "ArrowLeft" &&
    event.target.previousElementSibling
  ) {
    event.target.previousElementSibling.focus()
  } else if (
    event.target.value !== "" &&
    event.target.nextElementSibling &&
    event.target.nextElementSibling.nodeName === "INPUT"
  ) {
    event.target.nextElementSibling.focus()
  }
})
