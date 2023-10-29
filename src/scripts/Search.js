const search = document.getElementById('search')
const searchInput = document.getElementById('searchInput')
const overlay = document.getElementById('overlay')
const searchResult = document.getElementById('searchResult')
const searchBtn = document.getElementById('searchBtn')

let isOpen = false

let searchValue = searchInput.value

searchInput.oninput = () => {
  searchValue = searchInput.value

  if (searchInput.value === '') {
    onClose()
    overlay.classList.remove('hidden')
    searchResult.classList.add('hidden')
  } else {
    onOpen()
  }
}

const onOpen = () => {
  isOpen = true
  if (isOpen && searchValue !== '') {
    overlay.classList.remove('hidden')
    searchResult.classList.remove('hidden')
    searchResult.classList.add('flex')
  }
}

const onClose = () => {
  isOpen = false
  if (!isOpen) {
    overlay.classList.add('hidden')
    searchResult.classList.add('hidden')
    searchResult.classList.remove('flex')
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    onClose()
    searchInput.blur()
  }
})

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  if (searchValue !== '') {
    window.location.href = '/results/'
    return
  }
  if (!isOpen) {
    overlay.classList.remove('hidden')
    searchResult.classList.add('hidden')
  }
})

search.addEventListener('click', onOpen)
overlay.addEventListener('click', onClose)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && isOpen && searchValue !== '') {
    window.location.href = '/results/'
  }
})