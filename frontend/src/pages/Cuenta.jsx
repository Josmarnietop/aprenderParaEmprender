//@ts-check
import React from 'react';
import Alumno from "../pages/Alumno";
import Admin from "../pages/Admin";

export default function Cuenta() {
     const tipoUsuarioLogged = JSON.parse(localStorage.getItem("tipoUsuario"));
     if (tipoUsuarioLogged==="admin") {    return <Admin />;  }  return <Alumno />;}
