import { useEffect, useMemo, useState } from 'react'
import { getWindowScroll } from '../../utils/window'
import { getLandingHeight } from './helpers'

type UseLandingSlopeOptions = {
    y: [number, number]
    x: [`${number}%`, `${number}%`]
}
export const useLandingSlope = ({
    y: [y1, y2],
    x: [x1, x2],
}: UseLandingSlopeOptions) => {
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
