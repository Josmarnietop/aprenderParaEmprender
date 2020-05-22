//@ts-check
import React from 'react';
//import axios from "axios";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
                Constanza, tienes pendiente de subir tu presentacion de Canvas
        </Alert>
            <Router>
                <div className="w-100">
                    <ul className="nav nav-pills nav-fill border-bottom p-2 flex-l-column">
                        <li className="nav-item mb-4 mx-5">
                            <Link to="/" className="text-white border rounded-top p-2">Cronograma</Link>
                        </li>
                        <li className="nav-item mb-4 mx-5">
                            <Link to="/clases" className="text-white border rounded-top p-2">Clases</Link>
                        </li>
                        <li className="nav-item mb-4  mx-5">
                            <Link to="/presentaciones" className="text-white border rounded-top p-2">Presentaciones</Link>
                        </li>
                        <li className="nav-item mb-2  mx-5">
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
            <h5 className="text-white">Clase del 18-04-2020</h5>
            <p className="text-white">
                JUEGO DE CREATIVIDAD DE IDEAS CREATIVAS DE EMPRENDIMIENTO
            </p>
            <p className="text-white">
                -2 palabras para proponer el emprendimiento: DISEÑO y CALCULO
            </p>
            <p className="text-white">
                -1 palabra para darle valor agregado: ECONOMICO
                </p>
            <p className="text-white">
                -PROBLEMA: los arquitectos no nos dedicamos al DISEÑO y CALCULO estructural que normalmente lo delegamos a los ingenieros. Pero además es una tercerización muy costosa.
                </p>
            <p className="text-white">
                -SOLUCION: arquitectos que se dediquen al DISEÑO y CALCULO estructural para tercerizar entre sus colegas arquitectos, lo que significa una especialización en el área.
                </p>
            <p className="text-white">
                -PROPUESTA DE VALOR: Realizarlo lo más rápido posible, con “entregas a las 24hs”, con honorarios más ECONOMICOS que se disminuirán en la medida que el mismo colega encargue más cálculos y las obras sean de mayor envergadura ya que obtendrán un beneficio adicional que se irá incrementando al sumarse más encargos.
                </p>
        </Row>
    )
}

function Presentaciones() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <Col className="border-right">
                <h5 className="text-white">Subi Tu Presentacion</h5>
                <Form className="w-100 my-3">
                    <Form.File
                        id="custom-file"
                        label="Cargar Archivo"
                        custom
                    />
                </Form>
                <img src={canvasalumno} alt="" className="img-fluid w-100" />
            </Col>

            <Col>
                <h5 className="text-white">Mira Las Presentaciones De Tus Compañeros</h5>
                <img src={canvaspublico1} alt="" className="img-fluid w-100 my-3" />
                <img src={canvaspublico2} alt="" className="img-fluid w-100 my-3" />
            </Col>
        </Row>
    )
}

function Consultas() {
    return (

        <Row className='my-3 d-flex flex-row p-3'>
            <Form className="w-100">
                {/*<Form.Group controlId="exampleForm.ControlInput1">
                   
                  ES INNECESARIO QUE PONGA EL NOMBRE Y APELLIDO PORQUE PUEDO SACAR ESO DE SUS DATOS DEL LOGIN PARA ENVIAR EL POST JUNTO CON EL TEXTO DE LA CONSULTA 
                 <Form.Label className="text-white">Nombre y Apellido</Form.Label> 
                    <Form.Control type="text" placeholder="Nombre y Apellido" />
                </Form.Group>*/}
                <Form.Group controlId="exampleForm.ControlTextarea1" >
                    <Form.Label className="text-white">Dejanos Tu Consulta</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    <Button variant="dark" className="my-3">Enviar Consulta</Button>
                </Form.Group>
            </Form>
        </Row>
    )
}