import styled from '@emotion/styled'
import React, { useLayoutEffect, useRef } from 'react'

const Wrapper = styled.div<{ height: number }>`
    position: fixed;
    bottom: 0;

    width: 100%;

    height: ${({ height }) => `${height}px`};

    background-color: rgba(255, 255, 255, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
    border-top: 1px solid rgba(0, 0, 0, 0.16);

    transform: translateY(100%);
`

const Content = styled.div`
    padding-bottom: 10px;
    height: 100%;
`
type ActionSheetProps = {
    visible?: boolean
    children: React.ReactNode
    height?: number
}
function ActionSheet({ visible, height = 72, children }: ActionSheetProps) {
    const ref = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        if (!ref.current) return

        if (visible) {
            ref.current.animate(
                [
                    { transform: 'translateY(100%)' },
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(10px)' },
                ],
                {
                    fill: 'forwards',
                    duration: 400,
                    easing: 'cubic-bezier(0.34,1.56,0.64,1)',
                }
            )
        } else {
            ref.current.animate([{ transform: 'translateY(100%)' }], {
                fill: 'forwards',
                duration: 200,
            })
        }
    }, [visible])
    return (
        <Wrapper ref={ref} height={height}>
            <Content>{children}</Content>
        </Wrapper>
    )
}

export default ActionSheet
