import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/CustomFooter";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div >
   <Navbar />
   <Hero />
   <Feature />
   <Services />
   <About />
   <Gallery />
   <FAQ />
   <Contact />
   <Footer />
 
    
    </div>
  );
}

export default App;
