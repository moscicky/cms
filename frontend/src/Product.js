import {Button, Card, Col, Row} from "react-bootstrap";
import ShowProductModal from "./ShowProductModal";
import * as React from "react";
import EditProductModal from "./EditProductModal";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            withoutPrescription: false,
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

    getWithoutPrescription = () => {
        return this.state.withoutPrescription
    }

    togglePrescription = () => {
        this.setState(prevState => ({
            withoutPrescription: true,
            showEditModal: !prevState.showEditModal
        }))
    }

    onCancelEditModal = () => {
        this.setState({
            showEditModal: false
        })
    }

    render() {
        let buttons;

        if (this.props.product.isMedicine) {
            buttons = (
                <div className="buttonWrapper">
                    <Button variant="info" onClick={this.toggleShowModal}>Zobacz</Button>
                    <Button variant="warning" onClick={this.toggleEditModal}>Kup z receptą</Button>
                    <Button variant="danger"
                            onClick={this.togglePrescription}>Kup bez recepty</Button>
                </div>
            )
        } else {
            buttons = (
                <div className="buttonWrapper">
                    <Button variant="info" onClick={this.toggleShowModal}>Zobacz</Button>
                    <Button variant="warning" onClick={this.toggleEditModal}>Kup</Button>
                </div>
            )
        }

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
                        {buttons}
                    </Col>
                </Row>
                <ShowProductModal show={this.state.showShowModal}
                                  product={this.props.product}
                                  onCancel={this.onCancelShowModal}/>
                <EditProductModal show={this.state.showEditModal}
                                  id={this.props.product.id}
                                  price={this.props.product.price}
                                  isMedicine={this.props.product.isMedicine}
                                  withoutCode={this.getWithoutPrescription}
                                  onCancel={this.onCancelEditModal}
                                  editHandler={this.props.onEdit}/>
            </>
        )
    }
}

export default Product