const ToppingCard = ({...props}) => {

    const {id, name, price, imgUrl} = props.topping;

    return (
        <div className="col-md-3">
            <div className="card border-light">
                <div className="card-body">
                    <label className="block-check">
                        <img src={imgUrl} alt={name} className="img-topping" />
                        <input 
                            type="checkbox"
                            id={id}
                            className="hidden-check"
                            onChange={props.onChange}
                            checked={props.checked}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="card-footer">
                    <div className="text-red text-center text-sm">{name}</div>
                </div>
            </div>
        </div>
    );
};

export default ToppingCard;