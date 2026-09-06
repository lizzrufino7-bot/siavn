import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { FacebookIcon } from './Icons';
import companyData from '../data/companyData';
import logoSiav from '../assets/logo-siav.png';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicaciones', href: '#ubicaciones' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-dark relative">
      {/* Línea dorada superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoSiav}
                alt={`Logo ${companyData.companyName}`}
                className="h-12"
              />
              <span className="font-['Playfair_Display',serif] text-2xl font-bold text-white tracking-wider">
                {companyData.companyName}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              {companyData.slogan}
            </p>
            <div className="flex items-center gap-3">
              {companyData.facebook ? (
                <a
                  href={companyData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold/20 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
              ) : (
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/20 cursor-not-allowed">
                  <FacebookIcon size={18} />
                </div>
              )}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-6 h-px bg-gold" />
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/40 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:bg-gold transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Ubicaciones */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-6 h-px bg-gold" />
              Ubicaciones
            </h4>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-gold" />
                  <p className="text-white/70 font-medium text-sm">
                    {companyData.talaraName}
                  </p>
                </div>
                <p className="text-white/35 text-xs ml-[22px]">
                  {companyData.talaraAddress}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={14} className="text-gold" />
                  <p className="text-white/70 font-medium text-sm">
                    {companyData.elAltoName}
                  </p>
                </div>
                <p className="text-white/35 text-xs ml-[22px]">
                  {companyData.elAltoAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-6 h-px bg-gold" />
              Contacto
            </h4>
            <div className="space-y-4">
              {/* Teléfono */}
              <a
                href={companyData.phone1Link}
                className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm group"
              >
                <Phone
                  size={16}
                  className="text-gold/60 group-hover:text-gold"
                />
                {companyData.phone1}
              </a>

              {/* Correos */}
              {companyData.email1 ? (
                <a
                  href={`mailto:${companyData.email1}`}
                  className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm group"
                >
                  <Mail
                    size={16}
                    className="text-gold/60 group-hover:text-gold"
                  />
                  {companyData.email1}
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/20 text-sm">
                  <Mail size={16} />
                  <span className="italic text-xs">Correo pendiente</span>
                </div>
              )}

              {companyData.email2 ? (
                <a
                  href={`mailto:${companyData.email2}`}
                  className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm group"
                >
                  <Mail
                    size={16}
                    className="text-gold/60 group-hover:text-gold"
                  />
                  {companyData.email2}
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/20 text-sm">
                  <Mail size={16} />
                  <span className="italic text-xs">Correo pendiente</span>
                </div>
              )}

              {/* Facebook */}
              {companyData.facebook ? (
                <a
                  href={companyData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors text-sm group"
                >
                  <FacebookIcon
                    size={16}
                    className="text-gold/60 group-hover:text-gold"
                  />
                  Facebook
                </a>
              ) : (
                <div className="flex items-center gap-3 text-white/20 text-sm">
                  <FacebookIcon size={16} />
                  <span className="italic text-xs">Facebook pendiente</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © 2026 {companyData.companyName}. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white/25 hover:text-gold text-xs transition-colors"
            aria-label="Volver al inicio"
          >
            Volver al inicio
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
