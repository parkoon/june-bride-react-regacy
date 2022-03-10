import LandingImage from './LandingImage'
import LandingMessage from './LandingMessage'
import LandingOpacity from './LandingOpacity'
import LandingIntroMessage from './LandingIntroMessage'

function Landing() {
    return (
        <LandingOpacity>
            <LandingImage />
            <LandingIntroMessage />
            <LandingMessage />
        </LandingOpacity>
    )
}

export default Landing
