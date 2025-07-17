import { Moon, Sun, Menu, X } from 'lucide'

export function Header() {
  const header = document.createElement('header')
  header.className = 'header'
  
  header.innerHTML = `
    <nav class="nav">
      <div class="nav-brand">
        <h1 class="brand-text">ModernApp</h1>
      </div>
      
      <div class="nav-menu" id="nav-menu">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      
      <div class="nav-actions">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">
          <span class="theme-icon light-icon">${Sun}</span>
          <span class="theme-icon dark-icon">${Moon}</span>
        </button>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
          <span class="menu-icon open-icon">${Menu}</span>
          <span class="menu-icon close-icon">${X}</span>
        </button>
      </div>
    </nav>
  `
  
  // Add event listeners
  setupHeaderInteractions(header)
  
  return header
}

function setupHeaderInteractions(header) {
  const themeToggle = header.querySelector('#theme-toggle')
  const mobileToggle = header.querySelector('#mobile-menu-toggle')
  const navMenu = header.querySelector('#nav-menu')
  const navLinks = header.querySelectorAll('.nav-link')
  
  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
    const isDark = document.documentElement.classList.contains('dark-theme')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  })
  
  // Mobile menu toggle
  mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    mobileToggle.classList.toggle('active')
  })
  
  // Smooth scrolling for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'))
      link.classList.add('active')
      
      // Close mobile menu
      navMenu.classList.remove('active')
      mobileToggle.classList.remove('active')
    })
  })
}