import React from 'react';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}
