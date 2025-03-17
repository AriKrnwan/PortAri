import './lastmore.css'
import BGSkill from '../../assets/skill.svg'

function Skill() {
    return (
        <>
            <div className="card-skill rounded-4 position-relative overflow-hidden mb-4">
                <div className="intro-skill p-4">
                    <div className="introSK">
                        <h4>Skill that i have too...</h4>
                    </div>
                    <div className="skill">
                        <p className='jakarta-light'>In addition to UI/UX design, I also have basic skills in developing a website. I usually use ReactJS and ExpressJS. I will also continue to learn the latest technologies.</p>
                    </div>
                </div>
                <div className="circles w-100 h-100 position-relative">
                    <div className='circle-one rounded-circle position-absolute' style={{width: '650px', height: '650px', backgroundColor: 'rgba(246,246,246,0.12)', bottom:'-200px', right:'-100px' }}></div>
                    <div className='circle-two rounded-circle position-absolute' style={{width: '520px', height: '520px', backgroundColor: 'rgba(246,246,246,0.12)', bottom:'-140px', right:'-35px' }}></div>
                    <div className='circle-three rounded-circle position-absolute' style={{width: '390px', height: '390px', backgroundColor: 'rgba(246,246,246,0.12)', bottom:'-85px', right:'30px' }}></div>
                    <div className='circle-four rounded-circle position-absolute' style={{width: '260px', height: '260px', backgroundColor: 'rgba(246,246,246,0.12)', bottom:'-25px', right:'95px' }}></div>
                </div>
                <div className="position-absolute" style={{bottom: '0px', right:'30px'}}>
                    <img src={BGSkill} alt="" />
                </div>
            </div>
        </>
    )
}

export default Skill