import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CandleGame = () => {
  const [candles, setCandles] = useState([
    { id: 1, lit: true, blown: false },
    { id: 2, lit: true, blown: false },
    { id: 3, lit: true, blown: false },
    { id: 4, lit: true, blown: false },
    { id: 5, lit: true, blown: false }
  ])
  const [blowEffect, setBlowEffect] = useState(false)
  const [micActive, setMicActive] = useState(false)
  const [micPermission, setMicPermission] = useState<'granted' | 'denied' | 'pending' | 'unavailable'>('pending')
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const dataArrayRef = useRef<any>(null)
  const streamRef = useRef<MediaStream | null>(null)

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

  const enableMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false } })
      streamRef.current = stream
      setMicPermission('granted')
      setMicActive(true)

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      audioContextRef.current = audioContext
      const analyser = audioContext.createAnalyser()
      analyserRef.current = analyser
      analyser.fftSize = 256
      const bufferLength = analyser.frequencyBinCount
      dataArrayRef.current = new Uint8Array(bufferLength)

      const source = audioContext.createMediaStreamSource(stream)
      source.connect(analyser)

      let lastBlowTime = 0
      const detectBlowing = () => {
        if (!dataArrayRef.current || !analyserRef.current) return

        analyserRef.current.getByteFrequencyData(dataArrayRef.current)
        const average = dataArrayRef.current.reduce((a: number, b: number) => a + b) / dataArrayRef.current.length

        if (average > 45 && Date.now() - lastBlowTime > 500) {
          lastBlowTime = Date.now()
          handleBlow()
        }

        requestAnimationFrame(detectBlowing)
      }

      detectBlowing()
    } catch (error) {
      setMicPermission('denied')
    }
  }

  const disableMicrophone = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    if (audioContextRef.current) {
      audioContextRef.current.close()
    }
    setMicActive(false)
  }

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 flex flex-col items-center justify-center" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-3xl mx-auto text-center w-full">
        <motion.h2
          className="font-playfair text-3xl sm:text-4xl md:text-5xl italic mb-2 sm:mb-3 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: '#FF1493' }}
        >
          🎂 Tiup Lilin Ulang Tahun
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {allBlown ? '✨ Semua lilin sudah padam! ✨' : 'Buat doa terbaik & klik atau tiup lilinnya! 🎉'}
        </motion.p>

        {/* Microphone Button */}
        {!allBlown && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            onClick={micActive ? disableMicrophone : enableMicrophone}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 mb-4 ${
              micActive
                ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-600/50'
                : micPermission === 'denied'
                ? 'bg-gray-600 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 hover:shadow-lg'
            }`}
          >
            {micActive ? '🎤 Mikrofon Aktif' : micPermission === 'denied' ? '❌ Akses Ditolak' : '🎤 Aktifkan Suara'}
          </motion.button>
        )}

        {/* Cake Container with proper spacing for candles */}
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ minHeight: 'clamp(300px, 50vh, 450px)', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="relative" style={{ perspective: '1000px', width: 'clamp(300px, 90vw, 520px)' }}>
            {/* Wind Effect */}
            {blowEffect && (
              <div className="absolute pointer-events-none" style={{ inset: '-128px', top: 0 }}>
                <div
                  className="absolute inset-0"
                  style={{
                    animation: 'windGust 0.6s ease-out',
                    background: 'radial-gradient(ellipse at center, rgba(255,200,100,0.3) 0%, transparent 70%)'
                  }}
                ></div>
              </div>
            )}

            {/* Candles Container */}
            <div className="absolute left-0 right-0 flex gap-10 justify-center px-8 h-40" style={{ top: '-8px' }}>
              {candles.map((candle) => (
                <button
                  key={candle.id}
                  onClick={() => handleCandleClick(candle.id)}
                  disabled={!candle.lit}
                  className="relative flex flex-col items-center focus:outline-none disabled:cursor-default cursor-pointer group transition-transform hover:scale-110"
                  style={{ perspective: '1000px' }}
                >
                  {/* Candle holder - metallic base */}
                  <div
                    className="absolute -bottom-2"
                    style={{
                      width: '28px',
                      height: '8px',
                      background: 'linear-gradient(180deg, #FFD700 0%, #DAA520 100%)',
                      borderRadius: '50%',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.3)',
                      zIndex: -1
                    }}
                  ></div>

                  {/* Candle stick - main wax body */}
                  <div
                    className="relative"
                    style={{
                      width: '14px',
                      height: '120px',
                      background: 'linear-gradient(90deg, #FFFACD 0%, #F5DEB3 35%, #FFE4B5 70%, #F5DEB3 100%)',
                      borderRadius: '50% 50% 40% 40%',
                      boxShadow: candle.lit
                        ? '0 0 25px rgba(255, 200, 0, 0.5), -2px 4px 15px rgba(0,0,0,0.4)'
                        : '-2px 4px 15px rgba(0,0,0,0.4)',
                      transformOrigin: 'bottom center'
                    }}
                  >
                    {/* Candle wick tip */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 -top-2"
                      style={{
                        width: '3px',
                        height: '6px',
                        background: '#4A4A4A',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px rgba(0,0,0,0.6)'
                      }}
                    ></div>
                  </div>

                  {/* Flame */}
                  {candle.lit && (
                    <>
                      {/* Main flame */}
                      <div
                        className="absolute"
                        style={{
                          width: '18px',
                          height: '45px',
                          top: '-35px',
                          left: '50%',
                          background: 'linear-gradient(180deg, #FFFF00 0%, #FFD700 20%, #FFA500 50%, #FF6347 100%)',
                          borderRadius: '50% 50% 50% 0',
                          boxShadow: '0 0 35px rgba(255, 200, 0, 0.95), 0 0 70px rgba(255, 100, 0, 0.7)',
                          animation: 'flameFlicker 0.2s infinite',
                          filter: 'drop-shadow(0 0 15px rgba(255, 200, 0, 0.9))',
                          opacity: candle.lit ? 1 : 0,
                          transform: blowEffect
                            ? 'translateX(-50%) scaleY(0.2) rotate(-45deg)'
                            : 'translateX(-50%) scaleY(1) rotate(0deg)',
                          transformOrigin: 'bottom',
                          transition: 'transform 0.1s ease-out'
                        }}
                      ></div>

                      {/* Inner bright core */}
                      <div
                        className="absolute"
                        style={{
                          width: '9px',
                          height: '25px',
                          top: '-20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'linear-gradient(180deg, #FFFF99 0%, #FFFF00 50%, #FFD700 100%)',
                          borderRadius: '50% 50% 50% 0',
                          opacity: 0.9,
                          filter: 'blur(2px)',
                          animation: 'flameFlicker 0.15s infinite',
                          zIndex: -1
                        }}
                      ></div>

                      {/* Glow halo */}
                      <div
                        className="absolute"
                        style={{
                          width: '50px',
                          height: '50px',
                          top: '-25px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'radial-gradient(circle, rgba(255,200,0,0.4) 0%, transparent 70%)',
                          borderRadius: '50%',
                          filter: 'blur(8px)',
                          pointerEvents: 'none'
                        }}
                      ></div>
                    </>
                  )}

                  {/* Blown out state - smoke wisps */}
                  {!candle.lit && candle.blown && (
                    <div
                      className="absolute"
                      style={{
                        width: '16px',
                        height: '8px',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(80, 80, 80, 0.4)',
                        borderRadius: '50%',
                        filter: 'blur(4px)',
                        animation: 'smoke 2s ease-out forwards'
                      }}
                    ></div>
                  )}

                  {/* Hover hint */}
                  {candle.lit && (
                    <div
                      className="absolute -bottom-10 px-2 py-1 rounded bg-pink-600/80 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ pointerEvents: 'none' }}
                    >
                      Klik!
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Cake Top Layer - Smallest */}
            <div
              className="relative mx-auto"
              style={{
                width: '260px',
                height: '80px',
                borderRadius: '0 0 20px 20px',
                background: 'linear-gradient(135deg, #CD853F 0%, #8B4513 50%, #6B3410 100%)',
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

            {/* Cake Middle Layer */}
            <div
              className="relative mx-auto -mt-4"
              style={{
                width: '340px',
                height: '100px',
                borderRadius: '0 0 30px 30px',
                background: 'linear-gradient(135deg, #D2691E 0%, #8B4513 50%, #654321 100%)',
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

            {/* Cake Base - Largest Bottom Layer */}
            <div
              className="relative mx-auto -mt-4"
              style={{
                width: '420px',
                height: '140px',
                borderRadius: '0 0 40px 40px',
                background: 'linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #654321 100%)',
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

          </div>
        </motion.div>

        {/* Blow Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          onClick={handleBlow}
          disabled={allBlown}
          className={`px-6 sm:px-10 md:px-12 py-2 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 ${
            allBlown
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-pink-600 to-red-700 hover:scale-110 active:scale-95 hover:shadow-2xl hover:shadow-pink-600/50'
          } text-white touch-manipulation mb-6 sm:mb-8`}
        >
          {allBlown ? '🎊 Lilin Sudah Padam!' : '💨 Tiup Semua Lilin!'}
        </motion.button>

        {/* Confetti burst on celebration */}
        {allBlown && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: (Math.random() - 0.5) * 300,
                  y: (Math.random() - 0.5) * 300,
                  opacity: 0,
                  scale: 0,
                  rotate: Math.random() * 360,
                }}
                transition={{ duration: 1, ease: 'easeOut', delay: Math.random() * 0.2 }}
                className="fixed pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: ['#FF1493', '#FFD700', '#FF69B4', '#00FF00', '#FF00FF'][Math.floor(Math.random() * 5)],
                  zIndex: 40,
                }}
              />
            ))}
          </>
        )}

        {/* Wish text after blown */}
        {allBlown && (
          <motion.div
            className="p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl border border-pink-500/50 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md animate-in fade-in"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-2xl sm:text-3xl font-playfair mb-3 sm:mb-4" style={{ color: '#FFD700' }}>
              ✨ Doa Tersampaikan! ✨
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Semua lilin sudah padam dan doamu telah terbang tinggi ke langit! 🌙
            </p>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Semoga semua harapan dan impian terindahmu terwujud di tahun ini.
              Kamu layak mendapatkan yang terbaik! 💕
            </p>
          </motion.div>
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

          @keyframes smoke {
            0% {
              opacity: 0.6;
              transform: translateX(-50%) translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateX(-50%) translateY(-30px);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

export default CandleGame
