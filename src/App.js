import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Testimonial from './components/testimonial/testimonial';
import Work from './components/work/work';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Work />
      <Menu />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
