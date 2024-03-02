document.addEventListener('alpine:init', () => {
  Alpine.store('mobileMenu', {
    on: false,

    toggle() {
      this.on = !this.on
    }
  })

  Alpine.store('darkMode', {
    on: localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),

    toggle() {
      this.on = !this.on

      localStorage.theme = this.on ? 'dark' : 'light'
    }
  })
})