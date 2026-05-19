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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    animate: {
      y: [0, -30, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 4,
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
            initial={{ opacity: 0, y: -100, x: Math.random() * 100 - 50 }}
            animate={{
              opacity: [0, 1, 0],
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
          <motion.div className="flex justify-center gap-8 mb-12">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                variants={heartVariants}
                initial="hidden"
                animate={['visible', 'animate']}
                className="text-6xl"
              >
                {i % 2 === 0 ? '💖' : '💕'}
              </motion.div>
            ))}
          </motion.div>

          {/* Age milestone badge */}
          <motion.div
            variants={titleVariants}
            className="mb-6 inline-block"
          >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-lg">
              <span className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                Turning 25! ✨
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={titleVariants} className="mb-8">
            <h1 className="font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold italic mb-4">
              <span className="bg-gradient-to-r from-blush via-wine-300 to-wine-200 bg-clip-text text-transparent">
                Happy 25th Birthday,
              </span>
            </h1>
            <h2 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold italic">
              <span className="bg-gradient-to-r from-wine-200 via-leopard-gold to-champagne bg-clip-text text-transparent drop-shadow-lg">
                Melinda Az Zahra Hamid
              </span>
            </h2>
          </motion.div>

          {/* Leopard print divider strip */}
          <motion.div
            variants={titleVariants}
            className="h-2 leopard-stripe my-8 rounded-full shadow-lg"
          />

          {/* Subheading */}
          <motion.p
            variants={titleVariants}
            className="font-cormorant text-2xl sm:text-3xl italic text-wine-200 mb-8 leading-relaxed"
          >
            A quarter-century of beauty, grace, and unforgettable moments
          </motion.p>

          {/* Description */}
          <motion.div
            variants={titleVariants}
            className="glass-card px-8 py-6 sm:px-10 sm:py-8 mb-12 max-w-2xl mx-auto wine-glow"
          >
            <p className="font-lato text-lg text-wine-900 leading-relaxed mb-4">
              25 years of being the light that brightens every room. 25 years of strength,
              grace, and a spirit that inspires everyone around you.
            </p>
            <p className="font-lato text-lg text-wine-900 leading-relaxed">
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
              className="px-10 py-4 bg-gradient-to-r from-wine-600 to-wine-700 text-white font-semibold rounded-full font-cormorant text-xl shadow-lg wine-glow-hover transition-all duration-300 hover:shadow-2xl hover:shadow-wine-600/50"
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
