import {useContext,} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import {Modal, Form, Button} from 'react-bootstrap';

function Register(props) {

    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const handleRegister = () => {
        dispatch({
            type: "REGISTER"
        });
        router.push('/');
    };

    return (
        <div>
            <Modal {...props} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Register</Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Full Name"></Form.Control>
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