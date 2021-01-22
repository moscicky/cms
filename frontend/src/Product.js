import {Button, Card, Col, Row} from "react-bootstrap";
import EditProductModal from "./EditProductModal";
import * as React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,

        }
    }

    toggleShowModal = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    onCancelModal = () => {
        this.setState({
            show: false
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
                            <Button variant="info">View</Button>
                            <Button variant="warning" onClick={this.toggleShowModal}>Edit</Button>
                            <Button variant="danger"
                                    onClick={() => this.props.onDelete(this.props.product.id)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
                <EditProductModal show={this.state.show}
                                  product={this.props.product}
                                  onCancel={this.onCancelModal}/>
            </>
        )
    }
}

export default Product