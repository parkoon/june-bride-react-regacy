import styled from '@emotion/styled'
import HorizontalScroll from '../@common/HorizontalScroll'
import GuestBookCard from './GuestBookCard'
import GuestBookForm from './GuestBookForm'

const Wrapper = styled.div`
    background: linear-gradient(85deg, #434343, #262626);

    padding: 62px 0px 46px 0px;
`

function GuestBook() {
    return (
        <Wrapper>
            <HorizontalScroll>
                <GuestBookCard />
                <GuestBookCard />
                <GuestBookCard />
                <GuestBookCard />
                <GuestBookCard />
            </HorizontalScroll>
            <GuestBookForm />
        </Wrapper>
    )
}

export default GuestBook
