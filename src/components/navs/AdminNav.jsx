import {Link} from 'react-router-dom';
import {Nav, NavDropdown} from 'react-bootstrap';

function UserHead() {
    return (
        <div>
            <Nav>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <NavDropdown title="Dropdown" menuAlign="right">
                    <NavDropdown.Item href="#">Transactions</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Add Product</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Add Topping</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div>
    )
};

export default UserHead;