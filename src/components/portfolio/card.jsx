import './card.css';
import { BsFillPeopleFill, BsFillPersonFill, BsFillLaptopFill, BsPhoneFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function CardPort({ title, description, background, buttons = [], icons = [] }) {
    const [show, setShow] = useState(false);

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
                        <Button variant="primary" onClick={() => setShow(true)}>
                            Lihat
                        </Button>
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                data-bs-theme="dark"
                className='modal'
            >
                <Modal.Header closeButton className='bg-dark' border='dark'>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
            </Modal>
        </div>
        
    );
}

export default CardPort;
