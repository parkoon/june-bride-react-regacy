import styled from '@emotion/styled'
import TextRevealAnimation from './TextRevealAnimation'

const Description = styled.p``

function SectionDescription() {
    return (
        <div>
            <TextRevealAnimation
                direction="vertical"
                delay={1.4}
                items={[
                    <Description>
                        ipsum dolorem atque aspernatur quisquam dignissimos.
                        Quibusdam, nam!
                    </Description>,
                ]}
            />
        </div>
    )
}

export default SectionDescription
