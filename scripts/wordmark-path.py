"""Convierte el wordmark a curvas.

Un kit de marca no puede depender de que la imprenta tenga la tipografía
instalada, así que el lockup se entrega dibujado, no como texto vivo. Este
script toma el nombre de la marca y devuelve un `<path>` de SVG más las medidas
que el generador necesita para componer la caja.

Se usa Nimbus Sans (URW) porque es el clon métrica y ópticamente más cercano a
Helvetica que se puede redistribuir; Helvetica es de licencia propietaria y no
se puede empaquetar. Arial —el otro sustituto habitual— comparte métricas pero
no las formas: su R, su t y su a son visiblemente distintas.

    python3 scripts/wordmark-path.py "Utopía Lab" 13 -0.028

Imprime JSON: {"d", "width", "capHeight", "top", "bottom"} en unidades del
tamaño pedido, con la baseline en y = 0 y el eje Y de SVG (crece hacia abajo).
"""

import json
import subprocess
import sys

from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

# En orden de preferencia: el clon de Helvetica primero, el de Arial como red.
FONT_CANDIDATES = ("Nimbus Sans:bold", "Liberation Sans:bold", "DejaVu Sans:bold")


def find_font() -> str:
    """Ruta al primer archivo de tipografía disponible de la lista."""
    for spec in FONT_CANDIDATES:
        path = subprocess.run(
            ["fc-match", "-f", "%{file}", spec],
            capture_output=True,
            text=True,
            check=False,
        ).stdout.strip()
        # fc-match siempre responde algo: hay que confirmar que dio con la
        # familia pedida y no con el sustituto por defecto del sistema.
        family = spec.split(":")[0].replace(" ", "")
        if path and family.lower() in path.replace("-", "").lower():
            return path
    raise SystemExit(f"Ninguna tipografía disponible de: {', '.join(FONT_CANDIDATES)}")


def kerning(font: TTFont) -> dict[tuple[str, str], int]:
    """Pares de la tabla `kern` heredada. Vacío si la fuente no la trae."""
    if "kern" not in font:
        return {}
    pairs: dict[tuple[str, str], int] = {}
    for table in font["kern"].kernTables:
        pairs.update(table.kernTable)
    return pairs


def wordmark(text: str, size: float, tracking_em: float) -> dict[str, object]:
    font = TTFont(find_font())
    upem = font["head"].unitsPerEm
    cmap = font.getBestCmap()
    glyphs = font.getGlyphSet()
    kern = kerning(font)

    scale = size / upem
    tracking = tracking_em * size

    names = []
    for char in text:
        code = ord(char)
        if code not in cmap:
            raise SystemExit(f"La tipografía no trae el carácter {char!r}")
        names.append(cmap[code])

    pen = SVGPathPen(glyphs)
    bounds = BoundsPen(glyphs)
    x = 0.0

    for i, name in enumerate(names):
        if i:
            x += tracking
            x += kern.get((names[i - 1], name), 0) * scale

        # Y invertido: la tipografía crece hacia arriba, el SVG hacia abajo.
        transform = (scale, 0, 0, -scale, x, 0)
        glyphs[name].draw(TransformPen(pen, transform))
        glyphs[name].draw(TransformPen(bounds, transform))
        x += glyphs[name].width * scale

    os2 = font["OS/2"]
    cap = getattr(os2, "sCapHeight", None) or font["head"].yMax
    # BoundsPen entrega (xMin, yMin, xMax, yMax) ya en coordenadas de SVG: yMin
    # es el extremo superior de la tinta y yMax el pie del descendente.
    _, top, _, bottom = bounds.bounds

    return {
        "d": pen.getCommands(),
        "width": round(x, 4),
        "capHeight": round(cap * scale, 4),
        "top": round(top, 4),
        "bottom": round(bottom, 4),
    }


if __name__ == "__main__":
    print(json.dumps(wordmark(sys.argv[1], float(sys.argv[2]), float(sys.argv[3]))))
