import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date()
      let nextBirthday = new Date(now.getFullYear(), 6, 22) // July 22 this year

      // If birthday already passed this year, target next year
      if (now > nextBirthday) {
        nextBirthday = new Date(now.getFullYear() + 1, 6, 22)
      }

      const difference = nextBirthday.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        // Birthday is today!
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 flex items-center" style={{ background: 'linear-gradient(135deg, rgba(15,0,6,.88), rgba(22,0,8,.88))' }}>
      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.h2
          className="font-playfair italic mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: '#FF1493', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}
        >
          ⏳ Hitung Mundur
        </motion.h2>
        <motion.p
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
        >
          Waktunya ulang tahun berikutnya
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds }
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="p-4 sm:p-6 rounded-2xl border backdrop-blur-md transition-all hover:scale-110 cursor-default group"
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
              <motion.div
                key={item.value}
                initial={{ y: -10, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-playfair font-bold mb-2 group-hover:text-pink-300 transition-colors duration-300 group-hover:animate-pulse overflow-hidden"
                style={{ color: '#FFD700', fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}
              >
                {String(item.value).padStart(2, '0')}
              </motion.div>
              <p className="group-hover:text-white transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)' }}>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 sm:mt-12 italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
        >
          Setiap hari adalah kesempatan untuk merayakan kehadiranmu 💖
        </motion.p>
      </div>
    </section>
  )
}
export default CountdownBanner
