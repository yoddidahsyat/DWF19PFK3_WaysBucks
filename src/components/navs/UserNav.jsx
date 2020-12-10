import {useHistory} from 'react-router-dom';
import {Nav, Dropdown} from 'react-bootstrap';

function UserHead() {
    const router = useHistory();
    const goToProfile = () => {
        router.push('/profile');
    }
    const goToCart = () => {
        router.push('/cart');
    }

    return (
        <div>
            <Nav>
                <Nav.Link onClick={goToCart}>Cart</Nav.Link>
                <Dropdown as={Nav.Item}>
                    <Dropdown.Toggle as={Nav.Link}>My Account</Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item onClick={goToProfile}>Profile</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
    )
};

export default UserHead;