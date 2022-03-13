import { useEffect, useRef, useState } from 'react'

export const useHeight = <T extends HTMLElement>() => {
    const [height, setHeight] = useState(0)
    const ref = useRef<T>(null)
    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.getBoundingClientRect().height)
        }
    }, [])
    return { ref, height }
}
