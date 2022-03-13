import { useEffect, useState } from 'react'
import { useScrollBlock } from '../../hooks/useScrollBlock'
import Hamburger from './Hamburger'
import HotAccessContent from './HotAccessContent'

function HotAccess() {
    const [active, setActive] = useState(false)

    const [blockScroll, allowScroll] = useScrollBlock()

    const handleOutsideClick = () => {
        if (active) {
            setActive(false)
        }
    }

    useEffect(() => {
        const func = active ? blockScroll : allowScroll
        func()
    }, [active])
    return (
        <>
            <HotAccessContent
                active={active}
                onOutsideContentClick={handleOutsideClick}
            />
            <Hamburger
                active={active}
                onClick={() => setActive((prev) => !prev)}
            />
        </>
    )
}

export default HotAccess
