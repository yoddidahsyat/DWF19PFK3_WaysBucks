import Card from 'react-bootstrap/Card';

const ToppingCard = ({topping}) => {

    const {id, name, imgUrl} = topping;

    return (
        <div className="col-md-3">
            <Card border="light">
                <Card.Img className="Topping-img" variant="top" src={imgUrl} alt={name}/>
                <Card.Body >
                    <div className="text-red text-center text-sm">{name}</div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ToppingCard;