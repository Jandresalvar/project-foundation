# DESIGN.md: EA Creatives — rediseño 2026 (referencias: Clay + Focus Lab)

## Source
- Referencia principal: https://clay.global/services
- Referencia secundaria: https://www.focuslab.agency/
- Fecha de captura: 2026-07-05
- Evidencia: `.firecrawl/clay-branding.json`, `.firecrawl/focuslab-branding.json`, `.firecrawl/clay-screenshot.png` (1920×9047), `.firecrawl/focuslab-screenshot.png` (1920×9078)

## Reference Screenshots
![Clay services full page](./.firecrawl/clay-screenshot.png)
![Focus Lab full page](./.firecrawl/focuslab-screenshot.png)

Usar el screenshot de Clay como fuente de verdad para layout, jerarquía y densidad. Focus Lab aporta calidez (fondo crema) y uso puntual de un color de acento fuerte.

## Design Summary
Lenguaje editorial-minimalista: titulares enormes casi negros sobre fondo claro cálido, muchísimo aire, cero decoración (sin glows, sin gradientes, sin bordes redondeados grandes). Los servicios se presentan como filas alternadas texto/imagen con listas de sub-servicios en tipografía pequeña. Una sección oscura de "industrias" en formato tabla crea contraste a mitad de página. El cierre es un "Hablemos" gigante estilo Clay. El acento de color (azul EA) se usa con extrema moderación: links, hover y un par de detalles.

**No es una copia:** se conserva la identidad EA (logo, azul, tipografías Inter + Plus Jakarta Sans ya self-hosted) sobre la estructura y respiración de Clay, con la calidez de fondo de Focus Lab.

## Design Tokens

### Colors (observado en referencias → adaptado a EA)
| Rol | Clay | Focus Lab | EA Creatives (nuevo) |
|---|---|---|---|
| Background | #FFFFFF | #F6F4EE (crema) | `#FAF9F6` crema muy suave — hsl(40 25% 97%) |
| Texto principal | #171921 | #161613 | hsl(220 15% 10%) casi negro |
| Texto secundario | #596072 | — | hsl(220 10% 42%) |
| Acento | casi ninguno | #DD3516 (rojo, puntual) | hsl(217 91% 55%) azul EA, uso puntual |
| Sección oscura | #16181f aprox | #161613 | hsl(220 15% 9%) |
| Bordes/divisores | gris muy claro | — | hsl(220 12% 88%) |

### Typography
- **Headings**: Plus Jakarta Sans (ya self-hosted), weight 700, tracking-tight, line-height ~1.05.
  - H1 hero: clamp(2.75rem → 5.5rem) — Clay usa 86px, Focus Lab 120px.
  - H2 sección: clamp(2rem → 3.5rem).
  - H3 servicio: 2rem–2.5rem.
- **Body**: Inter 400–600. Párrafos 1rem–1.125rem, line-height 1.6, max-width ~34rem.
- **Listas de sub-servicios**: 0.8125rem–0.875rem, weight 500, color texto principal, line-height generoso (estilo Clay).
- **Microlabels**: 0.75rem uppercase tracking-widest (estilo Focus Lab "WHAT IF...").

### Spacing And Layout
- Contenedor: max-w-[1200px], padding lateral 1.5rem / 4rem en desktop.
- Ritmo de sección: py-24 → py-40 en desktop. El aire es el rasgo principal.
- Border radius: casi cero en referencias. EA usará radius pequeño (0.375rem) solo en imágenes/inputs — no full-rounded.
- Divisores horizontales de 1px para filas de industria (estilo tabla Clay).
- Sombras: ninguna o mínimas.

## Components
- **Navbar**: fija, fondo claro translúcido con blur, logo izq., links centro/derecha en 0.8125rem, CTA "Hablemos" como pill oscuro (único elemento redondeado, como Clay "Contact").
- **Hero**: solo texto. H1 gigante en 2–3 líneas + párrafo corto. Sin imagen, sin badges, sin glows.
- **Fila de servicio** (patrón núcleo, x3): grid 2 col; izquierda H3 + párrafo + lista vertical de 5-6 sub-servicios; derecha imagen alta 3:4 (aspect similar a las 1260×1640 de Clay). Alterna imagen izq/der por fila.
- **Logo strip clientes**: fila de logos monocromos con opacidad reducida.
- **Sección industrias (oscura)**: H2 + filas de 1px-divider: industria a la izq., ejemplos en texto tenue a la der.
- **CTA final / Footer**: "Hablemos" en tamaño H1, email como link subrayado, formulario existente (nombre / empresa / WhatsApp) simplificado sin card con glow; footer con columnas de links y ubicación.
- **Botones**: primario = pill fondo casi negro texto claro; secundario = link subrayado con flecha →. Sin gradientes.

## Page Patterns (orden de secciones)
1. Navbar fija
2. Hero tipográfico ("Tu socio de crecimiento digital…")
3. Logo strip clientes
4. Lista de servicios (3 filas alternadas):
   - Redes Sociales y Contenido
   - Meta Ads y Generación de Leads
   - Páginas Web
5. Sección oscura "Industrias" (Restaurantes, Moda y retail, Marcas y e-commerce, Salud, Servicios profesionales)
6. Proceso breve (3 pasos, opcional, formato numerado minimalista)
7. CTA final "Hablemos" + formulario + footer

## Content Style
- Voz: directa, en español, primera persona plural, sin jerga inflada.
- Headings tipo Clay: frases declarativas cortas ("Un socio full-service…").
- CTAs de una palabra o dos: "Hablemos", "Ver trabajo", "Empezar".
- Densidad de copy baja: un párrafo por sección, listas para el detalle.

## Agent Build Instructions
1. Stack: Vite + React 18 + TS + Tailwind (config existente), shadcn/ui mínimo (button, input, label).
2. Reescribir tokens en `src/index.css` según tabla de colores; conservar @font-face self-hosted.
3. Construir secciones como componentes en `src/components/landing/` siguiendo Page Patterns.
4. Imágenes de servicio: usar `/assets/features/feature-rrss.png`, `feature-campanas-ads.png`, `feature-paginas-web.png` con `loading="lazy"` y aspect-ratio 3/4 object-cover.
5. Animación: solo fade-in sutil al hacer scroll (lib/motion.tsx existente). Nada de blobs ni blurs.
6. No usar logos/imágenes de Clay ni Focus Lab — solo estructura y tokens inferidos.

## Rerun Inputs
workflow: firecrawl-website-design-clone
source_url: https://clay.global/services, https://www.focuslab.agency/
target_stack: vite-react-ts-tailwind-shadcn
output: DESIGN.md
