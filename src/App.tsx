import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import Medios from './pages/Medios';
import SaludPublica from './pages/SaludPublica';
import BienestarCiudadano from './pages/BienestarCiudadano';
import TransparenciaInstitucional from './pages/TransparenciaInstitucional';
import Sumate from './pages/Sumate';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/medios" element={<Medios />} />
        <Route path="/salud-publica" element={<SaludPublica />} />
        <Route path="/bienestar-ciudadano" element={<BienestarCiudadano />} />
        <Route path="/transparencia" element={<TransparenciaInstitucional />} />
        <Route path="/sumate" element={<Sumate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
