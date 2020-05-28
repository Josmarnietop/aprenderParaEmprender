//@ts-check
import React from 'react';
//import Alumnos from "././pages/Alumnos";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import desktop from "../img/desktop.jpg";
import {
  useHistory
  } from "react-router-dom";


export default function Login() {
    let history = useHistory();

    const handleClick = () => {
        localStorage.setItem("logged", JSON.stringify(true));
        localStorage.setItem("tipoUsuario", JSON.stringify("alumno"));
        history.push("/cuenta")
    }
    return (
        <div className="d-flex justify-content-center h-100 p-5" style={{backgroundImage: `url(${desktop})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        margin: "auto"}}>
            <Card className="w-80 p-5" style={{ backgroundImage: "linear-gradient(#53c68c,#133926)" }}>
                <Card.Header>
                    <h3>Ingresa A Tu Cuenta</h3>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check className="text-white" type="checkbox" label="Recordarme" />
                        </Form.Group>
                        <Button onClick={handleClick} className="text-black" type="submit" style={{backgroundColor: "#66cc99"}}>
                            Ingresar
  </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}
