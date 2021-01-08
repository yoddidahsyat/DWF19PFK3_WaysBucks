import { useState, useEffect } from 'react';
import { API } from '../config/api';

// component
import Jumbotron from '../components/Jumbotron';
import ProductCard from '../components/card/Product';
import Loading from '../components/Loading';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await API("/products");
            
            setProducts(response.data.data.products);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        loading ? <Loading /> :
        (
            <div className="container">
                <Jumbotron/>
                <div className="row my-4 mx-auto">
                    <h3 className="text-red"><strong>Let's Order</strong></h3>
                </div>
                <div className="row mx-auto">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        )
    )
};

export default Home;