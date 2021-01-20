import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { API, setAuthToken } from '../config/api';


function Login({show, onHide, register}) {

    const [state, dispatch] = useContext(AppContext);
    const [alert, setAlert] = useState(false);
    const router = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        onHide();
        register();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = JSON.stringify(formData);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const response = await API.post("/auth/login", body, config);
            // console.log(response);

            setAuthToken(response.data.data.token);
            // urutannya setAuthToken dulu baru dispatch gak boleh ketuker
            dispatch({
                type: "LOGIN",
                payload: response.data.data,
            });

            router.push("/home");
        } catch (err) {
            if(err.response.status === 400) {
                setAlert(true);
            }
        }
        router.push('/');
    }

    return (
        <div>
            <Modal show={show} onHide={onHide} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Login</Modal.Title>
                    {alert && <Alert variant="danger">Your email / password is invalid</Alert>}
                    <Form onSubmit={handleSubmit} >
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
                            <Button type="submit" variant="red" block><strong>Login</strong></Button>
                    </Form>
                    <p className="text-center mt-3">Don't have an account? <Link to='/' onClick={handleClick} className="text-reset font-weight-bold">Register</Link></p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;