import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import BoxUpload from "../BoxUpload";
import { useDropzone } from 'react-dropzone';
import { Form } from "react-bootstrap";
import { API } from "../../config/api";
import Swal from 'sweetalert2';

function UploadPayment({id, refetch}) {

    // --------------------------- MODAL ----------------------------- //
    const [modal, setModal] = useState(false);
    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);


    // ------------------------ UPLOAD FILE -------------------------- //
    const [files, setFiles] = useState([]);

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        multiple: false,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    useEffect(() => () => {
        // Make sure to revoke the data urls to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    // -------------------------- FETCH API ----------------------------- //
    const uploadPayment = async () => {

        const status = "WAITING";

        const body = new FormData();
        body.append("status", status);
        body.append("attachment", files[0]);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        try {
            await API.patch("/transaction/payment/" + id, body, config);
            await Swal.fire(
                'Payment Uploaded',
                "Thankyou, please wait while we process your order",
                'success'
            );
            await refetch();
        } catch (err) {
            console.log(err);
        }
    }

    // ----------------------- HANDLE SUBMIT --------------------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadPayment();
    }

    // -------------------------- PREVIEW ----------------------------- //
    const thumbs = (files.length > 0) && ( 
        <div className="text-center">
            <img src={files[0].preview} alt='fileThumb' className="img-fluid img-product" />
        </div>
    )


    return (
        <> 
            <Button variant="primary" onClick={showModal} size="sm">
                Upload Payment
            </Button>
            <Modal show={modal} onHide={closeModal} >
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                { files.length < 1 ? <BoxUpload type="Payment" />
                                : thumbs
                                }
                            </div>
                        </div>
                        <div className="text-center">
                            <Button variant="danger" type="submit">
                                Upload
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UploadPayment;