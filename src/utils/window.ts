export const getScrollBarHeight = () =>
    window.innerHeight * (window.innerHeight / document.body.offsetHeight)
export const getWindowScroll = () =>
    window.pageYOffset || document.documentElement.scrollTop
export const getScrollHeight = () => {
    const { body } = document
    const html = document.documentElement

    return (
        Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        ) - getScrollBarHeight()
    )
}
