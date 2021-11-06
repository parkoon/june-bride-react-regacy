import { CSSProperties, useEffect, useState } from 'react'

const useBoxShadow = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY !== 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // TODO. BOX SHADOW transition timing 및 색상 등 디테일 다루기
    const styles: CSSProperties = scrolled
        ? {
              boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
              transition: 'box-shadow .3s',
          }
        : {
              boxShadow: 'none',
              transition: 'box-shadow .4s',
          }

    return styles
}

export default useBoxShadow
