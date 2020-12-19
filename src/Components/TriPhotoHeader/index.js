import { Row, Col, Container, Image } from "react-bootstrap";
import image1 from "./image1.jpg";

function TriPhotoHeader() {
  return (
    <Container fluid>
      <Row>
        <Col xs={4} md={4} className="px-0 ">
          <Image src={image1} fluid />
        </Col>
        <Col xs={4} md={4} className="px-0 ">
          <Image src="/lance-asper-pAWY7xrsLwc-unsplash.jpg" fluid />
        </Col>
        <Col xs={4} md={4} className="px-0 ">
          <Image src="/everaldo-coelho-2tigIl6Tt7E-unsplash.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default TriPhotoHeader;
