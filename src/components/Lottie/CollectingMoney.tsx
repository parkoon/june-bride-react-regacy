import Lottie from './Lottie'
import CollectingMoneyJSON from './collecting-money.json'

type CollectingMoneyProps = {
    autoplay?: boolean
}
function CollectingMoney({ autoplay = true }: CollectingMoneyProps) {
    return (
        <Lottie
            src={CollectingMoneyJSON}
            size={320}
            animationConfig={{ autoplay }}
        />
    )
}

export default CollectingMoney
