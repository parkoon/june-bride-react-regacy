import { useEffect, useState } from 'react'
import { getScrollHeight, getWindowScroll } from '../utils/window'

type Opacity = {
    trigger: `${number}%`
    value: number
}
type UseFadeInOutOptions = {
    areaHeight?: number
    opacity: [Opacity, Opacity, Opacity]
}
function useFadeInOut({ opacity, areaHeight }: UseFadeInOutOptions) {
    const [value, setValue] = useState(opacity[0].value)

    useEffect(() => {
        const handleScroll = () => {
            const scroll = getWindowScroll()
            const height = areaHeight || getScrollHeight()

            const posX = {
                start: height * parseInt(opacity[0].trigger, 10) * 0.01,
                turning: height * parseInt(opacity[1].trigger, 10) * 0.01,
                end: height * parseInt(opacity[2].trigger, 10) * 0.01,
            }

            // 첫번째 그래프 (상향 그래프)
            const upGraphSlope =
                Math.abs(opacity[0].value - opacity[1].value) /
                Math.abs(posX.start - posX.turning)

            const upGraphYIntercept =
                opacity[0].value - upGraphSlope * posX.start

            // 두번째 그래프 (하향 그래프)
            const downGraphSlope = -(
                Math.abs(opacity[1].value - opacity[2].value) /
                Math.abs(posX.turning - posX.end)
            )
            const downGraphYIntercept =
                opacity[1].value - downGraphSlope * posX.turning

            if (scroll < posX.start) {
                return
            }

            if (scroll > posX.start && scroll < posX.turning) {
                setValue(scroll * upGraphSlope + upGraphYIntercept)
            }

            if (scroll > posX.turning && scroll < height) {
                setValue(scroll * downGraphSlope + downGraphYIntercept)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useFadeInOut
