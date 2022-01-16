import styled from '@emotion/styled'
import { days, weeks } from './constants'

const Wrapper = styled.div``

const WeekWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border-bottom: 1px solid gray;
`

const DayWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`

const DayCell = styled.div`
    height: 60px;
`

const WeekCell = styled.div``

function Calendar() {
    return (
        <Wrapper>
            <WeekWrapper>
                {weeks.map((week) => (
                    <WeekCell key={week}>{week}</WeekCell>
                ))}
            </WeekWrapper>
            <DayWrapper>
                {days.map((day, index) => {
                    return <DayCell key={index}>{day}</DayCell>
                })}
            </DayWrapper>
        </Wrapper>
    )
}

export default Calendar
