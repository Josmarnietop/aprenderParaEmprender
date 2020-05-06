//@ts-check
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card'
import fotoportada from "../img/fotoportada.jpg";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import defaultimg from "../img/defaultimg.jpg";
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
    <Container>
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
              <p>{link.titulo}</p>
              <p>{link.contenido}</p>
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
        <Carousel>
          <Carousel.Item>
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
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>

  )
}
