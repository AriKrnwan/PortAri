// import './welcome.css'
import WelKiri from './welKiri.jsx'
import WelKanan from './welKanan.jsx'

function Welcome() {
    return(
        <>
            <div className="row">
                <div className="col-lg-8">
                    <WelKiri />
                </div>
                <div className="col-lg-4">
                    <WelKanan />
                </div>
            </div>
        </>
    )
}

export default Welcome