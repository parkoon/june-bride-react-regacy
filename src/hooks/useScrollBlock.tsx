import { useRef } from 'react'

export const useScrollBlock = (): [() => void, () => void] => {
    const scrollBlocked = useRef(false)

    const blockScroll = (): void => {
        const scrollBarWidth =
            window.innerWidth - document.documentElement.clientWidth
        const bodyPaddingRight =
            Number(
                window
                    .getComputedStyle(document.body)
                    .getPropertyValue('padding-right')
            ) || 0

        /**
         * 1. Fixes a bug in iOS and desktop Safari whereby setting
         *    `overflow: hidden` on the html/body does not prevent scrolling.
         * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
         *    scroll if an `overflow-x` style is also applied to the body.
         */
        document.body.style.position = 'relative' /* [1] */
        document.body.style.overflow = 'hidden' /* [2] */
        document.body.style.paddingRight = `${
            bodyPaddingRight + scrollBarWidth
        }px`

        scrollBlocked.current = true
    }

    const allowScroll = (): void => {
        document.body.style.position = ''
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''

        scrollBlocked.current = false
    }

    return [blockScroll, allowScroll]
}
