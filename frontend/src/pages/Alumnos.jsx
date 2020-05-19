//@ts-check
import React from 'react';
//import axios from "axios";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import fondo from "../img/background.jpg";
import cronograma from "../img/alumnos/cronograma 2019.jpg";
import canvasalumno from "../img/alumnos/canvasalumno.jpg";
import canvaspublico1 from "../img/alumnos/canvaspublico1.jpg";
import canvaspublico2 from "../img/alumnos/canvaspublico2.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Alumnos() {
    return (
        <Container style={{
            backgroundImage: `url(${fondo})`,
            backgroundPosition: "center center",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            margin: "auto",
            paddingTop: "1%",
            paddingBottom: "1%"
        }}>
            <Alert variant='info' className='mt-3'>
                Ultima noticia bla bla bla
        </Alert>
            <Router>
                <div className="w-100">
                    <ul className="nav nav-pills nav-fill border-bottom p-2">
                        <li className="nav-item">
                            <Link to="/" className="text-white border rounded-top p-2">Cronograma</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/clases" className="text-white border rounded-top p-2">Clases</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/presentaciones" className="text-white border rounded-top p-2">Presentaciones</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/consultas" className="text-white border rounded-top p-2">Consultas</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/clases">
                            <Clases />
                        </Route>
                        <Route path="/presentaciones">
                            <Presentaciones />
                        </Route>
                        <Route path="/consultas">
                            <Consultas />
                        </Route>
                        <Route path="/">
                            <Cronograma />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Container>
    )
}
function Cronograma() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <img src={cronograma} alt="" className="img-fluid w-100" />
        </Row>
    )
}

function Clases() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <img src={cronograma} alt="" className="img-fluid w-100" />
        </Row>
    )
}

function Presentaciones() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <Col>
                <h3 className="text-white">Subi Tu Presentacion</h3>
                <Form className="m-3">
                    <Form.File
                        id="custom-file"
                        label="Custom file input"
                        custom
                    />
                </Form>
                <img src={canvasalumno} alt="" className="img-fluid w-100" />
            </Col>

            <Col>
                <h3 className="text-white">Mira Las Presentaciones De Tus Compañeros</h3>
                <img src={canvaspublico1} alt="" className="img-fluid w-100" />
                <img src={canvaspublico2} alt="" className="img-fluid w-100" />
            </Col>
        </Row>
    )
}

function Consultas() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <img src={cronograma} alt="" className="img-fluid w-100" />
        </Row>
    )
}