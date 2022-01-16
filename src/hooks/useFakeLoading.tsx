import {
    useContext,
    ReactNode,
    useState,
    useEffect,
    createContext,
} from 'react'

const FakeLoadingContext = createContext(false)
const FAKE_LOADING_TIME = 3.5 * 1000

type ProviderProps = {
    children: ReactNode
}
export function FakeLoadingProvider({ children }: ProviderProps) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, FAKE_LOADING_TIME)
    }, [])

    return (
        <FakeLoadingContext.Provider value={loaded}>
            {children}
        </FakeLoadingContext.Provider>
    )
}

function useFakeLoading() {
    const context = useContext(FakeLoadingContext)
    return context
}

export default useFakeLoading
