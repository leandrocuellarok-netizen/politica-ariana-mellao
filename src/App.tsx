import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import Medios from './pages/Medios';
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
        <Route path="/sumate" element={<Sumate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
