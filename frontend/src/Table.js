import * as React from "react";
import axios from "axios";
import Product from "./Product";

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

    render() {
        return (
            <div>
                {this.state.products.map(p => (
                    <Product product={p} key={p.name}/>
                ))}
            </div>
        )
    }
}

export default Table