import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

import colors from '../styles/colors'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px; ;
`
const Image = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 15px;
`
const Title = styled.h3``
const Caption = styled.p`
    color: ${colors.gray};
`
const Meta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

type CardProps = {
    title: string
    imageSrc: string
    caption?: string
}
const Card: FunctionComponent<CardProps> = ({ title, imageSrc, caption }) => (
    <Wrapper>
        <Image src={imageSrc} alt={title} />

        <Meta>
            <Title>{title}</Title>
            {caption && <Caption>{caption}</Caption>}
        </Meta>
    </Wrapper>
)

export default Card
