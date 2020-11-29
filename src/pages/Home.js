import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

// component
import Jumbotron from '../components/Jumbotron';
import ProductCard from '../components/Product/Card';
import Product from '../dummyData/Products';

const Home = () => {
    
    return (
      <div className="container">
        <Jumbotron/>
        <div className="row mt-4 mb-4 ml-3">
          <h3 className="text-danger">Let's Order</h3>
        </div>
        <div class="row">
          {Product.map((Product) => (
            <ProductCard product={Product} key={Product.id} />
          ))}
        </div>
      </div>
    )
};

export default Home;