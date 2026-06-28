# YCC APIP Platform — Component Documentation

**55+ exports · 5 reference pages built · 160 pages in nav**

Reference pages built: `CeoDashboard`, `AirWarehouse`, `AirTrackTrace`, `ScdForm`, `SettingsPage`

---

## Table

| Component | Category | Instances — reference pages (built) | Full-app page count | Reason for componentisation |
|---|---|---|---|---|
| **Container** | Layout primitive | — | All 160 pages via `PageShell` wrapper | Enforces consistent max-width + horizontal padding across every page without repeating Tailwind classes |
| **Row** | Layout primitive | — | ~80 pages (any flex-row layout) | Eliminates repeated `flex flex-wrap gap-N` patterns; gap and alignment props prevent inline style drift |
| **Col** | Layout primitive | — | ~80 pages (used inside `Row`) | Provides proportional column widths (1–12 span) without Bootstrap's specificity baggage |
| **Card** | Core primitive | CeoDashboard, AirWarehouse, AirTrackTrace, ScdForm, SettingsPage (all 5) | ~140 pages | Every content section is a white rounded-2xl bordered box — this single source removes ~500 duplicate style blocks across the app |
| **PanelCard** | Core primitive | CeoDashboard, AirTrackTrace, ScdForm, SettingsPage (4 pages) | ~60 pages — airdash, seadash, truckdash, officedash, financedash, hrdash, acct_dash, cco, singledash, wmsdash + all form pages | Titled card with icon header appears on every sub-dashboard and form; collapses a recurring 3-element header pattern into one prop |
| **Btn** | Core primitive | All 5 reference pages | ~130 pages — virtually every page with an action | Single token-consistent button prevents the navy/indigo/soft-bg colour drift that appeared in prototype when colour was hardcoded per page |
| **Kpi** | Core primitive | AirWarehouse (4 tiles) | ~15 pages — coo, cfo, cco, airdash, seadash, truckdash, wmsdash, singledash, officedash, financedash, hrdash, acct_dash, corpaffairsdash, livedash | KPI stat tile recurs on every dashboard page; extracting it locks the label-on-top + large-number + optional-tone pattern |
| **KV** | Core primitive | AirTrackTrace | ~25 pages — airtt, seatt, trucktt, scd, workstation, clearance, manifests, declarations, finance, contracts, claims, employees, assets + any detail modal | Key-value pair in a grid is the universal shipment-detail layout; keeps label style (10px uppercase faint) and value style (13px bold ink) consistent |
| **Lbl** | Core primitive | SettingsPage | ~30 pages — all form pages (scd, singledash, workstation, dataprep, employees, settings, company, users, onboarding, candidates, salesintake, chargecap, jobcosting, …) | Field label above an input; tiny but if left inline the uppercase-tracking-wide-faint style diverges across dozens of forms |
| **Badge** | Display atom | AirWarehouse (status column), AirTrackTrace (status strip) | ~50 pages — any page with a status column (warehouse, track, declarations, inspections, invoices, sortation, controltower, workstation, labelling, outfeed, clearance, acct_inv_*, acct_sup_*, candidates, appraisals, salesintake, salespipe, …) | Status chips appear in almost every DataTable and detail header; explicit `color`+`bg` props let callers pass semantic token values without re-implementing the pill shape |
| **Tag** | Display atom | AirWarehouse (active filter chips), AirTrackTrace (shipment flags), SettingsPage (role labels) | ~30 pages — warehouse, track, scd, settings, employees, candidates, training, contracts, goods listings | Auto-tinted chip (10% bg from colour) is used for mode labels, category tags, flags; avoids per-use opacity hacks |
| **Toggle** | Display atom | SettingsPage (6 toggles) | ~10 pages — settings, access, users, acct_settings, workstation (feature flags), onboarding, authority, connectivity | Two variants (bare pill vs labelled row) cover every settings/access-matrix use case; shared green-on / border-off colours prevent divergence |
| **Avatar** | Display atom | SettingsPage, Topbar (internal) | ~8 pages — settings, users, employees, hrdash, candidates, onboarding, appraisals + Topbar on all pages | Initials avatar with navy-for-admin / indigo-for-others rule needs to be in one place; role prop controls colour automatically |
| **Banner** | Display atom | CeoDashboard (info), AirWarehouse (warning), AirTrackTrace (warning), ScdForm (info) | ~40 pages — any page surfacing a status alert: airwh, airtt, seawh, seatt, truckwh, scd, singledash, workstation, clearance, bulkwarehouse, pgts, exchub, incidentregister, timeline, acct_ai_fraud, acct_inv_review, comptargets, claims, website, … | 4-variant info/success/warning/danger strip recurs across ops and compliance pages; variant prop controls bg + text + border colours centrally |
| **ActionRow** | Display atom | SettingsPage (security section) | ~20 pages — settings, access, users, employees, assets, contracts, compliance, authority, salesintake, exchub, archive, handbook, reports, acct_contracts, govhub, knowledgebase, dectypes, hscodes, whlocations | Tappable icon+label+right-slot list row; used everywhere settings, help, or reference navigation rows appear |
| **DataTable** | Data display | AirWarehouse | ~35 pages — air (Files), airwh, airtt, seawh, seatt, truckwh, trucktt, scd, singledash, clients, inspections, manifests, declarations, labelling, sortation, outfeed, finance, acct_inv_*, acct_sup_*, employees, contracts, compliance, salesintake, salespipe, candidates, appraisals, hscodes, dectypes, reports, audit, … | Typed generic table with CSS grid columns; `render` slot eliminates per-table cell branches. `searchable` prop adds built-in client-side search bar. |
| **statusCell** | Data display utility | AirWarehouse (status column) | Any DataTable with a status/state column (~35 pages) | Factory returning a `render` fn that maps values to `<Badge>` colours — replaces per-table status colour switch statements |
| **avatarCell** | Data display utility | SettingsPage-style user lists, employees | ~8 pages — users, employees, candidates, appraisals, onboarding | Factory returning a `render` fn that shows an `<Avatar>` from any string field; centralises the initials extraction |
| **toggleCell** | Data display utility | SettingsPage (access matrix style) | ~10 pages — access, users, workstation (feature flags), settings | Factory returning a `render` fn that embeds a `<Toggle>` in a table cell; handles stopPropagation so row-click doesn't also fire |
| **badgeCell** | Data display utility | Any table with dynamic colour logic | ~10 pages — risk scores, KPI thresholds, performance ratings | Factory like `statusCell` but colour is computed from a function rather than a fixed map; use when values are numeric or conditional |
| **TabSwitcher** | Data display | AirWarehouse | ~20 pages — airwh, seawh, truckwh, bulkwarehouse, inspections, outfeed, sortation, acct_inv_*, acct_app_*, finance, employees, salespipe, contracts, compliance, reports, audit, workstation, controltower | Pill filter row above a DataTable; active-navy / inactive-card+border pattern needs one source so all tab rows look identical |
| **Input** | Form | SettingsPage | ~15 pages — settings, users, company, clients, suppliers, salesintake, chargecap, datafix, archive, paylinks, costalloc, employees, onboarding | Standalone text input separate from AField, needed when label is managed externally (e.g. search bars, quick-edit inline fields) |
| **Textarea** | Form | ScdForm (notes) | ~12 pages — scd, singledash, incidentregister, claims, handbook, feedback, reviews, employees (notes), contracts (terms), onboarding (notes), compliance (remarks), govhub | Multi-line text; same border/radius/text styling as Input to ensure visual consistency on the same form |
| **AField** | Form | ScdForm (8 fields), SettingsPage (4 fields) | ~30 pages — scd, singledash, workstation, dataprep, clearance, ioss, chargecap, jobcosting, ghacharges, weightvol, deposits, employees, onboarding, candidates, settings, company, users, salesintake, newbusiness, contracts, costalloc, thirdpartyinv, transfers, transit, bonded, pgts, transport, clients, suppliers | AI-prefilled form field — the label + AI-confidence-badge + input/select wrapper is the platform's primary data-entry pattern; ensures badge colour, confidence display and edited-state styling are consistent everywhere |
| **Sel** | Form | AirWarehouse (destination filter) | ~35 pages — all warehouse list pages, all track pages, scd, workstation, labelling, sortation, clearance, dataprep, inspections, chargecap, transfers, bulkwarehouse, controltower, acct_inv_*, employees, salespipe, salesintake, reports, audit, hscodes, costalloc, debtors, jobcosting, finance, finledger | Compact inline select, used pervasively as a filter chip or quick-pick field in toolbars and forms |
| **Seg** | Form | ScdForm (direction selector) | ~20 pages — scd, singledash, airwh (view toggle), seawh, truckwh, acct_dash (period), hrdash (period), officedash, financedash, reports, livedash, analytics, kpis, controltower, workstation, outfeed, dataprep, weightvol, costalloc | Segmented button for mutually exclusive options; replaces radio groups and avoids bespoke toggle-button CSS in toolbars and forms |
| **Select** | Form | ScdForm, SettingsPage (drop-in for labeled form selects) | ~30 pages — any page where a labeled `<select>` sits inside a form grid alongside `Input`/`Textarea` fields: scd, singledash, employees, clients, onboarding, candidates, contracts, salesintake, chargecap, costalloc, … | Full-width labeled select matching `Input` height and border; distinct from compact `Sel` (toolbar/filter use) — ensures consistent `Lbl` + bordered select pattern across all multi-field forms |
| **FormSection** | Form | ScdForm (shipper/consignee/cargo sections), ScdForm | ~25 pages — any multi-section form: scd, singledash, employees, onboarding, clients, salesintake, newbusiness, contracts, acct_settings, settings, candidates, compliance, govhub, costalloc, chargecap, weightvol, ioss, transfers, transit, bonded, pgts, ghacharges, thirdpartyinv, workstation, clearance | Titled section divider within a form; collapses the recurring uppercase-label + optional-description + children pattern that separates shipper, consignee, cargo, and customs sections |
| **Spinner** | Feedback | ScdForm (submit loading state) | ~40 pages — any page with async submission or data loading: scd, singledash, clearance, workstation, acct_inv_review, acct_app_pending, acct_ap_run, employees, onboarding, salesintake, + all dashboard pages on initial load | Loading indicator; 14px default fits inline in buttons; `light` prop covers dark-bg scenarios (navy Btn with spinner) |
| **Toast** | Feedback | ScdForm (success after submit), SettingsPage (success on save) | ~35 pages — any page with a form submit or state-change action | Fixed-position transient notification; 4-variant colour system matches Banner variants for visual language consistency |
| **ToastStack** | Feedback | App root (wraps all pages) | 1 mount point (App.tsx) serving all 160 pages | Portal container for multiple simultaneous toasts; lives at app root so any page can trigger a toast without managing its own fixed-position layer |
| **useToast** | Feedback (hook) | App root | 1 mount point — serves all 160 pages | Encapsulates toast state management (`add`, `dismiss`, auto-timeout); prevents each page from re-implementing the `useState` + `setTimeout` pattern; `toast.success()` / `toast.danger()` shorthand keeps callsites clean |
| **Modal** | Feedback | ScdForm (confirmation dialogs), SettingsPage (password change), AirWarehouse (shipment detail) | ~40 pages — any page with a confirm action, detail panel, or multi-step overlay: scd, singledash, clearance, workstation, employees, clients, contracts, compliance, salesintake, salespipe, acct_app_pending, acct_inv_review, manifests, declarations, inspections, bonded, transfers, transit, hscodes, onboarding, candidates, appraisals, … | Full overlay dialog with portal, ESC/backdrop close, scrollable body, and footer action slot; prevents per-page fixed-position overlay re-implementations |
| **Stepper** | Feedback | AirTrackTrace | ~8 pages — airtt, seatt, trucktt, scd (declaration steps), singledash (filing steps), clearance (clearance steps), onboarding (HR onboarding), workstation | Horizontal step-progress bar with icon circles and connector lines; recurs across all track-and-trace and multi-step workflow pages |
| **DropZone** | Feedback | ScdForm (manifest upload) | ~15 pages — scd, singledash, manifests, airdocs, seadocs, truckdocs, archive, handbook, govhub, contracts (attachments), compliance (evidence), employees (docs), training (certs), candidates (CV), claims (evidence) | Drag-and-drop file upload; consistent dashed-border + accent-on-hover + file-selected state; locked prop disables it for read-only views |
| **NoAccess** | Feedback | NotBuilt placeholder page (any locked nav route) | ~30 pages — any page the current role can't access | Permission-denied empty state; shown instead of page content when the user's role lacks access; centralising it prevents per-page "not authorised" ad-hoc designs |
| **Donut** | Chart | — | ~8 pages — ceo, coo, cfo, cco, airdash, seadash, truckdash, livedash | SVG stroke-dashoffset ring renders a % with no external chart library; small and lightweight for dashboard widget areas |
| **TrendSpark** | Chart | — | ~12 pages — ceo, coo, cfo, cco, airdash, seadash, truckdash, officedash, financedash, hrdash, acct_an_cash, livedash | 84×26px polyline sparkline + directional arrow fits inline in KPI rows and widget cards; `upGood` prop makes the colour logic declarative |
| **CompareBar** | Chart | AirTrackTrace (weight/volume) | ~6 pages — airtt, seatt, trucktt, workstation (measurement check), weightvol (backoffice), inspections | Declared vs measured dual bar with >10% red flag; the deviation-coloring rule lives in one place instead of being reimplemented per measurement field |
| **Factor** | Chart | AirTrackTrace (risk factors) | ~5 pages — airtt (risk panel), seatt, controltower, acct_ai_findings, incidentregister | Small labelled progress bar with 3-tier colour (green/orange/red); used in risk scoring panels on operations and AI-insight pages |
| **DistBars** | Chart | — | ~8 pages — ceo, coo, cfo, airdash, seadash, truckdash, hrdash (headcount), acct_an_spend | Stacked labelled bar rows for distribution breakdowns; replaces pie charts (inaccessible, hard to label) with a readable vertical list |
| **ModuleCard** | Composite | CeoDashboard (Air, Sea, Road cards) | ~3 pages — ceo, home, livedash | Module overview tile with GPM badge + inbound/outbound counts; the GPM-colour-coding rule (green/orange/red) lives here, not in 3 separate dashboard implementations |
| **EscalationRow** | Composite | CeoDashboard (inside EscalationsPanel) | ~5 pages — ceo, coo, cfo, cco, escalations | Single escalation list row with dept pill + severity days + click; dept-tone and day-tone rules centralised here |
| **EscalationsPanel** | Composite | CeoDashboard | ~5 pages — ceo, coo, cfo, cco, escalations | Titled panel wrapping `EscalationRow` list with empty-state ("nothing overdue"); always shown in C-suite dashboards |
| **Top5Card** | Composite | CeoDashboard (categories + customers) | ~5 pages — ceo, airdash, seadash, truckdash, cco | Ranked list with scaled bar chart; `barScale` prop normalises values that don't reach 100% |
| **WidgetCard** | Composite | — | ~10 pages — ceo, coo, cfo, cco, airdash, seadash, truckdash, wmsdash, officedash, livedash | Titled widget wrapper with optional "Open →" link; standardises the dashboard grid cell header |
| **MiniRow** | Composite | AirTrackTrace (shipment summary) | ~8 pages — coo, airdash, airtt, seatt, trucktt, wmsdash, livedash | 3-column stat tile row; fits inside `WidgetCard` or `Card` as a quick-stats sub-section |
| **OpsToDoRow** | Composite | — | ~6 pages — coo, airdash, seadash, truckdash, wmsdash | Single action todo tile with count badge + open button; the navy "Open" button lives here, not repeated per dashboard |
| **OpsToDoList** | Composite | — | ~6 pages — same as OpsToDoRow | Wraps multiple `OpsToDoRow` items with an all-clear empty state; prevents each dashboard from re-implementing the empty-state individually |
| **PageShell** | Shell / Layout | All 5 reference pages (wraps every page) | All 160 pages | The fundamental 3-column shell (sidebar + topbar + main); extracting it means scroll, overflow, and min-height are defined once |
| **Sidebar** | Shell / Layout | All 5 reference pages | All 160 pages | Full collapsible navigation with group dividers, sub-section accordions, and active-page highlighting |
| **SidebarItem** | Shell / Layout | All 5 reference pages (inside Sidebar) | All 160 pages (inside Sidebar) | Single nav row with icon + label + active state; separated from `Sidebar` so non-sidebar surfaces (e.g. mobile bottom bar) can reuse the same item style |
| **Topbar** | Shell / Layout | All 5 reference pages | All 160 pages | Search bar + language + notifications + user menu; extracting it means the user-switcher, notification dot, and `border-0` UA-reset live in one file |
| **PageHeader** | Shell / Layout | All 5 reference pages | ~155 pages (every content page) | Breadcrumb + title + action slot above the page body; ensures all 155 pages have the same vertical rhythm and title sizing |
| **Breadcrumb** | Shell / Layout | All 5 reference pages | ~155 pages (inside PageHeader) | 2–3 level breadcrumb trail; separator glyph and faint-for-parent / ink-for-current colour live here |
| **Footer** | Shell / Layout | All 5 reference pages (inside Sidebar bottom) | All 160 pages (inside Sidebar) | Version number + legal link; updated in one file rather than in every page's sidebar slot |
| **WorkspaceSwitcher** | Shell / Layout | All 5 reference pages (inside Sidebar top) | All 160 pages (inside Sidebar) | Branch/network selector select with border-0 UA reset; the list of branches + active highlight lives here |

