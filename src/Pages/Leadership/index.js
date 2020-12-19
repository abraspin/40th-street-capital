import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import TriPhotoHeader from "../../Components/TriPhotoHeader";
import stockHeadShot from "./stockHeadShot.jpg";

function Leadership() {
  return (
    <div>
      <TriPhotoHeader></TriPhotoHeader>
      <br></br>
      <Container>
        <Row className="py-2">
          <h1 className="font-weight-bold">Leadership</h1>
        </Row>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={stockHeadShot} />
          </Card>
        </Row>
        <br></br>
        <h1> About Me</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc mi, convallis eu purus nec, blandit vulputate
          leo. Integer vulputate imperdiet neque, viverra facilisis ex commodo at. Donec pellentesque eu nisi vel elementum.
          Mauris feugiat eleifend turpis, vitae pharetra nibh varius at. Curabitur at nisl sed ante pharetra consequat. Duis
          interdum urna vel urna mattis, id maximus felis lacinia. Praesent sit amet mauris eu nibh cursus finibus. Nam eget lacus
          sodales, elementum sem interdum, dapibus erat. Morbi ipsum ante, accumsan ut justo et, dapibus facilisis nibh. Fusce
          ante sem, dapibus et ornare ut, blandit ut est. Nullam condimentum, felis vitae volutpat mollis, tellus lectus elementum
          ipsum, id elementum arcu est fringilla ipsum. Sed accumsan elit sit amet nunc accumsan, a euismod felis consectetur.
          Duis egestas vitae libero a fermentum. Donec dignissim pulvinar porttitor. Praesent vitae elit sem. Donec volutpat dui
          in dictum mollis. Fusce sed ipsum augue. Praesent ut mauris felis. Sed finibus ultrices ante, eget tincidunt enim mattis
          vitae. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras maximus
          porttitor libero. Quisque tincidunt, metus nec luctus sollicitudin, est ligula elementum leo, et efficitur libero tortor
          id mauris. Etiam accumsan ex vel nulla mattis condimentum.{" "}
        </p>
      </Container>
    </div>
  );
}

export default Leadership;
