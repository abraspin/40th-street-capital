import { BrowserRouter, Switch, Route, Link, HashRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./style.css";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Col, Row } from "react-bootstrap";

// function NavBar() {
// TODO: pass in active page prop to highlight that one in the nav bar
//   const [pageSelected, setPageSelected] = useState("");
//   useEffect(() => {
//     console.log(
//       "🚀 ~ file: App.js ~ line 40 ~ useEffect ~ window.location.pathname.split('/')[1];",
//       window.location.pathname.split("/")[1]
//     );
//     const currentPage = window.location.pathname.split("/")[1];
//     setPageSelected(currentPage);
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="col-md-6 pl-5">
//         <a className="navbar-brand" href={"/"}>
//           40th Street Capital
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//       </div>
//       {/* Navigation menu items  */}
//       <div className="col-md-6 float-right pr-5">
//         <div className="row float-right ">
//           <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
//             <ul className="navbar-nav  float-right">
//               <li className="nav-item ">
//                 {/* TODO:TODO:TODO: ternary operator? Switch? Map and make each link a component? aw yeah TODO:TODO:TODO: Home{" "} */}
//                 <span className="sr-only">(current)</span>
//                 <Link to="/About" className="nav-link">
//                   ABOUT
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Leadership" className="nav-link">
//                   LEADERSHIP
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/Properties" className="nav-link">
//                   PROPERTIES
//                 </Link>
//               </li>
//               <li className="nav-item ">
//                 <Link to="/ContactMe" className="nav-link">
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

function NavBar() {
  return (
    <Navbar className="navbar-dark" bg="dark" expand="lg">
      <Row>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Col>
          <Link className="navbar-brand" href="/">
            40th Street Capital
          </Link>
          {/* // <Navbar.Brand href="/">40th Street Capital</Navbar.Brand> */}
        </Col>
        <Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ color: "wheat" }} className="mr-auto">
              <Link to="/About">
                <Nav.Link>ABOUT</Nav.Link>
              </Link>
              <Link to="/Leadership">
                <Nav.Link>LEADERSHIP</Nav.Link>
              </Link>
              <Link to="/Properties">
                <Nav.Link>PROPERTIES</Nav.Link>
              </Link>
              <Link to="/ContactMe">
                <Nav.Link>CONTACT</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
}
export default NavBar;
