import { useEffect, useState } from 'react'

const CONSIDERED_TOP_POSITION = 24

function useIsScrollTop() {
    const [isTop, setIsTop] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < CONSIDERED_TOP_POSITION)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return isTop
}

export default useIsScrollTop
