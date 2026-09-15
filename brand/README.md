# Kit de marca · utopialab.ai

**Archivos generados. No editar a mano.** La geometría vive en
[`src/brand/glyphs.ts`](../src/brand/glyphs.ts); esta carpeta se reconstruye con:

```bash
npm run brand
```

Todo sale del manual de marca v1 (agosto 2026).

## Qué glifo usar

| `toro` | Toro · marca matriz | El logo: barra, pie, favicon, avatar y vista previa del enlace. Firma en aperturas y portadas. |
| `anomalia` | Anomalía · marca de uso | Sello, botones e íconos de uso dentro de las páginas, bajo 32 px. |
| `observatorio` | Observatorio · pulso con núcleo | Estados de vigilancia. Nombra el registro del contexto. |
| `nmu` | NMU · tríada inscrita | Los tres nodos del ciclo. Nombra la apertura de escenarios. |
| `hipotesis` | Hipótesis · secante | El corte del campo. Nombra el umbral y la bifurcación. |

Las dos marcas son el **toro** y la **anomalía**. Los otros tres nombran
dispositivos y secciones: no son logos alternativos.

## Qué formato pedir

| Carpeta | Para qué |
| --- | --- |
| `svg/` | Diseño, bordado, corte, web. Escala sin pérdida — es el maestro. |
| `png/` | Print-on-demand, redes, presentaciones. Fondo transparente, 256 a 2048 px. |
| `pdf/` | Serigrafía, grabado láser, sello seco. Vectorial, trazo mínimo 0.45. |

Cada glifo viene en tres colores: `tinta`, `papel` y `naranja`.
Para cualquier otro color, abrir el SVG y cambiar el atributo `color` del `<g>` —
todo el dibujo hereda de ahí.

## Reglas que no se negocian

- **Resguardo:** medio radio (6,2 en la caja de 32) libre en los cuatro lados.
- **Tamaño mínimo:** 16 px de alto. Bajo 32 px, la anomalía — salvo los iconos del
  sitio (favicon, apple-touch-icon, avatar), que desde el 2026-09-15 llevan el toro
  para ser el mismo logo de la barra, el pie y la vista previa del enlace.
- **Trazo:** no se elige a ojo. Sale de `strokeFor(px)`: 224 px → 0,30 · 72 px → 0,45 ·
  42 px → 0,70 · 16 px → 2,40.
- **Nunca:** engrosar el trazo fuera de la tabla, deformar la caja, usar más de un
  color por glifo, agregar elipses al toro, ni degradados.

## Paleta

| `tinta` | `#0F0F0F` |
| `papel` | `#F2F0EC` |
| `naranja` | `#EF4A0F` |
| `azul` | `#0B57A4` |
| `rosa` | `#F79AC0` |
| `ambar` | `#FBBE0B` |
| `agua` | `#4FC3C0` |
| `bosque` | `#2E6B45` |

Un color dominante por pieza; el resto, acentos. Monocromo por defecto en todo lo
que se defiende (tesis, papers, fichas); el color entra en lo que circula (sitio,
redes, merchandising).
