import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col, Image } from "react-bootstrap";

import PropertyCard from "../../Components/PropertyCard";
import "./style.css";

function Properties() {
  return (
    <div>
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
      <Container>
        <br></br>
        <Row className="py-2">
          <h1 className="font-weight-bold">Properties</h1>
        </Row>
        <Row>
          <Col xs={12} md={4} className="my-4">
            <PropertyCard></PropertyCard>
          </Col>
          <Col xs={12} md={4} className="my-4">
            <PropertyCard></PropertyCard>
          </Col>
          <Col xs={12} md={4} className="my-4">
            <PropertyCard></PropertyCard>
          </Col>
          <Col xs={12} md={4} className="my-4">
            <PropertyCard></PropertyCard>
          </Col>
          <Col xs={12} md={4} className="my-4">
            <PropertyCard></PropertyCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Properties;
