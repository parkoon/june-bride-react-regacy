import { css } from '@emotion/react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
    width: 120px;
    height: 120px;
`

const LockHeader = styled.div<{ open?: boolean }>`
    position: absolute;
    left: 34%;
    top: 17%;

    width: 40px;
    height: 30px;

    border: 7px solid transparent;
    border-bottom: none;
    border-radius: 30px 30px 0 0;
    ${({ open }) =>
        open
            ? css`
                  background-image: linear-gradient(#273c75, #273c75),
                      linear-gradient(90deg, #fff, #fff);
              `
            : css`
                  background-image: linear-gradient(#fff, #fff),
                      linear-gradient(90deg, #273c75, #353b48);
              `}

    background-origin: border-box;
    background-clip: content-box, border-box;

    transform-origin: left;
`
const LockBody = styled.div<{ open?: boolean }>`
    width: 60%;
    height: 48%;
    position: absolute;
    left: 50%;
    margin-left: -30%;
    bottom: 11%;
    border-radius: 15%;

    ${({ open }) =>
        open
            ? css`
    background-image: linear-gradient(90deg, #fff, #fff)};
    
    `
            : css`
    background-image: linear-gradient(90deg, #273c75, #353b48)};
    
    `};
`

const LockHole = styled.div<{ open: boolean }>`
    width: 16%;
    height: 16%;
    position: absolute;
    left: 50%;
    margin-left: -8%;
    top: 51%;
    border-radius: 100%;
    background-color: ${({ open }) => (open ? '#273c75' : '#fff')};

    &::after {
        content: '';
        width: 43%;
        height: 78%;
        position: absolute;
        left: 50%;
        margin-left: -20%;
        top: 90%;
        background-color: inherit;
    }
`

type LockIconProps = {
    open?: boolean
    rotate?: number
}
function LockIcon({ open = false, rotate = 0 }: LockIconProps) {
    return (
        <Wrapper>
            <LockHeader
                open={open}
                style={{ transform: `rotateY(${rotate}deg)` }}
            />
            <LockBody open={open} />
            <LockHole open={open} />
        </Wrapper>
    )
}

export default LockIcon
