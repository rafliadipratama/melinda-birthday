import { useState, useRef, useEffect } from 'react'

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      if (audio) audio.currentTime = 0
    }

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
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

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/happy-birthday.mp3"
        loop
        crossOrigin="anonymous"
      />

      {/* Floating Music Player Button */}
      <div
        className="fixed bottom-8 right-8 z-50"
        style={{
          perspective: '1000px'
        }}
      >
        <div className="relative">
          {/* Glow effect when playing */}
          {isPlaying && (
            <div
              className="absolute inset-0 animate-pulse rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,20,147,0.4) 0%, transparent 70%)',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
          )}

          {/* Main button */}
          <button
            onClick={togglePlay}
            className="relative w-16 h-16 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
            style={{
              background: isPlaying
                ? 'linear-gradient(135deg, #FF1493 0%, #FF69B4 100%)'
                : 'linear-gradient(135deg, #6B4C9A 0%, #8B5FBF 100%)',
              boxShadow: isPlaying
                ? '0 8px 30px rgba(255,20,147,0.5)'
                : '0 8px 20px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <span className="text-2xl">
              {isPlaying ? '🎵' : '🎶'}
            </span>

            {/* Mute indicator */}
            {isMuted && (
              <div
                className="absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(255,20,147,0.9)',
                  fontSize: '10px'
                }}
              >
                🔇
              </div>
            )}
          </button>

          {/* Tooltip */}
          <div
            className="absolute bottom-20 right-0 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            style={{ marginRight: '8px' }}
          >
            {isPlaying ? 'Pause' : 'Play'} 🎵
          </div>
        </div>
      </div>

      {/* Mute button - smaller, positioned above */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="fixed bottom-32 right-8 z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: isMuted
              ? 'linear-gradient(135deg, #FF6347 0%, #FF7F50 100%)'
              : 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          <span className="text-lg">{isMuted ? '🔇' : '🔊'}</span>
        </button>
      )}
    </>
  )
}

export default MusicPlayer
