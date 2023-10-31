/** @type HTMLDialogElement */
const signUpWindow = document.getElementById('signUpWindow')
const signUpBtn = document.getElementById('signUpBtn')
const signUpXMark = document.getElementById('signUpXMark')

const onClose = () => {
  signUpWindow.close()
  document.body.classList.remove('overflow-hidden')
}

signUpBtn.addEventListener('click', () => {
  signUpWindow.showModal()
  window.scrollTo(0, 0)
  document.body.classList.add('overflow-hidden')
})

signUpXMark.addEventListener('click', onClose)

signUpWindow.addEventListener('click', (e) => {
  if (e.target === signUpWindow) onClose()
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') onClose()
})
