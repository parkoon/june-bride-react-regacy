import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { variables } from './constants'

const Wrapper = styled.div<Pick<HamburgerProps, 'active'>>`
    width: ${variables.hamburgerSize};
    height: ${variables.hamburgerSize};
    background: #2b2e4a;
    border-radius: 50%;

    cursor: pointer;

    position: fixed;
    top: ${variables.fixedPosition};
    right: ${variables.fixedPosition};

    span {
        height: 2px;
        width: 50%;
        background: #fff;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);

        &:first-child {
            transform: translate(-50%, calc(-50% - 7px));
        }
        &:last-child {
            transform: translate(-50%, calc(-50% + 7px));
        }
    }

    ${({ active }) =>
        active &&
        css`
            span {
                background: #ffe26f;

                &:nth-child(1) {
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                &:nth-child(2) {
                    opacity: 0;
                }
                &:nth-child(3) {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }
        `}
`

type HamburgerProps = {
    active?: boolean
    onClick?(): void
}
function Hamburger({ active, onClick }: HamburgerProps) {
    return (
        <Wrapper role="button" active={active} onClick={onClick}>
            <span />
            <span />
            <span />
        </Wrapper>
    )
}

export default Hamburger
