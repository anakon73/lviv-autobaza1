const search = document.getElementById('search')
const searchInput = document.getElementById('searchInput')
const overlay = document.getElementById('overlay')
const searchResult = document.getElementById('searchResult')

let searchValue = searchInput.value

searchInput.oninput = () => {
  searchValue = searchInput.value
  onOpen()
}

const onOpen = () => {
  overlay.classList.remove('hidden')
  searchResult.classList.add('hidden')
  if (searchValue !== '') {
    searchResult.classList.remove('hidden')
    searchResult.classList.add('flex')
  }
}

const onClose = () => {
  overlay.classList.add('hidden')
  searchResult.classList.add('hidden')
  searchResult.classList.remove('flex')
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    onClose()
    searchInput.blur()
  }
})

search.addEventListener('click', onOpen)
overlay.addEventListener('click', onClose)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    window.location.href = '/results/';
  }
})