---

## Categories summary

| Category | Component count |
|---|---|
| Layout primitive | 3 |
| Core primitive | 6 |
| Display atom | 6 |
| Data display | 2 |
| Data display utility (cell helpers) | 4 |
| Form | 7 |
| Feedback | 9 |
| Chart | 5 |
| Composite | 9 |
| Shell / Layout | 9 |
| **Total** | **60 components / 55+ named exports** |

> Named exports exceed component count because many files also export TypeScript interfaces (`TableCol`, `EscalationItem`, `ToastVariant`, `StepperStage`, `Top5Item`, `MiniRowItem`, `OpsAction`, `BannerVariant`, `TabItem`, `FieldMeta`, `TopbarUser`, `ToastItem`, `DistBarRow`).

---

## Reference pages built

| Page | Route key | Components used |
|---|---|---|
| **CEO Dashboard** | `ceo` | PageHeader · Banner · ModuleCard · EscalationsPanel · Top5Card |
| **Air Freight · Warehouse** | `airwh` | PageHeader · Banner · Kpi · TabSwitcher · DataTable · Btn · Badge · Tag · Sel |
| **Air Freight · Track & Trace** | `airtt` | PageHeader · Banner · Badge · Tag · Stepper · Card · PanelCard · KV · CompareBar · Factor · MiniRow · Btn |
| **Customs · Single Declaration (form)** | `scd` | PageHeader · Banner · Card · PanelCard · AField · Seg · DropZone · Btn · Spinner · Tag |
| **General · Settings** | `settings` | PageHeader · Card · PanelCard · AField · Toggle · Avatar · Btn · Tag · ActionRow · Lbl · Input |

