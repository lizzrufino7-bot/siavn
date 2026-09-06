import { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import companyData from '../data/companyData';
import logoSiav from '../assets/logo-siav.png';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background con patrón corporativo */}
      <div className="absolute inset-0 bg-charcoal-dark">
        {/* Patrón geométrico sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #C5A55A 12%, transparent 12.5%, transparent 87%, #C5A55A 87.5%, #C5A55A),
              linear-gradient(150deg, #C5A55A 12%, transparent 12.5%, transparent 87%, #C5A55A 87.5%, #C5A55A),
              linear-gradient(30deg, #C5A55A 12%, transparent 12.5%, transparent 87%, #C5A55A 87.5%, #C5A55A),
              linear-gradient(150deg, #C5A55A 12%, transparent 12.5%, transparent 87%, #C5A55A 87.5%, #C5A55A)
            `,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          }}
        />
        {/* Gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,165,90,0.08)_0%,transparent_70%)]" />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/50 via-charcoal-dark/30 to-charcoal-dark/80" />
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent mr-[10%] hidden lg:block" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src={logoSiav}
            alt={`Logo ${companyData.companyName}`}
            className="h-28 sm:h-36 md:h-44 mx-auto drop-shadow-[0_0_30px_rgba(197,165,90,0.3)]"
          />
        </div>

        {/* Separador dorado */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-200 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Título */}
        <h1
          className={`font-['Playfair_Display',serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-4 transition-all duration-1000 delay-300 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {companyData.companyName}
        </h1>

        {/* Slogan */}
        <p
          className={`text-gold font-medium text-lg sm:text-xl md:text-2xl tracking-wide mb-6 transition-all duration-1000 delay-500 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {companyData.slogan}
        </p>

        {/* Descripción */}
        <p
          className={`text-white/60 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-700 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {companyData.description}
        </p>

        {/* Botones */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-[900ms] ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#servicios"
            onClick={(e) => handleScroll(e, '#servicios')}
            className="group px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal-dark font-bold text-sm uppercase tracking-widest rounded hover:shadow-[0_0_30px_rgba(197,165,90,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Conoce Nuestros Servicios
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contacto"
            onClick={(e) => handleScroll(e, '#contacto')}
            className="group px-8 py-4 border-2 border-gold/50 text-gold font-bold text-sm uppercase tracking-widest rounded hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center gap-2"
          >
            Contáctanos
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#nosotros"
          onClick={(e) => handleScroll(e, '#nosotros')}
          className="text-gold/50 hover:text-gold transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
