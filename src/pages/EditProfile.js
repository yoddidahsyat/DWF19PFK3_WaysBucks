import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { useDropzone } from 'react-dropzone';
import { API } from '../config/api';
import BoxUpload from '../components/BoxUpload';
import { AppContext } from '../context/AppContext';
import Swal from 'sweetalert2';

function EditProfile() {

    const router = useHistory();
    const cancel = () => {
        router.push('/profile');
    }

    // ------------------------ GET DATA USER ------------------------- //

    const [state, dispatch] = useContext(AppContext);
    const { user } = state;

    // ---------------------- HANDLE FORM DATA ------------------------ //
    
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email
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

    const editProfile = async () => {
        const { name, email } = formData;

        const body = new FormData();
        body.append("name", name);
        body.append("email", email);
        body.append("avatar", files[0]);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };

        try {
            const response = await API.patch("/user", body, config);
            const user = response.data.data.user;
            await Swal.fire(
                'Success!',
                "Your profile has succesfully updated",
                'success'
            );
            dispatch({
                type: "USER_LOADED",
                payload: {
                    ...user
                }
            })
            router.push('/profile');
        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
        }
    }

    // ----------------------- HANDLE SUBMIT --------------------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
        editProfile();
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
                <div className="col-md-5">
                    <div {...getRootProps({className: 'dropzone'})} className="text-center">
                        <input {...getInputProps()} />
                        { files.length > 0 ? thumbs
                        : user.avatar ? <img src={user.avatar} alt="avatar" className="img-fluid" role="button" /> 
                        : <BoxUpload type="Profile" />
                        }
                    </div>
                </div>
                <div className="col-md-7">
                    <h3>Edit Profile</h3>
                    <Form onSubmit={handleSubmit} className="my-5">
                        <Form.Group>
                            <Form.Control name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mt-5 d-flex justify-content-center">
                            <Button onClick={cancel} variant="light" size="standard" >Cancel</Button>
                            <Button type="submit" variant="red ml-3" size="standard" >Save</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;