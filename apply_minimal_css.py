#!/usr/bin/env python3
"""Replace CSS section with minimal Tailwind-compatible CSS"""

minimal_css = """  <style>
    /* ================================================================
       ESSENTIAL CSS ONLY - Animations, Clip-paths, Complex Effects
    ================================================================ */

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      max-width: 100%;
    }

    html {
      scroll-behavior: smooth;
      overflow-x: clip !important;
      width: 100vw;
      max-width: 100vw;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #f5c0c0;
      background-image: url('leopard-pink.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      overflow-x: clip !important;
      margin: 0;
      padding: 0;
    }

    /* ===== LEOPARD BAR PATTERN ===== */
    .leopard-bar {
      background-image:
        radial-gradient(ellipse 6px 4px at  10px  8px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 6px at  18px  3px, #3a1800 100%, transparent),
        radial-gradient(ellipse 5px 4px at   4px 16px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 5px at  15px 19px, #3a1800 100%, transparent),
        radial-gradient(ellipse 6px 4px at  40px  5px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 6px at  50px 12px, #3a1800 100%, transparent),
        radial-gradient(ellipse 5px 3px at  33px 17px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 5px at  57px  2px, #3a1800 100%, transparent),
        radial-gradient(ellipse 6px 4px at  70px 10px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 6px at  80px  3px, #3a1800 100%, transparent),
        radial-gradient(ellipse 5px 4px at  65px 19px, #3a1800 100%, transparent),
        radial-gradient(ellipse 4px 5px at  88px 16px, #3a1800 100%, transparent);
      background-size: 100px 28px;
    }

    /* ================================================================
       ALL ANIMATIONS - Keep every @keyframes
    ================================================================ */
    @keyframes lockShake {
      0%,85%,100% { transform: rotate(0deg) scale(1); }
      88%          { transform: rotate(-8deg) scale(1.05); }
      92%          { transform: rotate(8deg) scale(1.05); }
      96%          { transform: rotate(-4deg); }
    }
    @keyframes fadeSlideDown {
      from { opacity: 0; transform: translateY(-30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes bounce { to { transform: translateY(-12px); } }
    @keyframes sparkle { 0%,100% { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1); } }
    @keyframes heartWobble { 0%,100% { transform: rotate(-6deg) scale(1); } 50% { transform: rotate(6deg) scale(1.07); } }
    @keyframes heartPop { 0% { transform: scale(1); opacity: 1; } 40% { transform: scale(2.2); opacity: 0.9; } 100% { transform: scale(0.1); opacity: 0; } }
    @keyframes floatScore { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-70px) scale(1.4); } }
    @keyframes pulseBtn { 0%,100% { box-shadow: 0 0 30px rgba(255,0,127,0.5); } 50% { box-shadow: 0 0 50px rgba(255,0,127,0.8); } }
    @keyframes unlockPop { 0% { transform: scale(0) rotate(-30deg); opacity: 0; } 70% { transform: scale(1.2) rotate(5deg); } 100% { transform: scale(1) rotate(0); opacity: 1; } }
    @keyframes floatUp { 0% { transform: translateY(0) rotate(-10deg); opacity: 0; } 10% { opacity: 0.8; } 90% { opacity: 0.6; } 100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; } }
    @keyframes petalFloat { 0% { opacity: 0; transform: translateY(0) rotate(0deg) scale(0.5); } 15% { opacity: 1; } 85% { opacity: 0.7; } 100% { opacity: 0; transform: translateY(-120px) rotate(360deg) scale(1.2); } }
    @keyframes bouquetFloat { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-14px) rotate(2deg); } }
    @keyframes cFlicker { from { transform: translateX(-50%) rotate(-5deg) scaleY(0.95); } to { transform: translateX(-50%) rotate(5deg) scaleY(1.12); } }
    @keyframes cGlow { from { transform: scale(0.85); opacity: 0.7; } to { transform: scale(1.15); opacity: 1; } }
    @keyframes smokeUp { 0% { opacity: 0.7; transform: translateX(-50%) translateY(0) scale(0.8); } 100% { opacity: 0; transform: translateX(-50%) translateY(-40px) scale(2.5); } }
    @keyframes pulseHeart { 0%,100% { box-shadow: 0 0 0 0 rgba(255,0,127,0.6); } 50% { box-shadow: 0 0 0 25px rgba(255,0,127,0); } }
    @keyframes popIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
    @keyframes heartbeat { 0%,100% { transform: scale(1); } 14% { transform: scale(1.2); } 28% { transform: scale(1); } 42% { transform: scale(1.15); } 56% { transform: scale(1); } }
    @keyframes cwPop { from { opacity: 0; transform: scale(0.75); } to { opacity: 1; transform: scale(1); } }
    @keyframes ldrBounce { from { transform: translateY(0) scale(1); } to { transform: translateY(-22px) scale(1.12); } }
    @keyframes ldrFill { from { width: 0% } to { width: 100% } }
    @keyframes musicPulse { 0%,100% { box-shadow: 0 4px 24px rgba(255,0,127,0.45); } 50% { box-shadow: 0 4px 40px rgba(255,0,127,0.75), 0 0 60px rgba(255,215,0,0.2); } }
    @keyframes ringExpand { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.2); opacity: 0; } }
    @keyframes iconWiggle { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-12deg) scale(1.2); } 75% { transform: rotate(12deg) scale(1.2); } }
    @keyframes heroBounce { from { transform: translateY(0) rotate(-3deg) scale(1); } to { transform: translateY(-16px) rotate(3deg) scale(1.05); } }
    @keyframes iconBounce { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.2) rotate(10deg); } }
    @keyframes numPulse { 0%,100% { text-shadow: 0 0 10px rgba(255,20,147,0.4); } 50% { text-shadow: 0 0 25px rgba(255,20,147,0.8), 0 0 50px rgba(255,20,147,0.3); } }
    @keyframes photoFloatIn { from { opacity: 0; transform: rotate(var(--rotation, 0deg)) translateY(30px); } to { opacity: 1; transform: rotate(var(--rotation, 0deg)) translateY(0); } }

    /* ================================================================
       CLIP-PATH FOR SCALLOPED EDGES
    ================================================================ */
    .letter-card {
      clip-path: polygon(
        0% 5%, 2.5% 2.5%, 5% 5%, 7.5% 2.5%, 10% 5%, 12.5% 2.5%, 15% 5%, 17.5% 2.5%, 20% 5%,
        22.5% 2.5%, 25% 5%, 27.5% 2.5%, 30% 5%, 32.5% 2.5%, 35% 5%, 37.5% 2.5%, 40% 5%,
        42.5% 2.5%, 45% 5%, 47.5% 2.5%, 50% 5%, 52.5% 2.5%, 55% 5%, 57.5% 2.5%, 60% 5%,
        62.5% 2.5%, 65% 5%, 67.5% 2.5%, 70% 5%, 72.5% 2.5%, 75% 5%, 77.5% 2.5%, 80% 5%,
        82.5% 2.5%, 85% 5%, 87.5% 2.5%, 90% 5%, 92.5% 2.5%, 95% 5%, 97.5% 2.5%, 100% 5%,
        100% 10%, 97.5% 7.5%, 100% 15%, 97.5% 17.5%, 100% 20%, 97.5% 22.5%, 100% 25%, 97.5% 27.5%, 100% 30%,
        97.5% 32.5%, 100% 35%, 97.5% 37.5%, 100% 40%, 97.5% 42.5%, 100% 45%, 97.5% 47.5%, 100% 50%,
        97.5% 52.5%, 100% 55%, 97.5% 57.5%, 100% 60%, 97.5% 62.5%, 100% 65%, 97.5% 67.5%, 100% 70%,
        97.5% 72.5%, 100% 75%, 97.5% 77.5%, 100% 80%, 97.5% 82.5%, 100% 85%, 97.5% 87.5%, 100% 90%,
        97.5% 92.5%, 100% 95%,
        100% 95%, 97.5% 97.5%, 95% 95%, 92.5% 97.5%, 90% 95%, 87.5% 97.5%, 85% 95%, 82.5% 97.5%, 80% 95%,
        77.5% 97.5%, 75% 95%, 72.5% 97.5%, 70% 95%, 67.5% 97.5%, 65% 95%, 62.5% 97.5%, 60% 95%,
        57.5% 97.5%, 55% 95%, 52.5% 97.5%, 50% 95%, 47.5% 97.5%, 45% 95%, 42.5% 97.5%, 40% 95%,
        37.5% 97.5%, 35% 95%, 32.5% 97.5%, 30% 95%, 27.5% 97.5%, 25% 95%, 22.5% 97.5%, 20% 95%,
        17.5% 97.5%, 15% 95%, 12.5% 97.5%, 10% 95%, 7.5% 97.5%, 5% 95%, 2.5% 97.5%, 0% 95%,
        0% 90%, 2.5% 92.5%, 0% 85%, 2.5% 82.5%, 0% 80%, 2.5% 77.5%, 0% 75%, 2.5% 72.5%, 0% 70%,
        2.5% 67.5%, 0% 65%, 2.5% 62.5%, 0% 60%, 2.5% 57.5%, 0% 55%, 2.5% 52.5%, 0% 50%,
        2.5% 47.5%, 0% 45%, 2.5% 42.5%, 0% 40%, 2.5% 37.5%, 0% 35%, 2.5% 32.5%, 0% 30%,
        2.5% 27.5%, 0% 25%, 2.5% 22.5%, 0% 20%, 2.5% 17.5%, 0% 15%, 2.5% 12.5%, 0% 10%
      );
    }

    @media (max-width: 768px) {
      .letter-card {
        clip-path: polygon(0 0, 100% 0, 100% 95%, 97.5% 97.5%, 95% 95%, 92.5% 97.5%, 90% 95%, 87.5% 97.5%, 85% 95%, 82.5% 97.5%, 80% 95%, 77.5% 97.5%, 75% 95%, 72.5% 97.5%, 70% 95%, 67.5% 97.5%, 65% 95%, 62.5% 97.5%, 60% 95%, 57.5% 97.5%, 55% 95%, 52.5% 97.5%, 50% 95%, 47.5% 97.5%, 45% 95%, 42.5% 97.5%, 40% 95%, 37.5% 97.5%, 35% 95%, 32.5% 97.5%, 30% 95%, 27.5% 97.5%, 25% 95%, 22.5% 97.5%, 20% 95%, 17.5% 97.5%, 15% 95%, 12.5% 97.5%, 10% 95%, 7.5% 97.5%, 5% 95%, 2.5% 97.5%, 0% 95%);
      }
    }

    /* ================================================================
       BACKDROP FILTER UTILITIES
    ================================================================ */
    .glass-blur { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
    .glass-blur-8 { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
    .glass-blur-14 { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
    .glass-blur-16 { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
    .glass-blur-18 { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
    .glass-blur-20 { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }

    /* ================================================================
       CUSTOM CURSOR
    ================================================================ */
    @media (pointer: fine) {
      * { cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><text y='24' font-size='22'>❤️</text></svg>") 12 12, auto !important; }
      a, button, [onclick], input, label { cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><text y='24' font-size='22'>💖</text></svg>") 12 12, pointer !important; }
    }

    /* ================================================================
       SCROLLBAR
    ================================================================ */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0a0005; }
    ::-webkit-scrollbar-thumb { background: #FF007F; border-radius: 3px; }

    /* ================================================================
       SAFE AREA INSETS (iPhone)
    ================================================================ */
    @supports (padding: env(safe-area-inset-bottom)) {
      body { padding-left: env(safe-area-inset-left); padding-right: env(safe-area-inset-right); }
    }

  </style>"""

# Read original file
with open('index.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find style tags
style_start = content.find('<style>')
style_end = content.find('</style>') + len('</style>')

if style_start == -1 or style_end == -1:
    print("Could not find style tags!")
    exit(1)

# Replace style section
new_content = content[:style_start] + minimal_css + content[style_end:]

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("CSS section replaced with minimal version")
print(f"Original CSS: {style_end - style_start} bytes")
print(f"New CSS: {len(minimal_css)} bytes")
print(f"Total file size: {len(new_content)} bytes")
