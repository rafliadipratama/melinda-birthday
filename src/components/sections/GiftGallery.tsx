const GiftGallery = () => {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-12 sm:py-20 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #0a0005, #160010)' }}>
      <div className="max-w-6xl w-full mx-auto text-center">
        <h2 className="font-playfair text-3xl sm:text-5xl italic mb-3 sm:mb-4" style={{ color: '#FF1493' }}>
          🌹 Buket Bunga Istimewa
        </h2>
        <p className="text-base sm:text-lg mb-10 sm:mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Rangkaian bunga premium yang dipilih dengan cinta untuk hari spesialmu
        </p>

        {/* Flower Bouquet Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-16 mb-12 sm:mb-20">
          {/* Bouquet Visual with SVG-style flowers */}
          <div className="relative w-full max-w-md h-screen-sm flex items-center justify-center" style={{ minHeight: 'clamp(300px, 70vw, 500px)' }}>
            {/* Vase - more elegant */}
            <div className="absolute bottom-0 z-10" style={{ width: '140px' }}>
              {/* Vase Body */}
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(to right, #FFE4B5 0%, #FFD700 20%, #FFA500 50%, #FF8C00 80%, #FFD700 100%)',
                  borderRadius: '0 0 30px 30px',
                  boxShadow: '0 15px 50px rgba(255,165,0,0.5), inset -8px 0 20px rgba(0,0,0,0.2), inset 8px 0 20px rgba(255,255,255,0.3)',
                  position: 'relative'
                }}
              >
                {/* Vase neck */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '110px',
                    height: '25px',
                    background: 'linear-gradient(to right, #FFE4B5 0%, #FFD700 100%)',
                    borderRadius: '50% 50% 0 0',
                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3)'
                  }}
                ></div>
              </div>
            </div>

            {/* Flowers Container */}
            <div className="absolute w-full h-full flex items-end justify-center" style={{ perspective: '1000px', zIndex: 20 }}>
              {/* Stems base */}
              <div className="absolute flex justify-center gap-1" style={{ bottom: '180px', height: '250px' }}>
                {[...Array(7)].map((_, i) => (
                  <div
                    key={`stem-${i}`}
                    style={{
                      width: '3px',
                      height: '250px',
                      background: `linear-gradient(180deg, #2d5016 0%, #4a7c2c 100%)`,
                      borderRadius: '50%',
                      transform: `skewX(${(i - 3) * 3}deg) rotate(${(i - 3) * 2}deg)`,
                      boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                    }}
                  ></div>
                ))}
              </div>

              {/* Red Roses - Premium design */}
              {/* Center Rose */}
              <div
                className="absolute animate-bounce"
                style={{
                  bottom: '350px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  animationDelay: '0s'
                }}
              >
                <div style={{ position: 'relative', width: '60px', height: '60px' }}>
                  {/* Rose petals layers */}
                  {[...Array(5)].map((_, layer) => (
                    <div
                      key={`rose-center-${layer}`}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: layer === 0 ? '#DC143C' : layer === 1 ? '#C41E3A' : layer === 2 ? '#B21E35' : '#A01A2E',
                        boxShadow: `inset -${layer * 2}px -${layer * 2}px 10px rgba(0,0,0,0.3), 0 8px 20px rgba(220,20,60,0.6)`,
                        transform: `scale(${1 - layer * 0.15})`,
                        filter: 'blur(0.5px)'
                      }}
                    ></div>
                  ))}
                  {/* Rose highlight */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '20px',
                      height: '20px',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
                      borderRadius: '50%',
                      top: '10px',
                      left: '10px',
                      filter: 'blur(2px)'
                    }}
                  ></div>
                </div>
              </div>

              {/* Left Rose */}
              <div
                className="absolute"
                style={{
                  bottom: '320px',
                  left: '35%',
                  transform: 'rotate(-20deg)'
                }}
              >
                <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                  {[...Array(4)].map((_, layer) => (
                    <div
                      key={`rose-left-${layer}`}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: layer === 0 ? '#E31937' : layer === 1 ? '#C41E3A' : '#A01A2E',
                        boxShadow: `inset -${layer * 2}px -${layer * 2}px 8px rgba(0,0,0,0.3), 0 6px 15px rgba(220,20,60,0.5)`,
                        transform: `scale(${1 - layer * 0.15})`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Right Rose */}
              <div
                className="absolute"
                style={{
                  bottom: '320px',
                  right: '35%',
                  transform: 'rotate(20deg)'
                }}
              >
                <div style={{ position: 'relative', width: '50px', height: '50px' }}>
                  {[...Array(4)].map((_, layer) => (
                    <div
                      key={`rose-right-${layer}`}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: layer === 0 ? '#E31937' : layer === 1 ? '#C41E3A' : '#A01A2E',
                        boxShadow: `inset -${layer * 2}px -${layer * 2}px 8px rgba(0,0,0,0.3), 0 6px 15px rgba(220,20,60,0.5)`,
                        transform: `scale(${1 - layer * 0.15})`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Pink Flowers - Back Layer */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`pink-${i}`}
                  className="absolute"
                  style={{
                    bottom: `${300 - i * 40}px`,
                    left: i % 2 === 0 ? '25%' : '75%',
                    transform: `rotate(${(i % 2) * 40 - 20}deg) scale(${0.9 - i * 0.1})`
                  }}
                >
                  <div style={{ position: 'relative', width: '45px', height: '45px' }}>
                    {[...Array(3)].map((_, layer) => (
                      <div
                        key={`pink-petal-${layer}`}
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          background: layer === 0 ? '#FFB6D9' : layer === 1 ? '#FF69B4' : '#FF1493',
                          boxShadow: `0 4px 12px rgba(255,20,147,0.4)`,
                          transform: `scale(${1 - layer * 0.2})`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Sparkles */}
              <div
                className="absolute text-2xl animate-pulse"
                style={{ bottom: '380px', left: '25%' }}
              >
                ✨
              </div>
              <div
                className="absolute text-2xl animate-pulse"
                style={{ bottom: '380px', right: '25%', animationDelay: '0.5s' }}
              >
                ✨
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-left px-4 sm:px-0">
            <h3 className="font-playfair text-2xl sm:text-4xl mb-6 sm:mb-8" style={{ color: '#FF1493' }}>
              Buket Mawar Premium
            </h3>

            <div className="space-y-4 sm:space-y-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <div>
                <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: '#FFD700' }}>🌹 3 Mawar Merah Premium</p>
                <p className="text-sm sm:text-base leading-relaxed">Melambangkan cinta yang dalam, passion, dan kesetiaan. Setiap kelopak dipilih untuk kesempurnaannya.</p>
              </div>

              <div>
                <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: '#FF69B4' }}>🌸 Bunga Sakura Pink</p>
                <p className="text-sm sm:text-base leading-relaxed">Melambangkan keindahan yang lembut, keanggunan, dan kehidupan yang indah yang terus berkembang.</p>
              </div>

              <div>
                <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: '#4a7c2c' }}>🍃 Aksesoris Hijau</p>
                <p className="text-sm sm:text-base leading-relaxed">Menambahkan kesegaran, kehidupan, dan kesuksesan pada setiap rangkaian yang sempurna.</p>
              </div>

              <div>
                <p className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" style={{ color: '#FFD700' }}>💛 Vas Emas Eksklusif</p>
                <p className="text-sm sm:text-base leading-relaxed">Menempatkan buket dengan elegan, mencerminkan kemewahan dan kehangatan cinta yang abadi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="p-6 sm:p-12 rounded-3xl border-2 max-w-3xl mx-auto" style={{
          borderColor: 'rgba(255,20,147,0.6)',
          background: 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(219,112,147,0.15) 100%)',
          boxShadow: '0 10px 40px rgba(255,20,147,0.2)'
        }}>
          <p className="text-2xl sm:text-3xl font-playfair mb-4 sm:mb-6" style={{ color: '#FF1493' }}>
            💌 Dengan Sepenuh Cinta
          </p>
          <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
            Buket ini adalah masterpiece yang dibuat khusus untuk merayakan dirimu. Setiap bunga dipilih dengan cermat,
            setiap detail dipikirkan dengan mendalam, karena kamu pantas mendapatkan yang terbaik dari yang terbaik.
            Semoga keindahan bunga ini mencerminkan keindahan jiwa dan hati nuranimu yang luar biasa istimewa. 🌹✨
          </p>
        </div>
      </div>
    </section>
  )
}
export default GiftGallery
