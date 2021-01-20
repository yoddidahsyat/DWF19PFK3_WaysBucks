import { Button } from 'react-bootstrap';
import { API } from '../../config/api';
import Swal from 'sweetalert2';

function Complete({id, refetch}) {

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
            await API.patch('/transaction/' + id, body, config);
            await Swal.fire(
                'Your transaction is Completed',
                "Thankyou, enjoy your drinks :)",
                'success'
            );
            await refetch();
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