import LandingImage from './LandingImage'
import LandingOpacity from './LandingOpacity'

function Landing() {
    return (
        <LandingOpacity>
            <LandingImage />
        </LandingOpacity>
    )
    // return (
    //     <LandingOpacity>
    //         <LandingImage />
    //         <LandingFadeInOut />
    //         <LandingMessage />
    //     </LandingOpacity>
    // )
}

export default Landing
