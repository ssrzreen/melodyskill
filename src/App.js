import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavOptions from './components/NavOptions/NavOptions';
import Footer from './components/Footer/Footer/Footer';
import Copyright from './components/Footer/Copyright/Copyright';
import Photo from './pages/PhotoHotel/Photo';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <NavOptions />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
