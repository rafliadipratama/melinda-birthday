import { motion } from 'framer-motion'

const RomanticIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(42,0,13,0.99), rgba(10,0,5,0.99))',
      }}>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100, x: Math.random() * 100 - 50 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: window.innerHeight + 100,
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              ease: 'linear',
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-2xl sm:text-3xl md:text-4xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center px-4 sm:px-6 md:px-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center w-full h-full py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Opening emoji */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6 md:mb-8">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4 animate-pulse">💌</div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-2xl sm:text-4xl md:text-6xl italic mb-3 sm:mb-4 md:mb-6 leading-tight break-words"
          style={{
            background: 'linear-gradient(to right, #FF1493, #FFD700, #FF69B4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Melinda Az Zahra Hamid
        </motion.h1>

        {/* Main message */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6 md:mb-8">
          <p className="text-base sm:text-lg md:text-2xl font-playfair italic" style={{ color: '#FFB6D9' }}>
            Selamat Ulang Tahun yang ke-25 💕
          </p>
        </motion.div>

        {/* Romantic message */}
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8 md:mb-10 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-md w-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,20,147,0.2) 0%, rgba(255,105,180,0.2) 100%)',
            border: '2px solid rgba(255,20,147,0.4)',
          }}
        >
          <p className="text-xs sm:text-sm md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6" style={{ color: '#FFE4E1' }}>
            25 tahun lamanya kamu memukau dunia dengan kehadiran, kehangatan, dan keindahan hatimu.
            Setiap hari adalah berkat karena kamu ada.
          </p>
          <p className="text-xs sm:text-sm md:text-lg leading-relaxed" style={{ color: '#FFE4E1' }}>
            Hari ini adalah hari untukmu—hari untuk merayakan setiap momen indah, setiap tawa, setiap
            impian yang telah dan akan kamu raih. 🌹✨
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 md:mb-12 px-2">
          <p className="text-xs sm:text-base md:text-xl font-playfair italic" style={{ color: '#FFD700' }}>
            "Kamu adalah cahaya yang menerangi setiap sudut kehidupanku"
          </p>
          <p className="text-xs sm:text-sm md:text-base mt-2 sm:mt-3" style={{ color: '#FF69B4' }}>
            — Dengan Sepenuh Cinta ❤️
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full text-xs sm:text-sm md:text-lg transition-all shadow-lg hover:shadow-2xl touch-manipulation whitespace-nowrap"
          style={{
            boxShadow: '0 0 30px rgba(255,20,147,0.5)',
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
