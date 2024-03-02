document.addEventListener('alpine:init', () => {
  Alpine.store('mobileMenu', {
    on: false,

    toggle() {
      this.on = !this.on
    }
  })
})