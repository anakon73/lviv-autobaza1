function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const cartCost = document.getElementById('cartCost')

function cartCostWithSpaces() {
  cartCost.innerText = numberWithSpaces(cartCost.innerText)
}

cartCostWithSpaces()

const catalogItems = document.getElementById('catalogItems')

catalogItems.innerText = Number(catalogItems.innerText).toLocaleString('en-US')

const catalogItemsFooter = document.getElementById('catalogItemsFooter')

catalogItemsFooter.innerText = Number(catalogItemsFooter.innerText).toLocaleString('en-US')