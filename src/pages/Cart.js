import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {Form, Button} from 'react-bootstrap';

const Cart = () => {
    const [state, dispatch] = useContext(AppContext);

    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: id
        });
    };

    return (
        <div className="container text-red">
            <h2><strong>My Cart</strong></h2>
            <div className="row my-4">
                <div className="col-md-7">
                    <p>Review Your Order</p>
                    <hr/>
                    {state.carts.length < 1 ? "Your cart is empty." : state.carts.map((product, i) => (
                        <li className="list-group-item" key={product.id}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center ">
                                    <img src={product.imgUrl} alt={product.name} className="img-fluid img-cart" />
                                    <div className="ml-3">
                                        <h5>{product.name}</h5>
                                        <p>Topping: {product.toppings.map(topping => topping.name).join(', ')}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Rp. 99000</p>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveCart(i)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                    <hr/>
                    <div className="row my-4">
                        <div className="col-7">
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Subtotal</div>
                                <div>Rp. 99999</div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Qty</div>
                                <div>1</div>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>Total</strong>
                                <strong>Rp. 99999</strong>
                            </div>
                        </div>
                        <div className="col-5">
                            <Form>
                                <Form.File placeholder="attach"></Form.File>
                            </Form>
                        </div>
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