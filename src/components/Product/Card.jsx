import Card from 'react-bootstrap/Card';

const ProductCard = ({product}) => {

    const {id, name, price, imgUrl} = product;

    return (
        <Card className="col-md-3" border="light">
            <Card.Img className="Card-img img-fluid" variant="top" src={imgUrl} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Rp. {price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;