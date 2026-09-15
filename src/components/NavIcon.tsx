import type { ReactNode } from 'react'

type NavKey = 'home' | 'products' | 'cases' | 'team'

/**
 * Íconos de la barra inferior del celular. Lineales y en `currentColor`, para
 * que sigan la opacidad y el estado activo del enlace. En escritorio el CSS los
 * oculta: ahí la píldora es solo texto.
 */
const PATHS: Record<NavKey, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 8.5V20h13V8.5" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  products: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  cases: (
    <>
      <path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2.5h7a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M16 14.1a4.5 4.5 0 0 1 4.5 4.4" />
    </>
  ),
}

export function NavIcon({ name }: { name: NavKey }) {
  return (
    <svg
      className="nav-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
