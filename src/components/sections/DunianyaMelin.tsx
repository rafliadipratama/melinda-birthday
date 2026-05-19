import { motion } from 'framer-motion'

const DunianyaMelin = () => {
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

  const traits = [
    { emoji: '💪', title: 'Kuat & Tangguh', desc: 'Mampu menghadapi tantangan apapun dengan ketenangan' },
    { emoji: '✨', title: 'Bercahaya', desc: 'Kehadiranmu membuat orang lain merasa lebih baik' },
    { emoji: '❤️', title: 'Penuh Kasih Sayang', desc: 'Selalu peduli & memberikan yang terbaik untuk orang terdekat' },
    { emoji: '🎯', title: 'Fokus & Determined', desc: 'Tahu apa yang diinginkan & berusaha keras meraihnya' },
    { emoji: '🌟', title: 'Inspiratif', desc: 'Menjadi teladan & motivasi bagi banyak orang' },
    { emoji: '💝', title: 'Authentic', desc: 'Tetap jadi diri sendiri yang asli & genuine' }
  ]

  const favorites = [
    { emoji: '🍫', title: 'Dark Chocolate Lover', desc: 'Menyukai cita rasa dark chocolate yang kaya dan sophisticated' },
    { emoji: '🎵', title: 'The Weeknd Fan', desc: 'Pecinta musik The Weeknd dengan melodi yang mendalam' },
    { emoji: '👟', title: 'Converse Enthusiast', desc: 'Style clasic dengan sepatu Converse favorit' },
    { emoji: '🍜', title: 'Makanan Berkuah', desc: 'Menyukai warm comfort food dengan kuah yang lezat' },
    { emoji: '📺', title: 'Normal People Binge', desc: 'Penonton setia series "Normal People" dengan cerita yang mendalam' }
  ]

  const memories = [
    'Tawa Anda yang membuat setiap momen menjadi spesial',
    'Cara Anda mendengarkan dengan sepenuh hati',
    'Dedikasi Anda pada setiap hal yang Anda lakukan',
    'Keberanian Anda dalam mengambil keputusan',
    'Kehangatanmu yang membuat semua terasa aman'
  ]

  return (
    <section className="min-h-screen px-3 xs:px-4 sm:px-6 md:px-8 py-10 xs:py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0a0005' }}>
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
            🌸 Dunianya Melinda
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Cerita tentang seseorang yang istimewa
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="mb-10 sm:mb-12 p-5 sm:p-6 md:p-8 rounded-2xl border border-pink-500/30 bg-pink-600/10 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-playfair mb-3 sm:mb-4" style={{ color: '#FFD700', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            Tentang Dirimu
          </h3>
          <p className="leading-relaxed mb-2 sm:mb-3" style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            Melinda Az Zahra Hamid adalah sosok yang luar biasa. Bukan hanya karena penampilan,
            tetapi karena kepribadian yang hangat, hati yang mulia, dan semangat yang tidak pernah padam.
          </p>
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            Dalam setiap interaksi, Anda menunjukkan kualitas-kualitas indah yang membuat orang
            sekitarmu merasa dihargai dan didengar. Itulah mengapa Anda sangat spesial.
          </p>
        </motion.div>

        {/* Favorites Section */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-playfair mb-5 sm:mb-6 text-center" style={{ color: '#FFD700', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            Hal yang Melin Sukai ✨
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {favorites.map((fav, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 sm:p-5 rounded-2xl border border-yellow-500/30 bg-yellow-600/10 backdrop-blur-md hover:bg-yellow-600/20 transition-all hover:scale-105"
              >
                <p className="mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)' }}>{fav.emoji}</p>
                <h4 className="font-playfair mb-1.5 sm:mb-2" style={{ color: '#FFD700', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
                  {fav.title}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}>
                  {fav.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Traits Grid */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-playfair mb-5 sm:mb-6 text-center" style={{ color: '#FFD700', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            Kualitas Terbaik Darimu
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {traits.map((trait, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 sm:p-5 rounded-2xl border border-pink-500/30 bg-pink-600/10 backdrop-blur-md hover:bg-pink-600/20 transition-all hover:scale-105"
              >
                <p className="mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2rem)' }}>{trait.emoji}</p>
                <h4 className="font-playfair mb-1.5 sm:mb-2" style={{ color: '#FFD700', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
                  {trait.title}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}>
                  {trait.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Memories Section */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-playfair mb-5 sm:mb-6 text-center" style={{ color: '#FFD700', fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            Hal yang Kami Hargai Darimu
          </h3>
          <motion.div
            className="space-y-2.5 sm:space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {memories.map((memory, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-4 sm:p-5 rounded-2xl border-l-4 border-pink-500 bg-gradient-to-r from-pink-600/10 to-transparent"
              >
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                  ✓ {memory}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          className="p-5 sm:p-6 md:p-8 rounded-2xl text-center border border-yellow-500/30 bg-yellow-600/10 backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-2 sm:mb-3" style={{ color: '#FFD700', fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)' }}>
            Terima kasih telah menjadi diri sendiri yang indah ✨
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
            Dunia lebih cerah karena kehadiranmu. Terus bersinar seperti sekarang ini! 💫
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DunianyaMelin
