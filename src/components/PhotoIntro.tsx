import { motion } from 'framer-motion'

const PhotoIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  }

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center overflow-y-auto py-6 sm:py-8"
      style={{
        background: 'linear-gradient(180deg, #e8c9d6 0%, #f5a9b8 50%, #e8c9d6 100%)',
      }}
    >
      <motion.div
        className="relative z-10 w-full flex flex-col items-center px-3 sm:px-4 md:px-6"
        style={{ maxWidth: 'clamp(300px, 95vw, 700px)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Photo */}
        <motion.div variants={photoVariants} className="mb-6 sm:mb-8 w-full">
          <div
            className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl"
            style={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
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

        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-4 sm:mb-6 w-full">
          <h1
            className="font-bold leading-tight"
            style={{
              color: '#8B1538',
              fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
              fontFamily: 'Georgia, serif',
            }}
          >
            Ucapan yang Sedikit<br />Lebih Serius
          </h1>
        </motion.div>

        {/* Intro text */}
        <motion.p
          variants={itemVariants}
          className="text-center mb-5 sm:mb-7 leading-relaxed"
          style={{
            color: '#A01A2E',
            fontSize: 'clamp(0.875rem, 2.2vw, 1rem)',
          }}
        >
          Kalau kamu udah baca sampai bagian ini, berarti kamu bener-bener niati nerima kejutan kecil ini di hari ulang tahunmu. Jadi, ada beberapa kata yang pengin aku titip di sini.
        </motion.p>

        {/* Main message box */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8 p-5 sm:p-7 rounded-3xl w-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(255,192,203,0.6) 100%)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          <p
            className="leading-relaxed mb-3 sm:mb-4 text-center font-medium"
            style={{
              color: '#6B3140',
              fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            }}
          >
            Terima kasih sudah jadi kamu selama ini, dengan semua versi kamu; yang lagi seneng, lagi sedih, lagi cape, lagi heboh, semuanya.
          </p>

          <p
            className="leading-relaxed mb-3 sm:mb-4 text-center"
            style={{
              color: '#8B1538',
              fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            }}
          >
            Di umur 25 ini, aku cuma pengin kamu tahu kalau ada seseorang di sini yang bener-bener sayang sama kamu dan bangga sama kamu.
          </p>

          <p
            className="leading-relaxed text-center font-bold"
            style={{
              color: '#8B1538',
              fontSize: 'clamp(0.85rem, 2.2vw, 1.05rem)',
            }}
          >
            Selamat ulang tahun yang ke-25, Sayang. Semoga tahun ini jadi tahun yang lebih tembut buat kamu. ❤️
          </p>
        </motion.div>

        {/* Signature */}
        <motion.p
          variants={itemVariants}
          className="text-center mb-6 sm:mb-8"
          style={{
            color: '#8B1538',
            fontSize: 'clamp(0.75rem, 1.8vw, 0.95rem)',
            fontWeight: '500',
          }}
        >
          terima kasih sayanggg 😍💕
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-2xl touch-manipulation"
          style={{
            boxShadow: '0 0 30px rgba(255,20,147,0.5)',
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1.2rem, 4vw, 2.5rem)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(255,20,147,0.8), 0 0 60px rgba(255,20,147,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255,20,147,0.5)'
          }}
        >
          Mulai Rayakan 💖
        </motion.button>
      </motion.div>
    </div>
  )
}

export default PhotoIntro
