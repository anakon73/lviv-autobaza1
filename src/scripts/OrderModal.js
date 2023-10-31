/** @type HTMLDialogElement */
const modalWindow = document.getElementById('modalWindow')
const HomePageBtn = document.getElementById('HomePageBtn')
const confirmOrder = document.getElementById('confirmOrder')

modalWindow.addEventListener('cancel', (e) => e.preventDefault())

confirmOrder.addEventListener('click', () => {
  window.scrollTo(0, 0)
  document.body.classList.add('overflow-hidden')
  modalWindow.showModal()
})

HomePageBtn.addEventListener('click', () => {
  window.location.href = '/'
})
