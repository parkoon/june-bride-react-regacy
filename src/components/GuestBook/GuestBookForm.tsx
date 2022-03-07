import styled from '@emotion/styled'
import { useState } from 'react'
import GuestBookAvatar from './GuestBookAvatar'
import GuestBookIdk from './GuestBookIdk'
import { GuestBookComment, GuestBookName } from './GuestBookInput'
import GuestBookSubmit from './GuestBookSubmit'
import { getRandomColor } from './helpers'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
`

const Name = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 12px;
`

const Action = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 12px;
`

function GuestBookForm() {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [color, setColor] = useState(getRandomColor())

    const handleSubmit = () => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify({ name, comment, color }))
    }
    return (
        <Wrapper>
            <Name>
                <GuestBookAvatar
                    name={name}
                    color={color}
                    onAvatarClick={() => setColor(getRandomColor())}
                />
                <GuestBookName
                    placeholder="이름이 뭐에요?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Name>
            <GuestBookComment
                placeholder="하고싶은 말 있어요?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Action>
                <GuestBookSubmit onClick={handleSubmit} /> {}
                <GuestBookIdk onCommentGenerated={setComment} />
            </Action>
        </Wrapper>
    )
}

export default GuestBookForm
