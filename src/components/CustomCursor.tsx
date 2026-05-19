import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouchEnabled = () => {
        return (
          (navigator.maxTouchPoints > 0) ||
          ((navigator as any).msMaxTouchPoints > 0) ||
          window.matchMedia('(pointer:coarse)').matches
        )
      }
      setIsTouchDevice(isTouchEnabled())
    }

    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('resize', checkTouchDevice)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div
          className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 shadow-lg"
          style={{
            boxShadow: '0 0 12px rgba(255,20,147,0.8), 0 0 24px rgba(255,105,180,0.4)',
          }}
        />
      </motion.div>

      {/* Outer ring that expands on hover */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
          mass: 0.8,
        }}
      >
        <div
          className="w-6 h-6 rounded-full border-2 border-pink-400"
          style={{
            opacity: isHovering ? 1 : 0.5,
            boxShadow: `0 0 ${isHovering ? '20' : '8'}px rgba(255,20,147,0.6)`,
          }}
        />
      </motion.div>

      {/* Sparkle particles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-[9999] text-lg"
          animate={{
            x: mousePosition.x + Math.cos(i * (Math.PI * 2 / 3)) * 15 - 8,
            y: mousePosition.y + Math.sin(i * (Math.PI * 2 / 3)) * 15 - 8,
            opacity: isHovering ? 1 : 0,
            scale: isHovering ? 1 : 0.5,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 100,
          }}
        >
          ✨
        </motion.div>
      ))}

      {!isTouchDevice && (
        <style>{`
          * {
            cursor: none;
          }
        `}</style>
      )}
      {isTouchDevice && (
        <style>{`
          * {
            cursor: none !important;
          }
        `}</style>
      )}
    </>
  )
}

export default CustomCursor
