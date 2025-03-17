import './card.css';
import { BsFillPeopleFill, BsFillPersonFill, BsFillLaptopFill, BsPhoneFill } from "react-icons/bs";

function CardPort({ title, description, background, buttons = [], icons = [] }) {
    return (
        <div className="col-lg-6 mb-4">
            <div 
                className="card-port p-4 rounded-4 d-flex flex-column justify-content-between"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Status Icon Section */}
                <div className="status d-flex justify-content-end gap-2">
                    {icons.map((Icon, index) => (
                        <div key={index} className='icon-status d-flex justify-content-center align-items-center rounded-1 bg-success m-0'>
                            <Icon size={'20px'} />
                        </div>
                    ))}
                </div>

                {/* Card Description Section */}
                <div className="card-desc rounded-3 p-4">
                    <div className="title-desc">
                        <div className="title-port">
                            <h5 className='jakarta-semi-bold'>{title}</h5>
                        </div>
                        <div className="desc-port">
                            <p className='jakarat-reguler'>{description}</p>
                        </div>
                    </div>
                    <div className="button-port d-flex gap-2">
                        {buttons.map((btn, index) => (
                            <a 
                                key={index} 
                                href={btn.link} 
                                className="btn btn-primary"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                {btn.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPort;
