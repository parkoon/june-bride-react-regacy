import { css } from '@emotion/react'
import styled from '@emotion/styled'

const CommonStyle = css`
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    padding: 12px 15px;
    letter-spacing: 1px;
    font-size: 18px;
    caret-color: rgb(49, 130, 246);
`
export const GuestBookName = styled.input`
    ${CommonStyle};
`
export const GuestBookComment = styled.textarea`
    ${CommonStyle}
    height: 200px;
`
