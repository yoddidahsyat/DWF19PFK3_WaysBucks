import {useParams} from 'react-router-dom';
import Products from '../data/Products.json';
import Toppings from '../data/Topping.json';
import ToppingCard from '../components/card/Topping';
import {Button, Image, CardDeck} from 'react-bootstrap';

function Product() {

    const {id} = useParams();
    const product = Products.find((product) => product.id == id);

    return (
    <div className="container">
        <div className="row">
            <div className="col-5">
                <Image src={product.imgUrl} className="Product-img" />
            </div>
            <div className="col-7">
                <h2 className="text-red"><strong>{product.name}</strong></h2>
                <p className="text-brown">Rp. {product.price}</p>
                <div className="my-5">
                    <h5 className="text-brown mb-3">Topping</h5>
                    <div className="row">
                        {Toppings.map((topping) => (
                            <ToppingCard topping={topping} key={topping.id} />
                        ))}
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-brown"><strong>Total</strong></h5>
                    <h5 className="text-brown"><strong>Rp. 99.999</strong></h5>
                </div>
                <Button className="my-3" variant="red" block>Add to Cart</Button>
            </div>
        </div>
    </div>
    );
};

export default Product;