import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from 'react-bootstrap';
import { API } from "../config/api";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const [state, dispatch] = useContext(AppContext);
    const { carts } = state;
    const router = useHistory();

    const handleRemoveCart = (id) => {
        dispatch({
            type: "REMOVE_CART",
            payload: id
        });
    }

    // hitung Total cart
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(carts.map(product => product.subTotal).reduce((a, b) => a + b, 0));
    }, [carts]);

    // masukkan total ke dalam form data
    useEffect(() => {
        setFormData({
            ...formData,
            income: total
        })
    }, [total])
    

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        postCode: '',
        address: '',
        income: total,
        status: "PENDING",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // buat transactionProduct untuk body API
        const transactionProducts = [];
        carts.forEach(product => {
            const transactionToppings = [];
            product.toppings.forEach(topping =>
                transactionToppings.push({
                    toppingId: topping.id
                })
            );
            transactionProducts.push({
                productId: product.id,
                transactionToppings
            })
        })

        const body = JSON.stringify({
            ...formData,
            transactionProducts
        })
        
        const config = {
            headers: {
                "content-type": "application/json"
            },
        };


        try {
            await API.post("/transaction", body, config);

            dispatch({
                type: "CLEAR_CART"
            });
            await Swal.fire(
                'Transaction created',
                'Thankyou for your order, please confirm your payment on profile page',
                'success'
            );
            router.push('/profile');
        } catch (err) {
            Swal.fire(
                'Error',
                err.response.data.message,
                'error'
            );
        }
    }


    return (
        <div className="container text-red">
            <h2><strong>My Cart</strong></h2>
            <div className="row my-4">
                <div className="col-md-7">
                    <p>Review Your Order</p>
                    <hr/>
                    {carts.length < 1 ? <p>Your cart is empty.</p> : carts.map((product, i) => (
                        <li className="list-group-item" key={i}>
                            <div className="row">
                                <div className="col-2">
                                    <img src={ product.image} alt={product.name} className="img-cart" />
                                </div>
                                <div className="col-8">
                                    <h5>{product.name}</h5>
                                    <span className="text-brown">Topping: </span>{product.toppings.map(topping => topping.name).join(', ')}
                                </div>
                                <div className="col-2">
                                    <p>Rp. {product.subTotal}</p>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleRemoveCart(i)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                    <hr/>
                    <div className="row my-4">
                        <div className="col-8">
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>Qty</div>
                                <div>{carts.length}</div>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>Total</strong>
                                <strong>Rp. {total}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group><Form.Control name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" required></Form.Control></Form.Group>
                        <Form.Group><Form.Control name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required></Form.Control></Form.Group>
                        <Form.Group><Form.Control name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" required></Form.Control></Form.Group>
                        <Form.Group><Form.Control name="postCode" value={formData.postCode} onChange={handleChange} type="text" placeholder="Post Code" required></Form.Control></Form.Group>
                        <Form.Group><Form.Control name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" as="textarea" rows={3} required></Form.Control></Form.Group>
                        <Button type="submit" variant="red" block>Pay</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default Cart;