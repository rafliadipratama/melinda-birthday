const DunianyaMelin = () => {
  const traits = [
    { emoji: '💪', title: 'Kuat & Tangguh', desc: 'Mampu menghadapi tantangan apapun dengan ketenangan' },
    { emoji: '✨', title: 'Bercahaya', desc: 'Kehadiranmu membuat orang lain merasa lebih baik' },
    { emoji: '❤️', title: 'Penuh Kasih Sayang', desc: 'Selalu peduli & memberikan yang terbaik untuk orang terdekat' },
    { emoji: '🎯', title: 'Fokus & Determined', desc: 'Tahu apa yang diinginkan & berusaha keras meraihnya' },
    { emoji: '🌟', title: 'Inspiratif', desc: 'Menjadi teladan & motivasi bagi banyak orang' },
    { emoji: '💝', title: 'Authentic', desc: 'Tetap jadi diri sendiri yang asli & genuine' }
  ]

  const memories = [
    'Tawa Anda yang membuat setiap momen menjadi spesial',
    'Cara Anda mendengarkan dengan sepenuh hati',
    'Dedikasi Anda pada setiap hal yang Anda lakukan',
    'Keberanian Anda dalam mengambil keputusan',
    'Kehangatanmu yang membuat semua terasa aman'
  ]

  return (
    <section className="min-h-screen px-6 py-20" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl italic mb-4" style={{ color: '#FF1493' }}>
            🌸 Dunianya Melinda
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Cerita tentang seseorang yang istimewa
          </p>
        </div>

        {/* About Section */}
        <div className="mb-16 p-8 rounded-2xl border border-pink-500/30 bg-pink-600/10 backdrop-blur-md">
          <h3 className="font-playfair text-3xl mb-6" style={{ color: '#FFD700' }}>
            Tentang Dirimu
          </h3>
          <p className="text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Melinda Az Zahra Hamid adalah sosok yang luar biasa. Bukan hanya karena penampilan,
            tetapi karena kepribadian yang hangat, hati yang mulia, dan semangat yang tidak pernah padam.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Dalam setiap interaksi, Anda menunjukkan kualitas-kualitas indah yang membuat orang
            sekitarmu merasa dihargai dan didengar. Itulah mengapa Anda sangat spesial.
          </p>
        </div>

        {/* Traits Grid */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl mb-8 text-center" style={{ color: '#FFD700' }}>
            Kualitas Terbaik Darimu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traits.map((trait, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-pink-500/30 bg-pink-600/10 backdrop-blur-md hover:bg-pink-600/20 transition-all hover:scale-105"
              >
                <p className="text-5xl mb-3">{trait.emoji}</p>
                <h4 className="font-playfair text-xl mb-2" style={{ color: '#FFD700' }}>
                  {trait.title}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {trait.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Memories Section */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl mb-8 text-center" style={{ color: '#FFD700' }}>
            Hal yang Kami Hargai Darimu
          </h3>
          <div className="space-y-4">
            {memories.map((memory, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border-l-4 border-pink-500 bg-gradient-to-r from-pink-600/10 to-transparent"
              >
                <p className="text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  ✓ {memory}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Message */}
        <div className="p-8 rounded-2xl text-center border border-yellow-500/30 bg-yellow-600/10 backdrop-blur-md">
          <p className="text-2xl mb-4" style={{ color: '#FFD700' }}>
            Terima kasih telah menjadi diri sendiri yang indah ✨
          </p>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Dunia lebih cerah karena kehadiranmu. Terus bersinar seperti sekarang ini! 💫
          </p>
        </div>
      </div>
    </section>
  )
}

export default DunianyaMelin
