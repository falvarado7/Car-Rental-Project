import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Models from './pages/Models';
import TestimonialsPage from './pages/TestimonialsPage';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className='App'> 
      <Navbar />   
      <Routes>
        <Route index path="/" element={<Home />} /> 
        <Route path="about" element={<About />} />
        <Route path="vehicle-models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="our-team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>   
    </div>
  );
}

export default App;
