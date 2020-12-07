import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Form, Button} from 'react-bootstrap';

const Cart = () => {
    // const [hari] = useContext(AppContext);

    return (
        <div className="container">
            <h2 className="text-red"><strong>My Cart</strong></h2>
            <div className="row my-4">
                <div className="col-md-7">
                    <p className="text-red">Review Your Order</p>
                    <hr></hr>
                    Product
                    <hr></hr>
                <div className="row my-4">
                    <div className="col-7 text-red">
                        <hr></hr>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>Subtotal</div>
                            <div>Rp. 99999</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>Qty</div>
                            <div>1</div>
                        </div>
                        <hr></hr>
                        <div className="d-flex justify-content-between align-items-center">
                            <strong>Total</strong>
                            <strong>Rp. 99999</strong>
                        </div>
                    </div>
                    <div className="col-5">attach</div>
                </div>
                </div>
                <div className="col-md-5">
                    <Form>
                        <Form.Group><Form.Control placeholder="Name"></Form.Control></Form.Group>
                        <Form.Group><Form.Control placeholder="Email"></Form.Control></Form.Group>
                        <Form.Group><Form.Control placeholder="Phone"></Form.Control></Form.Group>
                        <Form.Group><Form.Control placeholder="Post Code"></Form.Control></Form.Group>
                        <Form.Group><Form.Control placeholder="Address" as="textarea" rows={3}></Form.Control></Form.Group>
                        <Button variant="red" block>Pay</Button>
                    </Form>
                </div>
                <div></div>
            </div>
        </div>
    )
};

export default Cart;