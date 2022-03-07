import styled from '@emotion/styled'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;

    color: #fff;

    font-size: 22px;

    border-radius: 12px;
`

type GuestBookAvatarProps = {
    name: string
    color: string
    onAvatarClick(): void
}

function GuestBookAvatar({ name, color, onAvatarClick }: GuestBookAvatarProps) {
    return (
        <Wrapper style={{ background: color }} onClick={onAvatarClick}>
            {name[0]}
        </Wrapper>
    )
}

export default GuestBookAvatar
