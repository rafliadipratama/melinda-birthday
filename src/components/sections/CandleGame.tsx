import { useState } from 'react'

const CandleGame = () => {
  const [candles, setCandles] = useState([
    { id: 1, lit: true, blown: false },
    { id: 2, lit: true, blown: false },
    { id: 3, lit: true, blown: false },
    { id: 4, lit: true, blown: false },
    { id: 5, lit: true, blown: false }
  ])
  const [blowEffect, setBlowEffect] = useState(false)

  const allBlown = candles.every(c => !c.lit)

  const handleCandleClick = (id: number) => {
    if (!candles.find(c => c.id === id)?.lit) return

    setCandles(prev => prev.map(c =>
      c.id === id ? { ...c, lit: false, blown: true } : c
    ))

    triggerBlowEffect()
  }

  const handleBlow = () => {
    setCandles(prev => prev.map(c => ({ ...c, lit: false, blown: true })))
    triggerBlowEffect()
  }

  const triggerBlowEffect = () => {
    setBlowEffect(true)
    setTimeout(() => setBlowEffect(false), 600)
  }

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-playfair text-5xl italic mb-2" style={{ color: '#FF1493' }}>
          🎂 Tiup Lilin Ulang Tahun
        </h2>
        <p className="text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {allBlown ? '✨ Semua lilin sudah padam! ✨' : 'Buat doa terbaik & klik atau tiup lilinnya! 🎉'}
        </p>

        {/* Cake with Candles */}
        <div className="mb-16 flex justify-center">
          <div className="relative" style={{ perspective: '1000px' }}>
            {/* Wind Effect */}
            {blowEffect && (
              <div className="absolute -inset-32 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    animation: 'windGust 0.6s ease-out',
                    background: 'radial-gradient(ellipse at center, rgba(255,200,100,0.3) 0%, transparent 70%)'
                  }}
                ></div>
              </div>
            )}

            {/* Cake Base - Large Bottom Layer */}
            <div
              className="relative mx-auto"
              style={{
                width: '420px',
                height: '140px',
                borderRadius: '0 0 40px 40px',
                background: 'linear-gradient(135deg, #D2691E 0%, #8B4513 50%, #654321 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.7), inset -5px -5px 20px rgba(0,0,0,0.5)',
                position: 'relative'
              }}>

              {/* Frosting on bottom layer */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '25px',
                  background: 'linear-gradient(180deg, #FFB6D9 0%, #FF69B4 100%)',
                  borderRadius: '40px 40px 0 0',
                  boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.3)'
                }}
              ></div>

              {/* Sprinkles */}
              <div className="absolute top-6 left-0 right-0 flex justify-around px-8">
                {['🍮', '🍓', '✨', '🍮', '🍓'].map((item, i) => (
                  <span key={i} className="text-lg">{item}</span>
                ))}
              </div>
            </div>

            {/* Cake Middle Layer */}
            <div
              className="relative mx-auto -mt-4"
              style={{
                width: '340px',
                height: '100px',
                borderRadius: '0 0 30px 30px',
                background: 'linear-gradient(135deg, #CD853F 0%, #8B4513 50%, #5C2E0F 100%)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.6), inset -4px -4px 15px rgba(0,0,0,0.4)',
                position: 'relative'
              }}>

              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '20px',
                  background: 'linear-gradient(180deg, #FFB6D9 0%, #FF69B4 100%)',
                  borderRadius: '30px 30px 0 0',
                  boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.3)'
                }}
              ></div>
            </div>

            {/* Cake Top Layer */}
            <div
              className="relative mx-auto -mt-3"
              style={{
                width: '260px',
                height: '80px',
                borderRadius: '0 0 20px 20px',
                background: 'linear-gradient(135deg, #DAA520 0%, #8B4513 50%, #5C2E0F 100%)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset -3px -3px 10px rgba(0,0,0,0.3)',
                position: 'relative'
              }}>

              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '16px',
                  background: 'linear-gradient(180deg, #FFB6D9 0%, #FF69B4 100%)',
                  borderRadius: '20px 20px 0 0'
                }}
              ></div>
            </div>

            {/* Candles - positioned absolutely above cake */}
            <div className="absolute -top-40 left-0 right-0 flex gap-10 justify-center px-8">
              {candles.map((candle) => (
                <button
                  key={candle.id}
                  onClick={() => handleCandleClick(candle.id)}
                  disabled={!candle.lit}
                  className="relative flex flex-col items-center focus:outline-none disabled:cursor-default cursor-pointer group"
                  style={{ perspective: '1000px' }}
                >
                  {/* Candle stick */}
                  <div
                    className="w-3 h-32 rounded-full transition-all duration-300 group-hover:scale-110 relative"
                    style={{
                      background: 'linear-gradient(90deg, #FFFACD 0%, #FFE4B5 50%, #FFE4B5 100%)',
                      boxShadow: candle.lit ? '0 0 20px rgba(255, 200, 100, 0.6)' : '0 2px 8px rgba(0,0,0,0.3)',
                      transformOrigin: 'bottom'
                    }}
                  ></div>

                  {/* Flame */}
                  {candle.lit && (
                    <>
                      {/* Main flame */}
                      <div
                        className="absolute top-0"
                        style={{
                          width: '20px',
                          height: '40px',
                          background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 40%, #FF6347 100%)',
                          borderRadius: '50% 50% 50% 0',
                          boxShadow: '0 0 30px rgba(255, 165, 0, 0.9), 0 0 60px rgba(255, 100, 0, 0.6)',
                          animation: 'flameFlicker 0.2s infinite',
                          filter: 'drop-shadow(0 0 15px rgba(255, 200, 0, 0.8))',
                          transform: blowEffect ? 'scaleY(0.3) rotate(45deg)' : 'scaleY(1) rotate(0deg)',
                          transformOrigin: 'bottom',
                          transition: 'transform 0.1s ease-out'
                        }}
                      ></div>

                      {/* Inner glow */}
                      <div
                        className="absolute top-2"
                        style={{
                          width: '10px',
                          height: '20px',
                          background: 'linear-gradient(180deg, #FFFF00 0%, #FFD700 100%)',
                          borderRadius: '50% 50% 50% 0',
                          opacity: 0.8,
                          filter: 'blur(3px)',
                          animation: 'flameFlicker 0.15s infinite'
                        }}
                      ></div>

                      {/* Tip glow */}
                      <div
                        className="absolute top-0"
                        style={{
                          width: '20px',
                          height: '15px',
                          background: 'radial-gradient(ellipse, rgba(255,255,0,0.5) 0%, transparent 70%)',
                          borderRadius: '50%',
                          filter: 'blur(5px)'
                        }}
                      ></div>
                    </>
                  )}

                  {/* Blown out state */}
                  {!candle.lit && candle.blown && (
                    <div
                      className="absolute top-0"
                      style={{
                        width: '20px',
                        height: '8px',
                        background: 'rgba(100, 100, 100, 0.5)',
                        borderRadius: '50%',
                        opacity: 0.6
                      }}
                    ></div>
                  )}

                  {/* Hover hint */}
                  {candle.lit && (
                    <div
                      className="absolute -bottom-8 px-2 py-1 rounded bg-pink-600/80 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ pointerEvents: 'none' }}
                    >
                      Klik!
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blow Button */}
        <button
          onClick={handleBlow}
          disabled={allBlown}
          className={`px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            allBlown
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-600 to-red-700 hover:scale-110 active:scale-95 hover:shadow-2xl hover:shadow-pink-600/50'
          } text-white touch-manipulation mb-8`}
        >
          {allBlown ? '🎊 Lilin Sudah Padam!' : '💨 Tiup Semua Lilin!'}
        </button>

        {/* Wish text after blown */}
        {allBlown && (
          <div className="p-10 rounded-2xl border border-pink-500/50 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md animate-in fade-in">
            <p className="text-3xl font-playfair mb-4" style={{ color: '#FFD700' }}>
              ✨ Doa Tersampaikan! ✨
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Semua lilin sudah padam dan doamu telah terbang tinggi ke langit! 🌙
            </p>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Semoga semua harapan dan impian terindahmu terwujud di tahun ini.
              Kamu layak mendapatkan yang terbaik! 💕
            </p>
          </div>
        )}

        <style>{`
          @keyframes flameFlicker {
            0%, 100% {
              transform: scaleY(1) scaleX(1) rotate(0deg);
            }
            25% {
              transform: scaleY(1.15) scaleX(0.9) rotate(-3deg);
            }
            50% {
              transform: scaleY(0.95) scaleX(1.05) rotate(2deg);
            }
            75% {
              transform: scaleY(1.1) scaleX(0.95) rotate(-2deg);
            }
          }

          @keyframes windGust {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateX(30px);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default CandleGame
