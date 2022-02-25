import { useEffect, useMemo, useState } from 'react'
import { getWindowScroll } from '../../utils/window'

type UseSlopeOptions = {
    y: [number, number]
    x: [`${number}%`, `${number}%`]
}
export const useSlope = ({ y: [y1, y2], x: [x1, x2] }: UseSlopeOptions) => {
    const area = 4000
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
