# Component Inventory — Your Cargo Contact (APIP Platform)

> Source of truth: `yourcargocontact.com/demo/apip.html` (2 MB single-file React app).  
> All other HTML files in the project are either 404 stubs (nginx) or the HTTrack index redirect.

---

## 1. DESIGN TOKENS

### Primary Palette

| Token name | Hex | Usage |
|------------|-----|-------|
| `C.accent` | `#5B7CE6` | Primary action color, icon tint, active indicators |
| `C.indigo` | `#6366F1` | Active nav items, user avatar, role chip text |
| `C.indigoBg` | `#EEF0FE` | Active nav item background, PGTS info banner bg, role chip bg |
| `C.navy` | `#0E1438` | Dark button bg, label print header, dossier print elements |

### Neutral Palette

| Token name | Hex | Usage |
|------------|-----|-------|
| `C.page` | `#F4F5F9` | App root background |
| `C.card` | `#FFFFFF` | Card surface, sidebar bg, topbar bg |
| `C.soft` | `#F6F7FB` | Subtle inset areas, form field backgrounds, empty states |
| `C.border` | `#E8EAF2` | All dividers, card borders, input borders |
| `C.ink` | `#1B2440` | Primary text |
| `C.sub` | `#8A93AD` | Secondary / supporting text |
| `C.faint` | `#AEB4C9` | Placeholder text, disabled icons, footnotes |

### Semantic Colors

#### Status system (`STATUS` object — parcel / shipment outcomes)

| Key | Label | Text | Background |
|-----|-------|------|------------|
| `released` | Auto-released | `#16A34A` | `#DCFCE7` |
| `review` | Human review | `#EA580C` | `#FEF3C7` |
| `hold` | On hold | `#C2410C` | `#FFEDD5` |
| `inspect` | Physical inspection | `#B91C1C` | `#FEE2E2` |
| `unknown` | Unknown parcel | `#6D28D9` | `#EDE9FE` |
| `missing` | Missing (not scanned) | `#475569` | `#E2E8F0` |

#### Milestone pill system (`MPILL` object — clearance & file states)

| Key | Label | Text | Background |
|-----|-------|------|------------|
| `cleared` | Cleared | `#16A34A` | `#DCFCE7` |
| `progress` | In progress | `#1D4ED8` | `#DBEAFE` |
| `hold` | Customs hold | `#B91C1C` | `#FEE2E2` |
| `pending` | Pending | `#EA580C` | `#FEF3C7` |
| `active` | Active | `#16A34A` | `#DCFCE7` |
| `inactive` | Inactive | `#64748B` | `#F1F5F9` |

#### Clearance gateway states (`CL` object)

| Key | Label | Text | Background |
|-----|-------|------|------------|
| `ready` | Ready | `#64748B` | `#F1F5F9` |
| `submitted` | Submitted | `#1D4ED8` | `#DBEAFE` |
| `ack` | Acknowledged | `#6D28D9` | `#EDE9FE` |
| `released` | Released | `#16A34A` | `#DCFCE7` |
| `hold` | Customs hold | `#B91C1C` | `#FEE2E2` |
| `docs` | Docs required | `#EA580C` | `#FEF3C7` |

#### Inline semantic colors (used ad-hoc, not in objects)

| Role | Hex |
|------|-----|
| Success text (dark) | `#166534` |
| Warning text (dark) | `#9A3412` |
| Danger text (dark) | `#B91C1C` |
| Info text (deep indigo) | `#3730A3` |
| Info text (indigo) | `#4338CA` |
| Alert border red | `#FCA5A5` |
| Alert border amber | `#FCD34D` |
| Alert border green | `#86EFAC` |
| Alert border green (soft) | `#A7F3D0` |

#### T-status chip (customs bonded warehouse)

| Status | Text | Background |
|--------|------|------------|
| T1 | `#1D4ED8` | `#EFF4FF` |
| T2 | `#6D28D9` | `#F1ECFE` |

#### Direction chip (Import / Export)

| Direction | Text | Background |
|-----------|------|------------|
| Import | `#1D4ED8` | `#EFF4FF` |
| Export | `#6D28D9` | `#F1ECFE` |

#### Branch module badge colors

| Module | Color |
|--------|-------|
| Air | `#4338CA` |
| Sea | `#0369A1` |
| Road | `#C2410C` |
| Customs | `#15803D` |
| Warehouse | `#7C3AED` |
| Backoffice | `#64748B` |

#### AI bot identity colors

| Bot | Name | Color |
|-----|------|-------|
| VIS | Vision-OCR | `#5B7CE6` |
| HIST | Historical Match | `#0EA5E9` |
| LLM | LLM Reasoner | `#8B5CF6` |
| STAT | Market-Stat | `#14B8A6` |

---

### Typography Scale

**Font family:** `'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif`  
**Weights loaded:** 400, 500, 600, 700, 800, 900 (via Google Fonts)

