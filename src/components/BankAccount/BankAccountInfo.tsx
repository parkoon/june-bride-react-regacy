import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { forwardRef } from 'react'
import SectionParagraph from '../@common/SectionParagraph'
import SectionTitle from '../@common/SectionTitle'
import CollectingMoney from '../Lottie/CollectingMoney'

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
    top: 40%;
`

type BankAccountInfoProps = {
    secured?: boolean
}
function BankAccountInfo({ secured = false }: BankAccountInfoProps) {
    return (
        <Wrapper secured={secured}>
            <SectionTitle margin={0} reverse={secured}>
                마음을
            </SectionTitle>
            <SectionTitle reverse={secured}>전해보세요.</SectionTitle>
            <SectionParagraph reverse={secured}>
                🤵 신랑 계좌번호
            </SectionParagraph>
            <SectionParagraph reverse={secured}>
                신한은행 {secured ? '***-***-******' : '110-265-285679'}
            </SectionParagraph>
            <SectionParagraph reverse={secured}>
                👰🏻 신부 계좌번호
            </SectionParagraph>
            <SectionParagraph reverse={secured}>
                우리은행
                {secured ? '****-****-******' : '1002-2458-658687'}
            </SectionParagraph>

            <LottieWrapper>
                <CollectingMoney autoplay={!secured} />
            </LottieWrapper>
        </Wrapper>
    )
}

export default BankAccountInfo
