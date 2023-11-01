const tabs = document.querySelectorAll('.tab')
const tabsBtn = document.querySelectorAll('.tabBtn')

tabsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab')
    const currentTab = document.querySelector(tabId)

    if (currentTab.classList.contains('hidden')) {
      tabs.forEach(item => item.classList.add('hidden'))
      tabsBtn.forEach(item => {
        item.querySelector('p').classList.remove('font-semibold', 'text-white', 'bg-blue-600')
        item.querySelector('p').classList.add('font-medium', 'text-slate', 'bg-gray-100')
        btn.querySelector('img').classList.add('bg-gray-100')
        item.querySelector('img').classList.remove('bg-blue-600')
      })

      btn.querySelector('p').classList.remove('font-medium', 'text-slate', 'bg-gray-100')
      btn.querySelector('img').classList.remove('bg-gray-100')
      btn.querySelector('p').classList.add('font-semibold', 'text-white', 'bg-blue-600')
      btn.querySelector('img').classList.add('bg-blue-600')
      currentTab.classList.remove('hidden')

      if (currentTab.id === 'favoriteTab') currentTab.classList.add('grid')
    }
  })
})

document.querySelector('#ordersTabBtn').click()