| Size | Tailwind class | Usage |
|------|---------------|-------|
| 9px | `text-[9px]` | Nav group headers ("Operations"), sub-group labels |
| 10px | `text-[10px]` | Field labels (uppercase + tracking-wide), timestamps |
| 10.5px | `text-[10.5px]` | Footnotes, inline footnote text |
| 11px | `text-[11px]` | Secondary meta info, pill footnotes |
| 12px | `text-[12px]` | Standard body/form text |
| 12.5px | `text-[12.5px]` | Sidebar nav section labels |
| 13px | `text-[13px]` | Card primary text, table values, reference numbers |
| 14px | `text-sm` | Topbar search input, dossier prose |
| 15px | `text-[15px]` | Shipper name in detail view |
| 18px | `text-[18px]` | Detail page title (e.g., "Announce arrival") |
| 20px | `text-xl` | KPI values (large), report headings |
| 24px | `text-2xl` | KPI primary value (`Kpi` component) |

**Special:** `font-mono` used for AWB numbers, T-references, PGTS refs, parcel IDs, integrity hashes.

---

### Spacing Scale

All spacing is Tailwind utility-based. Observed values:

| Category | Values used |
|----------|-------------|
| Gap | `gap-1`, `gap-1.5`, `gap-2`, `gap-2.5`, `gap-3`, `gap-4`, `gap-x-4 gap-y-2` |
| Padding X | `px-2`, `px-2.5`, `px-3`, `px-3.5`, `px-4`, `px-5`, `px-6`, `px-8` |
| Padding Y | `py-0.5`, `py-1`, `py-1.5`, `py-2`, `py-2.5`, `py-3`, `py-4`, `py-5`, `py-8` |
| Margin B | `mb-0.5`, `mb-1`, `mb-2`, `mb-3`, `mb-4`, `mb-5`, `mb-6` |
| Margin T | `mt-1`, `mt-1.5`, `mt-2`, `mt-2.5`, `mt-3`, `mt-4`, `mt-5`, `mt-6` |
| Content area | `px-6 py-5` (main content padding) |

---

### Shadows

| Token | Tailwind | Usage |
|-------|----------|-------|
| Dropdown shadow | `shadow-lg` | Topbar user account dropdown |
| Card hover | `shadow-sm` | `ShipperRow` on hover |

---

### Radii

| Radius | Tailwind | Usage |
|--------|----------|-------|
| Full pill | `rounded-full` | Status pills, avatar circles, notification dot, tab switcher |
| 2xl (16px) | `rounded-2xl` | `Card`, `PanelCard`, `Kpi`, alert banners, dossier print wrapper |
| xl (12px) | `rounded-xl` | Section panels, form areas, list row items, success/error banners |
| lg (8px) | `rounded-lg` | `Btn`, inputs, search bar, nav items, thumbnail cells, ScanZone |
| md (6px) | `rounded` | Progress bars, compare bars, sparkline bars |

---

## 2. COMPONENT LIST

### Shared Primitives (defined once in `_shared` section, used on all pages)

---

#### `Pill`
- **Files:** `apip.html` (all pages via shared)
- **Variants:** One per `MPILL` key: `cleared`, `progress`, `hold`, `pending`, `active`, `inactive`
- **Props:** `kind` (string — one of MPILL keys)
- **Sub-components:** none
- **Notes:** Inline `<span>` with dynamic background/color from MPILL object

---

#### `Badge`
- **Files:** `apip.html` (workstation, clearance, batch report, shipper detail)
- **Variants:** One per `STATUS` key: `released`, `review`, `hold`, `inspect`, `unknown`, `missing`
- **Props:** `status` (string — one of STATUS keys)
- **Sub-components:** none

---

#### `Card`
- **Files:** `apip.html` (all pages)
- **Variants:** With padding (default), without padding (`pad={false}`)
- **Props:** `children`, `pad` (boolean, default true)
- **Sub-components:** free slot (children)

---

#### `PanelCard`
- **Files:** `apip.html` (every page — the dominant section container)
- **Variants:** Any icon, any title
- **Props:** `title` (string), `icon` (Lucide component), `children`
- **Sub-components:** Icon dot (15px, accent color) + `<h3>` title + children slot

---

#### `Btn`
- **Files:** `apip.html` (all pages)
- **Variants:** Dark (navy bg, white text), Light (white bg, ink text, border)
- **Props:** `children`, `onClick`, `dark` (boolean), `icon` (optional Lucide icon), `disabled`
- **Sub-components:** Optional leading icon (14px)

---

#### `Kpi`
- **Files:** `apip.html` (all dashboards, list pages — always in a 2–6 column grid)
- **Variants:** Default (ink text), toned (custom `tone` color for value)
- **Props:** `label` (string), `v` (value — string or number), `sub` (optional suffix), `tone` (optional hex color)
- **Sub-components:** none

---

#### `PageHeader`
- **Files:** `apip.html` (every page with a title area)
- **Variants:** With action slot, without action slot
- **Props:** `crumb` (string[]), `title` (string), `action` (optional node)
- **Sub-components:** Breadcrumb trail (uses `ChevronRight` icon, 11px), `<h1>`, action slot

---

#### `KV`
- **Files:** `apip.html` (detail pages, dossier, bonded warehouse, clearance)
- **Variants:** none
- **Props:** `k` (label string), `v` (value string)
- **Sub-components:** none
- **Notes:** Always uppercase 10px label, semibold value below

---

#### `DocHeader`
- **Files:** `apip.html` (shown on print/report pages)
- **Variants:** none
- **Props:** none (static content)
- **Sub-components:** `LeafMark` (inline SVG)

---

