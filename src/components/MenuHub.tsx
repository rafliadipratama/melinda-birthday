interface MenuHubProps {
  onSelectSection: (section: string) => void
}

const MenuHub = ({ onSelectSection }: MenuHubProps) => {
  const menuItems = [
    { id: 'letter', icon: '💌', label: 'Surat Cinta', desc: 'Pesan spesial untukmu' },
    { id: 'bouquet', icon: '🌹', label: 'Buket Bunga', desc: 'Rangkaian bunga indah' },
    { id: 'photos', icon: '📸', label: 'Foto-Foto', desc: 'Koleksi momen indah' },
    { id: 'candle', icon: '🎂', label: 'Tiup Lilin', desc: 'Permainan interaktif' },
    { id: 'wishes', icon: '🎉', label: 'Doa & Harapan', desc: 'Enam keinginan terbaik' },
    { id: 'dunia', icon: '🌸', label: 'Dunianya Melin', desc: 'Cerita tentang dirimu' },
    { id: 'surprise', icon: '🎁', label: 'Ada Kejutan!', desc: 'Sesuatu yang spesial' },
    { id: 'countdown', icon: '⏳', label: 'Hitung Mundur', desc: 'Ulang tahun berikutnya' }
  ]

  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-20" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl sm:text-5xl italic mb-4" style={{ color: '#FF1493' }}>
            🎂 Selamat Ulang Tahun 🎂
          </h1>
          <p className="text-lg sm:text-xl mb-2" style={{ color: '#FFD700' }}>Melinda Az Zahra Hamid</p>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Pilih sesuatu yang ingin kamu lihat:
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className="group p-6 sm:p-8 rounded-2xl text-center border backdrop-blur-md transition-all cursor-pointer hover:scale-110 active:scale-95"
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
              }}
            >
              <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 group-hover:scale-125 transition-transform duration-300 inline-block group-hover:animate-bounce">
                {item.icon}
              </div>
              <h3 className="font-playfair text-lg sm:text-xl font-bold mb-2 group-hover:text-pink-300 transition-colors duration-300" style={{ color: '#FFD700' }}>
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm group-hover:text-white transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.desc}
              </p>
            </button>
          ))}
        </div>

        {/* Decorative bottom message */}
        <div className="text-center mt-16">
          <p className="text-sm sm:text-base italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
            ✨ Setiap halaman adalah ungkapan cinta untukmu ✨
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuHub
