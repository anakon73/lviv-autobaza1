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
        const image = item.querySelector("img")

        textParagraph.classList.remove(
          "font-semibold",
          "text-white",
          "bg-blue-600",
        )
        textParagraph.classList.add("font-medium", "text-slate", "bg-gray-100")

        image.classList.remove("bg-blue-600")
        image.classList.add("bg-gray-100")
      })

      const currentTextParagraph = btn.querySelector("p")
      const currentImage = btn.querySelector("img")

      currentTextParagraph.classList.remove(
        "font-medium",
        "text-slate",
        "bg-gray-100",
      )
      currentImage.classList.remove("bg-gray-100")

      currentTextParagraph.classList.add(
        "font-semibold",
        "text-white",
        "bg-blue-600",
      )
      currentImage.classList.add("bg-blue-600")

      currentTab.classList.remove("hidden")

      if (currentTab.id === "favoriteTab") currentTab.classList.add("grid")
    }
  })
})

document.querySelector(".tabBtn").click()
