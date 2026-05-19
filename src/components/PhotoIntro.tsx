import { motion } from 'framer-motion'

const PhotoIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B1128 0%, #8B1538 50%, #4A0C1A 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 right-10 text-7xl"
        >
          💕
        </motion.div>
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 text-6xl"
        >
          🌹
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        style={{ maxWidth: '900px' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content wrapper */}
        <div className="w-full max-h-full flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center">
          {/* Photo - Left side on desktop */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-2/5 flex justify-center"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm"
              style={{
                maxHeight: '500px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                aspectRatio: '3/4',
              }}
            >
              <img
                src="/photos/p2.jpg"
                alt="Melinda Az Zahra Hamid"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text content - Right side on desktop */}
          <motion.div
            className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-bold leading-tight mb-3 md:mb-4"
              style={{
                color: '#FFD700',
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontFamily: 'Georgia, serif',
              }}
            >
              Ucapan yang Sedikit<br />Lebih Serius
            </motion.h1>

            {/* Intro text */}
            <motion.p
              variants={itemVariants}
              className="mb-4 md:mb-6 leading-relaxed"
              style={{
                color: '#FFE4E1',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
              }}
            >
              Kalau kamu udah baca sampai bagian ini, berarti kamu bener-bener niati nerima kejutan kecil ini di hari ulang tahunmu. Jadi, ada beberapa kata yang pengin aku titip di sini.
            </motion.p>

            {/* Main message box */}
            <motion.div
              variants={itemVariants}
              className="mb-4 md:mb-6 p-4 md:p-6 rounded-2xl md:rounded-3xl w-full"
              style={{
                background: 'linear-gradient(135deg, rgba(255,20,147,0.2) 0%, rgba(219,112,147,0.2) 100%)',
                border: '2px solid rgba(255,182,193,0.4)',
              }}
            >
              <p
                className="leading-relaxed mb-2 md:mb-3 font-medium"
                style={{
                  color: '#FFB6D9',
                  fontSize: 'clamp(0.75rem, 1.6vw, 0.9rem)',
                }}
              >
                Terima kasih sudah jadi kamu selama ini, dengan semua versi kamu; yang lagi seneng, lagi sedih, lagi cape, lagi heboh, semuanya.
              </p>

              <p
                className="leading-relaxed mb-2 md:mb-3"
                style={{
                  color: '#FFE4E1',
                  fontSize: 'clamp(0.75rem, 1.6vw, 0.9rem)',
                }}
              >
                Di umur 25 ini, aku cuma pengin kamu tahu kalau ada seseorang di sini yang bener-bener sayang sama kamu dan bangga sama kamu.
              </p>

              <p
                className="leading-relaxed font-bold"
                style={{
                  color: '#FFD700',
                  fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                }}
              >
                Selamat ulang tahun yang ke-25, Sayang. Semoga tahun ini jadi tahun yang lebih tembut buat kamu. ❤️
              </p>
            </motion.div>

            {/* Signature */}
            <motion.p
              variants={itemVariants}
              className="mb-4 md:mb-6"
              style={{
                color: '#FFB6D9',
                fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                fontWeight: '500',
              }}
            >
              terima kasih sayanggg 😍💕
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onContinue}
              className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-2xl touch-manipulation"
              style={{
                boxShadow: '0 0 20px rgba(255,20,147,0.6)',
                fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 40px rgba(255,20,147,0.9), 0 0 60px rgba(255,20,147,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,20,147,0.6)'
              }}
            >
              Mulai Rayakan 💖
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PhotoIntro
