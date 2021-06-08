import {Button, Card, Col, Row} from "react-bootstrap";
import ShowProductModal from "./ShowProductModal";
import * as React from "react";
import EditProductModal from "./EditProductModal";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showShowModal: false,
            showEditModal: false
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

    toggleEditModal = () => {
        this.setState(prevState => ({
            showEditModal: !prevState.showEditModal
        }))
    }

    onCancelEditModal = () => {
        this.setState({
            showEditModal: false
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
                        <p style={{textAlign: "left", textEmphasisStyle: "filled"}}>{this.props.product.price} zł</p>
                        <div className="buttonWrapper">
                            <Button variant="info" onClick={this.toggleShowModal}>View</Button>
                            <Button variant="warning" onClick={this.toggleEditModal}>Buy</Button>
                            <Button variant="danger"
                                    onClick={() => this.props.onDelete(this.props.product.id)}>Delete</Button>
                        </div>
                    </Col>
                </Row>
                <ShowProductModal show={this.state.showShowModal}
                                  product={this.props.product}
                                  onCancel={this.onCancelShowModal}/>
                <EditProductModal show={this.state.showEditModal}
                                  id={this.props.product.id}
                                  price={this.props.product.price}
                                  onCancel={this.onCancelEditModal}
                                  editHandler={this.props.onEdit}/>
            </>
        )
    }
}

export default Product