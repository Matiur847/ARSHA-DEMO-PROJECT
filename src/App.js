import './App.css';
import Navigation from './componnents/navigation/Navigation';
import Header from './componnents/Header/Header';
import ClientSection from './componnents/ClientSection/ClientSection';
import About from './componnents/About/About';
import WhyUs from './componnents/WhyUs/WhyUs';
import Skill from './componnents/Skill/Skill';
import Service from './componnents/Service/Service';
import CallToAction from './componnents/CallToAction/CallToAction';
import Portfolio from './componnents/Portfolio/Portfolio';
import Team from './componnents/Team/Team';
import Pricing from './componnents/Pricing/Pricing';
import Faq from './componnents/Faq/Faq';
import Contact from './componnents/Contact/Contact';
import Subscribe from './componnents/Subscribe/Subscribe';
import FooterContact from './componnents/FooterContact/FooterContact';
import DesignBy from './componnents/DesignBy/DesignBy';
import TopBtn from './componnents/TopBtn/TopBtn';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <ClientSection />
      <About />
      <WhyUs />
      <Skill />
      <Service />
      <CallToAction />
      <Portfolio />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
      <Subscribe />
      <FooterContact />
      <DesignBy />
      <TopBtn />
    </div>
    
  );
}

export default App;
