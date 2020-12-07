import Card from 'react-bootstrap/Card';
import {Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    const {id, name, price, imgUrl} = product;

    return (
        <Card as={Link} to={'/product/' + id} className="col-md-3" border="light">
            <Card.Img className="Card-img" variant="top" src={imgUrl} alt={name}/>
            <Card.Body className="bg-light" >
                <Card.Title className="text-red">{name}</Card.Title>
                <Card.Text className="text-brown">Rp. {price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;