import { useEffect, useRef } from 'react'

type ModalDragMetrics = {
    prevTouchY: number
    currentTouchY: number
    move: number
    closed: boolean
}

type Props = {
    onClose?(): void
}
function useProfileModalDrag({ onClose }: Props) {
    const modal = useRef<HTMLDivElement>(null)
    const overlay = useRef<HTMLDivElement>(null)

    const metrics = useRef<ModalDragMetrics>({
        prevTouchY: 0,
        currentTouchY: 0,
        move: 0,
        closed: false,
    })

    const forceClose = () => {
        metrics.current.closed = true
        modal.current?.style.setProperty('top', `100%`)
    }

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            metrics.current.prevTouchY = e.touches[0].clientY
        }

        const handleTouchMove = (e: TouchEvent) => {
            const currentTouchY = e.touches[0].clientY
            const { prevTouchY } = metrics.current

            if (prevTouchY > currentTouchY) return

            const move = Math.abs(prevTouchY - currentTouchY)
            metrics.current.move = move

            modal.current?.style.setProperty('top', `${move}px`)

            overlay.current?.style.setProperty(
                'opacity',
                `${1 - move / window.innerHeight}`
            )
        }

        const handleTouchEnd = () => {
            modal.current?.style.setProperty('transition', 'top 0.2s')

            if (metrics.current.move < 60) {
                modal.current?.style.setProperty('top', `${0}px`)
            } else {
                modal.current?.style.setProperty('top', `100%`)
                metrics.current.closed = true
            }
        }

        const handleTransitionEnd = (e: TransitionEvent) => {
            if (e.propertyName === 'top' && metrics.current.closed) {
                onClose?.()
            }
        }

        modal.current?.addEventListener('touchstart', handleTouchStart)
        modal.current?.addEventListener('touchmove', handleTouchMove)
        modal.current?.addEventListener('touchend', handleTouchEnd)
        modal.current?.addEventListener('transitionend', handleTransitionEnd)

        return () => {
            modal.current?.removeEventListener('touchstart', handleTouchStart)
            modal.current?.removeEventListener('touchmove', handleTouchMove)
            modal.current?.removeEventListener('touchend', handleTouchEnd)
            modal.current?.removeEventListener(
                'transitionend',
                handleTransitionEnd
            )
        }
    }, [])

    return { modal, overlay, forceClose }
}

export default useProfileModalDrag
