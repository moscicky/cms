import {Button, Card, Col, Row} from "react-bootstrap";
import ShowProductModal from "./ShowProductModal";
import * as React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showShowModal: false,

        }
    }

    toggleShowModal = () => {
        this.setState(prevState => ({
            showShowModal: !prevState.showShowModal
        }))
    }

    onCancelShowModal = () => {
        this.setState({
            showShowModal: false
        })
    }

    render() {
        return (
            <>
                <Row className="product-row">
                    <Col lg={{span: 2, offset: 0}}>
                        <img src={this.props.product.imageUrl} style={{maxWidth: "200px"}}/>
                    </Col>
                    <Col lg={{span: 8, offset: 1}}>
                        <h1 style={{textAlign: "left"}}>{this.props.product.name}</h1>
                        <p style={{textAlign: "left"}}>{this.props.product.description}</p>
                        <div className="buttonWrapper">
                            <Button variant="info" onClick={this.toggleShowModal}>View</Button>
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger"
                                    onClick={() => this.props.onDelete(this.props.product.id)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
                <ShowProductModal show={this.state.showShowModal}
                                  product={this.props.product}
                                  onCancel={this.onCancelShowModal}/>
            </>
        )
    }
}

export default Product