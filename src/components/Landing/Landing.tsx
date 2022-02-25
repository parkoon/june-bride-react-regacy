import LandingFadeInOut from './LandingFadeInOut'
import LandingImage from './LandingImage'
import LandingMessage from './LandingMessage'
import LandingOpacity from './LandingOpacity'

function Landing() {
    return (
        <LandingOpacity>
            <LandingImage />
            <LandingFadeInOut />
            <LandingMessage />
        </LandingOpacity>
    )
    // return (
    //     <LandingOpacity>
    //         <LandingImage />
    //     </LandingOpacity>
    // )
}

export default Landing
