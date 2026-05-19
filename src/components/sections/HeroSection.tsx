import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface HeroSectionProps {
  onExplore?: () => void
}

const HeroSection = ({ onExplore }: HeroSectionProps) => {
  const hearts = Array.from({ length: 15 }, (_, i) => i)
  const celebrationText = "Happy Birthday, Melinda! 💖"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const heartVariants = {
    hidden: { opacity: 0, y: 50, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
    animate: {
      y: [0, -40, 0],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-wine-900 via-wine-800 to-wine-950">
      {/* Animated falling petals */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100, x: Math.random() * 100 - 50, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: window.innerHeight + 100,
              x: Math.random() * 100 - 50,
              scale: [0, 1, 1, 0.5],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              ease: 'linear',
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute text-4xl filter drop-shadow-lg"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating hearts decoration */}
          <motion.div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={heartVariants}
                initial="hidden"
                animate={['visible', 'animate']}
                className="text-4xl sm:text-5xl md:text-6xl"
              >
                {i % 2 === 0 ? '💖' : '💕'}
              </motion.div>
            ))}
          </motion.div>

          {/* Age milestone badge */}
          <motion.div
            variants={titleVariants}
            className="mb-4 sm:mb-6 inline-block"
          >
            <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-lg">
              <span className="font-playfair font-bold text-white" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                Turning 25! ✨
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={titleVariants} className="mb-6 sm:mb-8">
            <h1 className="font-playfair font-bold italic mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)' }}>
              <span className="bg-gradient-to-r from-blush via-wine-300 to-wine-200 bg-clip-text text-transparent">
                Happy 25th Birthday,
              </span>
            </h1>
            <h2 className="font-playfair font-bold italic" style={{ fontSize: 'clamp(1.25rem, 5vw, 3rem)' }}>
              <span className="bg-gradient-to-r from-wine-200 via-leopard-gold to-champagne bg-clip-text text-transparent drop-shadow-lg">
                Melinda Az Zahra Hamid
              </span>
            </h2>
          </motion.div>

          {/* Leopard print divider strip */}
          <motion.div
            variants={titleVariants}
            className="h-2 leopard-stripe my-6 sm:my-8 rounded-full shadow-lg"
          />

          {/* Subheading */}
          <motion.p
            variants={titleVariants}
            className="font-cormorant italic text-wine-200 mb-6 sm:mb-8 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 3.5vw, 1.5rem)' }}
          >
            A quarter-century of beauty, grace, and unforgettable moments
          </motion.p>

          {/* Description */}
          <motion.div
            variants={titleVariants}
            className="glass-card px-5 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 mb-10 sm:mb-12 max-w-2xl mx-auto wine-glow"
          >
            <p className="font-lato text-wine-900 leading-relaxed mb-3 sm:mb-4" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
              25 years of being the light that brightens every room. 25 years of strength,
              grace, and a spirit that inspires everyone around you.
            </p>
            <p className="font-lato text-wine-900 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
              Today we celebrate you—your warmth, your wisdom, your infectious joy,
              and the incredible person you continue to become. You deserve all the love
              and happiness in the world. 💕
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={titleVariants}
            className="flex justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onExplore}
              className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-wine-600 to-wine-700 text-white font-semibold rounded-full font-cormorant shadow-lg wine-glow-hover transition-all duration-300 hover:shadow-2xl hover:shadow-wine-600/50"
              style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}
            >
              Explore Your Gifts 💝
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 leopard-stripe"></div>
    </section>
  )
}

export default HeroSection
