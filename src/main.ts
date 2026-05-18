import { GameController } from './game'
import { PageController } from './pages'
import { MusicPlayer } from './music'
import { Lightbox } from './lightbox'
import { PetalGenerator } from './petals'

// Initialize controllers
const gameController = new GameController()
const pageController = new PageController()
const musicPlayer = new MusicPlayer()
const lightbox = new Lightbox()
const petalGenerator = new PetalGenerator()

// Expose to window for HTML onclick handlers
declare global {
  interface Window {
    gameController: GameController
    pageController: PageController
    musicPlayer: MusicPlayer
    lightbox: Lightbox
  }
}

window.gameController = gameController
window.pageController = pageController
window.musicPlayer = musicPlayer
window.lightbox = lightbox

// Hide loader and reveal main site
setTimeout(() => {
  const loader = document.getElementById('loader')
  const mainSite = document.getElementById('main-site')

  if (loader) {
    loader.style.opacity = '0'
    loader.style.pointerEvents = 'none'
  }
  if (mainSite) {
    mainSite.style.opacity = '1'
    mainSite.style.pointerEvents = 'auto'
  }
}, 1500)

// Initialize petals on page load
document.addEventListener('DOMContentLoaded', () => {
  petalGenerator.generate()
})
