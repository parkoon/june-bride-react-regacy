import styled from '@emotion/styled'

const Wrapper = styled.span`
    background: rgba(78, 76, 76, 0.5);
    color: #fff;

    padding: 12px 18px;
    position: fixed;

    border-radius: 100px;
    top: 24px;
    left: 50%;

    transform: translateX(-50%);

    font-size: 14px;
    line-height: 18px;

    word-break: keep-all;
    text-align: center;
`

function CameraActionMessage() {
    return (
        <Wrapper>
            <span style={{ fontWeight: 'bold', color: '#e1b12c' }}>김근태</span>
            님 신랑과 신부의 사진 작가가 되어주세요
        </Wrapper>
    )
}

export default CameraActionMessage
