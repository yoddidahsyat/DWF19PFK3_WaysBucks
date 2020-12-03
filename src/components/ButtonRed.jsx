import {Button} from 'react-bootstrap'; 

function ButtonRed(props) {
    return (
        <div>
            <Button {...props} variant="danger">{props.title}</Button>
        </div>
    )
}

export default ButtonRed;