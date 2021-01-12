import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from 'react-bootstrap';
import { API, uploadURL } from "../config/api";
import { useHistory } from "react-router-dom";

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
    let total = carts.map(product => product.subTotal).reduce((a, b) => a + b, 0);
    useEffect(() => {
        // console.log('useEffect', total);
        setFormData({
            ...formData,
            income: total
        })
    }, [carts])
    

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
        const transactionProduct = [];
        carts.map(product => {
            const transactionTopping = [];
            product.toppings.map(topping =>
                transactionTopping.push({
                    toppingId: topping.id
                })
            );
            transactionProduct.push({
                productId: product.id,
                transactionTopping
            })
        })

        const body = JSON.stringify({
            ...formData,
            transactionProduct
        })
        
        const config = {
            headers: {
                "content-type": "application/json"
            },
        };

        try {
            const response = await API.post("/transaction", body, config);
            console.log(response);

            dispatch({
                type: "CLEAR_CART"
            })
            alert('Thankyou for your order, please confirm your payment on profile page');
            router.push('/profile');
        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
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
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={ uploadURL + product.image} alt={product.name} className="img-fluid img-cart" />
                                    <div className="ml-3">
                                        <h5>{product.name}</h5>
                                        <span className="text-brown">Topping: </span>{product.toppings.map(topping => topping.name).join(', ')}
                                    </div>
                                </div>
                                <div>
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