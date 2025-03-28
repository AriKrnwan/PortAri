import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';

function NavPort() {
    return (
        <Navbar expand="lg" className='py-2' style={{height: '68px'}}>
            <Container className='h-100'>
                <Navbar.Brand href="#" className='p-0 h-100 d-flex align-items-center'>
                    <img 
                        src={Logo} 
                        alt="" 
                        style={{height: '60%', filter: 'drop-shadow(0px 0px 15px rgba(189, 200, 93, .8))'}} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-end">
                        <Link to="welcome" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" className='but jakarta-medium text-decoration-none'>Wellcome!</Link>
                        <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" className='but jakarta-medium text-decoration-none'>Portfolio</Link>
                        <Link to="experience" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" className='but jakarta-medium text-decoration-none'>Experience</Link>
                        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active" className='but jakarta-medium text-decoration-none'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavPort;
