import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { API } from '../config/api';

import ToppingCard from '../components/card/Topping';
import Loading from '../components/Loading';

function Product() {

    const {id} = useParams();
    const [state, dispatch] = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    
    // fetch data product
    const [product, setProduct] = useState({});
    const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await API("/product/" + id);
            setProduct(response.data.data.product);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    // fetch data toppings
    const [toppings, setToppings] = useState([]);
    const fetchToppings = async () => {
        try {
            setLoading(true);
            const response = await API("/toppings");
            setToppings(response.data.data.toppings);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    // fetch data on render
    useEffect(() => {
        fetchProduct();
        fetchToppings();
    }, [])

    // handle add cart
    const handleAddCart = () => {
        dispatch({
            type: "ADD_CART",
            payload: {
                ...product,
                subTotal,
                toppings: selectedToppings
            }
        })
    }

    // handle checkbox topping
    const [checkedToppings, setCheckedToppings] = useState({});
    const handleChange = (event) => {
        setCheckedToppings({
            ...checkedToppings,
            [event.target.id]: event.target.checked
        })
    }

    // get topping id berdasarkan checkbox yang dipilih
    const selectedToppingsId = [];
    for (var key in checkedToppings) {
        if (checkedToppings.hasOwnProperty(key)) {
            checkedToppings[key] ? selectedToppingsId.push(key) : selectedToppingsId.splice(key, 1);
        }
    }

    // get topping berdasarkan topping id
    const selectedToppings = selectedToppingsId.map((selectedToppingId) =>
        toppings.find((topping) => topping.id == selectedToppingId)
    )

    // hitung subTotal dari harga produk dan topping yang dipilih
    const subTotal = selectedToppings.map(selectedTopping => selectedTopping.price).reduce((prev, curr) => prev + curr, product.price);
    console.log('render');

    return (
        loading || !product || toppings.length < 1 ? <Loading /> :
        (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={product.image} alt="product" className="img-product img-fluid" />
                    </div>
                    <div className="col-7">
                        <h2 className="text-red"><strong>{product.name}</strong></h2>
                        <p className="text-brown">Rp. {product.price}</p>
                        <div className="my-5">
                            <h5 className="text-brown mb-3">Topping</h5>
                            <div className="row">
                                {toppings.map((topping) => (
                                    <ToppingCard 
                                    topping={topping} 
                                    key={topping.id} 
                                    onChange={handleChange} 
                                    checked={checkedToppings[topping.id] || false} />
                                ))}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-brown"><strong>subTotal</strong></h5>
                            <h5 className="text-brown"><strong>Rp. {subTotal}</strong></h5>
                        </div>
                        <button className="btn btn-red btn-block my-3" onClick={handleAddCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default Product;