#### `LeafMark`
- **Files:** `apip.html`
- **Variants:** Configurable size and color
- **Props:** `size` (default 12), `color` (default `#16A34A`)
- **Sub-components:** inline SVG path (leaf + highlight stroke)

---

### App Shell Components

---

#### `Sidebar`
- **Files:** `apip.html`
- **Width:** `224px` (fixed, sticky, full viewport height)
- **Variants:** Collapsed sections (accordion), expanded sections; active item highlighted
- **Props:** `page`, `setPage`, `role`, `allowed`
- **Sub-components:**
  - Logo zone (`<img>` tag, 46px height)
  - Role chip (`rounded-lg`, `C.indigoBg` bg)
  - Branch selector (`<select>`, filtered to own-type branches)
  - `<nav>` with group labels + accordion sections
  - **SidebarItem (`Item`)** — leaf nav button (12px text, `C.indigo` active, `C.sub` default, `C.indigoBg` active bg)
  - Public website link (bottom)
  - Footer copyright line

---

#### `Topbar`
- **Files:** `apip.html`
- **Height:** `58px` (fixed, `border-b`)
- **Variants:** User dropdown open/closed
- **Props:** `userId`, `setUserId`, `users`
- **Sub-components:**
  - Global search bar (`max-w-md`, `C.soft` bg, `Search` icon, 15px)
  - Language selector button (`Globe` icon + `ChevronDown`)
  - Notification bell (`Bell` icon, 17px, with `C.indigo` dot indicator)
  - User avatar button (32×32 circle, `C.indigo` bg, initial letter)
  - User name + role label
  - User switch dropdown (absolute `w-56`, `shadow-lg`, scrollable user list)

---

### Air Freight — Warehouse

#### `AirWarehousePage`
- **Files:** `apip.html` → route `page === "airwh"`
- **Variants:** List view (Layer 1), Detail view (Layer 2)
- **Props:** none (uses internal state)
- **Sub-components:**
  - `PageHeader` with "Announce new arrival" `Btn`
  - 4× `Kpi` cards: In loods / Alerts (>1 week) / Damage reported / Out-scanned
  - Alert banners (red for stale, amber for damage)
  - `PanelCard` "Announced shipments" with search bar + row list
    - Each row: icon avatar (36×36 `C.soft` bg), ref+status chips, meta line, location+docs
  - **`Pilly`** — inner AirWarehouse status chip (Draft/Expected/Received/Located/Out-scanned)
  - **`ScanZone`** — drag/drop document/photo upload zone
  - **`Lbl`** — uppercase 10px field label
  - `PanelCard` "Shipment details" — 2-col form grid (inputs + direction toggle)
  - `PanelCard` "Documents, photos & damage" — damage report toggle + `ScanZone`
  - `PanelCard` "Warehouse handling" — KV grid + action buttons (Locate / Out-scan / Stale alert)

---

#### `ScanZone`
- **Files:** `apip.html` (AirWarehousePage)
- **Variants:** Default / drag-over (border changes to `C.accent`, bg `#EEF4FF`)
- **Props:** `docs` (array), `onAdd`, `onRemove`
- **Sub-components:** `Camera` + `Upload` icons, `<input type="file">` (hidden), thumbnail grid (88×64px), `Trash2` remove button

---

### Air Freight — Track & Trace

#### `AirTrackTracePage`
- **Files:** `apip.html` → route `page === "airtt"`
- **Variants:** 3 tabs: Inbound / Outbound / NoA inbox
- **Props:** none
- **Sub-components:**
  - `PageHeader`
  - 4× `Kpi` cards: Inbound active / Awaiting NoA / Outbound in transit / Open actions
  - Notice banner (green success toast)
  - `PanelCard` "Operator actions / triggers" — button list (icon + label + `ArrowRight`)
  - Tab switcher (`rounded-full` pill tabs with badge count)
  - Search bar
  - `PanelCard` "Inbound" — `Stepper` per shipment + advance `Btn` + notify `Btn`
  - `PanelCard` "Outbound" — same pattern
  - `PanelCard` "NoA inbox" — mail list with link/unlink actions

---

#### `Stepper`
- **Files:** `apip.html` (AirTrackTracePage)
- **Variants:** Inbound (6 stages) / Outbound (5 stages)
- **Props:** `stages` (array of `{k, icon, key}`), `stage` (current index)
- **Sub-components:** Per step: circle (28×28, `C.accent` when done / `C.faint` pending) + icon (13px) + label; connector bar between steps

---

#### `Chip`
- **Files:** `apip.html` (AirTrackTrace, BondedWarehouse, PGTS)
- **Variants:** Any text/color/bg combination
- **Props:** `text`, `color`, `bg`
- **Sub-components:** none

---

#### `NotifyChip`
- **Files:** `apip.html` (AirTrackTrace)
- **Variants:** `none` (faint + `BellOff`), `milestones` (blue + `Bell`), `all` (green + `Bell`)
- **Props:** `pref` (string: "none" | "milestones" | "all")
- **Sub-components:** `Bell` or `BellOff` icon (11px)

---

### Customs — Bonded Warehouse

