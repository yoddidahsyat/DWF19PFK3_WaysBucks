import { Button } from 'react-bootstrap';
import { API } from '../../config/api';
import Swal from 'sweetalert2';

function Approve({id, closemodal, refetch}) {
    
    const handleClick = async () => {
        
        const body = JSON.stringify({
            status: "PROCESSING"
        })
        
        const config = {
            headers: {
                "content-type": "application/json"
            },
        };

        try {
            await API.patch('/transaction/' + id, body, config);
            await Swal.fire(
                'Approved',
                "The transaction's status successfully updated",
                'success'
            );
            closemodal();
            refetch();
        } catch (err) {
            console.log(err.response.data.message);
        }
    } 

    return (
        <Button variant="primary" size="sm" onClick={handleClick} >
            Approve
        </Button>
    );
}

export default Approve;