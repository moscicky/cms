import {Button, Col, Form, Row} from "react-bootstrap";
import * as React from "react";
import axios from "axios";

class PromoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recepta: props.recepta,
            promo: {
                code: "",
                discount: 0,
            },
        }
    }

    onCodeChange = (field) => {
        this.setState(
            {
                ...this.state,
                promo: {
                    ...this.state.promo,
                    code: field.target.value,
                }
            }
        )
    }

    onDiscountChange = (field) => {
        this.setState(
            {
                ...this.state,
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
                    alert(`Code ${this.state.promo.code} created.`)
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
        let form
        if (this.state.recepta) {
            form = (<Form onSubmit={this.onFormSubmit}>
                <Form.Group controlId="formContactEmail">
                    <Form.Label>Kod recepty</Form.Label>
                    <Form.Control size="lg" placeholder="Wpisz kod recepty"
                                  onChange={this.onCodeChange} value={this.state.promo.code} required/>
                </Form.Group>

                <Form.Group controlId="formContactMsg">
                    <Form.Label>Zniżka %</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Wpisz procent zniżki"
                                  onChange={this.onDiscountChange} value={this.state.promo.discount} required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>)
        } else {
            form = (
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group controlId="formContactEmail">
                        <Form.Label>Kod kuponu</Form.Label>
                        <Form.Control size="lg" placeholder="Wpisz kod kuponu"
                                      onChange={this.onCodeChange} value={this.state.promo.code} required/>
                    </Form.Group>

                    <Form.Group controlId="formContactMsg">
                        <Form.Label>Zniżka %</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Wpisz procent zniżki"
                                      onChange={this.onDiscountChange} value={this.state.promo.discount} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            )
        }
        return (
            <Row>
                <Col lg={{span: 6, offset: 3}}>
                    {form}
                </Col>
            </Row>
        )
    }
}

export default PromoForm;