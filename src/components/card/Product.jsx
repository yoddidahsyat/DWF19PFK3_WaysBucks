import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { uploadURL } from '../../config/api';

function ProductCard({product}) {

    const {id, name, price, image} = product;

    const router = useHistory();
    const goToProduct = () => {
        router.push("/product/" + id);
    }

    return (
        <Card role="button" onClick={goToProduct} className="col-md-3 my-2" border="light">
            <Card.Img className="img-card" variant="top" src={image} alt={name}/>
            <Card.Body className="bg-light" >
                <Card.Title className="text-red">{name}</Card.Title>
                <Card.Text className="text-brown">Rp. {price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;