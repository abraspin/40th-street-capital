import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="images/about-page/ryan-spencer-Um9AkOiIDcU-unsplash.jpg" alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label (optional) </h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/about-page/lance-asper-pAWY7xrsLwc-unsplash.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="images/about-page/ryan-spencer-Um9AkOiIDcU-unsplash.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
