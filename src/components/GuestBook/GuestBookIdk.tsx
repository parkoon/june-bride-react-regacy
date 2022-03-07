import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { generateRandomComment } from './helpers'

const Button = styled(motion.button)`
    background: #16a085;

    color: #fff;

    padding: 12px;

    border-radius: 12px;

    font-weight: bold;
    letter-spacing: 1px;
`

type GuestBookIdkProps = {
    // eslint-disable-next-line no-unused-vars
    onCommentGenerated?(comment: string): void
}
function GuestBookIdk({ onCommentGenerated }: GuestBookIdkProps) {
    return (
        <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onCommentGenerated?.(generateRandomComment())}
        >
            어떤 말을 <br />
            할까 🤔
        </Button>
    )
}

export default GuestBookIdk
