//@ts-check
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='d-flex flex-row'>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/articulos">Articulos</Link>
            </li>
            <li>
              <Link to="/links">Seguir Aprendiendo</Link>
            </li>
            <li>
              <Link to="/concursos">Concursos</Link>
            </li>
            <li>
              <Link to="/egresados">Egresados FAU</Link>
            </li>
            <li>
              <Link to="/trabajos">Bolsa de Trabajo</Link>
            </li>
            <li>
              <Link to="/emprendedores">Emprendedores</Link>
            </li>
            <li>
              <Link to="/alumnos">Login Alumnos</Link>
            </li>
          </ul>
        </nav>

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
