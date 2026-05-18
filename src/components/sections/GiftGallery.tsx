const GiftGallery = () => {
  const gifts = [
    { icon: '💌', title: 'Surat Cinta', desc: 'Pesan spesial dari orang yang mencintaimu' },
    { icon: '🌹', title: 'Buket Bunga', desc: 'Rangkaian bunga indah untuk hari istimewamu' },
    { icon: '📸', title: 'Foto-Foto', desc: 'Koleksi momen indah bersama orang terkasih' },
    { icon: '🎂', title: 'Tiup Lilin', desc: 'Permainan interaktif yang menyenangkan' },
    { icon: '🎉', title: 'Doa & Harapan', desc: 'Enam keinginan terbaik untuk tahun ini' },
    { icon: '🌸', title: 'Dunianya Melin', desc: 'Cerita tentang dirimu yang istimewa' }
  ]

  return (
    <section className="min-h-screen px-6 py-20" style={{ background: 'linear-gradient(to bottom, #0a0005, #160010)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-5xl italic text-center mb-6" style={{ color: '#FF1493' }}>🎁 Hadiah Istimewa Untukmu</h2>
        <p className="text-center text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>Pilih sesuatu yang ingin kamu lihat</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, idx) => (
            <div key={idx} className="p-8 rounded-2xl text-center border backdrop-blur-md transition-all cursor-pointer group hover:scale-110"
              style={{
                backgroundColor: 'rgba(255,20,147,0.1)',
                borderColor: 'rgba(255,20,147,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,20,147,0.8), 0 0 60px rgba(255,215,0,0.4)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.3)'
              }}>
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">{gift.icon}</div>
              <h3 className="font-playfair text-2xl mb-3 group-hover:text-pink-300 transition-colors duration-300" style={{ color: '#FFD700' }}>{gift.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }} className="group-hover:text-white transition-colors duration-300">{gift.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default GiftGallery
