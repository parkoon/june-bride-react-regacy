import styled from '@emotion/styled'
import TextRevealAnmiation from './TextRevealAnmiation'

const Description = styled.p``

function SectionDescription() {
    return (
        <div>
            <TextRevealAnmiation
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
