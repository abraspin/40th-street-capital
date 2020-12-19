import "./style.css";
import homeImage from "./homeImage.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function Home() {
  return <img className="home-image" src={homeImage} />;
}

export default Home;
