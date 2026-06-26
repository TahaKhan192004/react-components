// ─── PRIMARY PALETTE ──────────────────────────────────────────────────────────
// Sourced from the `C` token object in apip.html

export const primary = {
  accent:   '#5B7CE6', // primary action color, icon tint, active stepper fill
  indigo:   '#6366F1', // active nav item text, user avatar bg, role chip text
  indigoBg: '#EEF0FE', // active nav bg, role chip bg, PGTS info banner bg
  navy:     '#0E1438', // dark button bg, label print header, print document accents
} as const;

// ─── NEUTRAL PALETTE ──────────────────────────────────────────────────────────
// Sourced from the `C` token object in apip.html

export const neutral = {
  page:   '#F4F5F9', // app root background (body bg)
  card:   '#FFFFFF', // card surface, sidebar, topbar
  soft:   '#F6F7FB', // inset areas, form field bg, empty states, drag-zone default
  border: '#E8EAF2', // all card borders, dividers, input borders, connector bars
  ink:    '#1B2440', // primary text
  sub:    '#8A93AD', // secondary / supporting text, disabled icons
  faint:  '#AEB4C9', // placeholder text, disabled icons, footnote text
} as const;

// ─── SEMANTIC — STATUS (parcel / shipment outcome badges) ─────────────────────
// Sourced from the `STATUS` object in apip.html

export const status = {
  released: { text: '#16A34A', bg: '#DCFCE7' }, // Auto-released
  review:   { text: '#EA580C', bg: '#FEF3C7' }, // Human review
  hold:     { text: '#C2410C', bg: '#FFEDD5' }, // On hold
  inspect:  { text: '#B91C1C', bg: '#FEE2E2' }, // Physical inspection
  unknown:  { text: '#6D28D9', bg: '#EDE9FE' }, // Unknown parcel
  missing:  { text: '#475569', bg: '#E2E8F0' }, // Missing (not scanned)
} as const;

// ─── SEMANTIC — MILESTONE PILLS (clearance / file states) ─────────────────────
// Sourced from the `MPILL` object in apip.html

export const milestone = {
  cleared:  { text: '#16A34A', bg: '#DCFCE7' },
  progress: { text: '#1D4ED8', bg: '#DBEAFE' },
  hold:     { text: '#B91C1C', bg: '#FEE2E2' },
  pending:  { text: '#EA580C', bg: '#FEF3C7' },
  active:   { text: '#16A34A', bg: '#DCFCE7' },
  inactive: { text: '#64748B', bg: '#F1F5F9' },
} as const;

// ─── SEMANTIC — CLEARANCE GATEWAY STATES ─────────────────────────────────────
// Sourced from the `CL` object in apip.html

export const clearance = {
  ready:     { text: '#64748B', bg: '#F1F5F9' },
  submitted: { text: '#1D4ED8', bg: '#DBEAFE' },
  ack:       { text: '#6D28D9', bg: '#EDE9FE' },
  released:  { text: '#16A34A', bg: '#DCFCE7' },
  hold:      { text: '#B91C1C', bg: '#FEE2E2' },
  docs:      { text: '#EA580C', bg: '#FEF3C7' },
} as const;

// ─── SEMANTIC — INLINE ALERT / TEXT COLORS ───────────────────────────────────
// Used ad-hoc in banner and contextual text across the app

export const semantic = {
  // Text on colored backgrounds (dark variants for readability)
  successTextDark:  '#166534', // on #DCFCE7 / #ECFDF5
  warningTextDark:  '#9A3412', // on #FEF3C7 / #FEF9EC
  dangerTextDark:   '#B91C1C', // on #FEE2E2
  infoTextDeep:     '#3730A3', // on C.indigoBg (PGTS/RTO banner title)
  infoTextMid:      '#4338CA', // on C.indigoBg (PGTS/RTO banner body)

  // Raw semantic signals
  success: '#16A34A',
  warning: '#EA580C',
  danger:  '#B91C1C',
  blue:    '#1D4ED8',
  purple:  '#6D28D9',
  slate:   '#475569',

  // Alert border colors (used on banner borders)
  borderRed:        '#FCA5A5',
  borderAmber:      '#FCD34D',
  borderGreen:      '#86EFAC',
  borderGreenSoft:  '#A7F3D0',
} as const;

// ─── SEMANTIC — DIRECTION CHIPS (Import / Export) ────────────────────────────
// Sourced from AirWarehousePage direction toggle

export const direction = {
  import: { text: '#1D4ED8', bg: '#EFF4FF' },
  export: { text: '#6D28D9', bg: '#F1ECFE' },
} as const;

// ─── SEMANTIC — T-STATUS CHIPS (Bonded warehouse T1 / T2) ────────────────────

export const tStatus = {
  T1: { text: '#1D4ED8', bg: '#EFF4FF' },
  T2: { text: '#6D28D9', bg: '#F1ECFE' },
} as const;

// ─── SEMANTIC — WAREHOUSE STATUS (AirWarehousePage Pilly) ────────────────────

export const warehouseStatus = {
  Draft:         { text: '#64748B', bg: '#F1F5F9' },
  Expected:      { text: '#1D4ED8', bg: '#EFF4FF' },
  Received:      { text: '#EA580C', bg: '#FEF3C7' },
  Located:       { text: '#6D28D9', bg: '#F1ECFE' },
  'Out-scanned': { text: '#16A34A', bg: '#DCFCE7' },
} as const;

// ─── SEMANTIC — BRANCH MODULE BADGE COLORS ───────────────────────────────────

export const branchModule = {
  air:        '#4338CA',
  sea:        '#0369A1',
  road:       '#C2410C',
  customs:    '#15803D',
  warehouse:  '#7C3AED',
  backoffice: '#64748B',
} as const;

// ─── AI BOT IDENTITY COLORS ──────────────────────────────────────────────────
// Sourced from the `BOTS` array in apip.html

export const aiBot = {
  VIS:  '#5B7CE6', // Vision-OCR
  HIST: '#0EA5E9', // Historical Match
  LLM:  '#8B5CF6', // LLM Reasoner
  STAT: '#14B8A6', // Market-Stat
} as const;

// ─── FLAT ALIAS MAP (for CSS custom property generation) ─────────────────────
// Every token in a single lookup keyed by CSS var name segment

export const colorTokens = {
  // Primary
  'accent':    primary.accent,
  'indigo':    primary.indigo,
  'indigo-bg': primary.indigoBg,
  'navy':      primary.navy,

  // Neutral
  'page':   neutral.page,
  'card':   neutral.card,
  'soft':   neutral.soft,
  'border': neutral.border,
  'ink':    neutral.ink,
  'sub':    neutral.sub,
  'faint':  neutral.faint,

  // Semantic signals
  'success':        semantic.success,
  'warning':        semantic.warning,
  'danger':         semantic.danger,
  'blue':           semantic.blue,
  'purple':         semantic.purple,

  // Text on colored surfaces
  'success-text':   semantic.successTextDark,
  'warning-text':   semantic.warningTextDark,
  'danger-text':    semantic.dangerTextDark,
  'info-text-deep': semantic.infoTextDeep,
  'info-text-mid':  semantic.infoTextMid,

  // Alert borders
  'border-red':        semantic.borderRed,
  'border-amber':      semantic.borderAmber,
  'border-green':      semantic.borderGreen,
  'border-green-soft': semantic.borderGreenSoft,

  // AI bots
  'bot-vis':  aiBot.VIS,
  'bot-hist': aiBot.HIST,
  'bot-llm':  aiBot.LLM,
  'bot-stat': aiBot.STAT,
} as const;
