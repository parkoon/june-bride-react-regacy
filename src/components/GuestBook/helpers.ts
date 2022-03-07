export const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`

const comments = [
    '잘 지내',
    '행복하게 살아',
    '너무 잘 어울린다',
    '싸우지 말고 행복하게 살아',
    '벌써 결혼하는거야?',
    '집은 있냐?',
]

export const generateRandomComment = () => {
    const comment = comments[Math.floor(Math.random() * comments.length)]

    return comment
}
