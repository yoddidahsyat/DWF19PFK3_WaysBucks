import { Button } from 'react-bootstrap';
import { API } from '../../config/api';

function Approve({id}) {
    
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
            const response = await API.patch('/transaction/' + id, body, config);
            alert(response.data.message);
            alert('');
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

export default Approve;