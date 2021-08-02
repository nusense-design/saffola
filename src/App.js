import "./App.scss";
import LandingPage from './components/LandingPage';
import SecondSection from './components/SecondSection';
import Features from './components/Features';
import Preparation from './components/Preparation';
import Testimonals from './components/Testimonals';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <SecondSection />
      <Features />
      <Preparation />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
