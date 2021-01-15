import {useState} from 'react';
import {Button, Nav} from 'react-bootstrap';
import {} from '../../App.css';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

function GuestButtons() {
    // useState untuk tombol login
    const [modalLogin, setModalLogin] = useState(false);
    const closeLogin = () => setModalLogin(false);
    const showLogin = () => setModalLogin(true);

    // useState untuk tombol register
    const [modalRegister, setModalRegister] = useState(false);
    const closeRegister = () => setModalRegister(false);
    const showRegister = () => setModalRegister(true);

    return (
        <div>
            <Nav>
                <Button onClick={showLogin} variant="outline-red" size="standard" className="mr-3">Login</Button>
                <Button onClick={showRegister} variant="red" size="standard">Register</Button>
                <Login show={modalLogin} register={showRegister} onHide={closeLogin}/>
                <Register show={modalRegister} login={showLogin} onHide={closeRegister}/>
            </Nav>
        </div>
    )
};

export default GuestButtons;