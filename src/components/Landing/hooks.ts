import { useEffect, useMemo, useState } from 'react'
import { getWindowScroll } from '../../utils/window'
import { getLandingHeight } from './helpers'

type UseSlopeOptions = {
    y: [number, number]
    x: [`${number}%`, `${number}%`]
}
export const useSlope = ({ y: [y1, y2], x: [x1, x2] }: UseSlopeOptions) => {
    const area = getLandingHeight()
    const startX = useMemo(() => area * parseInt(x1, 10) * 0.01, [])
    const endX = useMemo(() => area * parseInt(x2, 10) * 0.01, [])

    const [result, setValue] = useState(y1)

    useEffect(() => {
        const handleScroll = () => {
            const moveX = getWindowScroll()

            if (moveX < startX) {
                setValue(y1)
                return
            }

            // 기울기
            const m = (y2 - y1) / (endX - startX)

            // 직선 방정식
            const y = m * (moveX - startX) + y1

            if (moveX > endX) {
                setValue(y2)
                return
            }

            setValue(y)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return result
}

type Opacity = {
    trigger: `${number}%`
    value: number
}
type UseFadeInOutOptions = {
    opacity: [Opacity, Opacity, Opacity]
}
export const useFadeInOut = ({ opacity }: UseFadeInOutOptions) => {
    const [value, setValue] = useState(opacity[0].value)

    useEffect(() => {
        const handleScroll = () => {
            const scroll = getWindowScroll()
            const height = getLandingHeight()

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

const DEFAULT_TRANSFORM_Y = 30
const DEFAULT_SLOPE = 0.05
const DEFAULT_OPACITY = 0

type UseTransformOpacityOptions = {
    slope?: number
    initialValues?: {
        y: number
        opacity: number
    }
    triggerX?: `${number}%`
}

function useTransformOpacity({
    slope = DEFAULT_SLOPE,
    initialValues = {
        y: DEFAULT_TRANSFORM_Y,
        opacity: DEFAULT_OPACITY,
    },
    triggerX = '0%',
}: UseTransformOpacityOptions = {}) {
    const [value, setValue] = useState(initialValues)

    useEffect(() => {
        const handleScroll = () => {
            const scroll = getWindowScroll()
            const height = getLandingHeight()

            const triggerPoint = height * parseInt(triggerX, 10) * 0.01

            if (scroll <= triggerPoint) {
                setValue(initialValues)
                return
            }

            const y = Math.round(
                initialValues.y - (scroll - triggerPoint) * slope
            )

            const opacity = Number(
                (((scroll - triggerPoint) / initialValues.y) * slope).toFixed(1)
            )

            setValue({
                y: y < 0 ? 0 : y,
                opacity: opacity > 1 ? 1 : opacity,
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useTransformOpacity
