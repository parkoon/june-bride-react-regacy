import LandingImage from './LandingImage'
import LandingIntroMessage from './LandingIntroMessage'
import LandingMessage from './LandingMessage'
import LandingOpacity from './LandingOpacity'
import ScrollDown from './ScrollDown'

function Landing() {
    return (
        <LandingOpacity>
            <LandingImage />
            <LandingIntroMessage />
            <LandingMessage />
            <ScrollDown />
        </LandingOpacity>
    )
}

export default Landing
