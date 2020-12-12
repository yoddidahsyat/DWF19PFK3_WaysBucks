import { useHistory } from 'react-router-dom';
import { Nav, Dropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function UserHead() {
    const router = useHistory();
    const goToProfile = () => { router.push('/profile') }
    const goToCart = () => { router.push('/cart') }

    const [state, dispatch] = useContext(AppContext);

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
        router.push('/');
    };

    return (
        <div>
            <Nav>
                <Nav.Link onClick={goToCart}>Cart: {state.carts.length}</Nav.Link>
                <Dropdown as={Nav.Item}>
                    <Dropdown.Toggle as={Nav.Link}>My Account</Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item onClick={goToProfile} >Profile</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
    )
};

export default UserHead;