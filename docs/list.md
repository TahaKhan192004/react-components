# Reusable Component List — YCC APIP Platform

> Source: `yourcargocontact.com/demo/apip.html`
> Rule: **used in 2+ pages OR is a structural/layout primitive** — no one-off module pages.
> Columns: **#** · **Name** · **Description** · **Screenshot?**

---

## 1. PRIMITIVES

Building blocks used on every page.

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 1 | `Card` | White `rounded-2xl` container with `1px border`. Optional `pad={false}` removes internal padding. Root surface for all content. | N |
| 2 | `PanelCard` | `Card` with a header row: 15px accent-colored icon + bold `text-sm` title + children slot. Dominant section container across the whole app. | N |
| 3 | `Btn` | Button. Two variants: **dark** (navy bg / white text) and **light** (white bg / ink text / border). Optional leading icon at 14px. `disabled` fades to 40% opacity. | N |
| 4 | `Kpi` / `StatCard` | Stat tile: 10px uppercase tracking-wide label + 24px bold value + optional unit suffix + optional `tone` color override for the value. Used in 2–6 column grids everywhere. | N |
| 5 | `KV` | Key-value pair: 10px uppercase faint label above, `font-semibold` value below. Used in detail grids, dossiers, bonded warehouse. | N |
| 6 | `Lbl` | 10px uppercase semibold label (tracking-wide, `C.sub` color). Sits above every form input. | N |

---

## 2. SHELL / LAYOUT

Structural components that define every page.

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 7 | `PageShell` | Root layout: `flex min-h-screen`. Sidebar (224px fixed) + right column (Topbar 58px + scrollable main). Not named in source — the `div` pattern used everywhere. | N |
| 8 | `Sidebar` | 224px sticky left nav. Logo zone → role chip → branch selector → accordion nav groups → website link → copyright footer. | **Y** — accordion open/closed states, active item highlight |
| 9 | `SidebarItem` | Leaf nav button inside Sidebar. Active: `indigoBg` bg + `indigo` text. Default: transparent + `sub` text. 12px medium, `rounded-lg`. `ChevronDown` rotates on section collapse. | N |
| 10 | `Topbar` | 58px fixed header. Global search bar + `Globe` language button + `Bell` notification icon with dot + user avatar circle (32px) + user name/role + user-switch dropdown (w-56). | **Y** — dropdown layout, notification dot position |
| 11 | `PageHeader` | Page title area: breadcrumb trail (11px, `ChevronRight` separators) + `text-xl font-bold` h1 + optional right-side action slot. Used on every content page. | N |
| 12 | `Breadcrumb` | The trail part of `PageHeader`. Extractable: array of strings → `ChevronRight`-separated spans. 11px `C.sub`. | N |
| 13 | `Footer` | Bottom of Sidebar: `px-5 py-3`, `border-t`, `text-[9px]` faint copyright line. | N |
| 14 | `WorkspaceSwitcher` | Branch `<select>` inside Sidebar header. `rounded-lg`, border, soft bg. Filters branches by own type. | **Y** — need to see open-state styling |

---

## 3. STATUS & FEEDBACK

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 15 | `Badge` | `rounded-full` status badge for parcel/shipment outcomes (released / review / hold / inspect / unknown / missing). Uses `STATUS` color map. | N |
| 16 | `Pill` | Same shape as Badge but for clearance/file milestone states (cleared / progress / hold / pending / active / inactive). Uses `MPILL` map. | N |
| 17 | `Chip` | Inline tag with arbitrary `text` + `color` + `bg` props. Base component — direction chips and T-status chips are instances. | N |
| 18 | `Tag` / `TChip` | T1/T2 customs bonded chip. Blue (T1) and purple (T2) pair. Sits inline in row meta. | N |
| 19 | `Banner` | Alert/info banner. `rounded-xl` colored bg + matching border + leading icon + text. Variants: **red** (danger), **amber** (warning), **green** (success), **indigo** (info). Seen on multiple pages. | N |
| 20 | `ConnPill` | Connectivity status pill: live / degraded / down. Pulsing dot (`flpulse` animation) + label. | N |

---

## 4. NAVIGATION & WAYFINDING

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 21 | `TabSwitcher` | `rounded-full` pill container + pill buttons. `accent` bg on active tab. Optional badge count on each tab. Used on Track & Trace and Workstation. | N |
| 22 | `Stepper` | Horizontal milestone stepper. Each step: 28×28 circle (accent = done, faint = pending) + icon + label beneath. Connector bar between steps. Inbound (6 stages) and Outbound (5 stages) variants in source. | **Y** — step spacing, connector width, label wrapping under circle |
| 23 | `SearchBar` | `soft` bg `rounded-lg` search input with `Search` icon (14px). Used on every list page. Max-width configurable. | N |

---

## 5. DATA DISPLAY

