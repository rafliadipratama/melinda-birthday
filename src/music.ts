export class MusicPlayer {
  private playing = false

  toggle(): void {
    const audio = document.getElementById('bg-music') as HTMLAudioElement
    const icon = document.getElementById('music-icon')

    if (this.playing) {
      audio.pause()
      if (icon) icon.textContent = '🎵'
      this.playing = false
    } else {
      audio.play().catch(err => console.log('Music play error:', err))
      if (icon) icon.textContent = '🔊'
      this.playing = true
    }
  }
}
