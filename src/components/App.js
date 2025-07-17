import { Header } from './Header.js'
import { Hero } from './Hero.js'
import { Features } from './Features.js'
import { Footer } from './Footer.js'

export function createApp() {
  const app = document.createElement('div')
  app.className = 'app'
  
  // Create main sections
  const header = Header()
  const hero = Hero()
  const features = Features()
  const footer = Footer()
  
  app.appendChild(header)
  app.appendChild(hero)
  app.appendChild(features)
  app.appendChild(footer)
  
  return app
}