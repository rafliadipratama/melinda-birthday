import { useEffect, useState } from 'react'

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateCountdown = () => {
      const nextBirthday = new Date(new Date().getFullYear() + 1, 6, 22) // July 22
      const now = new Date()
      const difference = nextBirthday.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen px-6 py-20 flex items-center" style={{ background: 'linear-gradient(135deg, rgba(15,0,6,.88), rgba(22,0,8,.88))' }}>
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2 className="font-playfair text-5xl italic mb-6" style={{ color: '#FF1493' }}>⏳ Hitung Mundur</h2>
        <p className="text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>Waktunya ulang tahun berikutnya</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-110 cursor-default group"
              style={{
                backgroundColor: 'rgba(255,20,147,0.1)',
                borderColor: 'rgba(255,20,147,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255,20,147,0.7), 0 0 50px rgba(255,215,0,0.3)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.3)'
              }}>
              <div className="font-playfair text-4xl md:text-5xl font-bold mb-3 group-hover:text-pink-300 transition-colors duration-300 group-hover:animate-pulse" style={{ color: '#FFD700' }}>
                {String(item.value).padStart(2, '0')}
              </div>
              <p className="text-sm group-hover:text-white transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-lg italic" style={{ color: 'rgba(255,255,255,0.6)' }}>Setiap hari adalah kesempatan untuk merayakan kehadiranmu 💖</p>
      </div>
    </section>
  )
}
export default CountdownBanner
