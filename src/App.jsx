import React from 'react';
import Navbars from './components/Navbar';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/about/About"
import Faqs from './components/support/faqs/Faqs';
import Feedback from './components/support/feedback/Feedback';
import Contact from './components/contact/Contact';
import Payonline from './components/pay-online/Payonline';
import Terms from './components/terms-and-cond/Terms';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faqs" element={<Faqs/>} />
        <Route exact path="/feedback" element={<Feedback/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/payonline" element={<Payonline/>} />
        <Route exact path="/terms" element={<Terms/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App