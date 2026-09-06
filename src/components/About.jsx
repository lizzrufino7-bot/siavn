import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Handshake,
  Award,
  Users,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import companyData from '../data/companyData';

const pillars = [
  {
    icon: Target,
    title: 'Misión',
    text: companyData.mission,
    color: 'from-gold-dark to-gold',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: companyData.vision,
    color: 'from-gold to-gold-light',
  },
  {
    icon: Heart,
    title: 'Valores',
    text: companyData.values,
    color: 'from-gold-light to-gold-dark',
  },
];

const valueCards = [
  {
    icon: ShieldCheck,
    title: 'Responsabilidad',
    desc: 'Cumplimos con cada compromiso asumido, actuando con seriedad y dedicación en todo momento.',
  },
  {
    icon: Handshake,
    title: 'Compromiso',
    desc: 'Nos involucramos de manera integral en cada proyecto, garantizando resultados de excelencia.',
  },
  {
    icon: Award,
    title: 'Calidad',
    desc: 'Cada servicio que ofrecemos cumple con los más altos estándares de calidad y profesionalismo.',
  },
  {
    icon: CheckCircle2,
    title: 'Honestidad',
    desc: 'Operamos con total transparencia y ética, generando confianza en cada relación comercial.',
  },
  {
    icon: Star,
    title: 'Profesionalismo',
    desc: 'Contamos con un equipo altamente capacitado y comprometido con la excelencia en el servicio.',
  },
  {
    icon: Users,
    title: 'Confianza',
    desc: 'Construimos relaciones sólidas y duraderas basadas en la confianza mutua con nuestros clientes.',
  },
];

function SectionTitle({ children }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export default function About() {
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section
      id="nosotros"
      className="py-24 bg-champagne-light relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título de sección */}
        <SectionTitle>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Nosotros
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-dark mb-6">
            ¿Quiénes Somos?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-charcoal-light/70 text-lg max-w-3xl mx-auto leading-relaxed">
            {companyData.aboutText}
          </p>
        </SectionTitle>

        {/* Misión, Visión, Valores */}
        <div
          ref={pillarsRef}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`group bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(197,165,90,0.15)] transition-all duration-500 hover:-translate-y-2 border border-beige/50 hover:border-gold/30 ${
                  pillarsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: pillarsVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} className="text-charcoal-dark" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-charcoal-dark mb-4">
                  {pillar.title}
                </h3>
                <p className="text-charcoal-light/60 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Valores - 6 tarjetas */}
        <div className="text-center mb-12">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Nuestros Pilares
          </p>
          <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-charcoal-dark">
            Valores que nos definen
          </h3>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {valueCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`group relative bg-white rounded-lg p-6 border border-beige/50 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(197,165,90,0.12)] ${
                  cardsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-champagne flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-gold group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-dark mb-1 text-lg">
                      {card.title}
                    </h4>
                    <p className="text-charcoal-light/50 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
