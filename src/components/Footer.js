import { Heart } from 'lucide'

export function Footer() {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-text">
        <p>Made with ${Heart} using modern web technologies</p>
        <p>&copy; 2025 ModernApp. All rights reserved.</p>
      </div>
    </div>
  `
  
  return footer
}