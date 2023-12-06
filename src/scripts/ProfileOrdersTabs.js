const tabs = document.querySelectorAll(".ordersTab")
const tabsBtn = document.querySelectorAll(".orderTabBtn")

const activeBtn = [
  "bg-blue-600",
  "text-white",
  "font-semibold",
  "hover:bg-blue-700",
  "hover:text-zunc-100",
]
const nonActiveBtn = [
  "bg-zinc-100",
  "text-slate-700",
  "font-medium",
  "border",
  "border-gray-100",
  "hover:text-slate-800",
  "hover:bg-zinc-200",
]

tabsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab")
    const currentTab = document.querySelector(tabId)

    if (currentTab.classList.contains("hidden")) {
      tabs.forEach((item) => item.classList.add("hidden"))
      tabsBtn.forEach((item) => {
        item.classList.remove(...activeBtn)
        item.classList.add(...nonActiveBtn)
      })

      currentTab.classList.remove("hidden")
      currentTab.classList.add("flex")
      btn.classList.remove(...nonActiveBtn)
      btn.classList.add(...activeBtn)
    }
  })
})

document.querySelector(".orderTabBtn").click()
