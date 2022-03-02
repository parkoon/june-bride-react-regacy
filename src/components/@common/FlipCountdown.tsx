/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import styled from '@emotion/styled'
import gsap from 'gsap'
import { useEffect } from 'react'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;

    .title {
        color: hsl(237, 18%, 59%);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 6px;
    }

    .countdown-block {
        text-align: left;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .time-elem {
        position: relative;
        color: hsl(345, 95%, 68%);
        position: relative;
        height: 100px;
        width: 100px;
        background-color: hsl(235, 20%, 25%);
        border-radius: 8px;
        text-align: center;
        font-size: 2.8em;
        overflow: hidden;
        margin-bottom: 27px;
        line-height: 98px;
        box-shadow: 0px 8px 0px 0px #16151d;
    }

    .time-elem::before,
    .time-elem::after {
        content: '';
        position: absolute;
        z-index: 6;
        top: calc(50% - 5px);
        background: hsl(240, 12%, 16%);
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }

    .time-elem::before {
        left: -5px;
    }

    .time-elem::after {
        right: -5px;
    }

    .time-elem > span {
        position: absolute;
        left: 0;
        right: 0;
    }

    .top {
        z-index: 3;
        background-color: hsl(240, 21%, 21%);
        transform-origin: 50% 100%;
        transform: perspective(200px);
    }

    .time-elem .top::after,
    .time-elem .bottom-back::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid hsl(240, 12%, 16%);
    }

    .bottom {
        z-index: 1;
    }

    .bottom::before {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: hsl(235, 20%, 25%);
    }

    .bottom-back {
        z-index: 2;
        top: 0;
        height: 50%;
        overflow: hidden;
        background-color: hsl(235, 20%, 25%);
    }

    .bottom-back span {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    .top,
    .top-back {
        height: 50%;
        overflow: hidden;
        backface-visibility: hidden;
    }

    .top-back {
        z-index: 4;
        bottom: 0;
        transform-origin: 50% 0;
        background-color: hsl(235, 20%, 25%);
        transform: perspective(200px) rotateX(180deg);
    }

    .top-back span {
        position: absolute;
        top: -100%;
        left: 0;
        right: 0;
        margin: auto;
    }

    .social {
        position: absolute;
        bottom: 56px;
        list-style-type: none;
        display: flex;
        flex-flow: row;
        padding: 0;
    }
`
function FlipCountdown() {
    const timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }

    let totalSeconds = 0

    function animateFlip(element: any, value: any) {
        const valueInDom = element.querySelector('.bottom-back').innerText
        const currentValue = value < 10 ? `0${value}` : `${value}`

        if (valueInDom === currentValue) return

        element.querySelector('.top-back span').innerText = currentValue
        element.querySelector('.bottom-back span').innerText = currentValue

        gsap.to(element.querySelector('.top'), {
            rotationX: '-180deg',
            duration: 0.7,
            // transformPerspective: 300,
            onComplete() {
                element.querySelector('.top').innerText = currentValue
                element.querySelector('.bottom').innerText = currentValue
                gsap.set(element.querySelector('.top'), { rotationX: 0 })
            },
        })

        gsap.to(element.querySelector('.top-back'), {
            duration: 0.7,
            rotationX: 0,
            transformPerspective: 300,
            clearProps: 'all',
        })
    }

    function printTime() {
        const days = document.querySelector('.days')
        const hours = document.querySelector('.hours')
        const minutes = document.querySelector('.minutes')
        const seconds = document.querySelector('.seconds')

        animateFlip(days, timeLeft.d)
        animateFlip(hours, timeLeft.h)
        animateFlip(minutes, timeLeft.m)
        animateFlip(seconds, timeLeft.s)
    }

    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59
                --timeLeft.m
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59
                    --timeLeft.h
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23
                        --timeLeft.d
                    }
                }
            }
        }
        --totalSeconds
        printTime()
    }

    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24))
        timeLeft.h = Math.floor((totalSeconds / (60 * 60)) % 24)
        timeLeft.m = Math.floor((totalSeconds / 60) % 60)
        timeLeft.s = Math.floor(totalSeconds % 60)
    }

    function init() {
        totalSeconds = Math.floor(
            (Number(new Date('06/18/2022 12:30')) - Number(new Date())) / 1000
        )

        setTimeLeft()
        const interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval)
            }
            countTime()
        }, 1000)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Wrapper className="countdown">
            <div className="countdown-block">
                <span className="days time-elem">
                    <span className="top">00</span>
                    <span className="top-back">
                        <span>00</span>
                    </span>
                    <span className="bottom">00</span>
                    <span className="bottom-back">
                        <span>00</span>
                    </span>
                </span>
                <span className="title">Days</span>
            </div>

            <div className="countdown-block">
                <span className="hours time-elem">
                    <span className="top">00</span>
                    <span className="top-back">
                        <span>00</span>
                    </span>
                    <span className="bottom">00</span>
                    <span className="bottom-back">
                        <span>00</span>
                    </span>
                </span>
                <span className="title">Hours</span>
            </div>

            <div className="countdown-block">
                <span className="minutes time-elem">
                    <span className="top">00</span>
                    <span className="top-back">
                        <span>00</span>
                    </span>
                    <span className="bottom">00</span>
                    <span className="bottom-back">
                        <span>00</span>
                    </span>
                </span>
                <span className="title">Minutes</span>
            </div>

            <div className="countdown-block">
                <span className="seconds time-elem">
                    <span className="top">00</span>
                    <span className="top-back">
                        <span>00</span>
                    </span>
                    <span className="bottom">00</span>
                    <span className="bottom-back">
                        <span>00</span>
                    </span>
                </span>
                <span className="title">Seconds</span>
            </div>
        </Wrapper>
    )
}

export default FlipCountdown
