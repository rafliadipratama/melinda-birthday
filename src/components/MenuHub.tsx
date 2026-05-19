import { motion } from 'framer-motion'

interface MenuHubProps {
  onSelectSection: (section: string) => void
}

const MenuHub = ({ onSelectSection }: MenuHubProps) => {
  const menuItems = [
    { id: 'dunia', icon: '🌸', label: 'Dunianya Melin', desc: 'Tentang dirimu yang spesial' },
    { id: 'letter', icon: '💌', label: 'Surat Cinta', desc: 'Pesan dari hati' },
    { id: 'photos', icon: '📸', label: 'Kenang-Kenangan', desc: 'Koleksi momen indah' },
    { id: 'messages', icon: '💕', label: 'Kata-Kata Manis', desc: 'Ucapan serius untukmu' },
    { id: 'bouquet', icon: '🌹', label: 'Buket Bunga', desc: 'Rangkaian bunga istimewa' },
    { id: 'candle', icon: '🎂', label: 'Tiup Lilin', desc: 'Permainan ulang tahun' },
    { id: 'wishes', icon: '🎉', label: 'Doa & Harapan', desc: 'Enam keinginan terbaik' },
    { id: 'surprise', icon: '🎁', label: 'Ada Kejutan!', desc: 'Pesan-pesan spesial' },
    { id: 'countdown', icon: '⏳', label: 'Hitung Mundur', desc: 'Menanti ulang tahun berikutnya' }
  ]

  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="font-playfair italic mb-2 sm:mb-3" style={{ color: '#FF1493', fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>
            🎂 Selamat Ulang Tahun 🎂
          </h1>
          <p className="mb-2" style={{ color: '#FFD700', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>Melinda Az Zahra Hamid</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>
            Pilih sesuatu yang ingin kamu lihat:
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              whileHover={{ scale: 1.12, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group p-4 sm:p-6 md:p-8 rounded-2xl text-center border backdrop-blur-md transition-all cursor-pointer relative"
              style={{
                backgroundColor: 'rgba(255,20,147,0.1)',
                borderColor: 'rgba(255,20,147,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,20,147,0.8), 0 0 60px rgba(255,215,0,0.4)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.3)'
              }}
            >
              <motion.div
                className="mb-2 sm:mb-3 inline-block group-hover:animate-bounce"
                style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-playfair font-bold mb-1 sm:mb-2 group-hover:text-pink-300 transition-colors duration-300" style={{ color: '#FFD700', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}>
                {item.label}
              </h3>
              <p className="group-hover:text-white transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)' }}>
                {item.desc}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Decorative bottom message */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xs sm:text-sm md:text-base italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
            ✨ Setiap halaman adalah ungkapan cinta untukmu ✨
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuHub
