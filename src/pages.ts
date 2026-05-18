import { PetalGenerator } from './petals'

export class PageController {
  private petalGenerator = new PetalGenerator()

  goPage(page: string): void {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
    const target = document.getElementById('page-' + page)
    if (target) {
      target.classList.add('active')
      this.petalGenerator.generate()
      window.scrollTo(0, 0)
    }
  }
}
