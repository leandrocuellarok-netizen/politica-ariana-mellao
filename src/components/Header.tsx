import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/quien-soy', label: 'Quién soy' },
  { to: '/medios', label: 'En los medios' },
  { to: '/salud-publica', label: 'Salud pública' },
  { to: '/bienestar-ciudadano', label: 'Bienestar ciudadano' },
  { to: '/transparencia', label: 'Transparencia' },
  { to: '/sumate', label: 'Sumate' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-black tracking-tight text-[#1c2b62]">
          ARIANA MELLAO <span className="block text-[9px] font-semibold tracking-[.26em] text-gray-500">LIDERAZGO ARGENTINO</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `text-[13px] font-semibold transition-colors ${isActive ? 'text-[#1c2b62]' : 'text-gray-600 hover:text-[#1c2b62]'}`}>{item.label}</NavLink>)}
        </nav>
        <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-[#1c2b62] lg:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">{links.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)} className="block border-b border-gray-100 py-3 text-sm font-semibold text-gray-700 last:border-0">{item.label}<ChevronDown className="inline rotate-[-90deg] float-right" size={16} /></NavLink>)}</nav>}
    </header>
  );
}
