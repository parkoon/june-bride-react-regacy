import { useEffect, useMemo, useState } from 'react'

type UseDecimalFromScrollOptions = {
    start?: number
    end?: number
    intensity?: number
}
function useDecimalFromScroll({
    start = 1,
    end = 100,
    intensity = 1,
}: UseDecimalFromScrollOptions = {}) {
    const [value, setValue] = useState(start)

    const isIncrement = useMemo(() => start - end < 0, [start, end])

    useEffect(() => {
        const handleScroll = () => {
            const scroll =
                window.pageYOffset || document.documentElement.scrollTop

            const amount = isIncrement
                ? (scroll * intensity) / 100
                : (-scroll * intensity) / 100

            const minMax = isIncrement ? Math.min : Math.max

            const result = minMax((start * 100 + amount) / 100, end)

            setValue(result)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useDecimalFromScroll
