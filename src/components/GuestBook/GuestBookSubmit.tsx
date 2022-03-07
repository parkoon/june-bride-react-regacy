import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Button = styled(motion.button)`
    background: #000;

    color: #fff;

    padding: 12px;

    border-radius: 12px;

    font-weight: bold;
    letter-spacing: 1px;
`

type GuestBookSubmitProps = {
    onClick?(): void
}
function GuestBookSubmit({ onClick }: GuestBookSubmitProps) {
    return (
        <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            전달하기 ✉️
        </Button>
    )
}

export default GuestBookSubmit
