import { Row, Col, Container, Image } from "react-bootstrap";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

function TriPhotoHeader() {
  return (
    <Container fluid>
      <Row>
        <Col xs={4} md={4} className="px-0 ">
          <Image src={image1} fluid />
        </Col>
        <Col xs={4} md={4} className="px-0 ">
          <Image src={image2} fluid />
        </Col>
        <Col xs={4} md={4} className="px-0 ">
          <Image src={image3} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default TriPhotoHeader;
