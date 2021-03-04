import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/SiteWide/NavBar";
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
// import Footer from './components/SiteWide/Footer';
import ContactMe from './pages/ContactMe';
import ButtonLink from './components/SiteWide/ButtonLink';


// Contact Me, Keep in touch, 

function App() {
  return(
      <div className="bg-gray-200 h-full min-h-screen">
        <Router>
          {/* NavBar */}
          <Navbar />
            <Switch>

              {/* Home Page */}
              <Route exact path={["/"]}>
                <LandingPage/>
                <ProjectsPage/>
                <div className="flex justify-center p-8">
                  <ButtonLink className="w-full p-4">Contact Me</ButtonLink>
                </div>
              </Route>

              <Route exact path="/contact">
                <ContactMe/>
              </Route>

              {/* Custom 404 */}
              <Route>
                <NotFoundPage/>
              </Route>

            </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
  );
}

export default App;