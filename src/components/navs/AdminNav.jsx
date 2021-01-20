import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useHistory } from 'react-router-dom';
import { Nav, Dropdown } from 'react-bootstrap';

function UserHead() {
    const router = useHistory();
    const goToTransaction = () => { router.push('/transaction') };
    const goToAddProduct = () => { router.push('/addproduct') };
    const goToAddTopping = () => { router.push('/addtopping') };
    const [state, dispatch] = useContext(AppContext);
    
    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        });
        router.push('/');
    }
    
    return (
        <div>
            <Nav>
                <Dropdown as={Nav.Item}>
                    <Dropdown.Toggle as={Nav.Link}>My Account</Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                        <Dropdown.Item onClick={goToTransaction} >Transactions</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddProduct} >Add Product</Dropdown.Item>
                        <Dropdown.Item onClick={goToAddTopping} >Add Topping</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </div>
    )
};

export default UserHead;