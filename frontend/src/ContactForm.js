import {Button, Col, Form, Row} from "react-bootstrap";
import * as React from "react";
import axios from "axios";

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promo: {
                code: "",
                discount: 0,
            },
        }
    }

    onEmailChange = (field) => {
        this.setState(
            {
                promo: {
                    ...this.state.promo,
                    code: field.target.value,
                }
            }
        )
    }

    onMsgChange = (field) => {
        this.setState(
            {
                promo: {
                    ...this.state.promo,
                    discount: field.target.value,
                }
            }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: "http://localhost:8080/promo",
            headers: {"Content-Type": "application/json"},
            data: this.state.promo,
        }).then(
            (resp) => {
                if (resp.status === 201) {
                    alert(`Promo code ${this.state.promo.code} created`)
                }
            }
        )
        this.setState({
            contact: {
                code: "",
                discount: "",
            }
        })
    }

    render() {
        return (
            <Row>
                <Col lg={{span: 6, offset: 3}}>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="formContactEmail">
                            <Form.Label>Promo code</Form.Label>
                            <Form.Control size="lg" placeholder="Enter promo code"
                                          onChange={this.onEmailChange} value={this.state.promo.code} required/>
                        </Form.Group>

                        <Form.Group controlId="formContactMsg">
                            <Form.Label>Discount %</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter discount"
                                          onChange={this.onMsgChange} value={this.state.promo.discount} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default ContactForm;