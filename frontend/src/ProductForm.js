import * as React from "react";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";

class ProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            product: {
                name: "",
                description: "",
                imageUrl: "",
            },
        }
    }

    onNameChange = (field) => {
        console.log(field.target.value)
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
        console.log(field.target.value)
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
        console.log(field.target.value)
        this.setState(
            {
                product: {
                    ...this.state.product,
                    imageUrl: field.target.value,
                }
            }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios({
            method: 'post',
            url: "http://localhost:8080/products",
            headers: {"Content-Type": "application/json"},
            data: this.state.product,
        })
        this.setState({
            product: {
                name: "",
                description: "",
                imageUrl: "",
            }
        })
    }

    render() {
        return (
            <Row>
                <Col lg={{span: 4, offset: 4}}>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter product name"
                                          onChange={this.onNameChange} value={this.state.product.name}/>
                        </Form.Group>

                        <Form.Group controlId="formProductDescription">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter product description"
                                          onChange={this.onDescriptionChange} value={this.state.product.description}/>
                        </Form.Group>

                        <Form.Group controlId="formProductImageUrl">
                            <Form.Label>Product image url</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter product image url"
                                          onChange={this.onUrlChange} value={this.state.product.imageUrl}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default ProductForm