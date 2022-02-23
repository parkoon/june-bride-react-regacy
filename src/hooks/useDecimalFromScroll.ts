import { useEffect, useMemo, useState } from 'react'
import { getScrollHeight, getWindowScroll } from '../utils/window'

type UseDecimalFromScrollOptions = {
    start?: number
    end?: number
    speed?: number
    /**
     * 0-100
     */
    triggerPoint?: number
    height?: number
}
function useDecimalFromScroll({
    start = 1,
    end = 100,
    speed = 1,
    triggerPoint = 0,
    height,
}: UseDecimalFromScrollOptions = {}) {
    const [value, setValue] = useState(start)
    const isIncrement = useMemo(() => start - end < 0, [start, end])

    useEffect(() => {
        const handleScroll = () => {
            const scroll = getWindowScroll()
            const wrapperHeight = height || getScrollHeight()

            const scrollPercentage = (scroll / wrapperHeight) * 100
            const triggerPointScrollY = Math.round(
                wrapperHeight * triggerPoint * 0.01
            )

            if (scrollPercentage < triggerPoint) return

            const result =
                start -
                (start - end) *
                    ((scroll - triggerPointScrollY) /
                        (wrapperHeight - triggerPointScrollY)) *
                    speed

            const minMaxFn = isIncrement ? Math.min : Math.max
            setValue(minMaxFn(result, end))
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useDecimalFromScroll
