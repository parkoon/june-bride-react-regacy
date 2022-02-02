import styled from '@emotion/styled'
import TextRevealAnimation from '../TextRevealAnimation'

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    color: #fff;

    bottom: 0;
    padding: 20px 32px 52px 32px;
`

const Title = styled.h2`
    font-weight: bold;

    margin-bottom: 12px;
`
const SubTitle = styled.span`
    display: inline-block;
    font-size: 12px;
    font-style: italic;
    margin-bottom: 24px;
`
const Description = styled.p`
    font-weight: bold;
    color: #b2bec3;
`

function Greeting() {
    return (
        <Wrapper>
            <TextRevealAnimation
                direction="horizontal"
                delay={0.7}
                items={[<SubTitle>since june 2017.</SubTitle>]}
            />
            <TextRevealAnimation
                direction="vertical"
                delay={0.8}
                items={[
                    <Title>Lorem ipsum dolor sit</Title>,
                    <Description>
                        totam officia vel suscipit, dolores quam soluta quidem
                        laboriosam sapiente amet officiis, inventore saepe at!
                    </Description>,
                    <Description>
                        amet consectetur adipisicing elit. Alias ullam
                        praesentium veritatis. Quis nesciunt, similique
                    </Description>,
                ]}
            />
        </Wrapper>
    )
}

export default Greeting
