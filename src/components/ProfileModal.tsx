import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FunctionComponent, useEffect } from 'react'
import { MdClose, MdCreditCard, MdPhone } from 'react-icons/md'
import useProfileModalDrag from '../hooks/useProfileModalDrag'
import { useScrollBlock } from '../hooks/useScrollBlock'
import colors from '../styles/colors'

const up = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`
const Wrapper = styled.div`
    position: relative;

    height: 100vh;

    background: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 15;

    /* transition: transform 0.25s ease; */
    animation: ${up} 0.25s ease;
`

const Header = styled.div`
    padding: 10px;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 0 20px;

    position: absolute;
    bottom: 0;

    height: 100px;
    width: 100%;

    border-top: 1px solid ${colors.lightGray};
`

const Profile = styled.div`
    width: 100px;
    height: 100px;

    position: absolute;
    bottom: 140px;

    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
`

const ProfileImage = styled.img`
    border-radius: 10px;
    margin-bottom: 8px;

    width: 80px;
    height: 80px;
`

const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;

    z-index: -1;

    /* like image cover a div - https://stackoverflow.com/questions/24650218/image-in-full-screen-with-img-tag */
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: brightness(80%);
`

const IconWithText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #fff;

    padding: 20px;

    div {
        font-size: 14px;
        margin-top: 8px;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0;

    height: 100vh;

    z-index: 10;
`

type ProfileModalProps = {
    onClose?: () => void
}
const ProfileModal: FunctionComponent<ProfileModalProps> = ({ onClose }) => {
    const [blockScroll, allowScroll] = useScrollBlock()

    const { modal, overlay, forceClose } = useProfileModalDrag({ onClose })

    useEffect(() => {
        blockScroll()
        return () => allowScroll()
    }, [])

    return (
        <div>
            <Overlay ref={overlay} />
            <Wrapper ref={modal}>
                <BackgroundImage
                    src="https://i.picsum.photos/id/703/375/700.jpg?hmac=g5X7J18scSkBJtPe4MkH8zeCwFIpPYShGnTeJO0QmMU"
                    alt="background"
                />

                <Header>
                    <button type="button" onClick={forceClose}>
                        <MdClose size={30} color={colors.lightGray} />
                    </button>
                </Header>

                <Profile>
                    <ProfileImage src="https://i.picsum.photos/id/521/64/64.jpg?hmac=El3YAPulvfET2lz8UumlzSsnFjgjOtwKrL2r5i7zUho" />
                    <span>신랑 박종혁</span>
                </Profile>

                <Footer>
                    <IconWithText>
                        <MdPhone size={35} color="#fff" />
                        <div>전화하기</div>
                    </IconWithText>
                    <IconWithText>
                        <MdCreditCard size={35} color="#fff" />
                        <div>입금하기</div>
                    </IconWithText>
                </Footer>
            </Wrapper>
        </div>
    )
}

export default ProfileModal
