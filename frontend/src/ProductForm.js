import * as React from "react";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: "",
                description: "",
                imageUrl: "",
                price: 0
            },

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

    onPriceChange = (field) => {
        this.setState(
            {
                product: {
                    ...this.state.product,
                    price: field.target.value,
                }
            }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault()
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
                <Col lg={{span: 6, offset: 3}}>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Nazwa produktu</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Wpisz nazwę produktu"
                                          onChange={this.onNameChange} value={this.state.product.name} required />
                        </Form.Group>

                        <Form.Group controlId="formProductDescription">
                            <Form.Label>Opis produktu</Form.Label>
                            <Form.Control size="lg" as="textarea" rows={3} placeholder="Wpisz opis produktu"
                                          onChange={this.onDescriptionChange} value={this.state.product.description} required/>
                        </Form.Group>

                        <Form.Group controlId="formProductImageUrl">
                            <Form.Label>Zdjęcie produktu</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Wklej link do zdjęcia produktu"
                                          onChange={this.onUrlChange} value={this.state.product.imageUrl} required/>
                        </Form.Group>

                        <Form.Group controlId="formProductName">
                            <Form.Label>Cena produktu</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Wpisz cenę produktu"
                                          onChange={this.onPriceChange} value={this.state.product.price} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default ProductForm