import { ArrowRight, Play } from 'lucide'

export function Hero() {
  const hero = document.createElement('section')
  hero.id = 'home'
  hero.className = 'hero'
  
  hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="title-line">Beautiful Design</span>
          <span class="title-line">Meets Functionality</span>
        </h1>
        <p class="hero-description">
          Experience the perfect blend of stunning visuals and intuitive user experience. 
          Our modern approach to design creates interfaces that users love to interact with.
        </p>
        <div class="hero-actions">
          <button class="btn btn-primary">
            Get Started
            ${ArrowRight}
          </button>
          <button class="btn btn-secondary">
            ${Play}
            Watch Demo
          </button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="visual-card card-1"></div>
        <div class="visual-card card-2"></div>
        <div class="visual-card card-3"></div>
      </div>
    </div>
  `
  
  // Add interaction effects
  setupHeroInteractions(hero)
  
  return hero
}

function setupHeroInteractions(hero) {
  const buttons = hero.querySelectorAll('.btn')
  const visualCards = hero.querySelectorAll('.visual-card')
  
  // Button hover effects
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)'
    })
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)'
    })
  })
  
  // Parallax effect for visual cards
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    
    visualCards.forEach((card, index) => {
      const offset = rate * (index + 1) * 0.1
      card.style.transform = `translateY(${offset}px)`
    })
  })
}