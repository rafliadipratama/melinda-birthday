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
        {[...Array(20)].map((_, i) => (
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
            className="absolute text-4xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center px-6 sm:px-8 max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Opening emoji */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-6xl mb-4 animate-pulse">💌</div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair text-4xl sm:text-6xl italic mb-6 leading-tight"
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
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl font-playfair italic mb-8" style={{ color: '#FFB6D9' }}>
            Selamat Ulang Tahun yang ke-25 💕
          </p>
        </motion.div>

        {/* Romantic message */}
        <motion.div
          variants={itemVariants}
          className="mb-10 p-8 rounded-3xl backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(255,20,147,0.2) 0%, rgba(255,105,180,0.2) 100%)',
            border: '2px solid rgba(255,20,147,0.4)',
          }}
        >
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: '#FFE4E1' }}>
            25 tahun lamanya kamu memukau dunia dengan kehadiran, kehangatan, dan keindahan hatimu.
            Setiap hari adalah berkat karena kamu ada.
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#FFE4E1' }}>
            Hari ini adalah hari untukmu—hari untuk merayakan setiap momen indah, setiap tawa, setiap
            impian yang telah dan akan kamu raih. 🌹✨
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg sm:text-xl font-playfair italic" style={{ color: '#FFD700' }}>
            "Kamu adalah cahaya yang menerangi setiap sudut kehidupanku"
          </p>
          <p className="text-base mt-3" style={{ color: '#FF69B4' }}>
            — Dengan Sepenuh Cinta ❤️
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-10 py-4 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full text-lg transition-all shadow-lg hover:shadow-2xl hover:shadow-pink-600/70 touch-manipulation"
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
