import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { useBottomSheet } from '../hooks/useBottomSheet'
import colors from '../styles/colors'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 1;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

    transition: transform 0.15s ease-out;
`

const Content = styled.div`
    overflow: auto;
    -webkit-overflow-scrolling: touch;
`

const Header = styled.div`
    height: 48px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: relative;
    padding-top: 16px;
    padding-bottom: 4px;
`

const Handle = styled.div`
    width: 32px;
    height: 4px;
    border-radius: 2px;
    background-color: ${colors.lightGray};
    margin: auto;
`

const BottomSheet: FunctionComponent = ({ children }) => {
    const MIN_Y = 120
    const MAX_Y = typeof window === 'undefined' ? 0 : window.innerHeight - 64

    const { sheet, content } = useBottomSheet({ MIN_Y, MAX_Y })

    const bottomSheetHeight =
        typeof window === 'undefined' ? 0 : window.innerHeight - MIN_Y

    return (
        <Wrapper
            ref={sheet}
            style={{
                height: bottomSheetHeight,
                transform: `translateY(${MAX_Y - MIN_Y}px)`,
            }}
        >
            <Header>
                <Handle />
            </Header>
            <Content ref={content}>{children}</Content>
        </Wrapper>
    )
}

export default BottomSheet
