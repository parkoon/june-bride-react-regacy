import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const defaultStyle = css`
    ${emotionReset}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
    }
    html,
    body,
    #___gatsby {
        height: 100%;
    }

    a,
    a:hover {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    /* Reset Button */
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        font: inherit;
        line-height: normal;
    }
`

function GlobalStyle() {
    return <Global styles={defaultStyle} />
}

export default GlobalStyle
