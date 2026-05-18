import { useState, useEffect, useRef } from 'react'

interface GamePhase {
  intro: boolean
  game: boolean
  win: boolean
}

interface Heart {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
}

const MiniGame = ({ onGameComplete }: { onGameComplete: () => void }) => {
  const [phase, setPhase] = useState<GamePhase>({ intro: true, game: false, win: false })
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heartIdRef = useRef(0)
  const targetScore = isMobile ? 15 : 20

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const startGame = () => {
    setPhase({ intro: false, game: true, win: false })
    setScore(0)
    setHearts([])
    setGameActive(true)
    heartIdRef.current = 0
  }

  const revealSite = () => {
    setGameActive(false)
    onGameComplete()
  }

  // Spawn hearts at random positions (puzzle style)
  useEffect(() => {
    if (!gameActive) return

    const spawnRate = isMobile ? 600 : 500
    const interval = setInterval(() => {
      const containerWidth = containerRef.current?.clientWidth || 400
      const containerHeight = containerRef.current?.clientHeight || 600

      const newHeart: Heart = {
        id: heartIdRef.current++,
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 100) + 50,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        rotation: Math.random() * 360
      }
      setHearts(prev => [...prev, newHeart])
    }, Math.max(400, spawnRate - score * 15))

    return () => clearInterval(interval)
  }, [gameActive, score, isMobile])

  // Animate hearts bouncing around
  useEffect(() => {
    if (!gameActive) return

    const interval = setInterval(() => {
      setHearts(prev =>
        prev.map(heart => {
          const containerWidth = containerRef.current?.clientWidth || 400
          const containerHeight = containerRef.current?.clientHeight || 600

          let newX = heart.x + heart.vx
          let newY = heart.y + heart.vy
          let newVx = heart.vx
          let newVy = heart.vy

          // Bounce off walls
          if (newX < 0 || newX > containerWidth - 50) {
            newVx = -heart.vx
            newX = Math.max(0, Math.min(containerWidth - 50, newX))
          }
          if (newY < 0 || newY > containerHeight - 50) {
            newVy = -heart.vy
            newY = Math.max(0, Math.min(containerHeight - 50, newY))
          }

          return {
            ...heart,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: heart.rotation + 3
          }
        })
      )
    }, 30)

    return () => clearInterval(interval)
  }, [gameActive])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(42,0,13,0.97), rgba(10,0,5,0.97))',
      }}>

      {/* Intro Phase */}
      {phase.intro && (
        <div className="text-center px-4 sm:px-6 py-8 max-w-sm sm:max-w-md animate-in fade-in slide-in-from-top">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 animate-bounce">🔒</div>
          <h2 className="font-cinzel text-2xl sm:text-4xl mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Hei, Melinda! 💌
          </h2>
          <p className="text-white/65 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Ada pesan cinta spesial yang terkunci untukmu...<br />
            Kamu harus menyelesaikan tantangan dulu sebelum bisa membacanya!
          </p>
          <div className="bg-gradient-to-r from-pink-600/20 to-red-600/20 border border-pink-500/40 rounded-full px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-white">
              Kumpulkan <strong className="text-pink-300">{targetScore} hati 💕</strong> yang berpencar di layar!
            </p>
          </div>
          <button
            onClick={startGame}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full text-base sm:text-lg hover:scale-110 active:scale-95 transition-all shadow-lg hover:shadow-2xl hover:shadow-pink-600/70 touch-manipulation animate-pulse"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,0,127,0.8), 0 0 60px rgba(255,20,147,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            Mulai Tantangan! 💖
          </button>
        </div>
      )}

      {/* Game Phase */}
      {phase.game && (
        <div className="w-full h-screen flex flex-col relative overflow-hidden">
          {/* HUD */}
          <div className="absolute top-0 left-0 right-0 z-40 pt-4 sm:pt-8 px-4 sm:px-0 text-center pointer-events-none">
            <p className="font-cinzel text-pink-500 text-lg sm:text-2xl mb-1 sm:mb-2">Tangkap Hati 💕</p>
            <p className="font-playfair text-white text-2xl sm:text-3xl mb-2 sm:mb-4">{score} / {targetScore}</p>
            <div className="max-w-xs mx-auto h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden border border-pink-500/30">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-yellow-400 transition-all duration-300"
                style={{ width: `${(score / targetScore) * 100}%` }}
              />
            </div>
            <p className="text-white/35 text-xs sm:text-sm mt-1 sm:mt-2">Cari dan klik semua hati yang bergerak! 🎯</p>
          </div>

          {/* Game Arena */}
          <div
            ref={containerRef}
            className="flex-1 relative mt-24 sm:mt-20 w-full"
            style={{ background: 'transparent' }}
          >
            {hearts.map(heart => (
              <button
                key={heart.id}
                onClick={() => {
                  setHearts(prev => prev.filter(h => h.id !== heart.id))
                  const newScore = score + 1
                  setScore(newScore)
                  if (newScore >= targetScore) {
                    setGameActive(false)
                    setPhase({ intro: false, game: false, win: true })
                  }
                }}
                className="absolute cursor-pointer hover:scale-125 active:scale-75 transition-all drop-shadow-lg touch-manipulation"
                style={{
                  left: `${heart.x}px`,
                  top: `${heart.y}px`,
                  fontSize: isMobile ? '3rem' : '3.75rem',
                  filter: 'drop-shadow(0 0 12px rgba(255,20,147,0.9))',
                  transform: `rotate(${heart.rotation}deg)`,
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  width: isMobile ? '50px' : '60px',
                  height: isMobile ? '50px' : '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 0,
                  WebkitTapHighlightColor: 'transparent'
                }}
              >
                💕
              </button>
            ))}
          </div>

          {/* Speed Alert */}
          {score > targetScore / 2 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none animate-pulse">
              <p className="font-cinzel text-2xl sm:text-4xl text-pink-500" style={{ textShadow: '0 0 20px rgba(255,20,147,1)' }}>
                💨 Makin cepat!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Win Phase */}
      {phase.win && (
        <div className="text-center px-4 sm:px-6 py-8 max-w-sm sm:max-w-md animate-in fade-in zoom-in">
          <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 animate-bounce">🔓</div>
          <h2 className="font-cinzel text-2xl sm:text-4xl mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Yeay, kamu berhasil! 🎉
          </h2>
          <p className="text-white/65 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Kamu sudah menangkap semua hati!<br />
            Sekarang buka pesannya... 💌
          </p>
          <button
            onClick={revealSite}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-bold rounded-full text-base sm:text-lg hover:scale-110 active:scale-95 transition-all shadow-lg hover:shadow-2xl hover:shadow-yellow-500/70 touch-manipulation"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,20,147,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            Buka Pesan Cinta 💌
          </button>
        </div>
      )}
    </div>
  )
}

export default MiniGame
