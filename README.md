# AgentCamp Guanajuato en Silao (Global AI Community - Capítulo León, México)

Architected by Paulo César Ramírez Silva, using GitHub Copilot.

Bienvenido/a al repositorio oficial para asistentes del AgentCamp Guanajuato 2026 en Silao.
A continuación encontrarás agenda, ponentes, materiales de talleres, recursos, y rutas por perfil.

- Sitio oficial del evento: https://globalai.community/agentcamp/silao/
- Registro: https://forms.office.com/r/M3tnkgYFs9

Accesos rápidos:
- Inicio (GitHub Pages): https://paulocesarramirez.github.io/agentcamp-guanajuato-silao/
- [Agenda](agenda.md)
- [Ponentes](speakers.md)
- [Logística](logistica.md)
- [Recursos](recursos.md)
- [Creadores de IA](perfiles/creadores/index.md)
- [Aceleradores de IA](perfiles/aceleradores/index.md)

Nota sobre materiales: algunas secciones se siguen actualizando con nuevos materiales.

## Idiomas
- Español (principal)
- English (complete): en/

## Licencia de contenidos
- Textos y guías: © Organizadores del capítulo local. Reutilización con atribución.
- Imágenes y marcas: pertenecen a sus respectivos propietarios.

## Contribuciones y feedback
- Revisa [CONTRIBUTING.md](CONTRIBUTING.md)
- Reporta problemas o enlaces rotos mediante Issues.

## Contacto
- Dudas y coordinación: [contacto@emprendhec.com](mailto:contacto@emprendhec.com)

## Descripción del Proyecto

Este repositorio contiene el sitio web estático para el evento AgentCamp Guanajuato 2026, organizado por la [Global AI Community - Capítulo León] (https://globalai.community/chapters/leon/)) con [EmprendHEC] (https://www.emprendhec.com). El sitio está construido con Jekyll y alojado en GitHub Pages, proporcionando información sobre el evento, incluyendo agenda, ponentes, talleres, recursos y perfiles de aprendizaje enfocados en agentes de IA.

El diseño es moderno, responsivo y accesible, utilizando un sistema de colores azul, verde y ámbar, con componentes reutilizables para mantener consistencia.

## Arquitectura y Estructura

### Tecnologías Utilizadas
- **Framework**: Jekyll con tema Minima personalizado
- **Lenguaje**: Markdown para contenido, SCSS para estilos
- **Despliegue**: GitHub Pages con GitHub Actions
- **Verificación de Enlaces**: Lychee (ejecutado semanalmente)
- **Plugins**: jekyll-seo-tag, jekyll-sitemap

### Estructura de Archivos
- `index.md`: Página principal
- `agenda.md`, `speakers.md`, etc.: Páginas de contenido en español
- `en/`: Versión en inglés (parcial)
- `talleres/` y `perfiles/`: Contenido específico de talleres y perfiles
- `assets/css/style.scss`: Estilos personalizados con variables CSS
- `_layouts/`: Layouts personalizados (home.html, default.html)
- `_config.yml`: Configuración de Jekyll
- `.github/workflows/`: Flujos de CI/CD

### Diseño y Componentes
El sitio utiliza un sistema de diseño consistente con componentes como secciones hero, tarjetas de perfil, cajas destacadas y tablas para agenda. Ver [DESIGN_DOCUMENTATION.md](DESIGN_DOCUMENTATION.md) para detalles completos.

## Instalación y Configuración Local

### Prerrequisitos
- Ruby (versión recomendada: 3.x)
- Bundler
- Jekyll

### Pasos
1. Clona el repositorio:
   ```bash
   git clone https://github.com/paulocesarramirez/agentcamp-guanajuato-silao.git
   cd agentcamp-guanajuato-silao
   ```

2. Instala dependencias:
   ```bash
   bundle install
   ```

3. Ejecuta el servidor local:
   ```bash
   bundle exec jekyll serve
   ```

4. Abre http://localhost:4000/agentcamp-guanajuato-silao/ en tu navegador.

## Despliegue

El sitio se despliega automáticamente a GitHub Pages mediante GitHub Actions.

### Flujos de CI/CD
- **Despliegue Principal**: `jekyll-gh-pages.yml` - Construye y despliega el sitio en pushes a la rama main.
- **Verificación de Enlaces**: `link-check.yml` - Ejecuta semanalmente (lunes a las 6 AM) para verificar enlaces rotos usando Lychee.

### Configuración de GitHub Pages
- Rama de despliegue: gh-pages (generada automáticamente)
- URL base: `/agentcamp-guanajuato-silao`
- Dominio personalizado: Opcional, configurar en settings del repositorio

## Reutilización para Otros Eventos

Este repositorio está diseñado para ser fácilmente adaptable a otros eventos similares:

1. **Actualiza `_config.yml`**:
   - Cambia `title`, `description`, `url`, `baseurl`
   - Modifica `header_pages` y `navigation` según el contenido

2. **Personaliza Contenido**:
   - Edita páginas en raíz y `en/` para el nuevo evento
   - Actualiza talleres y perfiles en `talleres/` y `perfiles/`

3. **Ajusta Diseño**:
   - Modifica colores en `assets/css/style.scss`
   - Actualiza imágenes en `assets/images/`
   - **Importante**: Usa rutas absolutas para imágenes: `{{ site.baseurl }}/assets/images/nombre.jpg`

4. **Configura Flujos**:
   - Asegúrate de que los workflows estén activos
   - Actualiza URLs en `lychee.toml` si es necesario

5. **SEO y Metadatos**:
   - Actualiza metadatos en `_config.yml`
   - Incluye schema JSON-LD para eventos en layouts

## Contribuciones

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para guías detalladas.

## Licencia

Ver [LICENSE.md](LICENSE.md).