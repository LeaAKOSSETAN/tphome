import logo from './logo.svg';
import './App.css';
import Navbar from './page/Navbar.tsx'
import Footer from'./page/Footer.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import Contact from "./page/Contact.tsx";



      

const App = () => {
  return (<>
    <Navbar/>
      <Contact />
    <Footer/>
    </>
  );
};
   

export default App;
