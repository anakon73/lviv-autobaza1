document.querySelector(".digits").addEventListener("input", function (e) {
  e.target.value = e.data.replace(/[^0-9]/g, '');
  if (e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT") {
    e.target.nextElementSibling.focus();
  }
});
