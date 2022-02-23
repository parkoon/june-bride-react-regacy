import { useEffect, useState } from 'react'

type UseDecimalFromScrollOptions = {
    start?: number
    end?: number
    increase?: boolean
    intensity?: number
}
function useDecimalFromScroll({
    start = 1,
    end = 100,
    increase = true,
    intensity = 1,
}: UseDecimalFromScrollOptions = {}) {
    const [value, setValue] = useState(start)
    useEffect(() => {
        const handleScroll = () => {
            const scroll =
                window.pageYOffset || document.documentElement.scrollTop

            const amount = (scroll * intensity) / 100

            const result = Math.min(
                (start * 100 + (increase ? amount : -amount)) / 100,
                end
            )

            setValue(result)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useDecimalFromScroll
