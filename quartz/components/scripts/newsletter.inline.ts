document.addEventListener("nav", () => {
  const forms = document.querySelectorAll(".newsletter-form") as NodeListOf<HTMLFormElement>

  forms.forEach((form) => {
    const messageDiv = form.parentElement?.querySelector(".newsletter-message") as HTMLDivElement
    const input = form.querySelector(".newsletter-input") as HTMLInputElement
    const submitBtn = form.querySelector(".newsletter-submit") as HTMLButtonElement
    const targetUrl = form.getAttribute("data-url") || "https://masri-programmer.de/newsletter/subscribe"

    const handleSubmit = async (e: Event) => {
      e.preventDefault()
      const email = input.value.trim()

      if (!email) {
        return
      }

      // Set loading state
      submitBtn.disabled = true
      const originalBtnText = submitBtn.textContent
      submitBtn.textContent = "Subscribing..."
      if (messageDiv) {
        messageDiv.style.display = "none"
        messageDiv.className = "newsletter-message"
        messageDiv.textContent = ""
      }

      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        })

        const data = await response.json().catch(() => ({}))

        if (response.ok || response.status === 200 || response.status === 201) {
          if (messageDiv) {
            messageDiv.style.display = "block"
            messageDiv.classList.add("success")
            if (data.message === "already_subscribed") {
              messageDiv.textContent = "You are already subscribed to our newsletter!"
            } else {
              messageDiv.textContent = "Successfully subscribed! Welcome to the newsletter."
              input.value = "" // clear input on success
            }
          }
        } else {
          throw new Error(
            data.message || data.errors?.email?.[0] || "An error occurred. Please try again.",
          )
        }
      } catch (err: any) {
        if (messageDiv) {
          messageDiv.style.display = "block"
          messageDiv.classList.add("error")
          messageDiv.textContent = err.message || "Failed to subscribe. Please try again later."
        }
      } finally {
        submitBtn.disabled = false
        submitBtn.textContent = originalBtnText || "Subscribe"
      }
    }

    form.addEventListener("submit", handleSubmit)

    window.addCleanup(() => {
      form.removeEventListener("submit", handleSubmit)
    })
  })
})
