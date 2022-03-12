import { useEffect } from 'react'

export const useToggleInbound = (refs: HTMLElement[]) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                        entry.target.classList.toggle('inbound', true)
                    } else {
                        entry.target.classList.toggle('inbound', false)
                    }
                })
            },
            { threshold: [0, 1] }
        )

        refs.forEach((ref) => {
            observer.observe(ref)
        }, [])
    }, [])
}

const IN_VIEW_COUNT = 10
export const useGSAnimation = (refs: HTMLElement[]) => {
    const gather = () => {
        const offsetX = refs[0].getBoundingClientRect().x
        const offsetY = refs[0].parentElement!.getBoundingClientRect().y

        refs.forEach((ref, index) => {
            const { x, y } = ref.getBoundingClientRect()

            if (index !== 0) {
                ref.style.setProperty('opacity', '0')
            }

            ref.style.setProperty(
                'transform',
                `translate(-${x - offsetX}px, -${y - offsetY}px)`
            )
        }, [])
    }

    const spread = () => {
        refs.forEach((ref, index) => {
            if (index < IN_VIEW_COUNT) {
                const prevTransition = window
                    .getComputedStyle(ref)
                    .getPropertyValue('transition')

                ref.style.setProperty(
                    'transition',
                    `opacity 0.7s, transform 0.7s, ${prevTransition}`
                )
                ref.style.setProperty('transition-delay', `${index * 0.1}s`)
            }
            ref.style.setProperty('opacity', '1')
            ref.style.setProperty('transform', 'translate(0px, 0px)')
        }, [])
    }

    return [gather, spread]
}
