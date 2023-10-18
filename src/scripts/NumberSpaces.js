function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const balance = document.getElementById('balance')

function balanceWithSpaces() {
  balance.innerText = numberWithSpaces(balance.innerText)
}

balanceWithSpaces()