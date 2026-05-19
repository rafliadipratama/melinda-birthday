import { motion } from 'framer-motion'

const SweetMessages = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const messages = [
    {
      title: 'Ucapan yang Sedikit Lebih Serius',
      content: 'Kalau kamu udah baca sampai bagian ini, berarti kamu bener-bener niati nerima kejutan kecil ini di hari ulang tahunmu. Jadi, ada beberapa kata yang pengin aku titip di sini.',
      highlight: 'Terima kasih sudah jadi kamu selama ini, dengan semua versi kamu; yang lagi seneng, lagi sedih, lagi cape, lagi heboh, semuanya.\n\nDi umur 25 ini, aku cuma pengin kamu tahu kalau ada seseorang di sini yang bener-bener sayang sama kamu dan bangga sama kamu.\n\nSelamat ulang tahun yang ke-25, Sayang. Semoga tahun ini jadi tahun yang lebih tembut buat kamu. ❤️',
    },
    {
      title: 'Bab Kecil Tentang Kamu dan Usiamu yang Baru ✨',
      content: 'Ulang tahun ke-25 kamu itu momen yang kerasa spesial banget buat aku. Di sini aku kumpulin sedikit hal tentangmu dan tentang rasa syukurku karena bisa nemenin kamu sejauh ini.',
      sections: [
        {
          badge: 'Babak Baru: 25 Tahun',
          label: 'Usia: 25 Tahun',
          message: 'aku speechless bener bener di rayakan sama kamu',
          content: 'Di umur ke-25 ini, aku ngeliat kamu bukan cuma sebagai seseorang yang lagi bertambah usia, tapi juga seseorang yang pelan-pelan tumbuh, belajar, jatuh, bangkit lagi, dan tetap jadi kamu yang aku banggakan.',
        },
        {
          badge: 'Harapan Tahun Ini',
          label: 'Untuk: Melinda Az Zahra',
          message: 'Dari hati yang tulus',
          content: 'Di usia baru ini, aku cuma pengen kamu lebih bahagia, lebih tenang sama diri sendiri, dikelilingi orang-orang baik, dan selalu ngerasa cukup, apapun yang lagi kamu jalanin.',
        },
      ],
    },
    {
      title: 'Pesan Terakhir',
      content: 'Semoga di tiap halamanya, kamu selalu nemuin alasan buat senyum. 💕',
      isLast: true,
    },
  ]

  return (
    <section className="min-h-screen px-4 sm:px-6 py-12 sm:py-20" style={{ background: 'linear-gradient(to bottom, #0a0005, #160010)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-5xl italic mb-4" style={{ color: '#FF1493' }}>
            💌 Kata-Kata Manis Untukmu
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Setiap kata ditulis dengan sepenuh hati
          </p>
        </motion.div>

        {/* Messages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {messages.map((message, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              style={{
                background: message.isLast
                  ? 'linear-gradient(135deg, rgba(255,182,193,0.1) 0%, rgba(255,192,203,0.1) 100%)'
                  : 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(219,112,147,0.15) 100%)',
                border: '2px solid rgba(255,20,147,0.3)',
              }}
            >
              {/* Title */}
              <h3 className="font-playfair text-xl sm:text-2xl mb-4 sm:mb-6" style={{ color: '#FFD700' }}>
                {message.title}
              </h3>

              {/* Main content */}
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 whitespace-pre-line" style={{ color: '#FFE4E1' }}>
                {message.content}
              </p>

              {/* Highlight for serious message */}
              {message.highlight && (
                <div
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,182,193,0.4)',
                  }}
                >
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-playfair italic" style={{ color: '#FFB6D9' }}>
                    {message.highlight}
                  </p>
                </div>
              )}

              {/* Sections for detailed messages */}
              {message.sections && (
                <div className="space-y-4 sm:space-y-6">
                  {message.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-xl sm:rounded-2xl p-4 sm:p-6"
                      style={{
                        background: 'rgba(255,192,203,0.1)',
                        border: '1px solid rgba(255,182,193,0.3)',
                      }}
                    >
                      {/* Badge */}
                      <div className="inline-block px-4 py-2 rounded-full mb-3 sm:mb-4" style={{ background: '#FF1493' }}>
                        <span className="text-white font-bold text-xs sm:text-sm">{section.badge}</span>
                      </div>

                      {/* Label and message */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <p style={{ color: '#FF69B4' }} className="font-semibold text-xs sm:text-sm">
                          {section.label}
                        </p>
                        <p style={{ color: '#FFD700' }} className="font-playfair italic text-xs sm:text-sm">
                          {section.message}
                        </p>
                      </div>

                      {/* Section content */}
                      <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#FFE4E1' }}>
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base font-playfair italic" style={{ color: '#FFB6D9' }}>
            Dengan sepenuh cinta ❤️
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SweetMessages
