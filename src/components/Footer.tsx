import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { SOCIAL, PRESS } from '../content';

export default function Footer() {
  return (
    <footer className="bg-[#1c2b62] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-2xl font-bold tracking-tight">ARIANA MELLAO</Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Una nueva etapa para construir una Argentina con producción, transparencia y bienestar.
            </p>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">Explorá</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/75">
              <Link to="/quien-soy" className="hover:text-white">Quién soy</Link>
              <Link to="/medios" className="hover:text-white">En los medios</Link>
              <Link to="/salud-publica" className="hover:text-white">Salud pública</Link>
              <Link to="/bienestar-ciudadano" className="hover:text-white">Bienestar ciudadano</Link>
              <Link to="/transparencia" className="hover:text-white">Transparencia</Link>
              <Link to="/sumate" className="hover:text-white">Sumate</Link>
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-bold">Contacto y redes</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={SOCIAL.twitter.url} target="_blank" rel="noreferrer" aria-label="X" className="rounded-full border border-white/30 p-3 hover:bg-white/10"><Twitter size={18} /></a>
              <a href={SOCIAL.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/30 p-3 hover:bg-white/10"><Instagram size={18} /></a>
              <a href={PRESS.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="rounded-full border border-white/30 p-3 hover:bg-white/10"><Mail size={18} /></a>
            </div>
            <p className="mt-4 text-xs text-white/60">Las propuestas y consultas son bienvenidas.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Ariana Mellao. Todos los derechos reservados.</span>
          <span>Comunicación pública e institucional <ArrowUpRight className="inline" size={12} /></span>
        </div>
      </div>
    </footer>
  );
}
