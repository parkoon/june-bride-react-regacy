import styled from '@emotion/styled'
import { mainWidthTransition } from '../constants/transition'
import useIsScrollTop from '../hooks/useIsScrollTop'
import TextRevealAnmiation from './TextRevealAnmiation'

const Wrapper = styled.div<{ full: boolean }>`
    background-color: #000;
    color: #fff;

    bottom: 0;
    padding: 20px 32px 72px 32px;

    transform: ${({ full }) => `translateX(${full ? '0' : '-50%'})`};

    transition: ${mainWidthTransition};
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
    const isScrollTop = useIsScrollTop()

    return (
        <Wrapper full={!isScrollTop}>
            {!isScrollTop && (
                <>
                    <TextRevealAnmiation
                        direction="horizontal"
                        delay={0.7}
                        items={[<SubTitle>since june 2017.</SubTitle>]}
                    />
                    <TextRevealAnmiation
                        direction="vertical"
                        delay={0.8}
                        items={[
                            <Title>Lorem ipsum dolor sit</Title>,
                            <Description>
                                totam officia vel suscipit, dolores quam soluta
                                quidem laboriosam sapiente amet officiis,
                                inventore saepe at!
                            </Description>,
                            <Description>
                                amet consectetur adipisicing elit. Alias ullam
                                praesentium veritatis. Quis nesciunt, similique
                            </Description>,
                        ]}
                    />
                </>
            )}
        </Wrapper>
    )
}

export default Greeting
