import styled from '@emotion/styled'

type WhiteTextColorProps = {
    color?: string
    visible?: boolean
}

const TextCover = styled.div<WhiteTextColorProps>`
    position: absolute;
    background: ${({ color = '#2f3640' }) => color};
    top: 0;

    height: 100%;
    width: 100%;

    transition: 0.5s ease;

    transform: ${({ visible = false }) =>
        visible ? `translateX(0px)` : `translateX(100%)`};
`

export default TextCover