---

## Components not in any reference page (but built and tested in gallery)

| Component | First page it would appear on in the full app |
|---|---|
| Container | Any page using a centered-width layout outside PageShell |
| Row / Col | First page needing a flex grid that isn't CSS `grid` |
| Textarea | `incidentregister` — multi-line incident notes |
| Select | `employees` — form with labeled selects in a grid |
| FormSection | `scd` (already used conceptually) / `employees` (explicit section headers) |
| Modal | `scd` — confirmation before submission |
| useToast | App root — already used in App.tsx to serve all pages |
| statusCell | `airwh` — status column via DataTable render slot |
| avatarCell | `employees` — assignee column |
| toggleCell | `access` — role/feature flag matrix |
| badgeCell | `acct_ai_findings` — dynamic score colouring |
| NoAccess | Any restricted page (e.g. `license` for non-admin users) |
| OpsToDoRow / OpsToDoList | `coo` — COO dashboard action list |
| EscalationRow | `escalations` — dedicated escalations list page |
| WidgetCard | `airdash` — dashboard widget grid |
| Top5Card | `airdash` — top destinations |
| Donut | `airdash` — on-time donut |
| TrendSpark | `airdash` — trend indicators |
| DistBars | `airdash` — distribution breakdown |
| ModuleCard | `home` — platform home screen |
| MiniRow | `airdash` — quick stats |
| CompareBar | `weightvol` — backoffice weight/volume checker |
| Factor | `controltower` — customs control tower risk panel |
| ToastStack | App root — always mounted, triggered by any page action |
