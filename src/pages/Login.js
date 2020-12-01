import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import {Modal, Button, Form, FormGroup} from 'react-bootstrap';

const Login = (props) => {

    const [state, dispatch] = useContext(AppContext);
    const router = useHistory();

    const handleLogin = () => {
        dispatch({
            type: "LOGIN"
        });
        router.push('/');
    };

    return (
        <div>
            <Modal {...props} size="sm" centered>
                <Modal.Body>
                    <Modal.Title className="text-danger mb-3">Login</Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                            <Button onClick={handleLogin} className="btn-sm btn-danger" block>Login</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );

};

export default Login;