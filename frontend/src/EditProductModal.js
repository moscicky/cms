import * as React from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";

class EditProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            product: props.product
        }
    }

    onCancel = () => {
        this.props.onCancel()
    }

    onEdit = () => {

    }


    render() {
        return (
            <Modal size="lg" show={this.props.show} onHide={this.onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={{span: 4}}>
                            <img src={this.props.product.imageUrl} style={{maxWidth: "200px"}}/>
                        </Col>
                        <Col lg={{span: 8}}>
                            <p style={{textAlign: "left"}}>{this.props.product.description}</p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onCancel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditProductModal;