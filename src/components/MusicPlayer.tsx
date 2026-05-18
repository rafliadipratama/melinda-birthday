import { useEffect, useRef, useState } from 'react'

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/happy-birthday.mp3"
        loop
        preload="metadata"
      />

      {/* Floating Music Player Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-pink-600 to-red-700 text-white text-2xl shadow-lg hover:shadow-pink-600/50 transition-all hover:scale-110 active:scale-95 flex items-center justify-center touch-manipulation"
        style={{
          boxShadow: isPlaying ? '0 0 30px rgba(255,0,127,0.6)' : '0 4px 24px rgba(255,0,127,0.45)',
          animation: isPlaying ? 'pulse 2s ease-in-out infinite' : 'none'
        }}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>

      {/* Volume Control (appears on hover near button) */}
      <div className="fixed bottom-20 right-6 z-40 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-pink-500/30">
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-xs font-semibold">Volume</p>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-pink-600 rounded-lg appearance-none cursor-pointer accent-pink-500"
          />
          <p className="text-white text-xs">{volume}%</p>
        </div>
      </div>

      {/* Music Status Indicator */}
      {isPlaying && (
        <div className="fixed bottom-24 right-6 z-40">
          <div className="text-white text-xs bg-pink-600/80 px-3 py-1 rounded-full backdrop-blur-md">
            🎶 Playing...
          </div>
        </div>
      )}
    </>
  )
}

export default MusicPlayer
