import styled from '@emotion/styled'
import Gradient from '../@common/Gradient'
import { Heading2, Paragraph } from '../@common/Typo'
import PhotoWaterfall from './PhotoWaterfall'

const photos = [
    '//source.unsplash.com/featured?1',
    '//source.unsplash.com/featured?2',
    '//source.unsplash.com/featured?3',
    '//source.unsplash.com/featured?4',
    '//source.unsplash.com/featured?5',
    '//source.unsplash.com/featured?6',
    '//source.unsplash.com/featured?7',
    '//source.unsplash.com/featured?8',
    '//source.unsplash.com/featured?9',
    '//source.unsplash.com/featured?10',
    '//source.unsplash.com/featured?11',
    '//source.unsplash.com/featured?12',
]

const Wrapper = styled.div`
    padding: 24px 12px;
`

function Photo() {
    return (
        <Wrapper>
            <Gradient from="#2f3640" to="#dcdde1">
                <Heading2 margin={0}>사진인데</Heading2>
                <Heading2>어떤말을쓸까.</Heading2>
            </Gradient>
            <Paragraph>
                렌즈 울렁증 있는 둘이서,
                <br /> 평생 찍을 사진 다 찍고 왔어요.
                <br /> 사진을 누르면 원본 그대로의 사진을 볼 수 있는데,
                <br />
                쑥스러우니까 그냥 작게 봐주세요.
            </Paragraph>
            <PhotoWaterfall items={photos} />
        </Wrapper>
    )
}

export default Photo
