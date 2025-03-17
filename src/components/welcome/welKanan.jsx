import './welcome.css'
import avatarAri from '../../assets/avatar ari.svg'
import profile from '../../assets/profile.svg'

function WelKanan() {
    return(
        <>
            <div className="wel-kanan w-100 mb-4">
                <div className="flip-card-inner w-100 h-100">
                    <div className="flip-card-front w-100 h-100">
                        <img src={avatarAri} alt="" className='w-100 h-100 object-fit-cover rounded-4' />
                    </div>
                    <div className="flip-card-back w-100 h-100">
                        <img src={profile} alt="" className='w-100 h-100 object-fit-cover rounded-4' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelKanan