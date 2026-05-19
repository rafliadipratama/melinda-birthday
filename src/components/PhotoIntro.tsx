import { motion } from 'framer-motion'

const PhotoIntro = ({ onContinue }: { onContinue: () => void }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <div
      className="fixed inset-0 z-50 w-full h-screen flex items-center justify-center overflow-y-auto"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(42,0,13,0.95) 0%, rgba(10,0,5,0.98) 100%)',
      }}
    >
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              ease: 'linear',
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-2xl"
            style={{ left: `${Math.random() * 100}%`, pointerEvents: 'none' }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 min-h-screen"
        style={{ maxWidth: 'clamp(280px, 95vw, 700px)' }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Photo Frame */}
        <motion.div
          variants={photoVariants}
          className="relative mb-6 sm:mb-8 md:mb-10 w-full max-w-sm"
        >
          {/* Outer glow frame */}
          <div
            className="absolute inset-0 rounded-3xl sm:rounded-4xl blur-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,20,147,0.6) 0%, rgba(255,105,180,0.4) 100%)',
              transform: 'scale(1.05)',
            }}
          />

          {/* Border frame */}
          <div
            className="relative rounded-3xl sm:rounded-4xl overflow-hidden border-4 sm:border-8"
            style={{
              borderColor: '#FFD700',
              boxShadow: '0 0 40px rgba(255,215,0,0.5), 0 20px 60px rgba(255,20,147,0.3)',
            }}
          >
            {/* Photo */}
            <img
              src="/photos/p1.jpg"
              alt="Melinda Az Zahra Hamid"
              className="w-full h-auto aspect-square object-cover"
              style={{ aspectRatio: '1/1' }}
            />

            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,20,147,0.1) 100%)',
              }}
            />
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-8 -right-8 text-5xl opacity-60"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-8 -left-8 text-5xl opacity-60"
          >
            🌹
          </motion.div>
        </motion.div>

        {/* Text content */}
        <motion.div variants={itemVariants} className="text-center w-full mb-4 sm:mb-6">
          <h1
            className="font-playfair italic mb-2 sm:mb-3"
            style={{
              color: '#FFD700',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
            }}
          >
            Melinda Az Zahra Hamid
          </h1>
          <p
            className="font-playfair italic"
            style={{
              color: '#FFB6D9',
              fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)',
            }}
          >
            Selamat Ulang Tahun yang ke-25 💕
          </p>
        </motion.div>

        {/* Greeting message */}
        <motion.div
          variants={itemVariants}
          className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(219,112,147,0.15) 100%)',
            border: '2px solid rgba(255,20,147,0.3)',
          }}
        >
          <p
            className="leading-relaxed"
            style={{
              color: '#FFE4E1',
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            }}
          >
            Hari istimewa untuk gadis istimewa yang penuh keanggunan, kehangatan, dan kebaikan.
            Setiap senyum kamu adalah cahaya bagi dunia. Semoga hari ini penuh dengan cinta,
            kebahagiaan, dan kenangan indah yang tak terlupakan. 💕
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 text-center">
          <p
            className="font-playfair italic"
            style={{
              color: '#FFD700',
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            }}
          >
            "Cantik dari luar, lebih cantik dari dalam"
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-red-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-2xl touch-manipulation"
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
          Mulai Rayakan 💖
        </motion.button>

        {/* Bottom decoration */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-center"
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)',
          }}
        >
          Dengan sepenuh cinta ❤️
        </motion.p>
      </motion.div>
    </div>
  )
}

export default PhotoIntro
