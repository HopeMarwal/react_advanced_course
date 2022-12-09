import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, [])

    return render({mousePosition})
}

export default MousePosition;