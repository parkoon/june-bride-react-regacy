import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.article`
    min-width: 180px;
    min-height: 300px;

    background-color: red;

    padding: 18px 20px;
    border-radius: 16px;
    background: linear-gradient(85deg, #434343, #262626);
    color: #fff;
    display: flex;
    flex-direction: column;
    transition: 0.2s;
    margin: 0;
    box-shadow: -20px 0 30px -20px #000;

    &:not(:first-of-type) {
        margin-left: -10px;
        box-shadow: -30px 0 30px -20px #000;
    }

    &:hover {
        transform: translate(-10px, -10px) rotate(3deg);
    }

    &:hover ~ & {
        transform: translateX(10px);
    }
`

const Time = styled.time`
    display: block;
    margin-bottom: 12px;
    color: #777;
`

const Content = styled.p`
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
`

const Author = styled.div`
    display: grid;
    grid-template-columns: 45px 1fr;
    align-items: center;
    gap: 7px;

    margin-block-start: auto;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 7px;
    }

    span {
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
    }
`

function GuestBookCard() {
    return (
        <Wrapper>
            <Time dateTime="2010-11-20">2022년 5월 20일</Time>
            <Content>결혼은 진심으로 축하드립니다.</Content>
            <Author>
                <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&#038;d=retro&#038;r=pg"
                    srcSet="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=160&#038;d=retro&#038;r=pg 2x"
                    height="80"
                    width="80"
                    loading="lazy"
                />

                <span>박종혁</span>
            </Author>
        </Wrapper>
    )
}

export default GuestBookCard
