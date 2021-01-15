import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { uploadURL, API } from '../../config/api';
import Approve from './Approve';
import Cancel from './Cancel';

function ViewPayment({id, image}) {

    // --------------------------- MODAL ----------------------------- //
    const [modal, setModal] = useState(false);
    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);


    const config = {
        headers: {
            "content-type": "application/json"
        },
    };


    const handleReject = async () => {
        const body = JSON.stringify({
            status: "CANCELED"
        })

        try {
            const response = await API.patch('/transaction/' + id, body, config);
            alert(response.data.message);
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <>
            <Button variant="primary" onClick={showModal} size="sm">
                View Payment
            </Button>
            <Modal show={modal} onHide={closeModal} >
                <Modal.Body>
                    <img src={ uploadURL + image} alt="payment" className="img-fluid" />
                    <div className="d-flex justify-content-around" >
                        <Cancel id={id} />
                        <Approve id={id} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ViewPayment;