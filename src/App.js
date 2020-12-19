import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterBar from "./Components/FooterBar";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import ContactMe from "./Pages/ContactMe";
import Home from "./Pages/Home";
import Leadership from "./Pages/Leadership";
import Properties from "./Pages/Properties";
import { useEffect, useState, Fragment } from "react";

function App() {
  //TODO: following code for passing active page to navbar, currently non-functional
  // const [pageSelected, setPageSelected] = useState("");
  // useEffect(() => {
  //   console.log(
  //     "🚀 ~ file: App.js ~ line 40 ~ useEffect ~ window.location.pathname.split('/')[1];",
  //     window.location.pathname.split("/")[1]
  //   );
  //   const currentPage = window.location.pathname.split("/")[1];
  //   setPageSelected(currentPage);
  //   console.log("🚀 ~ file: App.js ~ line 38 ~ useEffect ~ currentPage", currentPage);
  // }, []);

  return (
    <Fragment>
      <div className="content">
        <Router>
          <NavBar> </NavBar>
          <div className="my-content">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Leadership">
                <Leadership />
              </Route>
              <Route exact path="/Properties">
                <Properties />
              </Route>
              <Route exact path="/ContactMe">
                <ContactMe />
              </Route>
              <Route exact path="/Home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <FooterBar></FooterBar>
    </Fragment>
  );
}

export default App;
