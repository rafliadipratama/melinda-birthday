import { motion } from 'framer-motion'

const PhotoIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.4, 0.8, 0.4],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B1128 0%, #8B1538 50%, #4A0C1A 100%)',
      }}
    >
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating heart 1 */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            opacity: [0.3, 0.9, 0.3],
            x: [-15, 15, -15],
            scale: [0.8, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-20 text-5xl md:text-6xl filter drop-shadow-lg"
        >
          💕
        </motion.div>

        {/* Floating heart 2 */}
        <motion.div
          animate={{
            y: [20, -50, 20],
            opacity: [0.2, 0.8, 0.2],
            x: [20, -20, 20],
            scale: [0.7, 1, 0.7],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/3 left-12 text-4xl md:text-5xl filter drop-shadow-lg"
        >
          💖
        </motion.div>

        {/* Floating heart 3 */}
        <motion.div
          animate={{
            y: [-10, 50, -10],
            opacity: [0.25, 0.7, 0.25],
            x: [-25, 25, -25],
            scale: [0.75, 1, 0.75],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 right-1/4 text-4xl md:text-5xl filter drop-shadow-lg"
        >
          💗
        </motion.div>

        {/* Floating heart 4 */}
        <motion.div
          animate={{
            y: [30, -40, 30],
            opacity: [0.2, 0.8, 0.2],
            x: [25, -25, 25],
            scale: [0.8, 1, 0.8],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/3 left-1/4 text-4xl md:text-5xl filter drop-shadow-lg"
        >
          ❤️
        </motion.div>

        {/* Floating rose */}
        <motion.div
          animate={{
            y: [40, -50, 40],
            opacity: [0.15, 0.6, 0.15],
            rotate: [0, 180, 360],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/3 text-5xl md:text-6xl filter drop-shadow-lg"
        >
          🌹
        </motion.div>

        {/* Floating heart 5 */}
        <motion.div
          animate={{
            y: [-20, 40, -20],
            opacity: [0.3, 0.9, 0.3],
            x: [-20, 20, -20],
            scale: [0.75, 1, 0.75],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute bottom-1/2 right-10 text-3xl md:text-4xl filter drop-shadow-lg"
        >
          💕
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-3 xs:px-4 sm:px-6 md:px-8 py-8 sm:py-12"
        style={{ maxWidth: '1000px', overflowY: 'auto' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Content wrapper */}
        <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center justify-center">
          {/* Photo - Top on mobile, Left side on desktop */}
          <motion.div
            variants={itemVariants}
            className="w-full xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 flex justify-center flex-shrink-0"
          >
            <div
              className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full"
              style={{
                maxWidth: '320px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                aspectRatio: '3/4',
              }}
            >
              <img
                src="/photos/intro.jpg"
                alt="Melinda Az Zahra Hamid"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text content - Bottom on mobile, Right side on desktop */}
          <motion.div
            className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
          >
            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="font-bold leading-tight mb-3 sm:mb-5 lg:mb-7 px-2 sm:px-0"
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(1.3rem, 5vw, 2.2rem)',
                fontFamily: 'Georgia, serif',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              Selamat Ulang Tahun<br />yang ke 25<br />Melinda Az Zahra Hamid
            </motion.h1>

            {/* Main message box */}
            <motion.div
              variants={itemVariants}
              className="mb-6 sm:mb-8 lg:mb-10 p-4 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl lg:rounded-3xl w-full max-w-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(255,20,147,0.25) 0%, rgba(219,112,147,0.25) 100%)',
                border: '2px solid rgba(255,182,193,0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <p
                className="leading-relaxed font-cormorant"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(0.8rem, 2.2vw, 1rem)',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                Hari ini kamu resmi 25 tahun, dan aku pengin kasih sesuatu yang kecil tapi tulus buat kamu. Klik button Rayakan untuk lihat apa yg aku siapkan, ini semua aku bikin khusus buat hari spesialmu. 💕
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.95, y: 0 }}
              onClick={onContinue}
              className="px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-2xl touch-manipulation relative overflow-hidden whitespace-nowrap"
              style={{
                boxShadow: '0 0 20px rgba(255,20,147,0.6)',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,20,147,0.9), 0 0 60px rgba(255,20,147,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,20,147,0.6)'
              }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ rotateZ: 360 }}
                transition={{ duration: 0.6 }}
              >
                💖
              </motion.span>
              {' '}Mulai Rayakan
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PhotoIntro
