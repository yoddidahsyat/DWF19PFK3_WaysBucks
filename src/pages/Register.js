import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Modal, Form, Button } from 'react-bootstrap';

function Register(props) {

    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch({
            type: "REGISTER",
            payload: formData
        });
        router.push('/');
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <Modal {...props} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Register</Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Control name="email" value={formData.value} onChange={handleChange} type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="password" value={formData.value} onChange={handleChange} type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="name" value={formData.value} onChange={handleChange} type="text" placeholder="Full Name"></Form.Control>
                        </Form.Group>
                            <Button onClick={handleRegister} variant="red" block><strong>Register</strong></Button>
                    </Form>
                    <p className="text-center mt-3">Already have an account? <Link onClick={() => {props.onHide(); props.login()}} className="text-reset font-weight-bold">Login</Link></p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Register;