import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import MyCarousel from "../MyCarousel";

function PropertyCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <MyCarousel></MyCarousel>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Row>
          <Button className="mx-auto" variant="dark">
            Go somewhere
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default PropertyCard;
