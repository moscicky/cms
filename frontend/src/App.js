import './App.css';
import Table from './Table'
import ProductForm from "./ProductForm";
import {Button, Container, Row} from "react-bootstrap";
import * as React from "react";
import ContactForm from "./ContactForm";

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            page: "table"
        }
    }

    setPage = (page) => {
        this.setState(
            {
                page: page
            }
        )
    }

    selectPage = () => {
        switch (this.state.page){
            case "table":
                return <Table/>
            case "newProduct":
                return <ProductForm/>
            case "contactForm":
                return <ContactForm/>
            default:
                return <Table/>
        }
    }
    render() {
        return (
            <div className="App">
                <Container>
                    <Row style={{marginBottom: '30px', marginTop: '30px'}}>
                        <div className="buttonWrapperMain">
                            <Button variant="success" onClick={() => this.setPage('newProduct')}>New Product</Button>
                            <Button variant="success" onClick={() => this.setPage('table')}>Table</Button>
                            <Button variant="info" onClick={() => this.setPage('contactForm')}>Add promo code</Button>
                        </div>
                    </Row>
                    {this.selectPage()}
                </Container>

            </div>
        );
    }
}

export default App;
