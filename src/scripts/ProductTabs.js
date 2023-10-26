const selectedTabBtnClasses = ['underline', 'decoration-2', 'underline-offset-[17px]', 'font-semibold']

const tabs = document.querySelectorAll('.tab')
const tabsBtn = document.querySelectorAll('.tabBtn')

tabsBtn.forEach((btn) => {
  btn.addEventListener('click', function () {
    let currentBtn = btn
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    if (currentTab.classList.contains('hidden')) {
      tabsBtn.forEach((item) => item.classList.remove(...selectedTabBtnClasses))
      tabs.forEach((item) => item.classList.add('hidden'))

      currentBtn.classList.add(...selectedTabBtnClasses)
      currentTab.classList.remove('hidden')
      if (currentTab.id === 'specsTab') currentTab.classList.add('grid')
    }
  })
})

document.querySelector('.tabBtn').click()
