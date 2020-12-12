import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function ProductCard({product}) {

    const {id, name, price, imgUrl} = product;

    const router = useHistory();
    const goToProduct = () => {
        router.push("/product/" + id);
    }

    return (
        <Card role="button" onClick={goToProduct} className="col-md-3 card" border="light">
            <Card.Img className="Card-img" variant="top" src={imgUrl} alt={name}/>
            <Card.Body className="bg-light" >
                <Card.Title className="text-red">{name}</Card.Title>
                <Card.Text className="text-brown">Rp. {price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;