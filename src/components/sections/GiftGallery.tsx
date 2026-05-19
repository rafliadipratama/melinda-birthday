const GiftGallery = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #0a0005, #160010)' }}>
      <div className="max-w-6xl w-full mx-auto text-center">
        <h2 className="font-playfair text-5xl italic mb-4" style={{ color: '#FF1493' }}>
          🌹 Buket Bunga Istimewa
        </h2>
        <p className="text-lg mb-16" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Rangkaian bunga premium yang dipilih dengan cinta untuk hari spesialmu
        </p>

        {/* Flower Bouquet Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-20">
          {/* Bouquet Visual with SVG-style flowers */}
          <div className="relative w-full max-w-md h-screen-sm flex items-center justify-center" style={{ minHeight: '500px' }}>
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
            <div className="absolute w-full h-full flex items-end justify-center" style={{ perspective: '1200px', zIndex: 20 }}>
              {/* Stems */}
              <div className="absolute flex justify-center gap-0.5" style={{ bottom: '195px', height: '300px' }}>
                {[...Array(15)].map((_, i) => {
                  const angle = (i - 7) * 6;
                  return (
                    <div
                      key={`stem-${i}`}
                      style={{
                        width: '2px',
                        height: '300px',
                        background: `linear-gradient(180deg, #2d5016 0%, #4a7c2c 80%, transparent 100%)`,
                        borderRadius: '50%',
                        transform: `rotate(${angle}deg) skewX(${Math.abs(i - 7) * 2}deg)`,
                        boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                        transformOrigin: 'bottom center'
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Flower Generator with CSS Petals */}
              {[
                // Center red roses (focal points)
                { x: '50%', y: 'calc(100% - 360px)', petals: 8, size: 50, color: '#DC143C', lightColor: '#FF1744', delay: 0 },
                { x: '40%', y: 'calc(100% - 310px)', petals: 8, size: 45, color: '#C41E3A', lightColor: '#E31937', delay: 0.1 },
                { x: '60%', y: 'calc(100% - 310px)', petals: 8, size: 45, color: '#C41E3A', lightColor: '#E31937', delay: 0.1 },

                // Pink flowers
                { x: '45%', y: 'calc(100% - 280px)', petals: 7, size: 40, color: '#FF69B4', lightColor: '#FFB6D9', delay: 0.15 },
                { x: '55%', y: 'calc(100% - 280px)', petals: 7, size: 40, color: '#FF69B4', lightColor: '#FFB6D9', delay: 0.15 },
                { x: '28%', y: 'calc(100% - 270px)', petals: 6, size: 38, color: '#FF1493', lightColor: '#FFB6D9', delay: 0.2 },
                { x: '72%', y: 'calc(100% - 270px)', petals: 6, size: 38, color: '#FF1493', lightColor: '#FFB6D9', delay: 0.2 },

                // White/cream flowers
                { x: '50%', y: 'calc(100% - 250px)', petals: 7, size: 36, color: '#FFF0F5', lightColor: '#FFFFFF', delay: 0.12 },
                { x: '35%', y: 'calc(100% - 240px)', petals: 6, size: 34, color: '#FFE4E1', lightColor: '#FFF8F8', delay: 0.22 },
                { x: '65%', y: 'calc(100% - 240px)', petals: 6, size: 34, color: '#FFE4E1', lightColor: '#FFF8F8', delay: 0.22 },

                // Additional red roses
                { x: '30%', y: 'calc(100% - 300px)', petals: 7, size: 42, color: '#B21E35', lightColor: '#DC143C', delay: 0.18 },
                { x: '70%', y: 'calc(100% - 300px)', petals: 7, size: 42, color: '#B21E35', lightColor: '#DC143C', delay: 0.18 },

                // Pink accent flowers
                { x: '22%', y: 'calc(100% - 260px)', petals: 5, size: 32, color: '#FFB6D9', lightColor: '#FFC0D0', delay: 0.25 },
                { x: '78%', y: 'calc(100% - 260px)', petals: 5, size: 32, color: '#FFB6D9', lightColor: '#FFC0D0', delay: 0.25 },

                // Light pink full
                { x: '50%', y: 'calc(100% - 220px)', petals: 8, size: 38, color: '#FFB6D9', lightColor: '#FFC0D0', delay: 0.2 },

                // Small accent flowers
                { x: '38%', y: 'calc(100% - 200px)', petals: 5, size: 30, color: '#FFE4E1', lightColor: '#FFF0F5', delay: 0.28 },
                { x: '62%', y: 'calc(100% - 200px)', petals: 5, size: 30, color: '#FFE4E1', lightColor: '#FFF0F5', delay: 0.28 },
              ].map((flower, idx) => (
                <div
                  key={`flower-${idx}`}
                  style={{
                    position: 'absolute',
                    left: flower.x,
                    top: flower.y,
                    transform: 'translate(-50%, -50%)',
                    animation: `fadeInScale 0.5s ease-out ${flower.delay}s both`
                  }}
                >
                  {/* Flower center */}
                  <div style={{ position: 'relative', width: `${flower.size}px`, height: `${flower.size}px` }}>
                    {/* Petals in circular arrangement */}
                    {[...Array(flower.petals)].map((_, petalIdx) => {
                      const angle = (360 / flower.petals) * petalIdx;
                      return (
                        <div
                          key={`petal-${petalIdx}`}
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '55%',
                            background: `linear-gradient(to bottom, ${flower.lightColor} 0%, ${flower.color} 100%)`,
                            borderRadius: '50% 50% 30% 30%',
                            left: '50%',
                            top: '0',
                            transformOrigin: '0 100%',
                            transform: `translateX(-50%) rotate(${angle}deg)`,
                            boxShadow: `0 2px 8px rgba(0, 0, 0, 0.2)`,
                            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                          }}
                        ></div>
                      );
                    })}
                    {/* Flower center circle */}
                    <div
                      style={{
                        position: 'absolute',
                        width: '35%',
                        height: '35%',
                        background: `radial-gradient(circle, #FFD700 0%, #FFA500 100%)`,
                        borderRadius: '50%',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.3)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}

              {/* Green leaves */}
              {[
                { x: '18%', y: 'calc(100% - 290px)', rotate: -55 },
                { x: '82%', y: 'calc(100% - 290px)', rotate: 55 },
                { x: '25%', y: 'calc(100% - 240px)', rotate: -40 },
                { x: '75%', y: 'calc(100% - 240px)', rotate: 40 },
                { x: '35%', y: 'calc(100% - 190px)', rotate: -25 },
                { x: '65%', y: 'calc(100% - 190px)', rotate: 25 },
              ].map((leaf, idx) => (
                <div
                  key={`leaf-${idx}`}
                  style={{
                    position: 'absolute',
                    left: leaf.x,
                    top: leaf.y,
                    width: '28px',
                    height: '14px',
                    background: 'linear-gradient(135deg, #52a84e 0%, #2d5016 100%)',
                    borderRadius: '0 50% 50% 0',
                    transform: `translate(-50%, -50%) rotate(${leaf.rotate}deg)`,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3), inset -1px 0 2px rgba(0, 0, 0, 0.2)',
                    animation: `fadeIn 0.6s ease-out 0.3s both`
                  }}
                ></div>
              ))}

              {/* Sparkles */}
              <div
                className="absolute text-3xl"
                style={{ left: '18%', top: 'calc(100% - 330px)', animation: 'fadeIn 0.8s ease-out 0.35s both' }}
              >
                ✨
              </div>
              <div
                className="absolute text-3xl"
                style={{ right: '18%', top: 'calc(100% - 330px)', animation: 'fadeIn 0.8s ease-out 0.45s both' }}
              >
                ✨
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-left">
            <h3 className="font-playfair text-4xl mb-8" style={{ color: '#FF1493' }}>
              Buket Mawar Premium
            </h3>

            <div className="space-y-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: '#FFD700' }}>🌹 3 Mawar Merah Premium</p>
                <p className="text-base leading-relaxed">Melambangkan cinta yang dalam, passion, dan kesetiaan. Setiap kelopak dipilih untuk kesempurnaannya.</p>
              </div>

              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: '#FF69B4' }}>🌸 Bunga Sakura Pink</p>
                <p className="text-base leading-relaxed">Melambangkan keindahan yang lembut, keanggunan, dan kehidupan yang indah yang terus berkembang.</p>
              </div>

              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: '#4a7c2c' }}>🍃 Aksesoris Hijau</p>
                <p className="text-base leading-relaxed">Menambahkan kesegaran, kehidupan, dan kesuksesan pada setiap rangkaian yang sempurna.</p>
              </div>

              <div>
                <p className="text-xl font-semibold mb-2" style={{ color: '#FFD700' }}>💛 Vas Emas Eksklusif</p>
                <p className="text-base leading-relaxed">Menempatkan buket dengan elegan, mencerminkan kemewahan dan kehangatan cinta yang abadi.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Message */}
        <div className="p-12 rounded-3xl border-2 max-w-3xl mx-auto" style={{
          borderColor: 'rgba(255,20,147,0.6)',
          background: 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(219,112,147,0.15) 100%)',
          boxShadow: '0 10px 40px rgba(255,20,147,0.2)'
        }}>
          <p className="text-3xl font-playfair mb-6" style={{ color: '#FF1493' }}>
            💌 Dengan Sepenuh Cinta
          </p>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
            Buket ini adalah masterpiece yang dibuat khusus untuk merayakan dirimu. Setiap bunga dipilih dengan cermat,
            setiap detail dipikirkan dengan mendalam, karena kamu pantas mendapatkan yang terbaik dari yang terbaik.
            Semoga keindahan bunga ini mencerminkan keindahan jiwa dan hati nuranimu yang luar biasa istimewa. 🌹✨
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
export default GiftGallery
