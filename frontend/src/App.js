import './App.css';
import Table from './Table'
import ProductForm from "./ProductForm";
import {Button, Container, Row} from "react-bootstrap";
import * as React from "react";
import PromoForm from "./PromoForm";

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
                return <PromoForm recepta={false}/>
            case "recepta":
                return <PromoForm recepta={true}/>
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
                            <Button variant="success" onClick={() => this.setPage('newProduct')}>Nowy Produkt</Button>
                            <Button variant="info" onClick={() => this.setPage('table')}>Listing</Button>
                            <Button variant="success" onClick={() => this.setPage('contactForm')}>Dodaj kod promocyjny</Button>
                            <Button variant="info" onClick={() => this.setPage('recepta')}>Dodaj receptę</Button>
                        </div>
                    </Row>
                    {this.selectPage()}
                </Container>

            </div>
        );
    }
}

export default App;
