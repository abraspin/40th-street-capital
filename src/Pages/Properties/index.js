import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col, Image } from "react-bootstrap";
import TriPhotoHeader from "../../Components/TriPhotoHeader";

import PropertyCard from "../../Components/PropertyCard";
import "./style.css";

function Properties() {
  return (
    <div>
      <TriPhotoHeader></TriPhotoHeader>
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
