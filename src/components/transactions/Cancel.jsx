import { Button } from 'react-bootstrap';
import { API } from '../../config/api';

function Cancel({id}) {

    const cancel = async () => {
        const body = JSON.stringify({
            status: "CANCELED"
        })
        
        const config = {
            headers: {
                "content-type": "application/json"
            },
        };

        try {
            const response = await API.patch('/transaction/' + id, body, config);
            console.log(response);
            alert('Transaction has been Canceled');
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
    
    const handleClick = () => {
        // confirm("Are you sure? Transaction will be canceled.");
        cancel();
    } 

    return (
        <Button variant="danger" size="sm" onClick={handleClick}>
            Cancel
        </Button>
    );
}

export default Cancel;