#### `BondedWarehousePage`
- **Files:** `apip.html` → route `page === "bonded"`
- **Variants:** List view / Detail view
- **Props:** none
- **Sub-components:**
  - `PageHeader` with "Report" + "Register storage" `Btn`s
  - 4× `Kpi`: In entrepot / Customs value / Approaching 12 mo / Over 12 months
  - Age alert banners (red >12mo, amber approaching)
  - `PanelCard` "Goods physically in bonded storage" — search + row list
    - **`TChip`** — T1/T2 chip
    - Age flag badges + Calendar/MapPin/Euro inline icons in row meta
  - Detail: `PanelCard` "T-status goods" — 2-col form grid, T1/T2 toggle, register btn
  - Detail: `PanelCard` "12-month flag — resolution protocol" — re-declare / acknowledge flow
  - Detail: `PanelCard` "Bonded handling" — KV grid, print ticket btn, uitslag date input + release btn

---

### Customs — PGTS / RTO

#### `PGTSPage`
- **Files:** `apip.html` → route `page === "pgts"`
- **Variants:** List view / Detail view
- **Props:** none
- **Sub-components:**
  - `PageHeader` with "Report" + "New PGTS transfer" `Btn`s
  - Info banner (`C.indigoBg`, `ArrowLeftRight` icon — "Paperless Goods Tracking System")
  - 4× `Kpi`: In RTO / Approaching 90d / Over 90 days / Handed over
  - Age alert banners
  - `PanelCard` "Goods in RTO" — search + rows
  - Detail: info banner (documentless reminder)
  - Detail: `PanelCard` "Transfer details" — 2-col form grid, inslag date, register btn
  - Detail: `PanelCard` "90-day limit resolution protocol"
  - Detail: `PanelCard` "RTO handling" — print ticket, handover-to input, handover/to-declaration btns

---

### Customs Compliance — Workstation (APIP)

#### `WorkstationPage`
- **Files:** `apip.html` → route `page === "workstation"`
- **Variants:** Parcel list view / Dossier detail view (full-screen overlay)
- **Props:** `conn`, `parcels`, `setParcels`, `ingestFile`, `setIngestFile`, `finalized`, `setFinalized`, `onDossier`
- **Sub-components:**
  - `DropZone` — CSV ingest file drop zone
  - `PanelCard` "Connectivity" — `conn` status indicators
  - Parcel list table — `Badge` + risk score + AI confidence per row
  - **`Dossier`** — print-mode overlay (see below)
  - **`BatchReport`** — batch finalization card (see below)

---

#### `Dossier`
- **Files:** `apip.html` (overlay triggered from WorkstationPage)
- **Variants:** Physical parcel present / not scanned
- **Props:** `parcel`, `onClose`
- **Sub-components:**
  - Back + Print buttons (no-print class, hidden on print)
  - Header block (`STATUS` badge + parcel ID)
  - `KV` grid (6 fields, 3-col)
  - `ExteriorPhoto` (SVG mock, big=true, 220px)
  - `XrayPhoto` (SVG mock, big=true, 220px, danger variant)
  - `CompareBar` (weight + 3 dims)
  - Decision rationale bullet list
  - Footer hash line

---

#### `ExteriorPhoto`
- **Files:** `apip.html`
- **Variants:** Present / not present (placeholder); seed-driven barcode pattern
- **Props:** `seed`, `present`, `big` (220px vs 120px)
- **Sub-components:** inline SVG (package box, label, barcode bars, FRAGILE/STD badge)

---

#### `XrayPhoto`
- **Files:** `apip.html`
- **Variants:** Present / not present; `danger` (shows "Li" battery marker)
- **Props:** `seed`, `present`, `danger`, `big`
- **Sub-components:** inline SVG (dark bg, organic shapes, optional dense-object rect)

---

#### `Donut`
- **Files:** `apip.html` (ShipperDetail)
- **Variants:** Any value 0–100, any color
- **Props:** `value`, `color`, `size` (default 52)
- **Sub-components:** SVG `<circle>` track + progress arc + centered percentage text

---

#### `CompareBar`
- **Files:** `apip.html` (Dossier, WorkstationPage)
- **Variants:** Missing measurement (shows "not captured"), delta highlight (>10% = red)
- **Props:** `label`, `declared`, `measured`, `unit`
- **Sub-components:** Label + value row; dual progress bars (declared=faint, measured=accent or red)

---

#### `BatchReport`
- **Files:** `apip.html` (WorkstationPage tab)
- **Variants:** Draft / Finalized
- **Props:** `parcels`, `finalized`, `openCount`, `onFinalize`, `onReopen`
- **Sub-components:**
  - Status header bar (Finalized green / Draft amber)
  - 6× `Kpi` (manifest rows, scanned, auto-release %, CCI, flagged, declared value)
  - Outcome distribution bar (segmented, one color per STATUS)
  - Legend chips
  - Shipper risk section → `ShipperRow` list or `ShipperDetail`
  - Finalize confirm inline flow

---

#### `ShipperRow`
- **Files:** `apip.html` (BatchReport)
- **Variants:** Low / Medium / High risk (border color changes)
- **Props:** `s` (shipper data), `r` (risk result), `onClick`
- **Sub-components:** Name + origin, batch/history counts, `TrendSpark`, risk score badge, 5× `Factor` bars

---

#### `ShipperDetail`
- **Files:** `apip.html` (BatchReport → drill-in)
- **Variants:** none
- **Props:** `s`, `parcels`, `onBack`
- **Sub-components:** Back button, 3-col grid: `PanelCard` "Shipper profile" (`Donut`, `TrendSpark`), `PanelCard` "Risk factors" (5× `Factor` + narrative), `PanelCard` "Parcels from this shipper" (mini list with `Badge`)

