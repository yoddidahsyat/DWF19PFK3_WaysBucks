import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Products from '../data/Products.json';
import Toppings from '../data/Topping.json';
import ToppingCard from '../components/card/Topping';

function Product() {

    const {id} = useParams();
    const product = Products.find((product) => product.id == id);

    const [state, dispatch] = useContext(AppContext);
    const handleAddCart = (id) => {
        dispatch({
            type: "ADD_CART",
            payload: {
                ...product,
                topping: selectedToppings
            }
        })
    }

    const [checkedToppings, setCheckedToppings] = useState({});
    const handleChange = (event) => {
        setCheckedToppings({
            ...checkedToppings,
            [event.target.id]: event.target.checked
        })
    }

    const selectedToppingsId = [];
    for (var key in checkedToppings) {
        if (checkedToppings.hasOwnProperty(key)) {
            checkedToppings[key] ? selectedToppingsId.push(key) : selectedToppingsId.splice(key, 1);
        }
    }

    const selectedToppings = selectedToppingsId.map((selectedToppingId) =>
        Toppings.find((topping) => topping.id == selectedToppingId)
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <img src={product.imgUrl} className="Product-img" />
                </div>
                <div className="col-7">
                    <h2 className="text-red"><strong>{product.name}</strong></h2>
                    <p className="text-brown">Rp. {product.price}</p>
                    <div className="my-5">
                        <h5 className="text-brown mb-3">Topping</h5>
                        <div className="row">
                            {Toppings.map((topping) => (
                                <ToppingCard topping={topping} key={topping.id} onChange={handleChange} checked={checkedToppings[topping.id] || false} />
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="text-brown"><strong>Total</strong></h5>
                        <h5 className="text-brown"><strong>Rp. 99.999</strong></h5>
                    </div>
                    <button className="btn btn-red btn-block my-3" onClick={() => handleAddCart(id)}>Add to Cart</button>
                </div>
            </div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
};

export default Product;