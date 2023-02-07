import logo from './logo.svg';
import './App.css';
import Home from './components/home page/Home';
import { Fragment } from 'react';
import Navs from './components/navs/Navs';
import Info from './components/info/Info';
import OurFood from './components/our food/OurFood';
import Testimonials from './components/Testimonials/Testimonials'
import SomeWords from './components/Some words/SomeWords';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
       <Navs />
      <Home />
      <Info />
      <OurFood />
      <Testimonials />
      <SomeWords />
      <Footer />
    </Fragment>
  );
}

export default App;
