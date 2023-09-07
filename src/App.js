import {Routes, Route,useNavigate} from 'react-router-dom'
import './App.css';

import About from './Component/About/About';
import ErrorBoundary from './ErrorBoundery/ErrorBoundary';

import Kids from './Component/Kids_Section/Kids_Section';
import Sermon from './Component/Sermon/Sermondetails/sermonDetails';
import Contact from './Component/Contact/Contact';

import Footer from './Component/Footer/footer';
import Home from './Home/Home';

  

function App() {

  const navigate = useNavigate();

  // Redirect unmatched routes to the Home component
  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <ErrorBoundary>
    <div className="App">
      
       {/* <Header/> */}
   
        <Routes>
         
          <Route path="/" element={ <Home/>}  exact/>
           <Route path="/sermon" element={<Sermon />} />
           <Route path="/About" element={<About/>} />
           <Route path="/kids" element={<Kids/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="*" element={<Home />} />
      <Route path="*" element={redirectToHome} />

       </Routes>
    
    
  
      <Footer color='logo'/>

    </div>
    </ErrorBoundary>
  );
}

export default App;
