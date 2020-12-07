import {Link, useHistory} from 'react-router-dom';
import {Nav, NavDropdown} from 'react-bootstrap';

function UserHead() {
    const router = useHistory();
    const goToProfile = () => {
        router.push('/profile');
    }

    return (
        <div>
            <Nav>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={goToProfile} >Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
};

export default UserHead;