Components for presenting data in rows, grids, and tiles.

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 24 | `Avatar` | Circle avatar. Variants: **sm** 24px (dropdown list), **md** 28px (stepper), **base** 32px (topbar user), **lg** 36px (row icon container). `indigo` bg, white initial letter. | N |
| 25 | `ActionRow` | List row pattern: 36×36 `soft` bg icon avatar + ref/AWB + status chips + meta line + right-side action or chevron. Used on every list page across all modules. | **Y** — icon avatar alignment, chip stacking, meta line spacing |
| 26 | `MiniDashboard` | Compact widget: 4 `Kpi` tiles + quick-action buttons below. Used on the home page for each module card. | **Y** — widget card layout |
| 27 | `DocHeader` | Print-only eco banner: green dot + "Please don't print" message. Sits at top of Dossier and Proforma. | N |

---

## 6. FORM & INPUT

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 28 | `Toggle` | Two-button segmented toggle for binary choices (e.g. Import / Export, T1 / T2). One side active with `accent` or color bg. | N |
| 29 | `Sel` | Styled `<select>` wrapper: `rounded-lg`, border, soft bg, consistent with form inputs. | N |
| 30 | `AField` | Form field wrapper: `Lbl` above + input below, standard spacing. | N |
| 31 | `Seg` | Multi-option segmented control (more than 2 options). Tab-style button group inside a `soft` bg container. | N |

---

## 7. UPLOAD & MEDIA

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 32 | `ScanZone` | Drag-and-drop document/photo upload zone. Dashed border turns `accent` on drag-over. Thumbnail grid (88×64px) with `Trash2` remove per item. Used in Air Warehouse and WMS. | **Y** — thumbnail grid layout, drag-over state |
| 33 | `DropZone` | Simplified file drop zone for CSV/data files. No thumbnail grid. Text-only drop target. Used in Workstation. | N |

---

## 8. VISUALISATION

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 34 | `Donut` | SVG donut chart: circular track + progress arc + centered percentage text. Props: `value`, `color`, `size` (default 52px). | N |
| 35 | `TrendSpark` | SVG sparkline (84×26px `<polyline>` from data array) + trend arrow character. Up trend → red ▲, down → green ▼. | N |
| 36 | `CompareBar` | Declared vs measured dual horizontal bars. If delta >10%, measured bar renders in red. Missing measurement shows "not captured" text. | N |
| 37 | `Factor` | Single risk/metric bar: label + percentage + horizontal progress bar. Color bands: green (<15%), orange (<35%), red (≥35%). | N |
| 38 | `DistBars` | Segmented distribution bar: one color segment per STATUS key, proportional widths. Used in BatchReport outcome summary. | N |

---

## 9. AI / CONSENSUS

Reusable only within the APIP compliance context but distinct enough to extract.

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 39 | `BotDot` | 20×20 `rounded-full` colored circle with bot initial letter. 4 bots: VIS (blue), HIST (sky), LLM (purple), STAT (teal). | N |
| 40 | `BasisChips` | `"basis:"` label + list of soft-bg bordered chip strings. Shows AI decision basis. | N |
| 41 | `EnrichPanel` | AI enrichment result card: icon + title, original → enriched field text, 2×2 BotDot contribution grid, BasisChips. | **Y** — bot grid arrangement, original→enriched text layout |
| 42 | `VotePanel` | AI vote outcome card: outcome pill (applied / flag / escalate), 4-bot grid (BotDot + agrees/alt + output value + confidence %), BasisChips. | **Y** — bot grid and outcome pill |
| 43 | `ConsensusPanel` | Thin wrapper: renders `EnrichPanel` or `VotePanel` based on `kind` prop. No visual output of its own. | N |

---

## 10. UTILITY

| # | Name | Description | Screenshot? |
|---|------|-------------|-------------|
| 44 | `NotifyChip` | Notification preference chip: `BellOff` (none / faint), `Bell` (milestones / blue), `Bell` (all / green). Inline 11px. | N |
| 45 | `Spinner` | Loading spinner — animated indicator for async states. | N |
| 46 | `Sel` | Already listed in Forms (#29). | — |
| 47 | `LeafMark` | Inline green leaf SVG (configurable size + color). Used inside DocHeader. Extractable standalone. | N |
| 48 | `NoAccess` | Access-denied page: `Lock` icon + message. Shown when role lacks permission for a route. | N |

---

## Summary

| Category | Count | All N? |
|----------|-------|--------|
| Primitives | 6 | Yes |
| Shell / Layout | 8 | 2 need screenshots |
| Status & Feedback | 6 | No |
| Navigation | 3 | 1 needs screenshot |
| Data Display | 4 | 2 need screenshots |
| Form & Input | 4 | Yes |
| Upload & Media | 2 | 1 needs screenshot |
| Visualisation | 5 | Yes |
| AI / Consensus | 5 | 2 need screenshots |
| Utility | 4 | Yes |
| **Total** | **47** | **8 need screenshots** |

### The 8 that need screenshots
| Component | What to show |
|-----------|-------------|
| `Sidebar` | Accordion section expanded + collapsed; active item; branch selector |
| `Topbar` | User dropdown open; notification dot position |
| `WorkspaceSwitcher` | Open state |
| `Stepper` | Full inbound 6-step sequence |
| `ActionRow` | A real list row: icon + chips + meta + right action |
| `ScanZone` | Drag-over state + 2–3 thumbnails loaded |
| `EnrichPanel` | Bot grid + original→enriched text |
| `VotePanel` | 4-bot grid + outcome pill |
