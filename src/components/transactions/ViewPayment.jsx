import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { uploadURL } from '../../config/api';
import Approve from './Approve';
import Cancel from './Cancel';

function ViewPayment({id, image, refetch}) {

    // --------------------------- MODAL ----------------------------- //
    const [modal, setModal] = useState(false);
    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <Button variant="primary" onClick={showModal} size="sm">
                View Payment
            </Button>
            <Modal show={modal} onHide={closeModal} >
                <Modal.Body>
                    <img src={ uploadURL + image} alt="payment" className="img-fluid" />
                    <h5 className="text-center my-3">Continue transaction?</h5>
                    <div className="d-flex justify-content-around" >
                        <Button variant="light" onClick={closeModal} >Back</Button>
                        <Cancel id={id} refetch={refetch} />
                        <Approve id={id} closemodal={closeModal} refetch={refetch} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ViewPayment;