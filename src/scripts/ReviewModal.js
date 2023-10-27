/** @type HTMLDialogElement */
const modalWindow = document.getElementById('modalWindow')
const openBtn = document.getElementById('openReviewModal')
const closeBtn = document.getElementById('closeReviewModal')
const xMarkClose = document.getElementById('xMarkClose')
const form = document.getElementById('form')
const sendBtn = document.getElementById('sendBtn')
const successfully = document.getElementById('successfully')

const onClose = () => {
  form.classList.remove('hidden')
  form.classList.add('flex')

  successfully.classList.add('hidden')
  successfully.classList.remove('flex')

  modalWindow.close()
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') onClose()
})

openBtn.addEventListener('click', () => {
  modalWindow.showModal()
})

closeBtn.addEventListener('click', onClose)
xMarkClose.addEventListener('click', onClose)

modalWindow.addEventListener('click', (e) => {
  if (e.target === modalWindow) onClose()
})

sendBtn.addEventListener('click', onClose)

if (form) form.addEventListener('click', (e) => e.preventDefault())