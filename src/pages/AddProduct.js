import { Form, Button } from "react-bootstrap";

function AddProduct() {
    return (
        <div class="container">
            <div className="row text-red">
                <div className="col-md-7">
                    <h3>Product</h3>
                    <Form className="my-5">
                        <Form.Group>
                            <Form.Control placeholder="Product Name"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Price"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File placeholder="Product Photo"></Form.File>
                        </Form.Group>
                    </Form>
                    <Button variant="red" block>Add Product</Button>
                </div>
                <div className="col-md-5">
                    Foto
                </div>
            </div>
        </div>
    );
}

export default AddProduct;