import {Button, Card, Col, Row} from "react-bootstrap";

const Product = ({product, onDelete}) => {
    return (
        <Row className="product-row">
            <Col lg={{span: 2, offset: 0}}>
                <img src={product.imageUrl} style={{maxWidth: "200px"}}/>
            </Col>
            <Col lg={{span: 8, offset: 1}}>
                <h1 style={{textAlign: "left"}}>{product.name}</h1>
                <p style={{textAlign: "left"}}>{product.description}</p>
                <div className="buttonWrapper">
                <Button variant="info">View</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger" onClick={() => onDelete(product.id)}>Delete</Button>
                </div>
            </Col>
        </Row>
    )
}

export default Product