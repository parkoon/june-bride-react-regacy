import { useEffect, useState } from 'react'
import { getScrollHeight, getWindowScroll } from '../utils/window'

const DEFAULT_TRANSFORM_Y = 20
const DEFAULT_SLOPE = 0.05
const DEFAULT_OPACITY = 0

export type TransformOpacityTrigger = {
    height: number
    y: `${number}%`
}

type UseTransformOpacityOptions = {
    slope?: number
    initialValues?: {
        y: number
        opacity: number
    }
    trigger?: TransformOpacityTrigger
}

function useTransformOpacity({
    slope = DEFAULT_SLOPE,
    initialValues = {
        y: DEFAULT_TRANSFORM_Y,
        opacity: DEFAULT_OPACITY,
    },
    trigger = {
        height: getScrollHeight(),
        y: '0%',
    },
}: UseTransformOpacityOptions = {}) {
    const [value, setValue] = useState(initialValues)
    useEffect(() => {
        const handleScroll = () => {
            const scroll = getWindowScroll()

            const triggerPoint = trigger.height * parseInt(trigger.y, 10) * 0.01

            if (scroll < triggerPoint) return

            const y = Math.round(
                initialValues.y - (scroll - triggerPoint) * slope
            )

            const opacity = ((scroll - triggerPoint) / initialValues.y) * slope

            if (opacity > 1) {
                return
            }
            setValue({
                y,
                opacity,
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.addEventListener('scroll', handleScroll)
    }, [])

    return value
}

export default useTransformOpacity
