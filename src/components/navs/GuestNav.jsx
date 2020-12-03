import {useState} from 'react';
import {Button, Nav} from 'react-bootstrap';
import {} from '../../App.css';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

function GuestButtons() {
    // useState untuk tombol login
    const [showLogin, setShowLogin] = useState(false);
    const loginClose = () => setShowLogin(false);
    const loginShow = () => setShowLogin(true);

    // useState untuk tombol register
    const [showRegister, setShowRegister] = useState(false);
    const registerClose = () => setShowRegister(false);
    const registerShow = () => setShowRegister(true);

    return (
        <div>
            <Nav>
                <Button onClick={loginShow} variant="outline-red" size="standard" className="mr-3">Login</Button>
                <Button onClick={registerShow} variant="red" size="standard">Register</Button>
                <Login show={showLogin} register={registerShow} onHide={loginClose}/>
                <Register show={showRegister} login={loginShow} onHide={registerClose}/>
            </Nav>
        </div>
    )
};

export default GuestButtons;