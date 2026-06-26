// ─── SPACING ─────────────────────────────────────────────────────────────────
// Extracted from Tailwind utility usage across apip.html.
// All values in px; scale derived from 4px base unit (Tailwind default).

export const spacing = {
  0:    '0px',
  0.5:  '2px',   // py-0.5 — pill vertical padding
  1:    '4px',   // gap-1, mb-0.5 — tightest gap
  1.5:  '6px',   // gap-1.5, px-1.5, py-1, mb-1 — tight gap
  2:    '8px',   // gap-2, px-2, py-1.5 — standard gap
  2.5:  '10px',  // gap-2.5, px-2.5, py-2 — search bar / chip pad
  3:    '12px',  // gap-3, px-3, py-2.5, mb-3 — section gap
  3.5:  '14px',  // px-3.5, py-3 — alert banner / Btn padding
  4:    '16px',  // gap-4, px-4, py-3.5 — card internal gap
  5:    '20px',  // py-5 — main content vertical pad
  6:    '24px',  // px-6, py-6 — main content horizontal pad, topbar px
  8:    '32px',  // px-8 — dossier print horizontal pad
} as const;

// ─── FIXED DIMENSIONS ────────────────────────────────────────────────────────
// Hard-coded pixel measurements extracted from the shell components

export const size = {
  // App shell
  sidebarWidth:  '224px',  // w-[224px] — Sidebar component
  topbarHeight:  '58px',   // h-[58px] — Topbar component

  // Sidebar internals
  logoHeight:    '46px',   // img height inside Sidebar logo zone

  // Icon sizes used across the app (passed as `size` prop)
  icon: {
    xs:   11,  // ChevronRight in breadcrumb, inline chips
    sm:   12,  // inline row meta icons (MapPin, FileText, Calendar, Euro)
    md:   13,  // action chip icons (CheckCircle2, AlertTriangle inline)
    base: 14,  // Btn icon, ChevronDown, Search topbar
    lg:   15,  // PanelCard icon, alert banner icon, topbar Bell, Lbl icon
    xl:   16,  // SidebarItem icon, row avatar icon, back arrow, topbar Bell
    '2xl': 17, // topbar Bell (notification)
    '3xl': 18, // ScanZone icons (Camera, Upload)
  },

  // Avatars / icon containers
  avatar: {
    sm:   '24px',  // user switch dropdown avatar (h-6 w-6)
    md:   '28px',  // Stepper circle (h-7 w-7)
    base: '32px',  // Topbar user avatar (h-8 w-8)
    lg:   '36px',  // row icon container (h-9 w-9, grid place-items-center rounded-lg)
  },

  // Thumbnails (ScanZone document previews)
  thumbnailWidth:  '88px',
  thumbnailHeight: '64px',

  // Max-widths
  searchBarMax:   '340px',  // list page search bars (maxWidth: 340)
  topbarSearchMax: 'max-w-md', // topbar global search
  dossierMax:     '800px',  // max-w-[800px] dossier print area

  // Donut chart defaults
  donutDefault: '52px',
  donutLarge:   '72px',  // ShipperDetail donut
} as const;

// ─── BORDER RADII ────────────────────────────────────────────────────────────
// Sourced from rounded-* utility usage in apip.html

export const radius = {
  none: '0px',
  sm:   '4px',   // rounded — progress bars, compare bars, sparkline bars
  md:   '6px',   // (implied Tailwind md, not explicitly observed but logical gap)
  lg:   '8px',   // rounded-lg — Btn, inputs, search bar, nav items, thumbnails
  xl:   '12px',  // rounded-xl — section panels, alert banners, list row items, form areas
  '2xl': '16px', // rounded-2xl — Card, PanelCard, Kpi, page-level cards
  full: '9999px', // rounded-full — status pills, avatar circles, tab switcher, notification dot
} as const;

// ─── SHADOWS ─────────────────────────────────────────────────────────────────
// Sourced from shadow-* utility usage in apip.html

export const shadow = {
  // shadow-sm — ShipperRow hover state
  sm:  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  // shadow-lg — Topbar user dropdown
  lg:  '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)',
  // No other shadows observed in the prototype
  none: 'none',
} as const;

// ─── BREAKPOINTS ─────────────────────────────────────────────────────────────
// Tailwind breakpoints observed in the prototype

export const breakpoint = {
  sm: '640px',   // sm: — KPI grid 2-col → 4-col, form 1-col → 2-col
  lg: '1024px',  // lg: — Shipper detail 1-col → 3-col, dossier media grid
} as const;

// ─── Z-INDEX ─────────────────────────────────────────────────────────────────
// Sourced from z-* utility usage in apip.html

export const zIndex = {
  base:    0,
  raised:  10,
  dropdown: 20,  // z-20 — Topbar user account dropdown
  overlay: 30,   // Dossier / Proforma full-screen overlay (implied above shell)
} as const;

// ─── TRANSITIONS ─────────────────────────────────────────────────────────────
// Sourced from inline style usage and Tailwind transition class

export const transition = {
  // ChevronDown rotation in sidebar accordion
  chevron: 'transform 0.15s ease',
  // Tailwind `transition` class on interactive elements (Btn, row buttons)
  default: 'all 0.15s ease',
  // Connectivity feed polling interval (not a CSS transition, but a timing constant)
  feedPoll: 4000, // ms
} as const;

// ─── ANIMATION ───────────────────────────────────────────────────────────────
// Keyframe observed in the app's injected <style> block

export const animation = {
  // @keyframes flpulse — used on connectivity status indicators
  flpulse: {
    name:     'flpulse',
    keyframes: `
      0%   { opacity: 0.3; }
      50%  { opacity: 1;   }
      100% { opacity: 0.3; }
    `,
    duration:  '1.5s',
    timing:    'ease-in-out',
    iteration: 'infinite',
  },
} as const;

// ─── PRINT UTILITIES ─────────────────────────────────────────────────────────
// Sourced from @media print block in apip.html injected <style>

export const print = {
  // .no-print — hide on print (back button, topbar, sidebar)
  // .print-area — position absolute, inset 0, white bg (Dossier + Proforma)
  // body background set to #fff on print
} as const;

// ─── FLAT TOKEN MAP (for CSS custom property generation) ─────────────────────

export const layoutTokens = {
  // Spacing
  'space-0':   spacing[0],
  'space-0_5': spacing[0.5],
  'space-1':   spacing[1],
  'space-1_5': spacing[1.5],
  'space-2':   spacing[2],
  'space-2_5': spacing[2.5],
  'space-3':   spacing[3],
  'space-3_5': spacing[3.5],
  'space-4':   spacing[4],
  'space-5':   spacing[5],
  'space-6':   spacing[6],
  'space-8':   spacing[8],

  // Shell
  'sidebar-width':  size.sidebarWidth,
  'topbar-height':  size.topbarHeight,

  // Radius
  'radius-sm':   radius.sm,
  'radius-lg':   radius.lg,
  'radius-xl':   radius.xl,
  'radius-2xl':  radius['2xl'],
  'radius-full': radius.full,

  // Shadow
  'shadow-sm': shadow.sm,
  'shadow-lg': shadow.lg,

  // Z-index
  'z-dropdown': String(zIndex.dropdown),
  'z-overlay':  String(zIndex.overlay),
} as const;
