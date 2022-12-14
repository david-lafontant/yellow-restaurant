import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Testimonial from './components/testimonial/testimonial';
import Work from './components/work/work';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/testimonials" element={<Testimonial />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
