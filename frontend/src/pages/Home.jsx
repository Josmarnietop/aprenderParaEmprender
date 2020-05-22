//@ts-check
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fotoportada from "../img/fotoportada.jpg";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
//import defaultimg from "../img/defaultimg.jpg";
import fondo from "../img/background.jpg";
import alumnos1 from "../img/galeria/alumnos1.jpg";
import alumnos2 from "../img/galeria/alumnos2.jpg";
import alumnos3 from "../img/galeria/alumnos3.jpg";
import empdelaño from "../img/concursos/empdelaño.jpg";
import conferencia from "../img/cursos/conferencia.jpg";

export default function Home() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/noticias/links");
        console.log(response.data);
        setLinks(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLinks();
  }, []);

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

      <Row className='my-3 d-flex flex-row'>
        <Col className='p-3'>
          <img src={fotoportada} alt="" className="img-fluid w-100" />
        </Col>
      </Row>
      <Row className='my-3'>
        <Col>
        <Carousel>
          {links.map((link) => (
            <Carousel.Item
            key={link._id}
            className="flex justify-between cursor-pointer"
            >
              <Card style={{ width: '100%' }}>
                <div className="row p-3">
                  <div className="col-md-4 p-5" style={{
                    backgroundImage: `url(${link.imagen})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "15rem",
                    height: "15rem",
                    margin: "auto"
                  }}>
                  </div>
                  <Card.Body className="col-md-8">
                    <Card.Title>{link.titulo}</Card.Title>
                    <Card.Text>
                      {link.contenido}
                    </Card.Text>
                    <Button variant="primary" href={`${link.urlLink}`}>Leer Mas</Button>
                  </Card.Body>
                </div>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
          </Col>
      </Row>
      <Row className='d-flex flex-row my-3'>
        <Col className="mb-3">
          <Card style={{ width: '100%' }}>
            <div className="row p-2">
              <div style={{
                backgroundImage: `url(${conferencia})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "15rem",
                height: "15rem",
                margin: "auto"
              }}>
              </div>
              <Card.Body>
                <Card.Title style={{
                  minHeight: "5vw", textOverflow: "ellipsis", 
                  overflow: "hidden", minWidth: "0", display: "-webkit-box", webkitLineClamp: "2", webkitBoxOrient: "vertical"
                }}>Conferencia para emprendedores</Card.Title>
                <Card.Text style={{
                  maxHeight: "30vw", textOverflow: "ellipsis", 
                  overflow: "hidden", minWidth: "0", display: "-webkit-box", webkitLineClamp: "3", webkitBoxOrient: "vertical"
                }}> <b>Martes 5/05 – 21.00 hs. Google Meet.</b> Conferencia gratuita a emprendedores, a cargo de Lucy Vilte, gerente de Ecohotel Purmamarca, mentora y directora de programas para emprendedores. </Card.Text>
                <Button variant="primary" href="https://www.unsta.edu.ar/economia/lucy-vilte-conferencia-para-emprendedores/">Leer Mas</Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '100%' }}>
            <div className="row p-2">
              <div style={{
                backgroundImage: `url(${empdelaño})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "15rem",
                height: "15rem",
                margin: "auto"
              }}>
              </div>
              <Card.Body>
                <Card.Title style={{
                  minHeight: "5vw", textOverflow: "ellipsis", 
                  overflow: "hidden", minWidth: "0", display: "-webkit-box", webkitLineClamp: "2", webkitBoxOrient: "vertical"
                }}>Se abrió la convocatoria para una nueva edición del Emprendedor del Año</Card.Title>
                <Card.Text style={{
                  maxHeight: "30vw", textOverflow: "ellipsis", 
                  overflow: "hidden", minWidth: "0", display: "-webkit-box", webkitLineClamp: "3", webkitBoxOrient: "vertical"
                }}>El certamen premia el espíritu emprendedor a través de proyectos que impacten en el crecimiento económico y social de todas las provincias del país. Hay tiempo para inscribirse hasta el 17 de julio.</Card.Text>
                <Button variant="primary" href="https://www.argentina.gob.ar/noticias/se-abrio-la-convocatoria-para-una-nueva-edicion-del-emprendedor-del-ano">Leer Mas</Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className='my-3 p-3'>
        <Carousel className=" d-flex align-items-center justify-content-center w-100">
          <Carousel.Item className="w-100">
            <div className="card bg-dark text-white w-100">
              <div style={{
                backgroundImage: `url(${alumnos1})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "auto",
                minHeight: "50vw",
                width: "auto",
                margin: "auto"
              }}>
                <p className="card-text invisible">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="card bg-dark text-white">
              <div style={{
                backgroundImage: `url(${alumnos2})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "auto",
                minHeight: "50vw",
                width: "auto",
                margin: "auto"
              }}>
                <p className="card-text invisible">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item >
            <div className="card bg-dark text-white">
              <div style={{
                backgroundImage: `url(${alumnos3})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "auto",
                minHeight: "50vw",
                width: "auto",
                margin: "auto"
              }}>
                <p className="card-text invisible">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>

  )
}
