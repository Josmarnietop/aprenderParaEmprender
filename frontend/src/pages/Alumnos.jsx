//@ts-check
import React from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import fondo from "../img/background.jpg";
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
    return <h2>Cronograma</h2>;
}

function Clases() {
    return <h2>Clases</h2>;
}

function Presentaciones() {
    return <h2>Presentaciones</h2>;
}

function Consultas() {
    return <h2>Consultas</h2>;
}