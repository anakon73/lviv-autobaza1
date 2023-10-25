const passInput = document.getElementById('passwordInput')

const showPassBtn = document.getElementById('showPass')

function changeVisibility() {
  passInput.type = passInput.type === 'password' ? 'text' : 'password'
}

showPassBtn.addEventListener('click', changeVisibility)