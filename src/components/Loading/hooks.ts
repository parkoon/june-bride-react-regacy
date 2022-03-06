/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import { useEffect, useState } from 'react'

type Phase = 'typing' | 'pausing' | 'deleting'

const TYPING_INTERVAL = 150
const TYPING_PAUSE_MS = 1000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

type Superpowers = {
    value: string
    interval?: number
    pause?: number
    onFinish?(): void
    onStart?(): void
    onDelete?(): void
}

export const useTyping = (superpowers: Superpowers[]) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState<Phase>('typing')
    const [typedSuperpower, setTypedSuperpower] = useState('')

    useEffect(() => {
        const {
            value: currentValue,
            interval = TYPING_INTERVAL,
            pause = TYPING_PAUSE_MS,
            onFinish,
            onStart,
            onDelete,
        } = superpowers[selectedIndex]

        switch (phase) {
            case 'typing': {
                const nextValue = currentValue.slice(
                    0,
                    typedSuperpower.length + 1
                )

                if (nextValue.length === 1) {
                    onStart?.()
                }

                if (nextValue === typedSuperpower) {
                    setPhase('pausing')
                    onFinish?.()
                    return
                }

                const timeout = setTimeout(() => {
                    setTypedSuperpower(nextValue)
                }, interval)

                return () => clearTimeout(timeout)
            }
            case 'deleting': {
                const nextIndex = selectedIndex + 1

                // do not loop
                if (!superpowers[nextIndex]) {
                    return
                }

                if (!typedSuperpower) {
                    const timeout = setTimeout(() => {
                        setSelectedIndex(nextIndex)
                        setPhase('typing')
                    }, DELETING_PAUSE_MS)
                    return () => clearTimeout(timeout)
                }

                const nextRemaining = currentValue.slice(
                    0,
                    typedSuperpower.length - 1
                )

                const timeout = setTimeout(() => {
                    onDelete?.()
                    setTypedSuperpower(nextRemaining)
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            }
            case 'pausing':
            default:
                const timeout = setTimeout(() => {
                    setPhase('deleting')
                }, pause)

                return () => clearTimeout(timeout)
        }
    }, [superpowers, typedSuperpower, selectedIndex, phase])

    return typedSuperpower
}
