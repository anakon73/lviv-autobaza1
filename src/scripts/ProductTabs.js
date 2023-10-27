const selectedTabBtnClasses = [
  'underline',
  'decoration-2',
  'underline-offset-[17px]',
  'font-semibold',
]

const tabs = document.querySelectorAll('.tab')
const tabsBtn = document.querySelectorAll('.tabBtn')

tabsBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab')
    const currentTab = document.querySelector(tabId)

    if (currentTab.classList.contains('hidden')) {
      tabsBtn.forEach((item) => item.classList.remove(...selectedTabBtnClasses))
      tabs.forEach((item) => item.classList.add('hidden'))

      btn.classList.add(...selectedTabBtnClasses)
      currentTab.classList.remove('hidden')
      if (currentTab.id === 'specsTab') currentTab.classList.add('grid')
    }
  })
})

document.querySelector('.tabBtn').click()
