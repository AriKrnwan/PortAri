import './welcome.css'
import profile from "../../assets/profile.svg"

function WelKiri() {
    return(
        <>
            <div className="wel-kiri w-100 p-5 rounded-4 d-flex flex-column gap-4 mb-4">
                <div className="wel-profile d-flex align-items-center gap-3">
                    <div className="wel-pic rounded-circle border overflow-hidden">
                        <img src={profile} alt="" className='w-100 h-100 object-fit-cover' />
                    </div>
                    <div className="wel-name">
                        <div className="name">
                            <h5 className='jakarta-semi-bold mb-1'>Hi, I'm Ari Kurniawan</h5>
                        </div>
                        <div className="job">
                            <p className='jakarta-medium m-0'>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                <div className="wel-desc d-flex flex-column gap-2">
                    <div className="wellcome">
                        <h1>Wellcome to my website.</h1>
                    </div>
                    <div className="desc">
                        <p>In this website you can get to know me better as a UI/UX Designer. You can see what i have done, my experience, and my contact if you wanna contact me.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelKiri