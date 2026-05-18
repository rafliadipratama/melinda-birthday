import { useState } from 'react'

const CandleGame = () => {
  const [blown, setBlown] = useState(false)
  const [candles, setCandles] = useState([
    { id: 1, lit: true },
    { id: 2, lit: true },
    { id: 3, lit: true },
    { id: 4, lit: true },
    { id: 5, lit: true }
  ])

  const allBlown = candles.every(c => !c.lit)

  const handleBlow = () => {
    setCandles(candles.map(c => ({ ...c, lit: false })))
    setBlown(true)
  }

  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-playfair text-5xl italic mb-4" style={{ color: '#FF1493' }}>
          🎂 Tiup Lilin Ulang Tahun
        </h2>
        <p className="text-lg mb-12" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Buat doa terbaik & tiup lilinnya! 🎉
        </p>

        {/* Cake with Candles */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Cake */}
            <div
              className="w-96 h-32 rounded-b-3xl flex items-end justify-center relative"
              style={{
                background: 'linear-gradient(180deg, #8B4513 0%, #654321 100%)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}>

              {/* Candles */}
              <div className="flex gap-8 mb-8 absolute -top-20">
                {candles.map((candle) => (
                  <div key={candle.id} className="flex flex-col items-center">
                    {/* Candle stick */}
                    <div className="w-2 h-20 bg-yellow-50 rounded-sm shadow-lg"></div>

                    {/* Flame */}
                    {candle.lit && (
                      <div
                        className="absolute top-0 w-3 h-8 animate-bounce"
                        style={{
                          background: 'linear-gradient(180deg, #FFD700 0%, #FF6347 50%, #FFD700 100%)',
                          borderRadius: '50% 50% 50% 0',
                          filter: 'drop-shadow(0 0 10px rgba(255, 100, 0, 0.8))',
                          animation: 'flicker 0.15s infinite'
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Cake decoration */}
              <div className="text-center mb-4">
                <p className="text-2xl">🍰</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-xl mb-8" style={{ color: '#FFD700' }}>
          {allBlown ? '✨ Semua lilin sudah padam! ✨' : 'Segera untuk tiup lilinnya...'}
        </p>

        {/* Blow Button */}
        <button
          onClick={handleBlow}
          disabled={allBlown}
          className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            allBlown
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-600 to-red-700 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-pink-600/50'
          } text-white touch-manipulation`}
        >
          {allBlown ? '🎊 Lilin Padam!' : 'Tiup Lilin! 💨'}
        </button>

        {/* Wish text after blown */}
        {allBlown && (
          <div className="mt-12 p-8 rounded-2xl border border-pink-500/30 bg-pink-600/10 backdrop-blur-md animate-in fade-in">
            <p className="text-lg mb-4" style={{ color: '#FFD700' }}>
              Doa terbaikmu telah tersampaikan 💫
            </p>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Semoga semua harapan dan impian terindahmu terwujud di tahun ini.
              Kamu layak mendapatkan yang terbaik! ✨
            </p>
          </div>
        )}

        <style>{`
          @keyframes flicker {
            0%, 100% { transform: scaleY(1) rotate(0deg); }
            25% { transform: scaleY(1.1) rotate(-2deg); }
            50% { transform: scaleY(0.95) rotate(2deg); }
            75% { transform: scaleY(1.05) rotate(-1deg); }
          }
        `}</style>
      </div>
    </section>
  )
}

export default CandleGame
