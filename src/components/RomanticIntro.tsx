import { motion } from 'framer-motion'

const RomanticIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <div className="fixed inset-0 z-50 w-full h-screen flex items-center justify-center overflow-y-auto"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(42,0,13,0.99), rgba(10,0,5,0.99))',
      }}>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100, x: Math.random() * 100 - 50 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              ease: 'linear',
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-xl sm:text-2xl md:text-3xl"
            style={{ left: `${Math.random() * 100}%`, pointerEvents: 'none' }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 min-h-screen"
        style={{ maxWidth: 'clamp(280px, 90vw, 600px)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Opening emoji */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-4 md:mb-5">
          <div className="text-3xl sm:text-4xl md:text-5xl animate-pulse">💌</div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-xl sm:text-3xl md:text-5xl italic mb-2 sm:mb-3 md:mb-4 leading-tight text-center"
          style={{
            background: 'linear-gradient(to right, #FF1493, #FFD700, #FF69B4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: 'clamp(1.25rem, 6vw, 3rem)',
          }}
        >
          Melinda Az Zahra Hamid
        </motion.h1>

        {/* Main message */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-4 md:mb-5">
          <p className="text-sm sm:text-base md:text-lg font-playfair italic text-center" style={{ color: '#FFB6D9', fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)' }}>
            Selamat Ulang Tahun yang ke-25 💕
          </p>
        </motion.div>

        {/* Romantic message */}
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md w-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,20,147,0.2) 0%, rgba(255,105,180,0.2) 100%)',
            border: '2px solid rgba(255,20,147,0.4)',
          }}
        >
          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3" style={{ color: '#FFE4E1', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>
            25 tahun lamanya kamu memukau dunia dengan kehadiran, kehangatan, dan keindahan hatimu.
            Setiap hari adalah berkat karena kamu ada.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: '#FFE4E1', fontSize: 'clamp(0.75rem, 2vw, 1rem)' }}>
            Hari ini adalah hari untukmu—hari untuk merayakan setiap momen indah, setiap tawa, setiap
            impian yang telah dan akan kamu raih. 🌹✨
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6 px-2 text-center">
          <p className="text-xs sm:text-sm md:text-base font-playfair italic" style={{ color: '#FFD700', fontSize: 'clamp(0.75rem, 1.8vw, 1rem)' }}>
            "Kamu adalah cahaya yang menerangi setiap sudut kehidupanku"
          </p>
          <p className="text-xs sm:text-xs md:text-sm mt-1 sm:mt-2" style={{ color: '#FF69B4', fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}>
            — Dengan Sepenuh Cinta ❤️
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full text-xs sm:text-sm md:text-base transition-all shadow-lg hover:shadow-2xl touch-manipulation"
          style={{
            boxShadow: '0 0 30px rgba(255,20,147,0.5)',
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(255,20,147,0.8), 0 0 60px rgba(255,20,147,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255,20,147,0.5)'
          }}
        >
          Mari Rayakan Hari Istimewamu 💖
        </motion.button>
      </motion.div>
    </div>
  )
}

export default RomanticIntro
