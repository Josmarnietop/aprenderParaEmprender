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
import defaultimg from "../img/defaultimg.jpg";
import fondo from "../img/background.jpg";
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
      margin: "auto"
    }}>
      <Alert variant='info' className='my-3'>
        Ultima noticia bla bla bla
  </Alert>

      <Row className='my-3 d-flex flex-row'>
        <Col className='p-2 border border-success'>
          <img src={fotoportada} alt="" className="img-fluid" />
        </Col>
        {/* <Col sm={8} className='p-2 border border-success'>
          ultima noticia publica
</Col> */}
      </Row>
      <Row className='my-3'>
        <Carousel>
          {links.map((link) => (
            <Carousel.Item
              key={link._id}
              className="flex justify-between p-2 cursor-pointer"
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
              {/* <img src={link.imagen} alt='imagen' className="img-fluid" max-height="100em" />
              <h5>{link.titulo}</h5>
              <a href={`${link.urlLink}`} >{link.urlLink}</a> */}
            </Carousel.Item>
          ))}
          {/* <Carousel.Item>
             <img
              className="d-block w-100"
            src={defaultimg}
              alt="First slide"
            /> 

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img
              className="d-block w-100"
              src={defaultimg}
              alt="Third slide"
            /> 

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
             <img
              className="d-block w-100"
              src={defaultimg}
              alt="Third slide"
            /> 

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Row>
      <Row className='d-flex flex-row my-3'>
        <Col className='col p-2 border border-success'>
          cursos
</Col>
        <Col className='col p-2 border border-success'>
          concursos
</Col>
      </Row>
      <Row className='my-3'>
        <Carousel className=" d-flex align-items-center justify-content-center">
          <Carousel.Item >
            <div className="col p-1" style={{
              backgroundImage: `url(${defaultimg})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "40rem",
              height: "auto",
              minHeight: "15rem",
              margin: "auto"
            }}>
            </div>
            {/* <img
              className="d-block w-100"
              src={defaultimg}
              alt="First slide"
            /> */}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="col p-5" style={{
              backgroundImage: `url(${defaultimg})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50vw",
              height: "15rem",
              margin: "auto"
            }}>
            </div>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="col p-5" style={{
              backgroundImage: `url(${defaultimg})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50vw",
              height: "15rem",
              margin: "auto"
            }}>
            </div>

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>

  )
}
