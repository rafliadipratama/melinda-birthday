import { useState } from 'react'

const Surprise = () => {
  const [revealed, setRevealed] = useState<number | null>(null)

  const surprises = [
    {
      icon: '💌',
      title: 'Surat Rahasia',
      content: 'Setiap hari kamu adalah hadiah bagi orang-orang di sekitarmu. Jangan pernah ragu akan nilai dirimu! ❤️'
    },
    {
      icon: '🎁',
      title: 'Wishlist Terwujud',
      content: 'Semua doa dan harapanmu akan kami doakan agar terwujud. Kamu berhak mendapat yang terbaik! 🌟'
    },
    {
      icon: '🌹',
      title: 'Cinta dari Hati',
      content: 'Terima kasih sudah mempercayakan hatimu kepada kami. Kami akan selalu menjaga kepercayaan itu. 💖'
    },
    {
      icon: '✨',
      title: 'Bintang Bersinar',
      content: 'Cahayamu terang bersinar. Terus berbagi kebahagiaan dan harapan kepada dunia. 🌙'
    },
    {
      icon: '🎊',
      title: 'Perayaan Selamanya',
      content: 'Setiap hari dengan dirimu adalah perayaan. Kami beruntung bisa berbagi hidup denganmu. 🎉'
    },
    {
      icon: '💎',
      title: 'Permata Berharga',
      content: 'Kamu adalah permata berharga yang tidak akan pernah bisa diganti. Selamanya bernilai! 👑'
    }
  ]

  return (
    <section className="min-h-screen px-6 py-20" style={{ backgroundColor: '#0a0005' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl italic mb-4 animate-pulse" style={{ color: '#FF1493' }}>
            🎁 Ada Kejutan Spesial!
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Buka setiap hadiah untuk menemukan pesan spesial dari kami 💝
          </p>
        </div>

        {/* Surprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {surprises.map((surprise, idx) => (
            <div
              key={idx}
              onClick={() => setRevealed(revealed === idx ? null : idx)}
              className="cursor-pointer h-64 rounded-2xl border border-pink-500/30 bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-md p-6 flex flex-col items-center justify-center transition-all hover:scale-105 hover:border-pink-500/60"
              style={{
                transform: revealed === idx ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transformStyle: 'preserve-3d',
                transitionDuration: '0.6s'
              }}
            >
              {revealed !== idx ? (
                // Front side
                <div className="text-center">
                  <div className="text-6xl mb-4">{surprise.icon}</div>
                  <p className="font-playfair text-2xl mb-4" style={{ color: '#FFD700' }}>
                    {surprise.title}
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Klik untuk buka 👆
                  </p>
                </div>
              ) : (
                // Back side
                <div className="text-center">
                  <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {surprise.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="p-10 rounded-2xl text-center border-2 border-pink-500/50 bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md">
          <p className="text-3xl font-playfair mb-4" style={{ color: '#FFD700' }}>
            Kejutan Terbesar... ✨
          </p>
          <p className="text-xl leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Kejutan terbesar adalah mengetahui bahwa ada orang yang peduli dengan kebahagiaan kita.
            Dan kamu adalah orang-orang istimewa itu bagi kami.
          </p>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Terima kasih telah hadir. Selamat ulang tahun yang penuh kasih sayang! 💕
          </p>
        </div>
      </div>
    </section>
  )
}

export default Surprise
