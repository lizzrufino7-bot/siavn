# SIAVN — Sitio Web Corporativo Oficial

Sitio web corporativo moderno, elegante y profesional para la empresa **SIAVN**, desarrollado con **React**, **Vite** y **Tailwind CSS**.

---

## 🏛️ Identidad Visual
- **Colores principales:** Negro carbón (`#111111`, `#1A1A1A`), Dorado / Bronce (`#C5A55A`, `#D4B96E`, `#A68B3C`), Blanco y Champagne (`#FAF7F2`).
- **Tipografías:** `Playfair Display` (títulos elegantes) e `Inter` (lectura nítida).
- **Iconografía:** Lucide React + Iconos SVG corporativos.

---

## 📂 Estructura del Proyecto

```
EMPRESA SIAVN/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Despliegue automático a GitHub Pages
├── public/
│   └── logo-siav.png           # Logo público para favicon y SEO
├── src/
│   ├── assets/
│   │   └── logo-siav.png       # Logo oficial de SIAVN
│   ├── components/
│   │   ├── Header.jsx          # Header sticky con navegación y menú móvil
│   │   ├── Hero.jsx            # Portada principal con logo y botones de acción
│   │   ├── About.jsx           # Sección Nosotros: Misión, Visión, Valores y 6 Pilares
│   │   ├── Services.jsx        # 4 Tarjetas de servicios editables con bordes dorados
│   │   ├── Locations.jsx       # Tarjetas completas de Talara y El Alto + Mapa visual
│   │   ├── Contact.jsx         # Info de contacto + Formulario validado con feedback
│   │   ├── Footer.jsx          # Pie de página corporativo con enlaces y copyright
│   │   ├── WhatsAppButton.jsx  # Botón flotante animado de WhatsApp
│   │   └── Icons.jsx           # Componentes de iconos SVG
│   ├── data/
│   │   └── companyData.js      # ⚙️ ARCHIVO CENTRAL DE DATOS (Edita todo aquí)
│   ├── hooks/
│   │   └── useScrollReveal.js  # Hook de animaciones al hacer scroll
│   ├── App.jsx                 # Componente raíz
│   ├── index.css               # Estilos globales y tokens del tema
│   └── main.jsx                # Punto de entrada React
├── index.html                  # HTML con metaetiquetas SEO y Open Graph
├── vite.config.js              # Configuración de Vite con base relativa './'
└── package.json
```

---

## ⚙️ Cómo Actualizar los Datos de la Empresa

Todos los datos se modifican desde un único archivo:
👉 `src/data/companyData.js`

Allí podrás completar fácilmente cuando tengas los datos reales:
- **Correos corporativos:** `email1`, `email2`
- **Enlace de Facebook:** `facebook` (se activará automáticamente en header, contacto y footer)
- **WhatsApp:** `whatsapp` (ejemplo: `'51981247908'`)
- **Horarios:** `talaraSchedule`, `elAltoSchedule`
- **Enlaces de Google Maps:** `googleMapsTalara`, `googleMapsElAlto`
- **Servicios:** Nombres y descripciones de los 4 servicios

---

## 🖼️ Cómo Colocar el Logo Oficial de SIAVN

Para colocar tu logo oficial:
1. Guarda tu imagen de logo con el nombre exactamente: `logo-siav.png`.
2. Cópiala reemplazando los dos archivos existentes:
   - `src/assets/logo-siav.png`
   - `public/logo-siav.png`
3. ¡Listo! Se actualizará automáticamente en Header, Hero, Footer y Favicon sin deformar sus proporciones.

---

## 🚀 Ejecución en Desarrollo Local

```bash
# Instalar dependencias (si aún no se ha hecho)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre en tu navegador la URL que indique la consola (normalmente `http://localhost:5173`).

---

## 🌐 Publicar en GitHub Pages

El proyecto ya está preparado para GitHub Pages con `base: './'` y un flujo automatizado de **GitHub Actions**:

### Pasos para publicar:
1. Crea un repositorio en GitHub (por ejemplo `siavn-web`).
2. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "Sitio web corporativo SIAVN"
   git branch -M main
   git remote add origin https://github.com/lizzrufino7-bot/siavn.git
   git push -u origin main
   ```
3. En tu repositorio en GitHub:
   - Ve a **Settings** > **Pages**.
   - En **Build and deployment** > **Source**, selecciona: **GitHub Actions**.
4. ¡El flujo `.github/workflows/deploy.yml` compilará y publicará la página web automáticamente en pocos segundos! Tu página estará visible para todo el mundo.
