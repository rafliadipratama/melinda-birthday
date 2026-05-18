const LoveLetter = () => {
  const photos = [
    { src: 'photos/p1.jpg', caption: 'Cantik ✨', rotation: -15, top: '5%', right: '5%' },
    { src: 'photos/p2.jpg', caption: 'My Love 💕', rotation: 10, top: '20%', right: '15%' },
    { src: 'photos/p3.jpg', caption: 'Senyum ✨', rotation: -8, top: '45%', right: '8%' },
    { src: 'photos/p4.jpg', caption: 'My Girl 💖', rotation: 15, top: '65%', right: '18%' },
  ]

  return (
    <section
      className="min-h-screen w-full px-4 sm:px-6 py-16 flex items-center justify-center relative overflow-hidden"
      style={{
        background: `
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px),
          repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0,0,0,.03) 35px, rgba(0,0,0,.03) 70px),
          radial-gradient(circle at 20% 50%, rgba(0,0,0,0.3) 0%, transparent 50%),
          radial-gradient(circle at 60% 30%, rgba(0,0,0,0.25) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(0,0,0,0.28) 0%, transparent 50%),
          #F5A9B8
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Leopard print pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(0,0,0,0.4) 0%, transparent 8%),
            radial-gradient(circle at 25% 35%, rgba(0,0,0,0.35) 0%, transparent 6%),
            radial-gradient(circle at 45% 15%, rgba(0,0,0,0.38) 0%, transparent 7%),
            radial-gradient(circle at 65% 25%, rgba(0,0,0,0.36) 0%, transparent 6%),
            radial-gradient(circle at 80% 40%, rgba(0,0,0,0.4) 0%, transparent 8%),
            radial-gradient(circle at 10% 65%, rgba(0,0,0,0.37) 0%, transparent 7%),
            radial-gradient(circle at 35% 75%, rgba(0,0,0,0.39) 0%, transparent 6%),
            radial-gradient(circle at 55% 60%, rgba(0,0,0,0.35) 0%, transparent 7%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.4) 0%, transparent 8%),
            radial-gradient(circle at 90% 70%, rgba(0,0,0,0.36) 0%, transparent 6%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%'
        }}
      ></div>
      <div className="max-w-5xl w-full mx-auto relative z-10">
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
                  className="bg-white shadow-xl relative overflow-hidden"
                  style={{
                    width: '140px',
                    aspectRatio: '3/4',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    background: 'linear-gradient(135deg, #FFFAFA 0%, #FFF5EE 100%)',
                    padding: '8px',
                    paddingBottom: '30px'
                  }}
                >
                  {/* Photo area with actual image */}
                  <div
                    className="w-full flex-1 mb-2 overflow-hidden rounded-sm"
                    style={{
                      aspectRatio: '4/5',
                      background: 'linear-gradient(135deg, #DDA0DD 0%, #DB7093 100%)'
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Polaroid bottom white space for caption */}
                  <div style={{ height: '22px' }} className="flex items-center justify-center">
                    <p className="text-xs text-gray-500 italic text-center leading-none">{photo.caption}</p>
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
