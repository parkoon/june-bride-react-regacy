import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { days, weeks } from './constants'

const Wrapper = styled.section`
    position: relative;
`
const Header = styled.div`
    background-color: #3255a5;
    color: #fff;
    text-align: center;

    padding: 42px 0 72px 0;
    > h3 {
        font-size: 52px;
        font-weight: 400;
        margin-bottom: 12px;
    }

    > p {
        font-weight: 100;
        margin-bottom: 12px;
    }

    > span {
        display: block;
        font-weight: 400;
        font-size: 20px;
    }
`

const Content = styled.div`
    width: 92vw;

    margin: 0 auto;
    padding: 42px 0 12px 0;

    transform: translateY(-35px);

    border-radius: 12px;

    background-color: #fff;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const Weeks = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
`

const Days = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
`

const DayCell = styled.span<{
    selected?: boolean
    thisMonth?: boolean
    weekend?: boolean
}>`
    position: relative;

    padding: 20px 12px;

    ${({ selected }) =>
        selected &&
        css`
            &::after {
                content: '15';
                position: absolute;

                text-align: center;
                line-height: 32px;

                width: 32px;
                height: 32px;
                background: #3255a5;
                color: #fff;

                border-radius: 50%;

                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);
            }
        `}
    ${({ weekend }) =>
        weekend &&
        css`
            color: #e74c3c;
        `}

    ${({ thisMonth }) =>
        !thisMonth &&
        css`
            color: #bdc3c7;
        `}
`

const WeekCell = styled.span`
    padding-bottom: 12px;
`

function Calendar() {
    return (
        <Wrapper>
            <Header>
                <h3>18</h3>
                <p>토요일</p>
                <span>6월</span>
            </Header>
            <Content>
                <Weeks>
                    {weeks.map((week) => (
                        <WeekCell key={week}>{week}</WeekCell>
                    ))}
                </Weeks>
                <Days>
                    {days.map(({ day, ...rest }, index) => {
                        return (
                            <DayCell key={index} {...rest}>
                                {day}
                            </DayCell>
                        )
                    })}
                </Days>
            </Content>
        </Wrapper>
    )
}

export default Calendar
