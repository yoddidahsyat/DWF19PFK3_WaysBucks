import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserNav from './navs/UserNav';
import GuestNav from './navs/GuestNav';
import AdminNav from './navs/AdminNav';

function Header() {
    
    const [state] = useContext(AppContext);

    const navButton = () => {
        if (!state.isLogin) {
            return <GuestNav/>
        }
        switch (state.user.role) {
            case "admin":
                return <AdminNav/>
            case "user":
                return <UserNav/>
            default:
                throw new Error();
        }
    }

    return (
        <div className="mb-3">
            <Navbar bg="white" expand="lg">
                <Navbar.Brand as={Link} to="/"><img src="/img/logo/WaysBucks.svg" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {navButton()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;