import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import Accordion from '../@common/Accordion'
import { items, variables } from './constants'

const Wrapper = styled.div<Pick<HotAccessContentProps, 'active'>>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: ${variables.contentWidth};

    background: #2b2e4a;

    padding: calc(${variables.hamburgerSize} + ${variables.fixedPosition} * 2)
        12px 20px 12px;

    display: flex;

    clip-path: circle(
        calc(${variables.hamburgerSize} / 2) at
            calc(
                ${variables.contentWidth} - ${variables.fixedPosition} -
                    calc(${variables.hamburgerSize} / 2)
            )
            calc(
                ${variables.fixedPosition} +
                    calc(${variables.hamburgerSize} / 2)
            )
    );

    transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    ${({ active }) =>
        active &&
        css`
            clip-path: circle(75% at calc(${variables.contentWidth} / 2) 50vh);
        `}
`

const Content = styled.div`
    flex: 1;
    overflow: scroll;

    display: flex;
    flex-direction: column;
    gap: 12px;
`

const AccordionTransition = styled.div<
    Pick<HotAccessContentProps, 'active'> & { delay: number }
>`
    ${({ active, delay }) =>
        active
            ? css`
                  transition: 0.4s ease;
                  opacity: 1;
                  transition-delay: ${delay}s;
                  transform: translate(0px, 0px);
              `
            : css`
                  transition: 0.1s ease;
                  transform: translate(0px, 10px);
                  opacity: 0;
              `}
`

const DEFAULT_TRANSITION_DELAY = 0.3
const TRANSITION_DELAY_GAP = 0.1

type HotAccessContentProps = {
    active?: boolean
    onOutsideContentClick(): void
}

function HotAccessContent({
    active,
    onOutsideContentClick,
}: HotAccessContentProps) {
    const ref = useRef<HTMLDivElement>(null)
    useClickOutside(ref, onOutsideContentClick)
    return (
        <Wrapper active={active} ref={ref}>
            <Content>
                {items.map((item, index) => (
                    <AccordionTransition
                        key={index}
                        active={active}
                        delay={
                            DEFAULT_TRANSITION_DELAY +
                            index * TRANSITION_DELAY_GAP
                        }
                    >
                        <Accordion {...item} />
                    </AccordionTransition>
                ))}
            </Content>
        </Wrapper>
    )
}

export default HotAccessContent
