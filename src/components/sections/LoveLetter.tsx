const LoveLetter = () => {
  const photos = [
    { emoji: '📸', rotation: -15, top: '5%', right: '5%' },
    { emoji: '📷', rotation: 10, top: '20%', right: '15%' },
    { emoji: '📹', rotation: -8, top: '45%', right: '8%' },
    { emoji: '🖼️', rotation: 15, top: '65%', right: '18%' },
  ]

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 py-16 flex items-center justify-center" style={{ backgroundColor: '#8B5A5A' }}>
      <div className="max-w-5xl w-full mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl italic" style={{ color: '#FFE4E1' }}>
            💌 Surat Cinta Untukmu
          </h2>
        </div>

        {/* Main Layout - Envelope and Photos */}
        <div className="relative flex gap-8 items-start justify-between">
          {/* Left Side - Red Envelope Card */}
          <div className="flex-shrink-0 w-full max-w-lg">
            {/* Red Envelope */}
            <div
              className="relative shadow-2xl transition-transform hover:scale-105 hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 50%, #6B1128 100%)',
                borderRadius: '20px 20px 30px 30px',
                padding: '40px 35px',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
              }}
            >
              {/* Envelope flap effect */}
              <div
                className="absolute top-0 left-0 right-0"
                style={{
                  height: '15px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
                  borderRadius: '20px 20px 0 0'
                }}
              ></div>

              {/* Scalloped edge decoration - top */}
              <div
                className="absolute -top-6 left-0 right-0 flex justify-around px-8"
                style={{
                  height: '15px'
                }}
              >
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '12px',
                      height: '12px',
                      background: '#FFE4E1',
                      borderRadius: '50%',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}
                  ></div>
                ))}
              </div>

              {/* Letter Content */}
              <div style={{ color: '#FFF8F0' }}>
                <p className="text-center text-2xl font-bold mb-6" style={{ color: '#FFE4E1' }}>
                  🎂 SELAMAT ULANG TAHUN 🎂
                </p>

                <div className="space-y-4 text-base leading-relaxed" style={{ fontSize: '0.95rem' }}>
                  <p>
                    Hari ini adalah hari spesialmu, dan kami semua ingin merayakan <span style={{ color: '#FFE4E1', fontWeight: '600' }}>kesuksesan</span> yang telah kamu raih selama ini.
                  </p>

                  <p>
                    Dari kecil hingga sekarang, kamu sudah membuktikan bahwa kamu adalah sosok yang <span style={{ color: '#FFE4E1', fontWeight: '600' }}>luar biasa</span>. Terima kasih telah hadir di dunia ini!
                  </p>

                  <p>
                    Dunia menjadi lebih berwarna dengan kehadiran, tawa, dan kehangatan darimu. Kamu adalah inspirasi bagi banyak orang.
                  </p>

                  <p>
                    Semoga di tahun yang baru ini, kamu terus tumbuh, belajar, dan mencapai semua impian mu. Semoga kesehatan selalu menyertaimu! 💕
                  </p>
                </div>

                <p className="text-center mt-8 text-lg font-bold" style={{ color: '#FFE4E1' }}>
                  🎉 Banyak cinta & bahagia untukmu! 🎉
                </p>

                <p className="text-right mt-8 text-base" style={{ color: '#FFE4E1' }}>
                  — Dari Rafli ❤️
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Polaroid Photos */}
          <div className="flex-1 relative h-96" style={{ minHeight: '500px' }}>
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="absolute transition-transform hover:scale-110 hover:z-50 cursor-pointer"
                style={{
                  top: photo.top,
                  right: photo.right,
                  transform: `rotate(${photo.rotation}deg)`,
                  transformOrigin: 'center'
                }}
              >
                {/* Polaroid frame */}
                <div
                  className="bg-white p-2 shadow-xl relative"
                  style={{
                    width: '140px',
                    aspectRatio: '3/4',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    background: 'linear-gradient(135deg, #FFFAFA 0%, #FFF5EE 100%)'
                  }}
                >
                  {/* Photo area */}
                  <div
                    className="w-full flex-1 flex items-center justify-center mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #DDA0DD 0%, #DB7093 100%)',
                      borderRadius: '4px'
                    }}
                  >
                    <span className="text-4xl">{photo.emoji}</span>
                  </div>

                  {/* Polaroid bottom white space */}
                  <div style={{ height: '35px' }} className="flex items-center justify-center">
                    <p className="text-xs text-gray-400 italic">Memory</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}

export default LoveLetter
