import { useState, useEffect, useRef } from 'react'

interface GamePhase {
  intro: boolean
  game: boolean
  levelup: boolean
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

interface LevelConfig {
  level: number
  targetHearts: number
  speedMultiplier: number
  spawnRate: number
}

const MiniGame = ({ onGameComplete }: { onGameComplete: () => void }) => {
  const [phase, setPhase] = useState<GamePhase>({ intro: true, game: false, levelup: false, win: false })
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [gameActive, setGameActive] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heartIdRef = useRef(0)

  // Level configurations
  const getLevelConfig = (level: number): LevelConfig => {
    const configs: { [key: number]: Omit<LevelConfig, 'level'> } = {
      1: { targetHearts: isMobile ? 15 : 20, speedMultiplier: 1, spawnRate: 500 },
      2: { targetHearts: isMobile ? 20 : 25, speedMultiplier: 1.3, spawnRate: 400 },
      3: { targetHearts: isMobile ? 25 : 30, speedMultiplier: 1.6, spawnRate: 300 },
      4: { targetHearts: isMobile ? 30 : 35, speedMultiplier: 1.9, spawnRate: 250 },
      5: { targetHearts: isMobile ? 35 : 40, speedMultiplier: 2.2, spawnRate: 200 }
    }
    const config = configs[level] || configs[5]
    return { level, ...config }
  }

  const levelConfig = getLevelConfig(currentLevel)
  const targetScore = levelConfig.targetHearts

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const startGame = () => {
    setPhase({ intro: false, game: true, levelup: false, win: false })
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

    const interval = setInterval(() => {
      const containerWidth = containerRef.current?.clientWidth || 400
      const containerHeight = containerRef.current?.clientHeight || 600

      const newHeart: Heart = {
        id: heartIdRef.current++,
        x: Math.random() * (containerWidth - 50),
        y: Math.random() * (containerHeight - 100) + 50,
        vx: (Math.random() - 0.5) * 3 * levelConfig.speedMultiplier,
        vy: (Math.random() - 0.5) * 3 * levelConfig.speedMultiplier,
        rotation: Math.random() * 360
      }
      setHearts(prev => [...prev, newHeart])
    }, levelConfig.spawnRate)

    return () => clearInterval(interval)
  }, [gameActive, currentLevel, isMobile, levelConfig])

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
              Ada <strong className="text-pink-300">5 Level</strong> tantangan! 🎯<br />
              Mulai dari <strong className="text-pink-300">Level 1: {targetScore} hati 💕</strong>
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
            <div className="mb-3 sm:mb-4">
              <p className="font-cinzel text-yellow-400 text-base sm:text-xl">Level {currentLevel}</p>
              <p className="text-pink-300 text-xs sm:text-sm">⭐ Difficulty: {currentLevel > 1 ? '⭐'.repeat(currentLevel) : '⭐'}</p>
            </div>
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
            {hearts.map((heart, idx) => {
              const heartVariants = ['💕', '❤️', '💖', '💗', '💓', '💞']
              const heartEmoji = heartVariants[idx % heartVariants.length]

              return (
                <button
                  key={heart.id}
                  onClick={() => {
                    setHearts(prev => prev.filter(h => h.id !== heart.id))
                    const newScore = score + 1
                    setScore(newScore)
                    if (newScore >= targetScore) {
                      setGameActive(false)
                      if (currentLevel < 5) {
                        setPhase({ intro: false, game: false, levelup: true, win: false })
                      } else {
                        setPhase({ intro: false, game: false, levelup: false, win: true })
                      }
                    }
                  }}
                  className="absolute cursor-pointer transition-all drop-shadow-lg touch-manipulation group"
                  style={{
                    left: `${heart.x}px`,
                    top: `${heart.y}px`,
                    fontSize: isMobile ? '3rem' : '3.75rem',
                    filter: 'drop-shadow(0 0 12px rgba(255,20,147,0.9))',
                    transform: `rotate(${heart.rotation}deg) scale(1)`,
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotate(${heart.rotation}deg) scale(1.3)`
                    e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(255,20,147,1)) brightness(1.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${heart.rotation}deg) scale(1)`
                    e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(255,20,147,0.9))'
                  }}
                >
                  {heartEmoji}
                </button>
              )
            })}
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

      {/* Level Up Phase */}
      {phase.levelup && (
        <div className="text-center px-4 sm:px-6 py-8 max-w-sm sm:max-w-md animate-in fade-in zoom-in">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 animate-bounce">⭐</div>
          <h2 className="font-cinzel text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Level {currentLevel} Selesai! 🎉
          </h2>
          <p className="text-pink-300 text-lg sm:text-xl mb-4">Luar biasa!</p>
          <p className="text-white/65 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Kamu berhasil menangkap semua hati!<br />
            Sekarang siap untuk level berikutnya yang lebih sulit?
          </p>
          <div className="bg-gradient-to-r from-yellow-600/20 to-pink-600/20 border border-yellow-500/40 rounded-full px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-white">
              <strong className="text-yellow-300">Level {currentLevel + 1}</strong> memerlukan <strong className="text-pink-300">{getLevelConfig(currentLevel + 1).targetHearts} hati</strong> 🔥
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentLevel(currentLevel + 1)
              setScore(0)
              setHearts([])
              setPhase({ intro: false, game: true, levelup: false, win: false })
              setGameActive(true)
              heartIdRef.current = 0
            }}
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-bold rounded-full text-base sm:text-lg hover:scale-110 active:scale-95 transition-all shadow-lg hover:shadow-2xl hover:shadow-yellow-500/70 touch-manipulation"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,20,147,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            Lanjut Level {currentLevel + 1}! 💪
          </button>
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
