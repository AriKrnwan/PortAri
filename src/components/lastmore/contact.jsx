import './lastmore.css'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import BigStar from '../../assets/Big Stars.svg'
import SmallStar from '../../assets/small star.svg'

function Contact() {
    return (
        <>
            <div id='contact' className="card-contact w-100 rounded-4 p-4 d-flex flex-column gap-3 position-relative mb-4">
                <div className="intro-contact">
                    <div className="introCo">
                        <h4>Contact me</h4>
                    </div>
                    <div className="desc-contact">
                        <p className='jakarta-light'>Contact me using email or DM via instagram.</p>
                    </div>
                </div>
                <div className="contact d-flex flex-column">
                    <a href="https://instagram.com/arikrnwann">
                        <div className="email d-flex justify-content-center align-items-center" style={{width: '68px', height: '68px',}}><MdOutlineAlternateEmail size={'40px'}/></div>
                    </a>
                    <a href="mailto:ari957752@gmail.com">
                        <div className="insta d-flex justify-content-center align-items-center" style={{width: '68px', height: '68px',}}><IoLogoInstagram size={'40px'}/></div>
                    </a>
                </div>
                <div className="big-star position-absolute" style={{bottom: '24px',right: '24px'}}><img src={BigStar} alt="" /></div>
                <div className="small-star position-absolute" style={{bottom: '200px',right: '32px'}}><img src={SmallStar} alt="" /></div>
                <div className="small-star position-absolute" style={{bottom: '164px',right: '100px'}}><img src={SmallStar} alt="" /></div>
            </div>
        </>
    )
}

export default Contact