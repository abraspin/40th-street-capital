import Carousel from "react-bootstrap/Carousel";
import image1 from "../TriPhotoHeader/image1.jpg";
import image2 from "../TriPhotoHeader/image2.jpg";
import image3 from "../TriPhotoHeader/image3.jpg";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} />
        <Carousel.Caption>
          <h5>First slide label (optional) </h5>
          <p>Nulla vitae elit libero</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
