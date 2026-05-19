import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PhotoTimeline = () => {
  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState<number | null>(null)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const photos = [
    { src: 'photos/p1.jpg', caption: 'Cantik ✨' },
    { src: 'photos/p2.jpg', caption: 'My Love 💕' },
    { src: 'photos/p3.jpg', caption: 'Senyum ✨' },
    { src: 'photos/p4.jpg', caption: 'My Girl 💖' },
    { src: 'photos/p5.jpg', caption: 'Melin ❤️' },
    { src: 'photos/p6.jpg', caption: 'Beautiful 💗' },
    { src: 'photos/p7.jpg', caption: 'Perfect 💝' },
    { src: 'photos/p8.jpg', caption: 'Birthday! 🎂' },
    { src: 'photos/p9.jpg', caption: 'Everything 🥰' }
  ]

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: "#0f0006" }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-playfair italic text-center mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: '#FF1493', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}
        >
          📸 Foto-Foto Cantiknya
        </motion.h2>
        <motion.p
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
        >
          Klik foto untuk memperbesar 💕
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onClick={() => setSelectedPhotoIdx(idx)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl w-full"
              style={{
                aspectRatio: '1',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,20,147,0.6), 0 0 60px rgba(255,215,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute top-3 right-3 bg-pink-600/90 text-white px-2.5 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                {idx + 1}/{photos.length}
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-xl sm:text-2xl">💗 {photo.caption}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 group-hover:from-pink-900/80 transition-all duration-300">
                <p className="text-white font-playfair text-sm sm:text-lg group-hover:text-pink-200 transition-colors duration-300" style={{ fontSize: 'clamp(0.75rem, 2vw, 1.125rem)' }}>{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhotoIdx !== null && (
            <motion.div
              key="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIdx(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl max-h-[90vh] flex flex-col"
              >
                {/* Image */}
                <div className="relative flex-1 flex items-center justify-center bg-black rounded-lg overflow-hidden">
                  <img
                    src={photos[selectedPhotoIdx].src}
                    alt={photos[selectedPhotoIdx].caption}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Caption and controls */}
                <div className="mt-4 flex items-center justify-between text-white">
                  <p className="text-sm sm:text-base font-playfair">{photos[selectedPhotoIdx].caption}</p>
                  <p className="text-xs text-gray-400">{selectedPhotoIdx + 1} / {photos.length}</p>
                </div>

                {/* Navigation buttons */}
                <div className="mt-3 flex gap-2 justify-center">
                  <button
                    onClick={() => setSelectedPhotoIdx(selectedPhotoIdx === 0 ? photos.length - 1 : selectedPhotoIdx - 1)}
                    className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-white text-sm transition-colors"
                  >
                    ← Sebelumnya
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIdx(null)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-sm transition-colors"
                  >
                    Tutup ✕
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIdx(selectedPhotoIdx === photos.length - 1 ? 0 : selectedPhotoIdx + 1)}
                    className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-white text-sm transition-colors"
                  >
                    Berikutnya →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
export default PhotoTimeline
