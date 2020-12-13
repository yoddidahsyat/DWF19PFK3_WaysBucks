import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Modal, Form, Button } from 'react-bootstrap';

function Login(props) {

    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: "LOGIN",
            payload: formData
        });
        router.push('/');
    }

    return (
        <div>
            <Modal {...props} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Login</Modal.Title>
                    <Form onSubmit={handleLogin} >
                        <Form.Group>
                            <Form.Control
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required>
                            </Form.Control>
                        </Form.Group>
                            <Button variant="red" type="submit" block><strong>Login</strong></Button>
                    </Form>
                    <p className="text-center mt-3">Don't have an account? <Link onClick={() => {props.onHide(); props.register()}} className="text-reset font-weight-bold">Register</Link></p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;