---

#### `TrendSpark`
- **Files:** `apip.html` (ShipperRow, ShipperDetail)
- **Variants:** Up trend (red ▲) / Down trend (green ▼)
- **Props:** `data` (number[]), `color`
- **Sub-components:** SVG `<polyline>` (84×26px) + trend arrow character

---

#### `Factor`
- **Files:** `apip.html` (ShipperRow, ShipperDetail)
- **Variants:** Low (<15%, green) / Medium (<35%, orange) / High (≥35%, red)
- **Props:** `label`, `v` (percentage number)
- **Sub-components:** Label + value row, horizontal progress bar

---

### Customs Compliance — AI Consensus Panels

#### `ConsensusPanel`
- **Files:** `apip.html` (Dossier detail, WorkstationPage parcel detail)
- **Variants:** Delegates to `EnrichPanel` (kind="enrich") or `VotePanel` (kind="vote")
- **Props:** `panel`
- **Sub-components:** `EnrichPanel` or `VotePanel`

---

#### `EnrichPanel`
- **Files:** `apip.html`
- **Variants:** Always shows "enriched · applied autonomously"
- **Props:** `c` (consensus panel data)
- **Sub-components:** Icon + title, original → enriched text, 2×2 `BotDot` contribution grid, `BasisChips`

---

#### `VotePanel`
- **Files:** `apip.html`
- **Variants:** `applied` (green) / `flag` (red) / `escalate` (orange) outcome
- **Props:** `c`
- **Sub-components:** Icon + title, outcome pill, 4-bot grid (each bot: `BotDot`, agrees/alt indicator, output value, confidence %), original→final line, `BasisChips`

---

#### `BotDot`
- **Files:** `apip.html`
- **Variants:** 4 bot colors (VIS blue, HIST sky, LLM purple, STAT teal)
- **Props:** `tone`, `id`
- **Sub-components:** 20×20 rounded circle, bot initial letter

---

#### `BasisChips`
- **Files:** `apip.html`
- **Variants:** Any number of basis string items
- **Props:** `items` (string[])
- **Sub-components:** "basis:" label + chip list (`C.soft` bg, `C.border` border)

---

### Clearance Page

#### `ClearancePage`
- **Files:** `apip.html` → route `page === "clearance"`
- **Variants:** Pre-finalization (locked until WorkstationPage batch is finalized) / Post-finalization
- **Props:** `finalized`, `setPage`
- **Sub-components:**
  - Info banner if batch not finalized
  - Declaration table (ref, HS, value, duty, VAT, state, gateway response)
  - Submit all / Submit selected buttons
  - Clearance status per row (CL state chips)

---

### Shared Form Primitives (inline, not named components)

| Pattern | Usage |
|---------|-------|
| `Lbl` (inner `const`) | Uppercase 10px form field label, defined locally in each page |
| `inp` style object | `{background: "#fff", border: "1px solid C.border"}` — applied to all text inputs |
| Search bar | `C.soft` bg, `Search` icon 14px, transparent `<input>`, `rounded-lg` |
| Tab switcher | `rounded-full` container + pill buttons, `C.accent` active bg |

---

## 3. LAYOUT STRUCTURE

### Page Shell

```
<div class="flex min-h-screen w-full" style="background: C.page">
  │
  ├── <Sidebar>          ← w-[224px], sticky top-0, h-screen, border-r, bg C.card
  │
  └── <div class="flex min-w-0 flex-1 flex-col">
        │
        ├── <Topbar>     ← h-[58px], border-b, bg C.card
        │
        └── <main class="flex-1 overflow-auto px-6 py-5">
              ← scrollable content area
              ← license warning banner (conditional, above all pages)
              ← page component (conditionally rendered by `page` state)
```

### Sidebar Internals

```
<aside class="sticky top-0 flex h-screen w-[224px] shrink-0 flex-col self-start border-r">
  ├── Logo zone           px-5 py-4, img height=46px
  ├── Role chip           mx-3 mb-1, rounded-lg, C.indigoBg
  ├── Branch selector     mx-3 mb-2, rounded-lg, border, <select>
  ├── <nav>               flex-1 overflow-auto, px-2.5 pb-4
  │     ├── Group labels  px-2.5 pt-3.5 pb-1, text-[9px] uppercase C.faint
  │     ├── Section btn   px-2.5 py-2, rounded-lg, 12.5px semibold
  │     │     └── ChevronDown (rotates 90° when collapsed)
  │     └── SidebarItem   px-3 py-1.5, rounded-lg, 12px medium
  │           active: bg C.indigoBg, color C.indigo
  │           default: transparent, color C.sub
  ├── Website link        mx-2.5 mb-1, C.indigoBg
  └── Footer              px-5 py-3, border-t, text-[9px] C.faint
```

### Content Area Page Pattern (most pages)

