import { useState, useEffect } from 'react'

function useDimension() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  function getWindowSize() {
    const { innerWidth } = window
    if (innerWidth < 420) return { size: 'mobile', width: innerWidth }
    if (innerWidth >= 421 && innerWidth <= 1024) return { size: 'tablet', width: innerWidth }
    if (innerWidth > 1024) return { size: 'desktop', width: innerWidth }
  }

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useDimension
