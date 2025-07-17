export function initializeAnimations() {
  // Add stagger animation to elements
  const animatedElements = document.querySelectorAll('[data-animate]')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })
  
  animatedElements.forEach(el => observer.observe(el))
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Add loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded')
  })
}