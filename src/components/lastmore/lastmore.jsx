import Experience from "./experience"
import './lastmore.css'
import Skill from './skill'
import Contact from './contact'

function LastMore() {
    return (
        <>
            <div className="row">
                <div className="col-lg-4"><Experience /></div>
                <div className="col-lg-5"><Skill /></div>
                <div className="col-lg-3"><Contact /></div>
            </div>
        </>
    )
}

export default LastMore