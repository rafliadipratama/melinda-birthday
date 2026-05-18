interface Heart {
  el: HTMLElement
  x: number
  y: number
  vx: number
  vy: number
}

export class GameController {
  private goal = 20
  private poolSize = 12
  private emojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '🩷', '💞']
  private collected = 0
  private gameActive = false
  private rafId: number | null = null
  private pool: Heart[] = []

  startGame(): void {
    this.collected = 0
    this.pool = []
    this.gameActive = true
    this.showPhase('phase-game')
    this.updateHUD()
    this.spawnPool()
    if (this.rafId) cancelAnimationFrame(this.rafId)
    this.rafId = requestAnimationFrame(() => this.gameLoop())
  }

  private showPhase(id: string): void {
    document.querySelectorAll('.gphase').forEach(p => p.classList.remove('active'))
    const phase = document.getElementById(id)
    if (phase) phase.classList.add('active')
  }

  private updateHUD(): void {
    const countEl = document.getElementById('hud-count')
    const fillEl = document.getElementById('hud-fill')
    if (countEl) countEl.textContent = `${this.collected} / ${this.goal}`
    if (fillEl) fillEl.style.width = ((this.collected / this.goal) * 100) + '%'
  }

  private spawnHeart = (): void => {
    const arena = document.getElementById('arena')
    if (!arena || !this.gameActive) return

    const aw = arena.clientWidth || 800
    const ah = arena.clientHeight || 500
    const size = 50

    const el = document.createElement('div')
    el.style.cssText = `
      position: absolute;
      font-size: 50px;
      cursor: pointer;
      user-select: none;
      z-index: 100;
      transition: all 0.1s;
    `
    el.textContent = this.emojis[Math.floor(Math.random() * this.emojis.length)]

    const x = Math.max(0, Math.min(aw - size, size + Math.random() * (aw - size * 2)))
    const y = Math.max(0, Math.min(ah - size, size + Math.random() * (ah - size * 2)))
    const spd = 1.5 + Math.random() * 2
    const ang = Math.random() * Math.PI * 2

    const h: Heart = {
      el,
      x,
      y,
      vx: Math.cos(ang) * spd,
      vy: Math.sin(ang) * spd,
    }

    el.style.left = x + 'px'
    el.style.top = y + 'px'

    const handleClick = (e: Event) => {
      e.stopPropagation()
      this.collectHeart(h)
    }

    el.addEventListener('click', handleClick)
    arena.appendChild(el)
    this.pool.push(h)
  }

  private spawnPool = (): void => {
    for (let i = 0; i < this.poolSize; i++) {
      setTimeout(() => this.spawnHeart(), i * 100)
    }
  }

  private collectHeart(h: Heart): void {
    if (!this.gameActive || h.el.classList.contains('pop')) return

    h.el.classList.add('pop')
    h.el.style.animation = 'heartPop 0.35s ease forwards'
    h.el.style.pointerEvents = 'none'

    const sf = document.createElement('div')
    sf.textContent = '+1 💕'
    sf.style.cssText = `
      position: fixed;
      font-size: 24px;
      font-weight: bold;
      color: #FF1493;
      pointer-events: none;
      z-index: 1000;
      left: ${h.x}px;
      top: ${h.y}px;
      animation: floatScore 0.8s ease forwards;
    `
    document.body.appendChild(sf)

    this.collected++
    this.updateHUD()
    console.log(`Collected: ${this.collected}/${this.goal}`)

    // Spawn new heart to replace the one collected
    if (this.collected < this.goal) {
      setTimeout(() => this.spawnHeart(), 200)
    }

    if (this.collected >= this.goal) {
      this.gameActive = false
      if (this.rafId !== null) cancelAnimationFrame(this.rafId)
      setTimeout(() => this.showPhase('phase-win'), 700)
    }
  }

  private gameLoop = (): void => {
    if (!this.gameActive) return

    // Remove popped hearts from pool
    this.pool = this.pool.filter(h => !h.el.classList.contains('pop'))

    this.pool.forEach(h => {
      if (!h.el.parentElement) return

      h.x += h.vx
      h.y += h.vy

      const arena = document.getElementById('arena')
      if (!arena) return

      const aw = arena.clientWidth
      const ah = arena.clientHeight

      if (h.x <= 0 || h.x >= aw - 50) h.vx *= -1
      if (h.y <= 0 || h.y >= ah - 50) h.vy *= -1

      h.el.style.left = Math.max(0, Math.min(aw - 50, h.x)) + 'px'
      h.el.style.top = Math.max(0, Math.min(ah - 50, h.y)) + 'px'
    })

    this.rafId = requestAnimationFrame(() => this.gameLoop())
  }

  revealSite(): void {
    this.gameActive = false
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)

    const overlay = document.getElementById('game-overlay')
    if (overlay) {
      overlay.style.display = 'none'
      overlay.style.pointerEvents = 'none'
    }
    document.body.style.overflowY = 'auto'

    const pageController = (window as any).pageController as any
    if (pageController) pageController.goPage('menu')
  }
}
