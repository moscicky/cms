import {Button, Col, Form, Row} from "react-bootstrap";
import * as React from "react";
import axios from "axios";

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: {
                email: "",
                message: "",
            },
        }
    }

    onEmailChange = (field) => {
        this.setState(
            {
                contact: {
                    ...this.state.contact,
                    email: field.target.value,
                }
            }
        )
    }

    onMsgChange = (field) => {
        this.setState(
            {
                contact: {
                    ...this.state.contact,
                    message: field.target.value,
                }
            }
        )
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: "http://localhost:8080/contact",
            headers: {"Content-Type": "application/json"},
            data: this.state.contact,
        })
        this.setState({
            contact: {
                email: "",
                message: "",
            }
        })
    }

    render() {
        return (
            <Row>
                <Col lg={{span: 6, offset: 3}}>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="formContactEmail">
                            <Form.Label>Your email</Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Enter your mail"
                                          onChange={this.onEmailChange} value={this.state.contact.email} required/>
                        </Form.Group>

                        <Form.Group controlId="formContactMsg">
                            <Form.Label>Your message for us</Form.Label>
                            <Form.Control as="textarea" rows={3} size="lg" type="text" placeholder="Type your message"
                                          onChange={this.onMsgChange} value={this.state.contact.message} required/>
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