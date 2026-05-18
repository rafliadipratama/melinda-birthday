const GiftGallery = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #0a0005, #160010)' }}>
      <div className="max-w-5xl w-full mx-auto text-center">
        <h2 className="font-playfair text-5xl italic mb-4" style={{ color: '#FF1493' }}>
          🌹 Buket Bunga Istimewa
        </h2>
        <p className="text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Rangkaian bunga yang indah dipersembahkan dengan cinta untuk hari spesialmu
        </p>

        {/* Flower Bouquet Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          {/* Bouquet Visual */}
          <div className="relative w-full max-w-xs h-96 flex items-center justify-center">
            {/* Vase */}
            <div
              className="absolute bottom-0 w-32 h-40 rounded-b-2xl"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                boxShadow: '0 10px 40px rgba(255,165,0,0.4), inset -5px -5px 15px rgba(0,0,0,0.2)',
                clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)'
              }}
            ></div>

            {/* Flowers - arranged in bouquet */}
            <div className="absolute w-full h-full flex items-center justify-center">
              {/* Stem base */}
              <div
                className="absolute w-2 h-32 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #2d5016 0%, #4a7c2c 100%)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1
                }}
              ></div>

              {/* Rose 1 - Center */}
              <div className="absolute" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🌹</div>
              </div>

              {/* Rose 2 - Left */}
              <div className="absolute" style={{ top: '35%', left: '30%' }}>
                <div className="text-5xl" style={{ transform: 'rotate(-15deg)' }}>🌹</div>
              </div>

              {/* Rose 3 - Right */}
              <div className="absolute" style={{ top: '35%', right: '30%' }}>
                <div className="text-5xl" style={{ transform: 'rotate(15deg)' }}>🌹</div>
              </div>

              {/* Pink Flower 1 - Back Left */}
              <div className="absolute" style={{ top: '25%', left: '20%' }}>
                <div className="text-5xl" style={{ transform: 'rotate(-30deg)' }}>🌸</div>
              </div>

              {/* Pink Flower 2 - Back Right */}
              <div className="absolute" style={{ top: '25%', right: '20%' }}>
                <div className="text-5xl" style={{ transform: 'rotate(30deg)' }}>🌸</div>
              </div>

              {/* Leaves scattered */}
              <div className="absolute text-4xl" style={{ top: '40%', left: '15%' }}>🍃</div>
              <div className="absolute text-4xl" style={{ top: '45%', right: '15%' }}>🍃</div>
              <div className="absolute text-3xl" style={{ top: '30%', left: '35%' }}>🍃</div>
              <div className="absolute text-3xl" style={{ top: '32%', right: '35%' }}>🍃</div>

              {/* Sparkles */}
              <div className="absolute text-3xl animate-pulse" style={{ top: '15%', left: '25%' }}>✨</div>
              <div className="absolute text-3xl animate-pulse" style={{ top: '15%', right: '25%', animationDelay: '0.5s' }}>✨</div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-left">
            <h3 className="font-playfair text-3xl mb-6" style={{ color: '#FFD700' }}>
              Buket Merah Muda & Putih
            </h3>
            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <p className="text-lg leading-relaxed">
                🌹 <span className="font-semibold">Mawar Merah</span> melambangkan cinta dan passion yang mendalam
              </p>
              <p className="text-lg leading-relaxed">
                🌸 <span className="font-semibold">Bunga Sakura</span> melambangkan keindahan dan kelembutan hati
              </p>
              <p className="text-lg leading-relaxed">
                🍃 <span className="font-semibold">Daun Hijau</span> menambah kesegaran dan keselarasan
              </p>
              <p className="text-lg leading-relaxed mt-6 font-playfair italic" style={{ color: '#FFD700' }}>
                Setiap bunga dipilih dengan cermat untuk mewakili kecantikan, kekuatan, dan kebahagiaan yang kamu bawa ke dunia ini. 💕
              </p>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="p-10 rounded-2xl border-2" style={{
          borderColor: 'rgba(255,20,147,0.5)',
          background: 'linear-gradient(135deg, rgba(255,20,147,0.1) 0%, rgba(219,112,147,0.1) 100%)'
        }}>
          <p className="text-2xl font-playfair mb-4" style={{ color: '#FFD700' }}>
            💌 Dengan Sepenuh Hati
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Buket ini bukan hanya rangkaian bunga biasa. Ini adalah simbol apresiasi kami atas segala yang telah kamu berikan—
            kehadiran, cinta, dan inspirasi setiap hari. Semoga keindahan bunga ini mencerminkan keindahan jiwa mu. 🌹✨
          </p>
        </div>
      </div>
    </section>
  )
}
export default GiftGallery
