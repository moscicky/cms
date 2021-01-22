import './App.css';
import Table from './Table'
import ProductForm from "./ProductForm";
import {Button, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            {/*<ProductForm/>*/}
            <Container>
                <Row style={{marginBottom: '30px', marginTop: '30px'}}>
                    <div className="buttonWrapperMain">
                        <Button variant="success">New Product</Button>
                        <Button variant="info">Contact form</Button>
                    </div>
                </Row>
                <Row>
                    <Table/>
                </Row>
            </Container>

        </div>
    );
}

export default App;
