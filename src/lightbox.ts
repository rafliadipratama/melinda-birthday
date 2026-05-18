export class Lightbox {
  open(src: string): void {
    const lightbox = document.getElementById('lightbox')
    const img = document.getElementById('lightbox-img') as HTMLImageElement

    if (lightbox && img) {
      lightbox.classList.remove('hidden')
      img.src = src
    }
  }

  close(): void {
    const lightbox = document.getElementById('lightbox')
    if (lightbox) {
      lightbox.classList.add('hidden')
    }
  }
}
