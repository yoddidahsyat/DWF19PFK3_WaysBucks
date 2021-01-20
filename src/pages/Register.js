import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { API, setAuthToken } from '../config/api';
import Swal from 'sweetalert2';

function Register({show, onHide, login}) {

    const [state, dispatch] = useContext(AppContext);
    const [alert, setAlert] = useState(false);
    const router = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        onHide();
        login();
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

            const response = await API.post("/auth/register", body, config);

            setAuthToken(response.data.data.token);
            // urutannya setAuthToken dulu baru dispatch gak boleh ketuker
            dispatch({
                type: "REGISTER",
                payload: response.data.data,
            });

            Swal.fire(
                'Success!',
                response.data.message,
                'success');

            router.push("/home");
        } catch (err) {
            console.log(err);
            if(err.response.status === 400) {
                setAlert(true);
            }
        }
        router.push('/');
    };


    return (
        <div>
            <Modal show={show} onHide={onHide} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Register</Modal.Title>
                    {alert && <Alert variant="danger">This email has already registered</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control name="email" value={formData.value} onChange={handleChange} type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="password" value={formData.value} onChange={handleChange} type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="name" value={formData.value} onChange={handleChange} type="text" placeholder="Full Name"></Form.Control>
                        </Form.Group>
                            <Button type="submit" variant="red" block><strong>Register</strong></Button>
                    </Form>
                    <p className="text-center mt-3">Already have an account? <Link to='/' onClick={handleClick} className="text-reset font-weight-bold">Login</Link></p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Register;