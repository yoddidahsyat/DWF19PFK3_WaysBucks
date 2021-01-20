import { Button } from 'react-bootstrap';
import { API } from '../../config/api';
import Swal from 'sweetalert2';

function Cancel({id, refetch}) {

    const customSwal = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-red ml-3',
            cancelButton: 'btn btn-light'
        },
        buttonsStyling: false
    })
    
    

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
            await API.patch('/transaction/' + id, body, config);
            await customSwal.fire(
                'Canceled!',
                'Transaction has been canceled.',
                'error'
            )
            await refetch();
        } catch (err) {
            console.log(err.response.data.message);
        }
    }
    
    const handleClick = () => {
        customSwal.fire({
            title: 'Are you sure?',
            text: "Transaction will be canceled!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No, go back!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                cancel();
            }
        })
    }

    return (
        <Button variant="danger" size="sm" onClick={handleClick}>
            Cancel
        </Button>
    );
}

export default Cancel;