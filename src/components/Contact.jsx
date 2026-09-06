import { useState } from 'react';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { FacebookIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import companyData from '../data/companyData';

const initialForm = {
  nombre: '',
  apellidos: '',
  correo: '',
  telefono: '',
  asunto: '',
  mensaje: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!form.apellidos.trim()) newErrors.apellidos = 'Los apellidos son obligatorios';
    if (!form.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      newErrors.correo = 'Ingresa un correo válido';
    }
    if (!form.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio';
    } else if (!/^[0-9+\s()-]{7,15}$/.test(form.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido';
    }
    if (!form.asunto.trim()) newErrors.asunto = 'El asunto es obligatorio';
    if (!form.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simular envío — reemplazar con conexión real a backend/email
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setForm(initialForm);
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const inputClass = (field) =>
    `w-full bg-charcoal-light/50 border ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-gold/10 focus:border-gold/40'
    } rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 ${
      errors[field] ? 'focus:ring-red-400/30' : 'focus:ring-gold/20'
    } transition-all duration-300 text-sm`;

  return (
    <section
      id="contacto"
      className="py-24 bg-charcoal-dark relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold/3 rounded-full translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
            Hablemos
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Contáctanos
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 bg-gold rotate-45" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Estamos aquí para atenderte. Comunícate con nosotros o envíanos
            un mensaje.
          </p>
        </div>

        {/* Grid: Info + Formulario */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Columna izquierda: Información */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
              infoVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Teléfono */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg">Teléfono</h3>
              </div>
              <a
                href={companyData.phone1Link}
                className="text-white/70 hover:text-gold transition-colors text-lg ml-[52px] block"
              >
                {companyData.phone1}
              </a>
              {companyData.phone2 && (
                <a
                  href={`tel:${companyData.phone2.replace(/\s/g, '')}`}
                  className="text-white/70 hover:text-gold transition-colors text-lg ml-[52px] block mt-1"
                >
                  {companyData.phone2}
                </a>
              )}
            </div>

            {/* Correos */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg">
                  Correos Corporativos
                </h3>
              </div>
              <div className="ml-[52px] space-y-1">
                {companyData.email1 ? (
                  <a
                    href={`mailto:${companyData.email1}`}
                    className="text-white/70 hover:text-gold transition-colors block"
                  >
                    {companyData.email1}
                  </a>
                ) : (
                  <p className="text-white/30 italic text-sm">
                    Correo corporativo 1 — Pendiente
                  </p>
                )}
                {companyData.email2 ? (
                  <a
                    href={`mailto:${companyData.email2}`}
                    className="text-white/70 hover:text-gold transition-colors block"
                  >
                    {companyData.email2}
                  </a>
                ) : (
                  <p className="text-white/30 italic text-sm">
                    Correo corporativo 2 — Pendiente
                  </p>
                )}
              </div>
            </div>

            {/* Facebook */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <FacebookIcon size={20} className="text-gold" />
                </div>
                <h3 className="text-white font-bold text-lg">Facebook</h3>
              </div>
              <div className="ml-[52px]">
                {companyData.facebook ? (
                  <a
                    href={companyData.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-lg text-[#1877F2] hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40 transition-all duration-300 text-sm font-medium"
                  >
                    <FacebookIcon size={18} />
                    Síguenos en Facebook
                  </a>
                ) : (
                  <p className="text-white/30 italic text-sm">
                    Síguenos en Facebook — Enlace pendiente
                  </p>
                )}
              </div>
            </div>

            {/* Separador */}
            <div className="h-px bg-gradient-to-r from-gold/20 to-transparent" />

            {/* Ubicaciones rápidas */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Nuestras Sedes
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-gold text-lg">📍</span>
                  <div>
                    <p className="text-white/80 font-medium text-sm">
                      {companyData.talaraName}
                    </p>
                    <p className="text-white/40 text-xs">
                      {companyData.talaraAddress}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gold text-lg">📍</span>
                  <div>
                    <p className="text-white/80 font-medium text-sm">
                      {companyData.elAltoName}
                    </p>
                    <p className="text-white/40 text-xs">
                      {companyData.elAltoAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              formVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-charcoal-light/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gold/10">
              <h3 className="text-white font-bold text-xl mb-6">
                Envíanos un mensaje
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-300 text-sm">
                    ¡Gracias! Tu mensaje ha sido enviado correctamente.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Nombre */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                      Nombre *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={inputClass('nombre')}
                      />
                    </div>
                    {errors.nombre && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Apellidos */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      name="apellidos"
                      value={form.apellidos}
                      onChange={handleChange}
                      placeholder="Tus apellidos"
                      className={inputClass('apellidos')}
                    />
                    {errors.apellidos && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        {errors.apellidos}
                      </p>
                    )}
                  </div>

                  {/* Correo */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className={inputClass('correo')}
                    />
                    {errors.correo && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        {errors.correo}
                      </p>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                      className={inputClass('telefono')}
                    />
                    {errors.telefono && (
                      <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                        <AlertCircle size={12} />
                        {errors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div className="mb-5">
                  <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    value={form.asunto}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    className={inputClass('asunto')}
                  />
                  {errors.asunto && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                      <AlertCircle size={12} />
                      {errors.asunto}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="mb-6">
                  <label className="text-white/50 text-xs uppercase tracking-wider font-semibold mb-2 block">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className={`${inputClass('mensaje')} resize-none`}
                  />
                  {errors.mensaje && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
                      <AlertCircle size={12} />
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                {/* Botón enviar */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-charcoal-dark font-bold text-sm uppercase tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(197,165,90,0.4)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal-dark/30 border-t-charcoal-dark rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
