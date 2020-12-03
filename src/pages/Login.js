import {useContext,} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import {Modal, Form, Button} from 'react-bootstrap';

function Login(props) {

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
                            <Button variant="red" onClick={handleLogin} block><strong>Login</strong></Button>
                    </Form>
                    <p className="text-center mt-3">Already have an account? Click <Link onClick={() => {props.onHide(); props.register()}} className="text-reset font-weight-bold">Here</Link></p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Login;