import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const defaultStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

    ${emotionReset}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
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

    p {
        line-height: 1.2;
    }
`

const GlobalStyle: FunctionComponent = () => <Global styles={defaultStyle} />

export default GlobalStyle
