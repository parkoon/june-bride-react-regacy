import LandingFadeInOut from './LandingFadeInOut'
import LandingImage from './LandingImage'
import LandingMessage from './LandingMessage'
import LandingOpacity from './LandingOpacity'
import LandingPersonalMessage from './LandingPersonalMessage'

function Landing() {
    return (
        <LandingOpacity>
            <LandingImage />
            <LandingPersonalMessage />
            <LandingFadeInOut />
            <LandingMessage />
        </LandingOpacity>
    )
}

export default Landing
