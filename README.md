# Your Cargo Contact — APIP Platform

## What This Project Is

This repository is a **design-to-code extraction** of the Your Cargo Contact APIP platform — a full-featured customs, logistics, and freight management SaaS.

The starting point was a single mirrored file (`apip.html`) captured from the live site via HTTrack. That 2MB file contains the entire React application — every page, every component, every color, every icon — compiled inline. The goal of this work is to reverse-engineer it into a properly structured, buildable codebase.

---

## Project Structure

```
ay/
├── docs/
│   └── component-inventory.md
├── src/
│   ├── styles/
│   │   └── global.css
│   └── tokens/
│       ├── colors.ts
│       ├── typography.ts
│       ├── layout.ts
│       └── index.ts
├── yourcargocontact.com/
│   └── demo/
│       └── apip.html          ← the prototype (source of truth)
├── unwanted/                  ← HTTrack mirror artifacts (safe to ignore)
└── README.md
```

---

## The Prototype

**`yourcargocontact.com/demo/apip.html`**

This is the only file that matters from the original mirror. It is a 2MB self-contained React application that runs entirely in the browser. It contains:

- The full UI across **100+ pages** spanning Air Freight, Customs, Sea Freight, Trucking, Warehouse, Finance, HR, Sales, and Admin modules
- Every design token (colors, typography, spacing) defined inline as JavaScript constants
- Every component — from atomic primitives (`Btn`, `Kpi`, `Pill`) to complex AI consensus panels (`VotePanel`, `EnrichPanel`) — built in a single script tag
- All 80+ Lucide icons with a local fallback definition
- The complete navigation structure (5 groups, 20 sections, 100+ leaf pages)

Everything in `docs/` and `src/` was derived by reading this file.

---

## `docs/` — The Inventory

### `docs/component-inventory.md`

This document is the **first deliverable** — a complete audit of the prototype before any code was written.

Reading a 2MB single-file app directly is not practical when building components. The inventory extracts all the structured knowledge from `apip.html` into a reference document so that future implementation work has a single place to look up:

### What the inventory contains

**1. Design Tokens**
Every color hex, font size, font weight, spacing value, border radius, shadow, and breakpoint pulled directly from the source. Not approximated — the exact values (`#1B2440` for ink, `#5B7CE6` for accent, `224px` for sidebar width, `58px` for topbar height, etc.).

Three color systems are documented separately because each has a different semantic purpose:
- `C` object — the base palette (11 tokens)
- `STATUS` object — parcel outcome badges (6 states, each with text + bg)
- `MPILL` object — clearance / file milestone states (6 states)
- `CL` object — customs gateway states (6 states)
- Plus ad-hoc semantic colors, branch module colors, AI bot identity colors

**2. Component List**
Every distinct UI pattern found in the prototype, documented with:
- Which file(s) it appears in
- Variants observed (active/inactive, collapsed/expanded, dark/light)
- Props it would take if extracted into a component
- Nested sub-components it contains

This covers 10 shared primitives, 2 shell components (Sidebar + Topbar), and 30+ functional page components including specialized ones like `Stepper`, `ScanZone`, `Donut`, `TrendSpark`, `CompareBar`, `BatchReport`, `VotePanel`, and `EnrichPanel`.

**3. Layout Structure**
The exact page shell: `flex min-h-screen` root → 224px sticky sidebar → 58px topbar → `px-6 py-5` scrollable main area. The internal structure of both Sidebar and Topbar is documented in ASCII diagram form. The grid system (Tailwind, breakpoints at `sm:640px` and `lg:1024px`) is explained with the actual class patterns used.

**4. Icon List**
All 80 Lucide icons catalogued with their primary context (which component uses each icon and why), plus 2 custom SVGs built inline in the prototype (`LeafMark` eco leaf, `barcodeSVG` programmatic barcode generator).

**5. Page Router Reference**
A full table mapping every route key (`page === "bonded"`, `page === "airwh"`, etc.) to its component name and module — 100+ entries covering all five navigation groups.

### Why it matters

The inventory is the **blueprint for the entire build**. Before writing a single component, you need to know:
- What tokens exist so you don't invent new ones
- What components already have defined behavior so you don't redesign them
- What the layout shell looks like so the first thing you build is correct

Without this document, each developer would need to read 2MB of minified React output to answer basic questions. With it, those answers are a Ctrl+F away.

---

## `src/` — The Token System

The token files are the **second deliverable** — a TypeScript implementation of every design value found in the inventory, plus a CSS custom properties layer.

### Why tokens first

Tokens are the foundation everything else is built on. If you build components before tokens, you end up with hardcoded hex values scattered across files. When a color changes (`#5B7CE6` → something else), you need a global find-and-replace instead of changing one line. The token system makes the design values the single source of truth.

---

### `src/tokens/colors.ts`

Exports every color from the prototype, organized into named groups:

| Export | Contents |
|--------|----------|
| `primary` | accent, indigo, indigoBg, navy |
| `neutral` | page, card, soft, border, ink, sub, faint |
| `status` | 6 parcel outcome states (text + bg pairs) |
| `milestone` | 6 MPILL states (text + bg pairs) |
| `clearance` | 6 customs gateway states (text + bg pairs) |
| `semantic` | success/warning/danger signals + alert border colors |
| `direction` | Import/Export chip colors |
| `tStatus` | T1/T2 bonded warehouse chip colors |
| `warehouseStatus` | Draft/Expected/Received/Located/Out-scanned |
| `branchModule` | Per-module badge colors (air, sea, road, customs…) |
| `aiBot` | 4 AI model identity colors (VIS, HIST, LLM, STAT) |
| `colorTokens` | Flat map keyed by CSS variable name segment |

