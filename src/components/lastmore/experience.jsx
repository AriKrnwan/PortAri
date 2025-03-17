import './lastmore.css'
import FotoExperience from '../../assets/experience.svg'

function Experience() {
    return (
        <>
            <div className="card-experience w-100 rounded-4 position-relative overflow-hidden mb-4">
                <div className="intro-experience p-4">
                    <div className="introEx">
                        <h4 className="jakarta-regular">as a UI/UX Designer,I have experience</h4>
                    </div>
                    <div className="experience">
                        <p className="jakarta-light">I have experience as a UI/UX Designer in a software house in Surabaya for more than 1 year.</p>
                    </div>
                </div>
                <div className="img-experience position-absolute">
                    <img src={FotoExperience} alt="" />
                </div>
            </div>
        </>
    )
}

export default Experience