import React from 'react';
import Navbars from './components/Navbar';
import PhoneInfo from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbars/>
      <PhoneInfo/>
      <Footer/>
    </div>
  )
}

export default App