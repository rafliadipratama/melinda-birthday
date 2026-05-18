import { Suspense, lazy, useState } from 'react'
import HeroSection from './components/sections/HeroSection'
import MiniGame from './components/MiniGame'
import MenuHub from './components/MenuHub'

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
      <div className="w-full overflow-x-hidden bg-black">
        <HeroSection onExplore={() => handleSelectSection('menu')} />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    )
  }

  // Render menu page
  if (currentPage === 'menu') {
    return (
      <div className="w-full overflow-x-hidden bg-black">
        <MenuHub onSelectSection={handleSelectSection} />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    )
  }

  // Render selected section with back button
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Back to Menu Button */}
      <button
        onClick={handleBackToMenu}
        className="fixed top-6 left-6 z-40 px-4 py-2 bg-pink-600/80 hover:bg-pink-600 text-white rounded-full text-sm transition-all hover:scale-110 backdrop-blur-md"
      >
        ← Kembali ke Menu
      </button>

      {/* Render selected page */}
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
    </div>
  )
}

export default App
