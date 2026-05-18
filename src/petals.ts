export class PetalGenerator {
  generate(): void {
    const container = document.getElementById('petals-container')
    if (!container) return

    const petals = ['🌸', '🌺', '🌷', '🌹', '✨']
    const petalCount = 10

    container.innerHTML = ''

    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div')
      const emoji = petals[Math.floor(Math.random() * petals.length)]
      const delay = Math.random() * 2
      const duration = 8 + Math.random() * 4
      const left = Math.random() * 100
      const size = 20 + Math.random() * 30

      petal.textContent = emoji
      petal.className = 'absolute flex items-center justify-center select-none'
      petal.style.cssText = `
        left: ${left}%;
        top: -40px;
        width: ${size}px;
        height: ${size}px;
        font-size: ${size * 0.8}px;
        opacity: 0.7;
        animation: petalFall ${duration}s linear ${delay}s infinite;
      `

      container.appendChild(petal)
    }
  }
}
