import { Zap, Shield, Smartphone, Palette, Users, BarChart } from 'lucide'

export function Features() {
  const features = document.createElement('section')
  features.id = 'features'
  features.className = 'features'
  
  const featureData = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern web technologies for instant loading and smooth interactions.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with security best practices and robust architecture for peace of mind.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly across all devices and screen sizes.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Carefully crafted interfaces with attention to detail and modern aesthetics.'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Designed with user experience at the forefront, making every interaction intuitive.'
    },
    {
      icon: BarChart,
      title: 'Analytics Ready',
      description: 'Built-in analytics and insights to help you understand your users better.'
    }
  ]
  
  features.innerHTML = `
    <div class="features-content">
      <div class="features-header">
        <h2 class="section-title">Why Choose Our Platform</h2>
        <p class="section-description">
          Discover the features that make our platform the perfect choice for your next project
        </p>
      </div>
      <div class="features-grid">
        ${featureData.map(feature => `
          <div class="feature-card">
            <div class="feature-icon">
              ${feature.icon}
            </div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
  
  // Add scroll animations
  setupFeatureAnimations(features)
  
  return features
}

function setupFeatureAnimations(features) {
  const cards = features.querySelectorAll('.feature-card')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in')
        }, index * 100)
      }
    })
  }, { threshold: 0.1 })
  
  cards.forEach(card => observer.observe(card))
}