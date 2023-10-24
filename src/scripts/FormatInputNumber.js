function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const minPriceInput = document.getElementById('minPriceInput')

minPriceInput.oninput = () => {
  if (minPriceInput.value.length > 5) minPriceInput.value = minPriceInput.value.slice(0, 6)
  minPriceInput.value = minPriceInput.value.replace(/[^\d,]/g, '')
  minPriceInput.value = numberWithSpaces(minPriceInput.value)
}

const maxPriceInput = document.getElementById('maxPriceInput')

maxPriceInput.oninput = () => {
  if (maxPriceInput.value.length > 5) maxPriceInput.value = maxPriceInput.value.slice(0, 6)
  maxPriceInput.value = maxPriceInput.value.replace(/[^\d,]/g, '')
  maxPriceInput.value = numberWithSpaces(maxPriceInput.value)
}
