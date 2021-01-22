import './App.css';
import Table from './Table'
import ProductForm from "./ProductForm";
import {Button, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

function App() {
    const [page, setPage] = useState('table');
    return (
        <div className="App">
            <Container>
                <Row style={{marginBottom: '30px', marginTop: '30px'}}>
                    <div className="buttonWrapperMain">
                        <Button variant="success" onClick={() => setPage('newProduct')}>New Product</Button>
                        <Button variant="success" onClick={() => setPage('table')}>Table</Button>
                        <Button variant="info" onClick={() => setPage('contactForm')}>Contact form</Button>
                    </div>
                </Row>
                <Row>
                    {page === 'table' && <Table />}
                    {page === 'newProduct' && <div>new pro</div>}
                    {page === 'contactForm' && <div>contact form</div>}
                </Row>
            </Container>

        </div>
    );
}

export default App;
