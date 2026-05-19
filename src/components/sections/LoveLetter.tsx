import { motion } from 'framer-motion'

const LoveLetter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const photos = [
    { src: 'photos/p1.jpg', caption: 'Cantik ✨', rotation: -15, top: '5%', right: '5%' },
    { src: 'photos/p2.jpg', caption: 'My Love 💕', rotation: 10, top: '20%', right: '15%' },
    { src: 'photos/p3.jpg', caption: 'Senyum ✨', rotation: -8, top: '45%', right: '8%' },
    { src: 'photos/p4.jpg', caption: 'My Girl 💖', rotation: 15, top: '65%', right: '18%' },
  ]

  return (
    <section
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 flex items-center justify-center relative overflow-hidden"
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
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-playfair italic" style={{ color: '#FFE4E1', fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }}>
            💌 Surat Cinta Untukmu
          </h2>
        </motion.div>

        {/* Main Layout - Envelope and Photos */}
        <motion.div
          className="relative flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Red Envelope Card */}
          <div className="flex-shrink-0 w-full max-w-lg mx-auto lg:mx-0">
            {/* Red Envelope */}
            <div
              className="relative shadow-2xl transition-transform hover:scale-105 hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 50%, #6B1128 100%)',
                borderRadius: '20px 20px 30px 30px',
                padding: 'clamp(20px, 5vw, 40px) clamp(20px, 5vw, 35px)',
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
                <p className="text-center font-playfair italic mb-4 sm:mb-5" style={{ color: '#FFE4E1', fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>
                  Untuk Melinda Az Zahra Hamid,
                </p>

                <div className="space-y-3 sm:space-y-4 leading-relaxed" style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)' }}>
                  <p>
                    Melinda, di hari istimewa ini aku ingin berhenti sejenak dari semua kebiasaan dan hanya memikirkan satu hal: <span style={{ color: '#FFE4E1', fontWeight: '600' }}>berapa beruntungnya aku bisa kenal dirimu</span>.
                  </p>

                  <p>
                    Sejak hari pertama, ada sesuatu yang berbeda tentang cara kamu tersenyum. Sesuatu yang membuat dunia terasa lebih penuh warna. Dalam setiap percakapan, dalam setiap momen bersama, aku terus menemukan layer baru dari keindahan hatimu yang aku nggak tahu sebelumnya.
                  </p>

                  <p>
                    Kamu punya cara yang spesial untuk membuat orang merasa dihargai — bukan karena apa yang kamu lakukan, tapi karena <span style={{ color: '#FFE4E1', fontWeight: '600' }}>gimana kamu benar-benar peduli</span>. Matamu yang hangat bisa bikin aku lupa dengan semua kecemasan. Suaramu yang lembut bisa jadi tempat pulang terbaik buat aku.
                  </p>

                  <p>
                    Di setiap keindahan dunia — sunset, musik favorit, dark chocolate yang sempurna — aku terus mengingatmu. Karena kamu adalah bukti nyata bahwa ada hal-hal yang worth it untuk diperjuangkan, untuk dimaafkan, untuk dicintai sepenuh hati.
                  </p>

                  <p>
                    Di usiamu yang ke-25 ini, aku pengen kamu tau bahwa kamu bukan hanya seseorang istimewa buat aku. <span style={{ color: '#FFE4E1', fontWeight: '600' }}>Kamu adalah rumah buat aku</span>. Tempat di mana aku bisa jadi diri sendiri yang paling asli, paling vulnerable, paling bahagia.
                  </p>

                  <p className="pt-2">
                    Selamat ulang tahun, cinta.
                    <br/>
                    Semoga setiap hari di tahun ini penuh dengan momen-momen yang membuat hatimu tersenyum seperti saat ini.
                    <br/>
                    Aku janji akan terus membuat hari-harimu lebih indah. Setiap hari. Selamanya.
                  </p>
                </div>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,228,225,0.3)'
                }}>
                  <p className="text-right font-playfair italic" style={{ color: '#FFE4E1', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    Dengan sepenuh hati,
                    <br/>
                    — Rafli ❤️
                  </p>
                </div>
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
        </motion.div>
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
