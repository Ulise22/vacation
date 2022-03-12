import './App.css';
import Categories from './Components/Categories';
import Cities from './Components/Cities';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Cities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
