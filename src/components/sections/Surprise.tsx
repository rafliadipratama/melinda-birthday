import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const Surprise = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const toggleReveal = (idx: number) => {
    const newRevealed = new Set(revealed)
    if (newRevealed.has(idx)) {
      newRevealed.delete(idx)
    } else {
      newRevealed.add(idx)
    }
    setRevealed(newRevealed)
  }

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

  const surprises = [
    {
      icon: '💌',
      title: 'Surat Rahasia',
      content: 'Setiap hari kamu adalah hadiah bagi orang-orang di sekitarmu. Jangan pernah ragu akan nilai dirimu! ❤️'
    },
    {
      icon: '🎁',
      title: 'Wishlist Terwujud',
      content: 'Semua doa dan harapanmu akan kami doakan agar terwujud. Kamu berhak mendapat yang terbaik! 🌟'
    },
    {
      icon: '🌹',
      title: 'Cinta dari Hati',
      content: 'Terima kasih sudah mempercayakan hatimu kepada kami. Kami akan selalu menjaga kepercayaan itu. 💖'
    },
    {
      icon: '✨',
      title: 'Bintang Bersinar',
      content: 'Cahayamu terang bersinar. Terus berbagi kebahagiaan dan harapan kepada dunia. 🌙'
    },
    {
      icon: '🎊',
      title: 'Perayaan Selamanya',
      content: 'Setiap hari dengan dirimu adalah perayaan. Kami beruntung bisa berbagi hidup denganmu. 🎉'
    },
    {
      icon: '💎',
      title: 'Permata Berharga',
      content: 'Kamu adalah permata berharga yang tidak akan pernah bisa diganti. Selamanya bernilai! 👑'
    }
  ]

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-playfair italic mb-2 sm:mb-3" style={{ color: '#FF1493', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}>
            🎁 Ada Kejutan Spesial!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Buka setiap hadiah untuk menemukan pesan spesial dari kami 💝
          </p>
        </motion.div>

        {/* Surprise Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {surprises.map((surprise, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="h-56 sm:h-64"
              style={{ perspective: '1000px' }}
            >
              {/* Card container with flip animation */}
              <div
                onClick={() => toggleReveal(idx)}
                className="relative w-full h-full cursor-pointer transition-transform duration-600 rounded-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: revealed.has(idx) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front side */}
                <div
                  className="absolute inset-0 rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-md p-5 sm:p-6 flex flex-col items-center justify-center transition-all hover:scale-105 hover:border-pink-500/60"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>{surprise.icon}</div>
                  <p className="font-playfair mb-2 sm:mb-3 mt-2" style={{ color: '#FFD700', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>
                    {surprise.title}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)' }}>
                    Klik untuk buka 👆
                  </p>
                </div>

                {/* Back side */}
                <div
                  className="absolute inset-0 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-md p-5 sm:p-6 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <p className="leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                      {surprise.content}
                    </p>
                    <p style={{ color: '#FFD700', fontSize: '1.2rem' }}>✨</p>
                  </div>
                </div>
              </div>

              {/* Confetti burst - shows only when first revealed */}
              {revealed.has(idx) && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={`confetti-${idx}-${i}`}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                        opacity: 0,
                        scale: 0,
                      }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="absolute pointer-events-none"
                      style={{
                        left: '50%',
                        top: '50%',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: ['#FF1493', '#FFD700', '#FF69B4'][Math.floor(Math.random() * 3)],
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="p-5 sm:p-6 md:p-8 rounded-2xl text-center border-2 border-pink-500/50 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-playfair mb-3 sm:mb-4" style={{ color: '#FFD700', fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)' }}>
            Kejutan Terbesar... ✨
          </p>
          <p className="leading-relaxed mb-3 sm:mb-4" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            Kejutan terbesar adalah mengetahui bahwa ada orang yang peduli dengan kebahagiaan kita.
            Dan kamu adalah orang-orang istimewa itu bagi kami.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}>
            Terima kasih telah hadir. Selamat ulang tahun yang penuh kasih sayang! 💕
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Surprise
