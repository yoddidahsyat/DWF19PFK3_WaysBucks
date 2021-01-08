import { Button } from 'react-bootstrap';
import { API } from '../../config/api';

function Complete({id}) {

    const handleClick = async () => {
        
        const body = JSON.stringify({
            status: "COMPLETED"
        })
        
        const config = {
            headers: {
                "content-type": "application/json"
            },
        };

        try {
            const response = await API.patch('/transaction/' + id, body, config);
            console.log(response);
            alert('Your Transaction has Completed, Thankyou');
        } catch (err) {
            console.log(err.response.data.message);
        }
    } 

    return (
        <Button variant="success" size="sm" onClick={handleClick} >
            Complete
        </Button>
    );
}

export default Complete;