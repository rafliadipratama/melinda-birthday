import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/sections/HeroSection'
import MiniGame from './components/MiniGame'
import MenuHub from './components/MenuHub'
import MusicPlayer from './components/MusicPlayer'

// Lazy load other sections
const GiftGallery = lazy(() => import('./components/sections/GiftGallery'))
const LoveLetter = lazy(() => import('./components/sections/LoveLetter'))
const PhotoTimeline = lazy(() => import('./components/sections/PhotoTimeline'))
const CountdownBanner = lazy(() => import('./components/sections/CountdownBanner'))
const WishWall = lazy(() => import('./components/sections/WishWall'))
const CandleGame = lazy(() => import('./components/sections/CandleGame'))
const DunianyaMelin = lazy(() => import('./components/sections/DunianyaMelin'))
const Surprise = lazy(() => import('./components/sections/Surprise'))
const Footer = lazy(() => import('./components/sections/Footer'))

type PageType = 'hero' | 'menu' | 'letter' | 'bouquet' | 'photos' | 'candle' | 'wishes' | 'dunia' | 'surprise' | 'countdown'

function App() {
  const [gameCompleted, setGameCompleted] = useState(false)
  const [currentPage, setCurrentPage] = useState<PageType>('hero')

  if (!gameCompleted) {
    return <MiniGame onGameComplete={() => setGameCompleted(true)} />
  }

  // Handle page navigation
  const handleSelectSection = (section: string) => {
    setCurrentPage(section as PageType)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToMenu = () => {
    setCurrentPage('menu')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render hero + menu
  if (currentPage === 'hero') {
    return (
      <>
        <MusicPlayer />
        <AnimatePresence mode="wait">
          <motion.div
            key="hero"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-x-hidden bg-black"
          >
            <HeroSection onExplore={() => handleSelectSection('menu')} />
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </>
    )
  }

  // Render menu page
  if (currentPage === 'menu') {
    return (
      <>
        <MusicPlayer />
        <AnimatePresence mode="wait">
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-x-hidden bg-black"
          >
            <MenuHub onSelectSection={handleSelectSection} />
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </>
    )
  }

  // Render selected section
  return (
    <>
      <MusicPlayer />
      <div className="w-full overflow-x-hidden bg-black">
        {/* Render selected page with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {currentPage === 'letter' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <LoveLetter />
            </Suspense>
          )}

          {currentPage === 'photos' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <PhotoTimeline />
            </Suspense>
          )}

          {currentPage === 'wishes' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <WishWall />
            </Suspense>
          )}

          {currentPage === 'countdown' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <CountdownBanner />
            </Suspense>
          )}

          {currentPage === 'bouquet' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <GiftGallery />
            </Suspense>
          )}

          {currentPage === 'candle' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <CandleGame />
            </Suspense>
          )}

          {currentPage === 'dunia' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <DunianyaMelin />
            </Suspense>
          )}

          {currentPage === 'surprise' && (
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
              <Surprise />
            </Suspense>
          )}

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </motion.div>
      </AnimatePresence>
      </div>
    </>
  )
}

export default App
