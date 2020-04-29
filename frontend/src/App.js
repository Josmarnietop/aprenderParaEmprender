//@ts-check
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./img/logo.jpg";
//import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="md" className=''>
        <Navbar.Brand href="#home">
           
            <Link to="/">
            <img src={logo} alt="" className='w-25' />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center">
            <Link to="/articulos" className='text-wrap p-2 text-center  text-white'>Articulos</Link>
            <Link to="/links" className='text-wrap p-2 text-center  text-white'>Seguir Aprendiendo</Link>
            <Link to="/concursos" className='text-wrap p-2 text-center  text-white'>Concursos</Link>
            <Link to="/egresados" className='text-wrap p-2 text-center  text-white'>Egresados FAU</Link>
            <Link to="/trabajos" className='text-wrap p-2 text-center  text-white'>Bolsa de Trabajo</Link>
            <Link to="/emprendedores" className='text-wrap p-2 text-center  text-white'>Emprendedores</Link>
            <Link to="/alumnos" className='text-wrap p-2 text-center  text-white'>Login Alumnos</Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
               {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/articulos">
            <Home />
          </Route>
          <Route path="/links">
            <Home />
          </Route>
          <Route path="/concursos">
            <Home />
          </Route>
          <Route path="/egresados">
            <Home />
          </Route>
          <Route path="/trabajos">
            <Home />
          </Route>
          <Route path="/emprendedores">
            <About />
          </Route>
          <Route path="/alumnos">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
