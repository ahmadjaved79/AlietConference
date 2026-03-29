import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Tracks from './pages/Tracks.jsx';
import Dates from './pages/Dates.jsx';
import Submit from './pages/Submit.jsx';
import Committee from './pages/Committee.jsx';
import Publications from './pages/Publications.jsx';
import Brochure from './pages/Brochure.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/brochure" element={<Brochure />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
