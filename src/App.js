import './App.css';

import Nav from './components/navbar/Nav';
import Banner from './components/hero/Banner';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Slider from './components/slider/Slider';
import Review from './components/review/Review';
import Consultation from './components/consultation/Consultation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Section1 />
      <Section2 />
      <Slider />
      <Review />
      <Consultation />
      <Footer />
    </>
  );
}

export default App;
