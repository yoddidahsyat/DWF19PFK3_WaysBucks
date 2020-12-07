import {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import UserNav from './navs/UserNav';
import GuestNav from './navs/GuestNav';

function Header() {
    
    const [state] = useContext(AppContext);

    return (
        <div className="mb-3">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand as={Link} to="/"><img src="/img/logo/WaysBucks.svg"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        { state.isLogin ? <UserNav/> : <GuestNav/> }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;