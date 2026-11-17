import { Link } from 'react-router-dom';
export default function NotFound() {
  return <main className="grid min-h-[60vh] place-items-center px-6 text-center"><div><p className="font-display text-7xl font-black text-[#1c2b62]">404</p><h1 className="mt-4 text-2xl font-bold">No encontramos esa página</h1><Link to="/" className="mt-6 inline-block bg-[#1c2b62] px-6 py-3 font-semibold text-white">Volver al inicio</Link></div></main>;
}
