import { useRef } from 'react'

export const useScrollBlock = (): [() => void, () => void] => {
    const scrollBlocked = useRef(false)
    const html = document.documentElement
    const { body } = document

    const blockScroll = (): void => {
        if (!document || !body || !body.style || scrollBlocked.current) return

        const scrollBarWidth = window.innerWidth - html.clientWidth
        const bodyPaddingRight =
            Number(
                window.getComputedStyle(body).getPropertyValue('padding-right')
            ) || 0

        /**
         * 1. Fixes a bug in iOS and desktop Safari whereby setting
         *    `overflow: hidden` on the html/body does not prevent scrolling.
         * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
         *    scroll if an `overflow-x` style is also applied to the body.
         */
        body.style.position = 'relative' /* [1] */
        body.style.overflow = 'hidden' /* [2] */
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

        scrollBlocked.current = true
    }

    const allowScroll = (): void => {
        if (!body || !body.style || !scrollBlocked.current) return

        body.style.position = ''
        body.style.overflow = ''
        body.style.paddingRight = ''

        scrollBlocked.current = false
    }

    return [blockScroll, allowScroll]
}