Every hex value in this file came from reading the prototype. None are Tailwind defaults or invented values.

---

### `src/tokens/typography.ts`

Exports every typographic value used in the prototype:

| Export | Contents |
|--------|----------|
| `fontFamily` | `sans` (Poppins + fallback stack), `mono` (system mono stack) |
| `fontWeight` | 400, 500, 600, 700, 800, 900 — all weights Google Fonts loads |
| `fontSize` | 13 sizes from 9px to 24px — exact arbitrary Tailwind values |
| `lineHeight` | tight (1.25), snug (1.375), normal (1.5) |
| `letterSpacing` | wide (0.025em), wider (0.05em) — for uppercase field labels |
| `textStyle` | Named composed styles: `fieldLabel`, `kpiValue`, `kpiLabel`, `reference`, `btn`, `body`, `meta`, `footnote`, etc. |
| `typographyTokens` | Flat map for CSS variable generation |

The `textStyle` map is particularly important — it captures the combinations (size + weight + transform + spacing) that repeat across dozens of components, so developers don't reconstruct them from scratch each time.

---

### `src/tokens/layout.ts`

Exports every structural and spacing value:

| Export | Contents |
|--------|----------|
| `spacing` | 0–32px scale (13 steps, 4px base unit, exact Tailwind values) |
| `size` | Shell dimensions (sidebar 224px, topbar 58px, logo 46px), icon sizes (11–18px), avatar sizes, thumbnail dimensions (88×64px), max-widths |
| `radius` | 5 tiers: sm (4px), lg (8px), xl (12px), 2xl (16px), full (9999px) |
| `shadow` | sm (hover), lg (dropdown) — exact Tailwind shadow values |
| `breakpoint` | sm: 640px, lg: 1024px |
| `zIndex` | base (0), raised (10), dropdown (20), overlay (30) |
| `transition` | Chevron rotation timing (0.15s), default transition |
| `animation` | `flpulse` keyframe data (connectivity status pulsing dot) |
| `layoutTokens` | Flat map for CSS variable generation |

The sidebar width (224px) and topbar height (58px) being in `size` means the shell layout can be built without touching the prototype again.

---

### `src/tokens/index.ts`

A barrel export. Imports everything from all three token files and re-exports it. Any component or page that needs a token imports from `'../tokens'` — one line, one source.

```ts
import { primary, status, fontSize, spacing, radius } from '../tokens';
```

---

### `src/styles/global.css`

Three things in one file:

**1. CSS Custom Properties (`--ycc-*`)**
Every token exposed as a CSS variable. Components can use these without JavaScript — useful for plain HTML, third-party tools, or CSS-only contexts. The `--ycc-` namespace prevents collisions with Tailwind or any other framework. Every property maps 1-to-1 to a token in the `.ts` files.

**2. Minimal Reset**
Box-sizing, margin/padding zero, `button` unstyled, `img/svg` block, `font: inherit` on form elements. Exactly what's needed and nothing more. The reset also sets `body` to use `--ycc-font-sans`, `--ycc-size-sm`, `--ycc-ink`, and `--ycc-page` so the default state matches the prototype immediately.

**3. Prototype Fidelity Blocks**
Three blocks copied directly from the prototype's injected `<style>` tag:
- **Antialiasing** — `-webkit-font-smoothing: antialiased` on `.app-root *` (Poppins needs this to render crisply)
- **`@media print`** — `.no-print { display: none }`, `.print-area { position: absolute; inset: 0 }` (used by the Dossier and Proforma print overlays)
- **`@keyframes flpulse`** — the pulse animation on connectivity status dots

These are not optional aesthetics — they are part of the prototype's behavior.

---

## `unwanted/`

Contains all HTTrack mirror artifacts that came with the captured site but have no role in the build:

- `backblue.gif`, `fade.gif` — HTTrack UI decoration images
- `hts-cache/`, `hts-log.txt` — HTTrack crawl cache and log
- `index.html` — HTTrack redirect index (not the app)
- `cdnjs.cloudflare.com/` — locally cached PDF.js (the app loads it from CDN)
- `unpkg.com/` — locally cached React, ReactDOM, Lucide (the app loads from CDN)
- 6 × `*.html` stubs — nginx 404 pages (153 bytes each, no content)

Nothing in this folder is needed. It is kept rather than deleted so the original mirror state is preserved.

---

## What Comes Next

With the inventory and token system in place, the natural next steps are:

1. **Project scaffold** — set up a Vite + React + TypeScript project, wire in `global.css` and the token barrel
2. **Primitive components** — build `Btn`, `Card`, `PanelCard`, `Kpi`, `Pill`, `Badge`, `KV`, `PageHeader` from the inventory spec, consuming tokens directly
3. **App shell** — build `Sidebar` (224px) and `Topbar` (58px) using the exact layout values from `layout.ts`
4. **Page-by-page build** — work through the page router table in the inventory, module by module
