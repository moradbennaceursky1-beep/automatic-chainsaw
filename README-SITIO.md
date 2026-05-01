# 🌱 Ecoinvest UAE - Sitio Web

Plataforma moderna de inversión sostenible y energías renovables en los Emiratos Árabes Unidos.

## 📋 Características

- ✅ Diseño responsive y moderno
- ✅ Navegación fluida y menú adaptable
- ✅ Secciones: Inicio, Servicios, Sobre nosotros, Proyectos, Contacto
- ✅ Animaciones y transiciones suaves
- ✅ Formulario de contacto funcional
- ✅ Optimizado para móviles
- ✅ Rendimiento rápido
- ✅ SEO friendly

## 🚀 Inicio Rápido

### Requisitos previos
- Navegador web moderno
- Python 3.x o Node.js (opcional para servidores locales)

### Instalación local

1. **Clonar o descargar el proyecto:**
```bash
git clone <url-del-repositorio>
cd automatic-chainsaw
```

2. **Opción 1: Con Python**
```bash
python -m http.server 8000
```
Luego accede a `http://localhost:8000` en tu navegador.

3. **Opción 2: Con Node.js**
```bash
npm install
npm start
```

4. **Opción 3: Abrir directamente**
- Simplemente abre `index.html` en tu navegador.

## 📁 Estructura del Proyecto

```
automatic-chainsaw/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Scripts JavaScript
├── images/             # Carpeta para imágenes
├── package.json        # Configuración del proyecto
└── README.md          # Este archivo
```

## 🎨 Secciones del Sitio

### 1. **Navegación (Navbar)**
- Logo y enlaces de navegación
- Menú hamburguesa responsivo
- Sticky navbar

### 2. **Hero Section**
- Título principal
- Propuesta de valor
- Botón CTA (Call To Action)
- Fondo animado con gradiente

### 3. **Servicios**
- Energía Renovable
- Proyectos Sostenibles
- Fondos Verdes
- Consultoría ESG

### 4. **Sobre Nosotros**
- Información de la empresa
- Estadísticas principales
- Logros y certificaciones

### 5. **Proyectos Destacados**
- Parque Solar Dubai
- Granja Eólica Fujairah
- Desalinización Sostenible
- Información de retorno y plazo

### 6. **Contacto**
- Formulario de contacto
- Información de ubicación
- Teléfono y email

### 7. **Footer**
- Enlaces rápidos
- Enlaces legales
- Copyright

## 🎯 Personalización

### Cambiar colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #00A86B;        /* Verde principal */
    --secondary-color: #005A3D;      /* Verde oscuro */
    --accent-color: #FFD700;         /* Oro */
    /* ... más colores ... */
}
```

### Actualizar información
- **Email:** Busca `info@ecoinvest.ae` en `index.html`
- **Teléfono:** Busca `+971 4 XXX XXXX` en `index.html`
- **Contenido:** Edita el archivo `index.html` directamente

### Agregar imágenes
1. Coloca las imágenes en la carpeta `images/`
2. Actualiza las rutas en `index.html` o `css/styles.css`

## 💻 Desarrollo

### Funcionalidades JavaScript incluidas:
- Menú hamburguesa interactivo
- Scroll suave a secciones
- Animaciones al scroll
- Validación básica de formulario
- Contador de estadísticas animado
- Efecto shadow en navbar al scroll

### Para agregar nuevas funcionalidades:
Edita `js/script.js` y agrega tus scripts.

## 📱 Responsive Design

El sitio se adapta automáticamente a:
- Computadoras (1200px+)
- Tablets (768px - 1199px)
- Móviles (480px - 767px)
- Teléfonos pequeños (< 480px)

## 🔍 SEO

- Meta descripciones
- Keywords relevantes
- Etiquetas semánticas HTML5
- Estructura de encabezados correcta
- URLs descriptivas

## 🚀 Despliegue

### Opciones de hosting:
- **GitHub Pages:** Gratis
- **Netlify:** Gratis con deployment automático
- **Vercel:** Gratis para proyectos estáticos
- **AWS S3:** Con CloudFront
- **Servidor web tradicional:** Apache, Nginx

### Pasos para GitHub Pages:
1. Crea un repositorio en GitHub
2. Pusha todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `root`
5. Tu sitio estará disponible en `https://tu-usuario.github.io/automatic-chainsaw`

## 📊 Estadísticas

- **Páginas:** 1 (SPA)
- **Secciones:** 7
- **Tarjetas de servicios:** 4
- **Proyectos destacados:** 3
- **Formulario:** Con validación

## 🔐 Seguridad

- Validación de formularios en el cliente
- En producción, implementa validación en servidor
- HTTPS recomendado para formularios

## 🐛 Troubleshooting

**El sitio no carga:**
- Verifica que todos los archivos estén en las carpetas correctas
- Limpia la caché del navegador (Ctrl+Shift+Del)

**Los estilos no se aplican:**
- Verifica las rutas en `index.html` (relative paths)
- Asegúrate de que `css/styles.css` exista

**JavaScript no funciona:**
- Abre la consola del navegador (F12)
- Busca errores en la pestaña Console

## 📞 Contacto y Soporte

Para consultas sobre inversiones:
- Email: info@ecoinvest.ae
- Ubicación: Dubai, UAE

## 📄 Licencia

MIT License - Libre para uso comercial y personal

## 🎉 Próximas Mejoras

- [ ] Blog de noticias
- [ ] Calculadora de retorno de inversión
- [ ] Chat en vivo
- [ ] Integración con payment gateway
- [ ] Dashboard de inversiones (área privada)
- [ ] API REST para backend
- [ ] Base de datos de proyectos
- [ ] Sistema de autenticación
- [ ] Reportes personalizados

---

¡Disfruta tu nuevo sitio web de Ecoinvest UAE! 🌍💚
