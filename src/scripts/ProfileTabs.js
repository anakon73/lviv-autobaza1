const tabs = document.querySelectorAll(".tab")
const tabsBtn = document.querySelectorAll(".tabBtn")

tabsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab")
    const currentTab = document.querySelector(tabId)

    if (currentTab.classList.contains("hidden")) {
      tabs.forEach((item) => item.classList.add("hidden"))
      tabsBtn.forEach((item) => {
        const textParagraph = item.querySelector("p")
        const image = item.querySelector("div")

        textParagraph.classList.remove(
          "font-semibold",
          "text-white",
          "bg-blue-600",
          "group-hover:bg-blue-700",
          "group-hover:text-zinc-50",
        )
        textParagraph.classList.add(
          "font-medium",
          "text-slate-700",
          "bg-gray-100",
          "group-hover:bg-gray-200",
          "group-hover:text-slate-800",
        )

        image.classList.remove("bg-blue-600", "group-hover:bg-blue-700")
        image.classList.add("bg-gray-100", "group-hover:bg-gray-200")
      })

      const currentTextParagraph = btn.querySelector("p")
      const currentImage = btn.querySelector("div")

      currentTextParagraph.classList.remove(
        "font-medium",
        "text-slate-700",
        "bg-gray-100",
        "group-hover:bg-gray-200",
        "group-hover:text-slate-800",
      )
      currentImage.classList.remove("bg-gray-100", "group-hover:bg-gray-200")

      currentTextParagraph.classList.add(
        "font-semibold",
        "text-white",
        "bg-blue-600",
        "group-hover:bg-blue-700",
        "group-hover:text-zinc-50",
      )
      currentImage.classList.add("bg-blue-600", "group-hover:bg-blue-700")

      currentTab.classList.remove("hidden")

      if (currentTab.id === "favoriteTab") currentTab.classList.add("grid")
    }
  })
})

document.querySelector(".tabBtn").click()
