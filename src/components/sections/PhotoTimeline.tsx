const PhotoTimeline = () => {
  const photos = [
    { src: 'photos/p1.jpg', caption: 'Cantik ✨' },
    { src: 'photos/p2.jpg', caption: 'My Love 💕' },
    { src: 'photos/p3.jpg', caption: 'Senyum ✨' },
    { src: 'photos/p4.jpg', caption: 'My Girl 💖' },
    { src: 'photos/p5.jpg', caption: 'Melin ❤️' },
    { src: 'photos/p6.jpg', caption: 'Indah 🌸' },
    { src: 'photos/p7.jpg', caption: 'Perfect 💝' },
    { src: 'photos/p8.jpg', caption: 'Birthday! 🎂' },
    { src: 'photos/p9.jpg', caption: 'Everything 🥰' }
  ]

  return (
    <section className="min-h-screen px-6 py-20" style={{ backgroundColor: "#0f0006" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-5xl italic text-center mb-6" style={{ color: '#FF1493' }}>📸 Foto-Foto Cantiknya</h2>
        <p className="text-center text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>Klik foto untuk memperbesar 💕</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div key={idx} className="relative group cursor-pointer rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
              style={{
                aspectRatio: '4/5',
                boxShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,20,147,0.6), 0 0 60px rgba(255,215,0,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-2xl animate-pulse">{photo.caption}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:from-pink-900/70 transition-all duration-300">
                <p className="text-white font-playfair text-lg group-hover:text-pink-200 transition-colors duration-300">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PhotoTimeline
