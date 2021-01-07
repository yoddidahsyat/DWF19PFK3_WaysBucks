// component
import Jumbotron from '../components/Jumbotron';
import ProductCard from '../components/card/Product';
import Products from '../data/Products.json';

const Home = () => {
    
    return (
        <div className="container">
            <Jumbotron/>
            <div className="row my-4 mx-auto">
                <h3 className="text-red"><strong>Let's Order</strong></h3>
            </div>
            <div className="row mx-auto">
                {Products.map((Product) => (
                    <ProductCard product={Product} key={Product.id} />
                ))}
            </div>
        </div>
    )
};

export default Home;