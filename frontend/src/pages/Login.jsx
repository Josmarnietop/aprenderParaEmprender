//@ts-check
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import desktop from "../img/desktop.jpg";
import {
  useHistory
  } from "react-router-dom";


export default function Login() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState([]);
    const [contraseña, setContraseña] = useState([]);
    let history = useHistory();

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get("http://localhost:3000/users/login");
            console.log(response.data);
            setUsers(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchUsers();
      }, []);

      const handleChangeEmail = e => setEmail(e.target.value);
      const handleChangeContraseña = e => setContraseña(e.target.value);
    
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
                            <Form.Control type="email" placeholder="Email" value={email} onChange={handleChangeEmail} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" value={contraseña} onChange={handleChangeContraseña} />
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
