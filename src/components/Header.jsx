import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import companyData from '../data/companyData';
import logoSiav from '../assets/logo-siav.png';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicaciones', href: '#ubicaciones' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal-dark/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group"
          >
            <img
              src={logoSiav}
              alt={`Logo ${companyData.companyName}`}
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-14'
              }`}
            />
            <span
              className={`font-['Playfair_Display',serif] font-bold text-white tracking-wider transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              {companyData.companyName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal-dark font-semibold text-sm uppercase tracking-wider rounded hover:shadow-[0_0_20px_rgba(197,165,90,0.4)] transition-all duration-300 hover:scale-105"
            >
              Contáctanos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            aria-label="Menú de navegación"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-charcoal-dark/98 backdrop-blur-lg border-t border-gold/20 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col py-4 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 text-white/80 hover:text-gold transition-colors duration-300 text-base font-medium tracking-wide uppercase border-b border-white/5 last:border-0"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="mt-4 px-6 py-3 gold-gradient text-charcoal-dark font-semibold text-sm uppercase tracking-wider rounded text-center"
          >
            Contáctanos
          </a>
          {companyData.phone1 && (
            <a
              href={companyData.phone1Link}
              className="mt-3 flex items-center justify-center gap-2 text-gold text-sm"
            >
              <Phone size={16} />
              {companyData.phone1}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
