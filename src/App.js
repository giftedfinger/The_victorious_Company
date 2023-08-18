import {Routes, Route} from 'react-router-dom'
import './App.css';

import About from './Component/About/About';
import ErrorBoundary from './ErrorBoundery/ErrorBoundary';

import Kids from './Component/Kids_Section/Kids_Section';
import Sermon from './Component/Sermon/Sermondetails/sermonDetails';
import Contact from './Component/Contact/Contact';

import Footer from './Component/Footer/footer';
import Home from './Home/Home';

  

function App() {
  return (
    <ErrorBoundary>
    <div className="App">
      
       {/* <Header/> */}
   
        <Routes>
          
              <Route path="/" element={<Home />}  exact/>
           <Route path="/sermon" element={<Sermon />} />
           <Route path="/About" element={<About/>} />
           <Route path="/kids" element={<Kids/>} />
           <Route path="/contact" element={<Contact/>} />

       </Routes>
    
    
  
      <Footer color='logo'/>

    </div>
    </ErrorBoundary>
  );
}

export default App;
