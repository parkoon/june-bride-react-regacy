import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Gradient from '../@common/Gradient'
import { Heading2, Paragraph } from '../@common/Typo'
import LockIcon from './LockIcon'

const Wrapper = styled.div<{ secured?: boolean }>`
    height: 100vh;
    width: 100%;

    transition: transform 0.2s;

    padding: 76px 20px 42px 20px;

    ${({ secured }) =>
        secured
            ? css`
                  position: absolute;
                  top: 0;
                  background: #273c75;
              `
            : css`
                  position: relative;
                  background: #fff;
              `}
`

const LottieWrapper = styled.div`
    position: absolute;
    bottom: 20%;

    left: 50%;
    transform: translateX(-50%);
`

type BankAccountInfoProps = {
    secured?: boolean
    rotate?: number
}
function BankAccountInfo({
    secured = false,
    rotate = 0,
}: BankAccountInfoProps) {
    return (
        <Wrapper secured={secured}>
            <Gradient from="#273c75" to="#353b48">
                <Heading2 margin={0} reverse={secured}>
                    마음을
                </Heading2>
                <Heading2 reverse={secured}>전해보세요.</Heading2>
            </Gradient>
            <Paragraph reverse={secured} style={{ marginBottom: 42 }}>
                선약이 있어서 결혼식에 참석을 하지 못해도 이해할 수 있어요.
                마음은 항상 열려 있어요.
            </Paragraph>

            <Paragraph reverse={secured} margin={4}>
                🤵 신랑 계좌번호
            </Paragraph>
            <Paragraph reverse={secured} margin={12}>
                신한은행 {secured ? '***-***-******' : '110-265-285679'}
            </Paragraph>
            <Paragraph reverse={secured} margin={4}>
                👰🏻 신부 계좌번호
            </Paragraph>
            <Paragraph reverse={secured} margin={12}>
                우리은행 {secured ? '****-****-******' : '1002-2458-658687'}
            </Paragraph>

            <LottieWrapper>
                <LockIcon open={secured} rotate={rotate} />
            </LottieWrapper>
        </Wrapper>
    )
}

export default BankAccountInfo
