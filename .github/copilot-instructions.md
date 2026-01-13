# Copilot Instructions for AgentCamp Guanajuato en Silao

## Project Overview
This is a Jekyll-based static website for the AgentCamp Guanajuato 2026 event, hosted on GitHub Pages. The site is bilingual (Spanish primary, English secondary) and focuses on AI agent education and workshops.

## Architecture
- **Framework**: Jekyll with Minima theme, custom SCSS overrides in `assets/css/style.scss`
- **Structure**: 
  - Spanish content in root directory (e.g., `index.md`, `agenda.md`)
  - English content in `en/` directory (e.g., `en/index.md`, `en/agenda.md`)
  - Workshops: `talleres/` (Spanish) and `en/workshops/` (English)
  - Profiles: `perfiles/` (Spanish) and `en/profiles/` (English)
- **Key Files**:
  - `_config.yml`: Jekyll configuration with baseurl `/agentcamp-guanajuato-silao`
  - `_layouts/home.html`: Custom home layout
  - `assets/css/style.scss`: Custom styles with CSS variables for colors, shadows, typography

## Content Patterns
- **Front Matter**: Always include `layout`, `title`, and `permalink` (e.g., `permalink: /talleres/mejores-practicas-agentes/`)
- **HTML Classes**: Use semantic classes like `hero-section`, `content-section`, `profile-cards` for styling consistency
- **Bilingual Sync**: When adding content, create parallel versions in both languages with matching structure
- **Images**: Place in `assets/images/` with descriptive names (e.g., `venue-silao.jpg`). **Always use absolute paths** with Jekyll liquid syntax: `{{ site.baseurl }}/assets/images/filename.jpg` to ensure proper rendering across all pages
- **Links**: Prefer permanent URLs; mark temporary ones as "Materiales pendientes" (Spanish) or "Materials pending" (English)

## Development Workflow
- **Local Build**: Run `jekyll serve` to preview locally (requires Ruby and Jekyll installed)
- **Deployment**: Automatic via GitHub Actions (`jekyll-gh-pages.yml`) on push to main
- **Link Checking**: Automated weekly via `lychee` (config in `lychee.toml`), excludes `assets/images/`
- **Contributing**: Follow guidelines in `CONTRIBUTING.md` - Spanish primary, accessibility considerations

## Code Style
- **SCSS**: Use CSS custom properties (e.g., `var(--primary-color)`) defined in `:root`
- **Typography**: System font stack, line-height 1.7, heading weights 600-700
- **Colors**: Blue (#2563eb) primary, Green (#10b981) secondary, Amber (#f59e0b) accent
- **Shadows**: Small, medium, large variants for depth

## Examples
- **Adding a Workshop**: Create `talleres/new-workshop/README.md` with front matter and English version in `en/workshops/new-workshop/README.md`
- **Styling**: Wrap hero content in `<div class="hero-section">` for consistent appearance
- **Navigation**: Update `header_pages` in `_config.yml` when adding new top-level pages</content>
<parameter name="filePath">c:\Code\AgentCamp Guanajuato en Silao\.github\copilot-instructions.md