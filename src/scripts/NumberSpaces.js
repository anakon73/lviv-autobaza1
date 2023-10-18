function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const cartCost = document.getElementById('cartCost')

function cartCostWithSpaces() {
  cartCost.innerText = numberWithSpaces(cartCost.innerText)
}

cartCostWithSpaces()