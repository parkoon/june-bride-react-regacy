import { useRef, useEffect } from 'react'
import { useScrollBlock } from './useScrollBlock'

interface BottomSheetMetrics {
    touchStart: {
        sheetY: number
        touchY: number
    }
    touchMove: {
        prevTouchY?: number
        movingDirection: 'none' | 'down' | 'up'
    }
    isContentTouched: boolean
}

export function useBottomSheet({
    MIN_Y,
    MAX_Y,
}: {
    MIN_Y: number
    MAX_Y: number
}) {
    const sheet = useRef<HTMLDivElement>(null)
    const content = useRef<HTMLDivElement>(null)

    const [blockScroll, allowScroll] = useScrollBlock()

    const metrics = useRef<BottomSheetMetrics>({
        touchStart: {
            sheetY: 0,
            touchY: 0,
        },
        touchMove: {
            prevTouchY: 0,
            movingDirection: 'none',
        },
        isContentTouched: false,
    })

    useEffect(() => {
        const canUserMoveBottomSheet = () => {
            const { touchMove, isContentTouched } = metrics.current

            if (!isContentTouched) {
                return true
            }

            // 바텀시트가 올라와있는 상태가 아닐 때는 컨텐츠 영역을 터치해도 바텀시트를 움직이는 것이 자연스럽습니다.
            if (sheet.current?.getBoundingClientRect().y !== MIN_Y) {
                return true
            }

            if (touchMove.movingDirection === 'down') {
                return content.current?.scrollTop! <= 0
            }

            return false
        }

        const handleTouchStart = (e: TouchEvent) => {
            if (!sheet.current) return

            blockScroll()

            const { touchStart } = metrics.current

            touchStart.sheetY = sheet.current.getBoundingClientRect().y
            touchStart.touchY = e.touches[0].clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            if (!sheet.current) return

            const { touchStart, touchMove } = metrics.current
            const currentTouch = e.touches[0]

            if (!touchMove.prevTouchY) touchMove.prevTouchY = touchStart.touchY

            if (touchMove.prevTouchY < currentTouch.clientY)
                touchMove.movingDirection = 'down'

            if (touchMove.prevTouchY > currentTouch.clientY)
                touchMove.movingDirection = 'up'

            if (!canUserMoveBottomSheet()) return

            const touchOffset = currentTouch.clientY - touchStart.touchY
            let nextSheetY = touchStart.sheetY + touchOffset

            if (nextSheetY <= MIN_Y) {
                nextSheetY = MIN_Y
            }

            if (nextSheetY >= MAX_Y) {
                nextSheetY = MAX_Y
            }

            sheet.current.style.setProperty(
                'transform',
                `translateY(${nextSheetY - MIN_Y}px)`
            )
        }

        const handleTouchEnd = () => {
            if (!sheet.current) return

            const { touchMove } = metrics.current

            if (canUserMoveBottomSheet()) {
                if (touchMove.movingDirection === 'up') {
                    sheet.current.style.setProperty(
                        'transform',
                        `translateY(${0}px)`
                    )
                }

                if (touchMove.movingDirection === 'down') {
                    allowScroll()
                    sheet.current.style.setProperty(
                        'transform',
                        `translateY(${MAX_Y - MIN_Y}px)`
                    )
                }
            }

            metrics.current = {
                touchStart: {
                    sheetY: 0,
                    touchY: 0,
                },
                touchMove: {
                    prevTouchY: 0,
                    movingDirection: 'none',
                },
                isContentTouched: false,
            }
        }

        sheet.current?.addEventListener('touchstart', handleTouchStart)
        sheet.current?.addEventListener('touchmove', handleTouchMove)
        sheet.current?.addEventListener('touchend', handleTouchEnd)

        return () => {
            sheet.current?.removeEventListener('touchstart', handleTouchStart)
            sheet.current?.removeEventListener('touchmove', handleTouchMove)
            sheet.current?.removeEventListener('touchend', handleTouchEnd)
        }
    }, [])

    useEffect(() => {
        const handleTouchStart = () => {
            metrics.current.isContentTouched = true
        }

        content?.current?.addEventListener('touchstart', handleTouchStart)

        return () => {
            content?.current?.removeEventListener(
                'touchstart',
                handleTouchStart
            )
        }
    }, [])

    return { sheet, content }
}
