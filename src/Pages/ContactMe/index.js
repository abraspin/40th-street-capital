import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col, Image, Card } from "react-bootstrap";

import "./style.css";

function ContactMe() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={4} md={4} className="px-0 ">
            <Image src="images/about-page/ryan-spencer-Um9AkOiIDcU-unsplash.jpg " fluid />
          </Col>
          <Col xs={4} md={4} className="px-0 ">
            <Image src="images/about-page/lance-asper-pAWY7xrsLwc-unsplash.jpg" fluid />
          </Col>
          <Col xs={4} md={4} className="px-0 ">
            <Image src="images/about-page/everaldo-coelho-2tigIl6Tt7E-unsplash.jpg" fluid />
          </Col>
        </Row>
        <br></br>
      </Container>
      <Container className="contact-container">
        <Row className="py-2">
          <h1 className="font-weight-bold">Contact</h1>
        </Row>

        <Container className="border rounded" style={{ backgroundColor: "#a9a9a9", padding: "3vh" }}>
          <Image className="mb-2" src="images/about-page/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg" style={{ width: "18rem" }} />
          <Row>
            <h4>
              <span className="font-weight-bold">Phone:</span> (123) 456-7890
            </h4>
          </Row>
          <Row>
            <h4>
              <span className="font-weight-bold">Email:</span> <a href="mailto:MyEmail@Example.com">MyEmail@Example.com </a>
            </h4>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ContactMe;
