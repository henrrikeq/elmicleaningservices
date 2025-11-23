import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import ServiceAreas from './ServiceAreas';
import Booking from './Booking';
import Team from './Team';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Faqs from './Faqs';



const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        
        <Booking />
        <Team />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;