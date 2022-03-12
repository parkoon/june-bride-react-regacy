import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import LadingWallpaper from '../../assets/images/landing.jpg'
import CameraChangeIcon from './CameraChangeIcon'

const Wrapper = styled.div`
    background-color: #000; ;
`

const CameraHeader = styled.div`
    position: relative;
    display: flex;

    span {
        color: #dcdde1;
        width: 20%;

        text-align: center;

        padding: 12px 7px;
        font-size: 14px;
    }

    span.selected {
        color: #e1b12c;
    }
`

const CameraBody = styled.div`
    background-color: #000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 180px;
    padding: 0 24px;
`

const PrevImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;

    border-radius: 6px;
`

const Button = styled(motion.button)`
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
`

const ButtonOutline = styled.div`
    display: inline-block;
    padding: 4px;
    border: 2px solid #fff;
    border-radius: 50%;
`

const IconBackground = styled.div`
    background: rgba(73, 69, 69, 0.5);

    display: inline-block;
    padding: 6px;

    border-radius: 50%;
`

type CameraHandleProps = {
    onCameraClick?(): void
}
function CameraHandle({ onCameraClick }: CameraHandleProps) {
    return (
        <Wrapper>
            <CameraHeader>
                <span>슬로모션</span>
                <span>비디오</span>
                <span className="selected">사진</span>
                <span>인물사진</span>
                <span>파노라마</span>
            </CameraHeader>
            <CameraBody>
                <PrevImage src={LadingWallpaper} />
                <ButtonOutline>
                    <Button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onCameraClick}
                    />
                </ButtonOutline>
                <IconBackground>
                    <CameraChangeIcon />
                </IconBackground>
            </CameraBody>
        </Wrapper>
    )
}

export default CameraHandle
