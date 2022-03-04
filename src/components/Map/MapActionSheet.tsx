import styled from '@emotion/styled'
import ActionSheet from '../@common/ActionSheet'
import { destination, lat, lng } from './constants'

type MapActionSheetProps = {
    visible: boolean
}

const Wrapper = styled.div`
    position: relative;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`

const Divider = styled.div`
    position: absolute;
    height: 70%;
    width: 1px;

    right: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.16);
`

const NaverColor = styled.span`
    color: #27ae60;
    font-weight: bold;
`
const KaKaoColor = styled.span`
    color: #f1c40f;
    font-weight: bold;
`

function MapActionSheet({ visible }: MapActionSheetProps) {
    return (
        <ActionSheet visible={visible}>
            <Wrapper>
                <a
                    href={`nmap://place?lat=${lat}&lng=${lng}&name=${destination}&appname=com.example.myapp:`}
                >
                    <NaverColor>네이버</NaverColor>로 길찾기
                </a>
                <Divider />
                <a
                    href={`https://map.kakao.com/link/to/${destination} ,${lat},${lng}`}
                >
                    <KaKaoColor>카카오</KaKaoColor>로 길찾기
                </a>
            </Wrapper>
        </ActionSheet>
    )
}

export default MapActionSheet
