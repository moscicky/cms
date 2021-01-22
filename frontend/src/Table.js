import * as React from "react";
import axios from "axios";
import Product from "./Product";
import {Container} from "react-bootstrap";

class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/products")
            .then(resp => resp.data)
            .then(data => this.setState({
                products: data.content
            }))

    }

    componentDidUpdate() {
        console.log(this.state)
    }

    onProductDelete = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
            .then(() => {
                this.setState(prevState => {
                    const updatedProd = prevState.products.filter(
                        product => product.id !== id
                    )
                    return {
                        products: updatedProd
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <Container>
                {this.state.products.map(p => (
                    <Product product={p} key={p.id} onDelete={this.onProductDelete}/>
                ))}
                </Container>
            </div>
        )
    }
}

export default Table