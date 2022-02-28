import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import EmailMarketing from './pages/EmailMarketing/EmailMarketing';
import MedicalWebsiteDesign from './pages/MedicalWebsiteDesign/MedicalWebsiteDesign';
import GoogleMyBusinessPage from './pages/GoogleMyBusinessPage/GoogleMyBusinessPage';
import MedicalWebsiteHosting from './pages/MedicalWebsiteHosting/MedicalWebsiteHosting';
import Orm from './pages/Orm/Orm';
import MedicalAdvertising from './pages/MedicalAdvertising/MedicalAdvertising';
import MedicalContentWriting from './pages/MedicalContentWriting/MedicalContentWriting';
import Seo from './pages/Seo/Seo';


const App = () => {
  return (
        <>
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/email-marketing" exact>
          <EmailMarketing/>
        </Route>
        <Route path="/medical-website-design" exact>
          <MedicalWebsiteDesign/>
        </Route>
        <Route path="/google-my-business-page" exact>
          <GoogleMyBusinessPage/>
        </Route>
        <Route path="/medical-website-hosting" exact>
          <MedicalWebsiteHosting/>
        </Route>
        <Route path="/orm" exact>
          <Orm/>
        </Route>
        <Route path="/medical-advertising" exact>
          <MedicalAdvertising/>
        </Route>
        <Route path="/medical-content-writing" exact>
          <MedicalContentWriting/>
        </Route>
        <Route path="/seo" exact>
          <Seo/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
          <Footer />
   </Router>

    </>
 
  )
}

export default App;
