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
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="md" >
        <Navbar.Brand href="#home">

          <Link to="/">
            <img src={logo} alt="" width="50" height="50" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
          <Nav className="mr-auto align-items-center justify-content-end">
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
      <Container>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="d-flex flex-column align-items-center justify-content-center">
                     <img className="mb-2" src={logo} alt="" width="50" height="50"/>
              <small className="d-block mb-3 text-muted text-wrap">Aprender A Emprender</small>
            <small className="d-block mb-3 text-muted text-wrap">2020</small>
                   {/* <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Cool stuff</a></li>
                <li><a className="text-muted" href="#">Random feature</a></li>
                <li><a className="text-muted" href="#">Team feature</a></li>
                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                <li><a className="text-muted" href="#">Another one</a></li>
                <li><a className="text-muted" href="#">Last time</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Resource</a></li>
                <li><a className="text-muted" href="#">Resource name</a></li>
                <li><a className="text-muted" href="#">Another resource</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div> */}
            </div>
  </footer>
      </Container>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
