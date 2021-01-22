import * as React from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";

class EditProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            product: props.product
        }
    }

    onNameChange = (field) => {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    name: field.target.value,
                }
            }
        )
    }

    onDescriptionChange = (field) => {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    description: field.target.value,
                }
            }
        )
    }

    onUrlChange = (field) => {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    imageUrl: field.target.value,
                }
            }
        )
    }

    onCancel = () => {
        this.props.onCancel()
    }

    onEdit = () => {
        axios({
            method: 'patch',
            url: `http://localhost:8080/products/${this.props.product.id}`,
            headers: {"Content-Type": "application/json"},
            data: this.state.product,
        })
            .then(() => this.props.onCancel())


    }


    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your product </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={{span: 6, offset: 3}}>
                            <Form>
                                <Form.Group controlId="formProductName">
                                    <Form.Label>Product name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter product name"
                                                  onChange={this.onNameChange} value={this.state.product.name} required/>
                                </Form.Group>

                                <Form.Group controlId="formProductDescription">
                                    <Form.Label>Product description</Form.Label>
                                    <Form.Control size="lg" as="textarea" rows={3} placeholder="Enter product description"
                                                  onChange={this.onDescriptionChange}
                                                  value={this.state.product.description} required/>
                                </Form.Group>

                                <Form.Group controlId="formProductImageUrl">
                                    <Form.Label>Product image url</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Enter product image url"
                                                  onChange={this.onUrlChange} value={this.state.product.imageUrl} required/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onCancel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onEdit}>
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditProductModal;