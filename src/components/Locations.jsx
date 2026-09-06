import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import companyData from '../data/companyData';

const locations = [
  {
    name: companyData.talaraName,
    address: companyData.talaraAddress,
    phone: companyData.talaraPhone,
    phoneLink: companyData.talaraPhoneLink,
    schedule: companyData.talaraSchedule,
    mapsLink: companyData.googleMapsTalara,
    gradient: 'from-gold-dark to-gold',
  },
  {
    name: companyData.elAltoName,
    address: companyData.elAltoAddress,
    phone: companyData.elAltoPhone,
    phoneLink: companyData.elAltoPhoneLink,
    schedule: companyData.elAltoSchedule,
    mapsLink: companyData.googleMapsElAlto,
    gradient: 'from-gold to-gold-light',
  },
];

export default function Locations() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal();

  return (
    <section
      id="ubicaciones"
      className="py-24 bg-champagne-light relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold/3 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Encuéntranos
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-dark mb-6">
            Nuestras Ubicaciones
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-charcoal-light/60 text-lg">
            Encuéntranos en nuestras dos sedes
          </p>
        </div>

        {/* Tarjetas de ubicación */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {locations.map((loc, index) => (
            <div
              key={loc.name}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_50px_rgba(197,165,90,0.2)] transition-all duration-500 hover:-translate-y-2 border border-beige/50 hover:border-gold/30 ${
                cardsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: cardsVisible ? `${index * 200}ms` : '0ms',
              }}
            >
              {/* Barra superior dorada */}
              <div
                className={`h-1.5 bg-gradient-to-r ${loc.gradient}`}
              />

              <div className="p-8 sm:p-10">
                {/* Header de la tarjeta */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${loc.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <MapPin size={24} className="text-charcoal-dark" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-charcoal-dark">
                      {loc.name}
                    </h3>
                    <p className="text-gold text-sm font-medium uppercase tracking-wider">
                      Sede {loc.name}
                    </p>
                  </div>
                </div>

                {/* Información */}
                <div className="space-y-5">
                  {/* Dirección */}
                  <div className="flex items-start gap-3">
                    <Navigation
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-charcoal-light/40 uppercase tracking-wider font-semibold mb-1">
                        Dirección
                      </p>
                      <p className="text-charcoal-dark font-medium">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3">
                    <Phone
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-charcoal-light/40 uppercase tracking-wider font-semibold mb-1">
                        Teléfono
                      </p>
                      <a
                        href={loc.phoneLink}
                        className="text-charcoal-dark font-medium hover:text-gold transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-xs text-charcoal-light/40 uppercase tracking-wider font-semibold mb-1">
                        Horario
                      </p>
                      <p className="text-charcoal-dark font-medium">
                        {loc.schedule || 'Horario pendiente de configurar'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón Google Maps */}
                <div className="mt-8">
                  {loc.mapsLink ? (
                    <a
                      href={loc.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal-dark font-bold text-sm uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(197,165,90,0.4)] transition-all duration-300 hover:scale-105 w-full justify-center"
                    >
                      <MapPin size={18} />
                      Ver en Google Maps
                      <ExternalLink
                        size={14}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-beige text-charcoal-light/50 font-bold text-sm uppercase tracking-wider rounded-lg w-full justify-center cursor-not-allowed"
                    >
                      <MapPin size={18} />
                      Ver en Google Maps
                      <span className="text-xs normal-case tracking-normal font-normal">
                        (Enlace pendiente)
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Mapa - ¿Dónde encontrarnos? */}
        <div
          ref={mapRef}
          className={`transition-all duration-700 ${
            mapVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-charcoal-dark mb-4">
              ¿Dónde Encontrarnos?
            </h3>
            <p className="text-charcoal-light/50">
              Visítanos en cualquiera de nuestras sedes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-beige/50 overflow-hidden">
            <div className="bg-charcoal-dark p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    className="flex items-center gap-4 p-6 rounded-xl bg-charcoal-light/50 border border-gold/10 hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={22} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">
                        📍 {loc.name}
                      </h4>
                      <p className="text-white/50 text-sm mb-3">
                        {loc.address}
                      </p>
                      {loc.mapsLink ? (
                        <a
                          href={loc.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                        >
                          Ubicación {loc.name}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-gold/40 text-sm">
                          Ubicación {loc.name} — Enlace pendiente
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
