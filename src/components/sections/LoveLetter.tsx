const LoveLetter = () => {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 py-20" style={{ backgroundColor: '#0a0005', color: '#fff' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl italic mb-4" style={{ color: '#FF1493' }}>
            💌 Surat Cinta
          </h2>
        </div>

        <div
          className="bg-white rounded-3xl p-12 shadow-2xl transition-all duration-300"
          style={{ color: '#3b0b17' }}
        >
          <p className="text-center text-xl font-bold mb-6">🎂 SELAMAT ULANG TAHUN 🎂</p>

          <p className="mb-4 leading-relaxed text-lg">
            Hari ini adalah hari spesialmu, dan kami semua ingin merayakan <span style={{ color: '#FF1493', fontWeight: '600' }}>kesuksesan</span> yang telah kamu raih selama ini. Dari kecil hingga sekarang berusia 25 tahun, kamu sudah membuktikan bahwa kamu adalah sosok yang <span style={{ color: '#FF1493', fontWeight: '600' }}>luar biasa</span>.
          </p>

          <p className="mb-4 leading-relaxed text-lg">
            Terima kasih telah hadir di dunia ini, Jahee! Dunia menjadi lebih berwarna dengan kehadiran, tawa, dan kehangatan darimu. Kamu adalah inspirasi bagi banyak orang, dan kebahagiaan mu adalah kebahagiaan kami.
          </p>

          <p className="mb-4 leading-relaxed text-lg">
            Semoga di tahun yang baru ini, kamu terus tumbuh, belajar, dan mencapai semua impian mu. Semoga kesehatan selalu menyertaimu, dan setiap hari membawa kebahagiaan baru untuk hidupmu.
          </p>

          <p className="text-center mt-6 text-lg font-bold">🎉 Banyak cinta & bahagia untukmu! 🎉</p>

          <p className="text-right mt-8 text-lg" style={{ color: '#722F37' }}>
            — Dari Rafli ❤️
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoveLetter
