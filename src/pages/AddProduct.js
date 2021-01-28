import { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import { API } from '../config/api';
import BoxUpload from '../components/BoxUpload';
import Swal from 'sweetalert2';

function AddProduct() {

    // ---------------------- HANDLE FORM DATA ------------------------ //
    
    const [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    const addProduct = async () => {
        const { name, price } = formData;

        const body = new FormData();
        body.append("name", name);
        body.append("price", price);
        body.append("image", files[0]);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        try {
            const response = await API.post("/product", body, config);
            await Swal.fire(
                'Success',
                response.data.message,
                'success');
        } catch (err) {
            console.log(err);
            Swal.fire(
                'Failed',
                err.response.data.message,
                'error');
        }
    }

    // ----------------------- HANDLE SUBMIT --------------------------- //

    const resetForm = () => {
        setFormData({
            name: '',
            price: ''
        });
        setFiles([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct();
        resetForm();
    }

    // -------------------------- PREVIEW ----------------------------- //

    const thumbs = (files.length > 0) && ( 
        <div className="text-center">
            <img src={files[0].preview} alt='fileThumb' className="img-fluid img-product" />
        </div>
    )

    // -------------------------- RENDER --------------------------- //
    return (
        <div className="container">
            <div className="row text-red">
                <div className="col-md-7">
                    <h3>Product</h3>
                    <Form onSubmit={handleSubmit} className="my-5">
                        <Form.Group>
                            <Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="price" type="number" min={0} value={formData.price} onChange={handleChange} placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mt-5">
                            <Button type="submit" variant="red" block>Add Product</Button>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-md-5">
                    <div {...getRootProps({className: 'dropzone'})}>
                        <input {...getInputProps()} />
                        { files.length < 1 ? <BoxUpload type="Product" />
                        : thumbs
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;