// ─── FONT FAMILIES ───────────────────────────────────────────────────────────
// Sourced from apip.html head <link> + FONT constant

export const fontFamily = {
  // Used for every text node across the entire app (FONT constant)
  sans: "'Poppins', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  // Used for AWB numbers, T-refs, PGTS refs, parcel IDs, integrity hashes
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
} as const;

// ─── FONT WEIGHTS ─────────────────────────────────────────────────────────────
// All weights loaded via Google Fonts: Poppins:wght@400;500;600;700;800;900

export const fontWeight = {
  regular:     400,
  medium:      500,
  semibold:    600,
  bold:        700,
  extrabold:   800,
  black:       900,
} as const;

// ─── FONT SIZES ───────────────────────────────────────────────────────────────
// Exact pixel values extracted from className usage across apip.html
// Tailwind arbitrary values (e.g. text-[9px]) used throughout — no rem rounding.

export const fontSize = {
  // Micro — nav chrome and labels
  xs2:   '9px',   // nav group headers ("Operations", "Commercial") — text-[9px]
  xs:    '10px',  // field labels (uppercase + tracking-wide), bot source text — text-[10px]
  xs3:   '10.5px', // footnotes, panel footer text — text-[10.5px]

  // Small — secondary content
  sm2:   '11px',  // secondary meta info, pill footnotes, notify chip — text-[11px]
  sm:    '12px',  // standard body / form text, alert banners — text-[12px]
  sm3:   '12.5px', // sidebar nav section labels — text-[12.5px]

  // Base — primary content
  base:  '13px',  // card primary text, table cell values, ref numbers — text-[13px]
  md:    '14px',  // topbar search input, dossier prose (text-sm = 14px)
  md2:   '15px',  // shipper name in detail view — text-[15px]

  // Large — headings and KPI
  lg:    '18px',  // detail page title ("Announce arrival", "Register bonded storage") — text-[18px]
  xl:    '20px',  // KPI values, report headings (text-xl)
  '2xl': '24px',  // KPI primary large value (text-2xl)
} as const;

// ─── LINE HEIGHTS ─────────────────────────────────────────────────────────────
// Tailwind line-height utilities observed in the prototype

export const lineHeight = {
  none:    '1',      // leading-none (avatar initials, badge counters)
  tight:   '1.25',   // leading-tight (stepper labels, two-line nav items)
  snug:    '1.375',  // leading-snug (DocHeader paragraph, notification text)
  normal:  '1.5',    // leading-normal (default body)
} as const;

// ─── LETTER SPACING ──────────────────────────────────────────────────────────
// Used on uppercase field labels throughout the app

export const letterSpacing = {
  wide:   '0.025em',  // tracking-wide (field labels: Lbl component)
  wider:  '0.05em',   // tracking-wider (sidebar group headers)
} as const;

// ─── TYPOGRAPHY SCALE (composed) ─────────────────────────────────────────────
// Named text styles matching the component usage patterns

export const textStyle = {
  // ── Navigation chrome
  navGroupLabel: {
    size:    fontSize.xs2,
    weight:  fontWeight.bold,
    spacing: letterSpacing.wider,
    transform: 'uppercase' as const,
  },
  navSectionLabel: {
    size:   fontSize.sm3,
    weight: fontWeight.semibold,
  },
  navItem: {
    size:   fontSize.sm,
    weight: fontWeight.medium,
  },

  // ── Form elements
  fieldLabel: {
    size:      fontSize.xs,
    weight:    fontWeight.semibold,
    spacing:   letterSpacing.wide,
    transform: 'uppercase' as const,
  },
  input: {
    size:   fontSize.sm,
    weight: fontWeight.regular,
  },

  // ── Content hierarchy
  pageTitle: {
    size:   fontSize.xl,
    weight: fontWeight.bold,
  },
  detailTitle: {
    size:   fontSize.lg,
    weight: fontWeight.bold,
  },
  panelTitle: {
    size:   fontSize.md,
    weight: fontWeight.bold,
  },
  body: {
    size:   fontSize.sm,
    weight: fontWeight.regular,
  },
  meta: {
    size:   fontSize.sm2,
    weight: fontWeight.regular,
  },
  footnote: {
    size:   fontSize.xs3,
    weight: fontWeight.regular,
  },

  // ── Data display
  kpiValue: {
    size:   fontSize['2xl'],
    weight: fontWeight.bold,
  },
  kpiLabel: {
    size:      fontSize.xs,
    weight:    fontWeight.semibold,
    spacing:   letterSpacing.wide,
    transform: 'uppercase' as const,
  },
  tableValue: {
    size:   fontSize.base,
    weight: fontWeight.regular,
  },
  reference: {
    size:   fontSize.base,
    weight: fontWeight.bold,
    family: fontFamily.mono,
  },
  badge: {
    size:   '11px',
    weight: fontWeight.semibold,
  },
  chip: {
    size:   '10px',
    weight: fontWeight.bold,
  },

  // ── Buttons
  btn: {
    size:   fontSize.xs,
    weight: fontWeight.semibold,
  },
} as const;

// ─── FLAT TOKEN MAP (for CSS custom property generation) ─────────────────────

export const typographyTokens = {
  'font-sans':           fontFamily.sans,
  'font-mono':           fontFamily.mono,

  'size-xs2':            fontSize.xs2,
  'size-xs':             fontSize.xs,
  'size-xs3':            fontSize.xs3,
  'size-sm2':            fontSize.sm2,
  'size-sm':             fontSize.sm,
  'size-sm3':            fontSize.sm3,
  'size-base':           fontSize.base,
  'size-md':             fontSize.md,
  'size-md2':            fontSize.md2,
  'size-lg':             fontSize.lg,
  'size-xl':             fontSize.xl,
  'size-2xl':            fontSize['2xl'],

  'weight-regular':      String(fontWeight.regular),
  'weight-medium':       String(fontWeight.medium),
  'weight-semibold':     String(fontWeight.semibold),
  'weight-bold':         String(fontWeight.bold),
  'weight-extrabold':    String(fontWeight.extrabold),
  'weight-black':        String(fontWeight.black),

  'leading-tight':       lineHeight.tight,
  'leading-snug':        lineHeight.snug,
  'leading-normal':      lineHeight.normal,

  'tracking-wide':       letterSpacing.wide,
  'tracking-wider':      letterSpacing.wider,
} as const;
