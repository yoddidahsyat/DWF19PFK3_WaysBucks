import {Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand as={Link} to="/">WaysBucks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button as={Link} to="/login" variant="outline-danger" size="sm" className="mr-3 pl-5 pr-5">Login</Button>
                        <Button variant="danger" size="sm" className="pl-5 pr-5">Register</Button>
                        {/* <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Add Topping</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;