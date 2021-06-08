import * as React from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import axios from "axios";

class BuyProductModal extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            isMedicine: props.isMedicine,
            price: props.price,
            show: props.show,
            id: props.id,
            quantity: 0,
            promoCode: '',
            cardNumber: '',
            prescriptionId: '',
        }
    }

    onQuantityChange = (field) => {
        this.setState(
            {
                ...this.state,
                quantity: field.target.value,
            }
        )
    }

    onPromoCodeChange = (field) => {
        this.setState(
            {
                ...this.state,
                promoCode: field.target.value,
            }
        )
    }

    onCardNumberChange = (field) => {
        this.setState(
            {
                ...this.state,
                cardNumber: field.target.value
            }
        )
    }

    onCancel = () => {
        this.props.onCancel()
    }

    onEdit = () => {
        axios({
            method: 'post',
            url: `http://localhost:8080/shop/buy/${this.state.id}`,
            headers: {"Content-Type": "application/json"},
            data: {
                quantity: this.state.quantity, promoCode: this.state.promoCode, creditCard: this.state.cardNumber
            }

        })
            .then((resp) => alert(resp.data.message), (resp) => {
                if (resp.data !== undefined) {
                    alert(resp.data.message)
                } else {
                    alert("Błąd!")
                }

            })
            .then(() => this.props.onCancel())
            .then(() => this.props.editHandler())
    }


    render() {
        let form;
        if (this.state.isMedicine) {
            let discount;
            if (this.props.withoutCode()) {
                discount = null
            } else {
                discount = (<Form.Group controlId="formProductDescription">
                    <Form.Label>Numer recepty</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Numer recepty"
                                  onChange={this.onPromoCodeChange}
                                  value={this.state.promoCode} required/>
                </Form.Group>)
            }

            form = (
                <Form>
                    <Form.Group controlId="formProductName">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Select quantity"
                                      onChange={this.onQuantityChange} value={this.state.quantity} required/>
                    </Form.Group>
                    {discount}
                    <Form.Group controlId="formProductImageUrl">
                        <Form.Label>Credit card details (xxxx-xxxx-xxxx-xxxx)</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter credit card"
                                      onChange={this.onCardNumberChange} value={this.state.cardNumber}
                                      required/>
                    </Form.Group>
                </Form>
            )
        } else {
            form = (<Form>
                <Form.Group controlId="formProductName">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Select quantity"
                                  onChange={this.onQuantityChange} value={this.state.quantity} required/>
                </Form.Group>
                <Form.Group controlId="formProductDescription">
                    <Form.Label>Promo code</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter promo code"
                                  onChange={this.onPromoCodeChange}
                                  value={this.state.promoCode} required/>
                </Form.Group>

                <Form.Group controlId="formProductImageUrl">
                    <Form.Label>Credit card details (xxxx-xxxx-xxxx-xxxx)</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Enter credit card"
                                  onChange={this.onCardNumberChange} value={this.state.cardNumber}
                                  required/>
                </Form.Group>
            </Form>)
        }

        return (
            <Modal size="lg" show={this.props.show} onHide={this.onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Buy product </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={{span: 6, offset: 3}}>
                            <p style={{
                                textAlign: "left",
                                textEmphasisStyle: "filled"
                            }}>{this.state.price} zł</p>
                            {form}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onCancel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onEdit}>
                        Buy
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default BuyProductModal;
