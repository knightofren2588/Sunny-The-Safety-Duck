import './styles/main.css'
import { createApp } from './components/App.js'
import { initializeTheme } from './utils/theme.js'
import { initializeAnimations } from './utils/animations.js'

// Initialize theme system
initializeTheme()

// Create and mount the app
const app = createApp()
document.getElementById('app').appendChild(app)

// Initialize animations after DOM is ready
requestAnimationFrame(() => {
  initializeAnimations()
})