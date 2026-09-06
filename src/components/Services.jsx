import {
  Briefcase,
  Settings,
  Shield,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import companyData from '../data/companyData';

const iconMap = {
  Briefcase,
  Settings,
  Shield,
  BarChart3,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="servicios"
      className="py-24 bg-charcoal-dark relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C5A55A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Conoce los servicios que ponemos a tu disposición para
            satisfacer tus necesidades.
          </p>
        </div>

        {/* Tarjetas de Servicios */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.id}
                className={`group relative bg-charcoal-light/50 backdrop-blur-sm rounded-xl p-8 border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(197,165,90,0.15)] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                {/* Borde superior dorado */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />

                {/* Número */}
                <span className="absolute top-4 right-4 text-gold/10 font-bold text-6xl font-['Playfair_Display',serif] group-hover:text-gold/20 transition-colors duration-300">
                  {String(service.id).padStart(2, '0')}
                </span>

                {/* Icono */}
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all duration-300 group-hover:scale-110">
                  <Icon size={26} className="text-gold" />
                </div>

                {/* Contenido */}
                <h3 className="text-white font-bold text-xl mb-3">
                  {service.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Botón */}
                <button className="group/btn flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300">
                  Más información
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