```
<div style="fontFamily: FONT, color: C.ink">
  ├── <PageHeader>           mb-4, flex wrap, items-end justify-between
  │     ├── Breadcrumb       text-[11px] C.sub, ChevronRight separators
  │     └── <h1>             text-xl font-bold
  ├── KPI grid               mb-4, grid grid-cols-2 gap-3 sm:grid-cols-4
  ├── Alert banners          mb-2/mb-4, rounded-xl, colored bg + border
  └── <PanelCard>            rounded-2xl bg-white p-4, border C.border
        ├── Header            mb-3 flex items-center gap-2
        │     ├── Icon (15px, C.accent)
        │     └── <h3> text-sm font-bold
        └── content slot
```

### Grid System

- Tailwind CSS (loaded via CDN)
- Primary breakpoint: `sm:` (640px)
- KPI grids: `grid-cols-2 sm:grid-cols-4` / `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`
- Form grids: `grid gap-3 sm:grid-cols-2`
- Shipment detail grids: `grid-cols-2 gap-y-2 sm:grid-cols-4`
- Shipper detail: `grid-cols-1 lg:grid-cols-3`
- No custom CSS grid — all Tailwind utility classes

### Navigation Hierarchy

```
NAV groups:
  Group 1 (no label):  Home, CEO Dashboard
  Group 2 "Operations": COO Dashboard, All Files, Air Freight, Customs, Sea Freight,
                        Trucking, Warehouse (WMS)
  Group 3 "Corporate services": CFO Dashboard, Backoffice, Finance,
                                AP Control Tower, Human Resources, Corporate Affairs
  Group 4 "Commercial": CCO Dashboard, Marketing, Sales
  Group 5 "System": Admin, General (shared)
```

---

## 4. ICON LIST

All icons are Lucide icons, loaded from `lucide@0.383.0` and `lucide-react@0.383.0` (UMD).  
A local fallback set (`__LOCAL_ICONS`) ensures they render without a network icon fetch.

### Full Icon Inventory

| Icon | Primary Context |
|------|----------------|
| `Activity` | Control Tower, AP analytics, Billing Control, audit |
| `AlertTriangle` | Damage flags, age alerts, license warnings, fraud, risk suppliers |
| `ArrowLeft` | Back navigation (detail pages) |
| `ArrowLeftRight` | PGTS/RTO, transfers, direction indicator |
| `ArrowRight` | "Advance" action buttons, operator triggers, links |
| `BarChart3` | Reports, Competency Matrix, analytics nav |
| `Bell` | Notifications topbar, customer notify button, socials nav |
| `BellOff` | "No updates" notify preference |
| `BookOpen` | AEO Handbook, Learning Center |
| `Boxes` | Outfeed, 3D box icon on parcel detail, WMS |
| `Briefcase` | Sales, Company, Recruitment, Suppliers, assets |
| `Cable` | Connectivity page nav |
| `Calendar` | Inline date meta in bonded/PGTS row |
| `Camera` | ScanZone upload trigger |
| `Check` | User switch active indicator |
| `CheckCircle2` | Register/confirm actions, success state, AI vote agreement |
| `ChevronDown` | Sidebar accordion toggle, dropdowns |
| `ChevronRight` | Breadcrumb separator, "view full profile" prompt |
| `ClipboardCheck` | (imported, used in reference pages) |
| `Clock` | Stale shipment alerts, age indicators, timeline nav, birthday |
| `Cpu` | AI consensus panel title icon |
| `Database` | Stored evidence panel |
| `Download` | "Report" export buttons |
| `Euro` | Customs value inline icon (bonded warehouse row) |
| `FileCheck` | Bonded warehouse panel, declarations, SCD, customs |
| `FileSpreadsheet` | (imported, available for spreadsheet contexts) |
| `FileText` | Documents, manifests, files nav, archive |
| `Filter` | (imported) |
| `Gauge` | COO Dashboard, sustainability, weight & volume, analytics |
| `Globe` | Branch selector, language picker, website link, marketing |
| `Hash` | AWB Stock, HS Codes, ledger |
| `HelpCircle` | (imported, available for help tooltips) |
| `Home` | Home page nav, canteen |
| `Landmark` | Bonded warehouse handling panel, finance bank, corporate |
| `Layers` | (imported) |
| `LayoutDashboard` | Dashboard nav items (all modules) |
| `LayoutGrid` | CEO Dashboard, meetings rooms, organization chart |
| `Link2` | NoA link action button |
| `Lock` | Access control, admin, blocked suppliers, license, govhub |
| `Mail` | NoA inbox tab icon |
| `MapPin` | Warehouse locations, GPS/telematics, location inline icon |
| `PackageCheck` | Customs Compliance workstation nav |
| `PackageOpen` | Bonded uitslag button, PGTS "to declaration" |
| `PackageSearch` | Missing parcel placeholder illustration |
| `Pause` | (imported, available for play/pause controls) |
| `Pencil` | Edit actions |
| `Plane` | Air freight section, warehouse row icon |
| `PlaneLanding` | Inbound milestone stepper |
| `PlaneTakeoff` | Outbound milestone stepper |
| `Play` | (imported) |
| `Plug` | (imported) |
| `Plus` | "Announce new arrival", "Register storage", "New PGTS transfer" |
| `Power` | (imported) |
| `Printer` | Print / Save as PDF button in Dossier |
| `Radio` | News/marketing nav |
| `Receipt` | IOSS administration, job costing, payments, AP |
| `RefreshCw` | (imported) |
| `RotateCcw` | Reopen/revert actions, re-declare (bonded), batch reopen |
| `Route` | Transit page nav |
| `Ruler` | (imported) |
| `Scale` | Weight consensus panel icon |
| `ScanLine` | Out-scan action button, milestone icon |
| `ScanSearch` | Track & trace nav, inspection, data fixer, customs nav |
| `Search` | Topbar global search, all list page search bars |
| `Send` | Sales feedback, reviews, PGTS notice icon, payment run |
| `Server` | (imported) |
| `Settings` | Settings pages, AP settings |
| `ShieldCheck` | Security (RA/KC), compliance, knowledge base, decision panel |
| `Ship` | Sea freight section nav |
| `SlidersHorizontal` | (imported) |
| `Split` | Sortation, cost allocation |
| `Square` | (imported) |
| `Tag` | Print labels button, labelling nav, DDU parcels |
| `Tags` | Declaration types, trucking labels, training nav |
| `Trash2` | Remove document from ScanZone |
| `TrendingUp` | CCO Dashboard, finance P&L, sales performance, appraisals |
| `Truck` | Trucking section, transport, milestone icon (Collected) |
| `Upload` | ScanZone upload trigger |
| `Users` | Clients, employees, HR nav, user management |
| `Wallet` | CFO Dashboard, finance, debtors, AP payments |
| `Warehouse` | Air/Sea/Truck warehouse, WMS, bonded handling panel |
| `Workflow` | Data Preparation, manifest clearance |
| `XCircle` | (imported, available for error/dismiss) |
| `Zap` | Energy (11Energie) nav |
| `Barcode` (as `BarcodeIcon`) | (available for barcode scanning contexts) |
| `Image` (as `ImageIcon`) | ScanZone: image file thumbnail fallback |

