import {Button, Nav} from 'react-bootstrap';
import {useState} from 'react';
import Login from '../../pages/Login';

function GuestButtons() {
    // useState untuk tombol login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav>
                <Button onClick={handleShow} variant="outline-danger" size="sm" className="mr-3 pl-5 pr-5">Login</Button>
                <Button variant="danger" size="sm" className="pl-5 pr-5">Register</Button>
                <Login show={show} onHide={handleClose}/>
            </Nav>
        </div>
    )
};

export default GuestButtons;