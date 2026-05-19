import { motion } from 'framer-motion'

const WishWall = () => {
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

  const wishes = [
    { icon: '💪', title: 'Kesehatan', text: 'Semoga kamu selalu diberikan kesehatan yang prima dan energi untuk menjalani setiap hari.', gradient: 'from-green-500 to-emerald-600' },
    { icon: '✨', title: 'Kebahagiaan', text: 'Semoga hidupmu penuh dengan tawa, kebahagiaan, dan momen-momen indah yang tak terlupakan.', gradient: 'from-yellow-400 to-orange-500' },
    { icon: '🌟', title: 'Kesuksesan', text: 'Semoga semua cita-cita dan impianmu tercapai satu persatu, sesuai waktu yang tepat.', gradient: 'from-purple-500 to-pink-500' },
    { icon: '💝', title: 'Cinta', text: 'Semoga cinta kita tumbuh semakin kuat dan indah, melewati semua suka dan duka bersama.', gradient: 'from-red-500 to-rose-600' },
    { icon: '🍀', title: 'Keberuntungan', text: 'Semoga selalu ada kemudahan di setiap langkahmu dan keberuntungan selalu berpihak padamu.', gradient: 'from-blue-500 to-cyan-500' },
    { icon: '🌺', title: 'Kedamaian', text: 'Semoga hatimu selalu tenang, damai, dan dipenuhi rasa syukur di setiap harinya.', gradient: 'from-indigo-500 to-purple-600' }
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
          🎉 Doa & Harapan Untukmu
        </motion.h2>
        <motion.p
          className="text-center mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}
        >
          6 hal yang saya inginkan untuk kamu di tahun ini
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wishes.map((wish, idx) => {
            const gradients = [
              'rgba(34,197,94,0.5)', // green
              'rgba(250,204,21,0.5)', // yellow
              'rgba(168,85,247,0.5)', // purple
              'rgba(239,68,68,0.5)', // red
              'rgba(59,130,246,0.5)', // blue
              'rgba(99,102,241,0.5)' // indigo
            ]
            return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-2xl border-2 backdrop-blur-md transition-all hover:scale-110 group cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,20,147,0.08)',
                borderColor: gradients[idx],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(255,20,147,0.7), 0 0 50px rgba(255,215,0,0.3)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.2)'
              }}>
              <div className="mb-2 sm:mb-3 group-hover:scale-150 transition-transform duration-300 inline-block group-hover:animate-bounce" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2rem)' }}>{wish.icon}</div>
              <h3 className="font-playfair mb-2 sm:mb-3 group-hover:text-pink-200 transition-colors duration-300" style={{ color: '#FFD700', fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)' }}>{wish.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)' }} className="group-hover:text-white transition-colors duration-300">{wish.text}</p>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
export default WishWall
