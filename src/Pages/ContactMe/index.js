import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col, Image, Card } from "react-bootstrap";

import stockHeadShot from "../Leadership/stockHeadShot.jpg";

import TriPhotoHeader from "../../Components/TriPhotoHeader";
import "./style.css";

function ContactMe() {
  return (
    <div>
      <TriPhotoHeader></TriPhotoHeader>
      <br></br>
      <Container className="contact-container">
        <Row className="py-2">
          <h1 className="font-weight-bold">Contact</h1>
        </Row>

        <Container className="border rounded" style={{ backgroundColor: "#a9a9a9", padding: "3vh" }}>
          <Image className="mb-2" src={stockHeadShot} style={{ width: "18rem" }} />
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
