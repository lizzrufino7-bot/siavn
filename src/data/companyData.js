/**
 * DATOS DE LA EMPRESA SIAVN
 * ============================================
 * Modifica estos datos para actualizar toda la página web.
 * Todos los componentes leen de este archivo centralizado.
 * ============================================
 */

const companyData = {
  // ─── INFORMACIÓN GENERAL ───
  companyName: 'SIAVN',
  slogan: 'Soluciones profesionales con compromiso y calidad',
  description:
    'Brindamos soluciones eficientes y personalizadas, trabajando con responsabilidad, calidad y compromiso para satisfacer las necesidades de nuestros clientes.',
  aboutText:
    'SIAVN es una empresa comprometida con brindar soluciones de calidad, trabajando con responsabilidad, profesionalismo y dedicación para satisfacer las necesidades de nuestros clientes.',

  // ─── TELÉFONOS ───
  phone1: '981 247 908',
  phone1Link: 'tel:+51981247908',
  phone2: '', // [PENDIENTE] - Agregar segundo teléfono cuando esté disponible

  // ─── CORREOS CORPORATIVOS ───
  email1: '', // [PENDIENTE] - Agregar correo corporativo 1
  email2: '', // [PENDIENTE] - Agregar correo corporativo 2

  // ─── REDES SOCIALES ───
  facebook: '', // [PENDIENTE] - Agregar URL de Facebook
  whatsapp: '', // [PENDIENTE] - Agregar número de WhatsApp (formato: 51981247908)
  whatsappMessage: 'Hola, quisiera obtener información sobre los servicios de SIAVN.',

  // ─── SEDE TALARA ───
  talaraName: 'Talara',
  talaraAddress: 'Urb. Alejandro Taboada E-4, Talara',
  talaraPhone: '981 247 908',
  talaraPhoneLink: 'tel:+51981247908',
  talaraSchedule: '', // [PENDIENTE] - Agregar horario de Talara
  googleMapsTalara: '', // [PENDIENTE] - Agregar enlace de Google Maps de Talara

  // ─── SEDE EL ALTO ───
  elAltoName: 'El Alto',
  elAltoAddress: 'AA.HH. Luciano Castillo B-34 - El Alto',
  elAltoPhone: '981 247 908',
  elAltoPhoneLink: 'tel:+51981247908',
  elAltoSchedule: '', // [PENDIENTE] - Agregar horario de El Alto
  googleMapsElAlto: '', // [PENDIENTE] - Agregar enlace de Google Maps de El Alto

  // ─── SERVICIOS (EDITABLES) ───
  services: [
    {
      id: 1,
      name: 'Servicio 01',
      description:
        'Descripción del servicio 01. Edita este texto para describir el servicio que ofrece SIAVN.',
      icon: 'Briefcase',
    },
    {
      id: 2,
      name: 'Servicio 02',
      description:
        'Descripción del servicio 02. Edita este texto para describir el servicio que ofrece SIAVN.',
      icon: 'Settings',
    },
    {
      id: 3,
      name: 'Servicio 03',
      description:
        'Descripción del servicio 03. Edita este texto para describir el servicio que ofrece SIAVN.',
      icon: 'Shield',
    },
    {
      id: 4,
      name: 'Servicio 04',
      description:
        'Descripción del servicio 04. Edita este texto para describir el servicio que ofrece SIAVN.',
      icon: 'BarChart3',
    },
  ],

  // ─── MISIÓN, VISIÓN, VALORES ───
  mission:
    'Brindar soluciones de calidad que superen las expectativas de nuestros clientes, trabajando con responsabilidad y profesionalismo en cada proyecto.',
  vision:
    'Ser reconocidos como una empresa líder en nuestro sector, destacando por nuestra excelencia, innovación y compromiso con la satisfacción del cliente.',
  values:
    'Nos guiamos por la responsabilidad, el compromiso, la calidad, la honestidad, el profesionalismo y la confianza en cada una de nuestras acciones.',
};

export default companyData;