### Custom SVG Icons

| Name | Description | Usage |
|------|-------------|-------|
| `LeafMark` | Green leaf with white highlight stroke | `DocHeader` "please don't print" banner |
| `barcodeSVG()` | Programmatic barcode from AWB/ref string | Label sheet print (`AirWarehousePage`) |

---

## Page Router Reference

All pages rendered in a single `<main>` via conditional React.createElement chain:

| Route key | Component | Module |
|-----------|-----------|--------|
| `home` | `HomePage` | — |
| `ceo` | `CEODashboardPage` | — |
| `coo` | `COODashboardPage` | Operations |
| `cfo` | `CFODashboardPage` | Finance |
| `cco` | `CCODashboardPage` | Commercial |
| `allfiles` | `AllFilesPage` | Operations |
| `airdash` | `AirFreightDashboard` | Air Freight |
| `airquotes` | `QuotationsPage` | Air Freight |
| `air` | `AirFreightPage` | Air Freight |
| `airwh` | `AirWarehousePage` | Air Freight |
| `airtt` | `AirTrackTracePage` | Air Freight |
| `awbstock` | `AwbStockPage` | Air Freight |
| `rakc` | `RaKcPage` | Air Freight |
| `dashboard` | Bulk customs dashboard | Customs |
| `singledash` | `SingleDeclarationDashboard` | Customs |
| `scd` | `SCDPage` | Customs |
| `bulkwarehouse` | `WarehouseCustomsPage` | Customs |
| `inspections` | `InspectionsPage` | Customs |
| `dataprep` | `DataPrepPage` | Customs |
| `workstation` | `WorkstationPage` (APIP) | Customs |
| `clearance` | `ClearancePage` | Customs |
| `manifestclear` | `ManifestClearancePage` | Customs |
| `labelling` | `LabellingPage` | Customs |
| `sortation` | `SortationPage` | Customs |
| `controltower` | `ControlTowerPage` | Customs |
| `connectivity` | `ConnectivityPage` | Customs |
| `outfeed` | `OutfeedPage` | Customs |
| `aeohandbook` | `AEOHandbookPage` | Customs |
| `manifests` | `ManifestsPage` | Customs |
| `declarations` | `DeclarationsPage` | Customs |
| `ioss` | `IOSSPage` | Customs |
| `transfers` | `TransfersPage` | Customs |
| `transit` | `TransportPage` | Customs |
| `bonded` | `BondedWarehousePage` | Customs |
| `pgts` | `PGTSPage` | Customs |
| `transport` | `TransportPage` | Customs |
| `incidentregister` | `IncidentRegisterPage` | Customs |
| `timeline` | `TimelinePage` | Customs |
| `bulkreports` | `BulkReportsPage` | Customs |
| `hscodes` | `HSCodesPage` | Customs |
| `dectypes` | `DeclarationTypesPage` | Customs |
| `whlocations` | `WarehouseLocationsPage` | Customs |
| `knowledgebase` | `KnowledgeBasePage` | Customs |
| `seadash` | `SeaDashboardPage` | Sea Freight |
| `seaquotes` | `SeaQuotationsPage` | Sea Freight |
| `sea` | `SeaFilesPage` | Sea Freight |
| `seawh` | `SeaWarehousePage` | Sea Freight |
| `seatt` | `SeaTrackTracePage` | Sea Freight |
| `truckdash` | `TruckDashboardPage` | Trucking |
| `truckquotes` | `TruckQuotationsPage` | Trucking |
| `truck` | `TruckFilesPage` | Trucking |
| `truckwh` | `TruckWarehousePage` | Trucking |
| `trucktt` | `TruckTrackTracePage` | Trucking |
| `trucklabels` | `TruckLabelsPage` | Trucking |
| `tacho` | `TachoPage` | Trucking |
| `fleet` | `FleetPage` | Trucking |
| `docks` | `DockSchedulePage` | Trucking |
| `gps` | `GpsTelematicsPage` | Trucking |
| `wmsdash` | `WMSDashboardPage` | Warehouse |
| `warehouse` | `WarehousePage` | Warehouse |
| `locations` | `WarehousePage` (tab="locations") | Warehouse |
| `officedash` | `OfficeDashboardPage` | Backoffice |
| `adminoffice` | `AdminOfficePage` | Backoffice |
| `exchub` | `ExceptionHubPage` | Backoffice |
| `chargecap` | `ChargeCapturePage` | Backoffice |
| `datafix` | `MasterDataFixerPage` | Backoffice |
| `sustainability` | `SustainabilityPage` | Backoffice |
| `energy` | `EnergyPage` | Backoffice |
| `rooms` | `MeetingRoomsPage` | Backoffice |
| `printreg` | `PrintRegisterPage` | Backoffice |
| `archive` | `ArchivePage` | Backoffice |
| `costalloc` | `CostAllocationPage` | Backoffice |
| `billingctrl` | `BillingControlPage` | Backoffice |
| `debtors` | `DebtorsPage` | Backoffice |
| `jobcosting` | `JobCostingPage` | Backoffice |
| `creditcontrol` | `CreditControlPage` | Backoffice |
| `refunds` | `RefundsPage` | Backoffice |
| `paylinks` | `PaymentLinksPage` | Backoffice |
| `financedash` | `FinanceDashboardPage` | Finance |
| `finance` | `FinancePage` | Finance |
| `deposits` | `DepositsPage` | Finance |
| `finbank` | `BankJournalPage` | Finance |
| `finledger` | `LedgerPage` | Finance |
| `finpnl` | `PnLPage` | Finance |
| `finvat` | `VATReturnPage` | Finance |
| `acct_dash` | `AcctDashboardPage` | AP Control Tower |
| `acct_inv_*` | `AcctInvoicesPage` (status variants) | AP Control Tower |
| `acct_sup_*` | `AcctSuppliersPage` (status variants) | AP Control Tower |
| `acct_contracts` | `AcctContractsPage` | AP Control Tower |
| `acct_app_*` | `AcctApprovalsPage` (status variants) | AP Control Tower |
| `acct_ap_*` | `AcctPayablesPage` (status variants) | AP Control Tower |
| `acct_an_*` | `AcctAnalyticsPage` (type variants) | AP Control Tower |
| `acct_ai_*` | `AcctAIPage` (type variants) | AP Control Tower |
| `hrdash` | `HRDashboardPage` | HR |
| `assistant` | `AIHRAssistantPage` | HR |
| `analytics` | `PeopleAnalyticsPage` | HR |
| `kpis` | `PerformanceKPIsPage` | HR |
| `employees` | `EmployeesPage` | HR |
| `assets` | `AssetRegisterPage` | HR |
| `birthdays` | `BirthdaysPage` | HR |
| `canteen` | `CanteenPage` | HR |
| `organization` | `OrganizationPage` | HR |
| `authority` | `AuthorityPage` | HR |
| `competency` | `CompetencyMatrixPage` | HR |
| `candidates` | `CandidatesPage` | HR |
| `onboarding` | `OnboardingPage` | HR |
| `training` | `TrainingPage` | HR |
| `appraisals` | `AppraisalsPage` | HR |
| `recruitment` | `RecruitmentPage` | HR |
| `handbook` | `HandbookPage` | HR |
| `corpaffairsdash` | `CorpAffairsDashPage` | Corporate Affairs |
| `contracts` | `ContractsPage` | Corporate Affairs |
| `compliance` | `ComplianceRegisterPage` | Corporate Affairs |
| `govhub` | `GovHubPage` | Corporate Affairs |
| `comptargets` | `ComplianceTargetsPage` | Corporate Affairs |
| `claims` | `ClaimsPage` | Corporate Affairs |
| `cco` | `CCODashboardPage` | Commercial |
| `website` | `WebsitePage` | Marketing |
| `news` | `NewsPage` | Marketing |
| `socials` | `SocialsPage` | Marketing |
| `salesintake` | `QuoteIntakePage` | Sales |
| `newbusiness` | `NewBusinessPage` | Sales |
| `salesplan` | `SalesPlanningPage` | Sales |
| `feedback` | `CustomerFeedbackPage` | Sales |
| `reviews` | `ReviewNudgePage` | Sales |
| `salespipe` | `SalesPipelinePage` | Sales |
| `salesperf` | `SalesPerformancePage` | Sales |
| `users` | `UserManagementPage` | Admin |
| `company` | `CompanyPage` | Admin |
| `access` | `AccessControlPage` | Admin |
| `license` | `LicensePage` | Admin |
| `branches` | `BranchesPage` | Admin |
| `audit` | `AuditLogPage` | Admin |
| `clients` | `ClientsPage` | General |
| `suppliers` | `SuppliersPage` | General |
| `locations` | `WarehouseLocationsPage` | General |
| `reports` | `ReportsPage` | General |
| `livedash` | `LiveDashboardPage` | General |
| `settings` | `SettingsPage` | General |
