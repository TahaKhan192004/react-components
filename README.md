# YCC APIP UI

Component library reverse-engineered from the YCC (Your Cargo Contact) APIP Platform — a full-featured customs, logistics, and freight management SaaS. Built with **React 18**, **TypeScript 5**, and **Tailwind CSS 3**.

**60 components · 55+ named exports · 5 reference pages · 160-page nav tree**

---

## Installation

```bash
npm i @yourcargoc/ui
```

> `lucide-react`, `react`, and `react-dom` are peer dependencies — npm v7+ installs them automatically. If you use Lucide icons directly in your own code, add it explicitly: `npm i lucide-react`.

**Package page:** https://www.npmjs.com/package/@yourcargoc/ui

---

## Using @yourcargoc/ui in a New Project

> **Tailwind CSS 3 is required.** The library's components use Tailwind utility classes — your project must run Tailwind so those classes are generated.

### Step 1 — Create a React project

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

### Step 2 — Install the package and Tailwind CSS 3

```bash
npm i @yourcargoc/ui
npm i -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### Step 3 — Configure Tailwind

In `tailwind.config.js`, add the content paths so Tailwind scans both your source and the component library's bundled JS:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/@yourcargoc/ui/dist/**/*.js',
  ],
  theme: { extend: {} },
  plugins: [],
}
```

### Step 4 — Set up your CSS

Replace `src/index.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
  background-color: #F4F5F9;
  color: #1B2440;
}
```

Make sure `src/main.tsx` imports it:

```tsx
import './index.css'
```

### Step 5 — Use components

```tsx
import { Card, Btn, Badge, useToast, ToastStack } from '@yourcargoc/ui'

export default function App() {
  const { toast, toasts, dismiss } = useToast()

  return (
    <Card>
      <Badge label="Released" color="#15803D" bg="#DCFCE7" />
      <Btn dark onClick={() => toast.success('It works!')}>Click me</Btn>
      <ToastStack toasts={toasts} onDismiss={dismiss} />
    </Card>
  )
}
```

### Step 6 — Run

```bash
npm run dev
```

> **Note:** `dist/ycc-ui.css` is still shipped in the package for quick prototypes that don't use Tailwind, but Tailwind is the recommended and fully supported path.

---

## Quick Start

```tsx
import { Card, Btn, DataTable, useToast, ToastStack } from '@yourcargoc/ui'

function Example() {
  const { toast, toasts, dismiss } = useToast()

  return (
    <Card>
      <Btn dark onClick={() => toast.success('Done!')}>Submit</Btn>
      <ToastStack toasts={toasts} onDismiss={dismiss} />
    </Card>
  )
}
```

---

## Tailwind Setup

> **Note for library contributors:** the `ay/` repo's own Tailwind config uses `preflight: false` to avoid conflicts with the original prototype's CSS reset. Consumer projects should use the standard Tailwind setup (with preflight) as shown in Step 3 above.

---

## Token System

All design values are bundled with the package. Import from the barrel:

```ts
import { primary, neutral } from '@yourcargoc/ui'
```

| Token | Value | Usage |
|-------|-------|-------|
| `primary.indigo` | `#6366F1` | Active nav text, user avatar bg, role chip |
| `primary.indigoBg` | `#EEF0FE` | Active nav bg, info banner bg |
| `primary.accent` | `#5B7CE6` | Action icons, stepper fill, "Open →" links |
| `primary.navy` | `#0E1438` | Dark buttons, sidebar admin badge |
| `neutral.page` | `#F4F5F9` | App root background |
| `neutral.card` | `#FFFFFF` | Card surfaces, sidebar, topbar |
| `neutral.soft` | `#F6F7FB` | Inset backgrounds, form field bg, empty states |
| `neutral.border` | `#E8EAF2` | Card borders, dividers, input borders |
| `neutral.ink` | `#1B2440` | Primary text |
| `neutral.sub` | `#8A93AD` | Secondary text, labels |
| `neutral.faint` | `#AEB4C9` | Placeholder, disabled, footnotes |

---

## Components

---

### Layout Primitives

---

#### Container

Max-width centered wrapper (`max-w-screen-xl`, `px-6`). Accepts all `HTMLDivElement` attributes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Extra classes |
| `style` | `CSSProperties` | — | Inline styles |
| `...rest` | `HTMLAttributes<HTMLDivElement>` | — | Any div attribute |

```tsx
<Container>
  <p>Content stays within 1280px max-width with px-6 padding.</p>
</Container>
```

---

#### Row

Flex row with configurable gap, wrap, alignment and justification.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `number` | `4` | Tailwind gap scale value |
| `wrap` | `boolean` | `true` | Enables `flex-wrap` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'start'` | `align-items` |
| `justify` | `'start' \| 'center' \| 'end' \| 'between'` | `'start'` | `justify-content` |
| `className` | `string` | `''` | Extra classes |

```tsx
<Row gap={3} align="center" justify="between">
  <Btn>Cancel</Btn>
  <Btn dark>Save</Btn>
</Row>
```

---

#### Col

Flex column for use inside `<Row>`. 1–12 span system (fractions of 12). Omit `span` for `flex-1`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `span` | `1 \| 2 \| … \| 12` | — | Width as fraction of 12 columns |
| `className` | `string` | `''` | Extra classes |

```tsx
<Row>
  <Col span={8}><Input value={name} onChange={e => setName(e.target.value)} /></Col>
  <Col span={4}><Sel value={mode} onChange={setMode} opts={MODES} /></Col>
</Row>
```

---

### Core Primitives

---

#### Card

White rounded box — the base surface for every content section.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Card content |
| `pad` | `boolean` | `true` | Adds `p-4`. Set `false` for flush content (e.g. full-bleed tables). |

```tsx
<Card>
  <p>Default padded content.</p>
</Card>

<Card pad={false}>
  <DataTable ... />
</Card>
```

---

#### PanelCard

Titled card with a Lucide icon header in `primary.accent`. Used for settings panels and sub-dashboard sections.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Card heading |
| `icon` | `LucideIcon` | — | Lucide icon shown left of the title |
| `children` | `ReactNode` | — | Card body |

```tsx
<PanelCard title="Notifications" icon={Bell}>
  <Toggle on={email} onChange={setEmail} label="Email alerts" />
</PanelCard>
```

---

#### Btn

Action button. Two variants: default (bordered white, ink text) and dark (navy fill, white text).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Button label |
| `onClick` | `() => void` | — | Click handler |
| `dark` | `boolean` | `false` | Navy fill, white text |
| `icon` | `LucideIcon` | — | Lucide icon rendered at 14px, left of label |
| `disabled` | `boolean` | `false` | Dims button to 40% opacity |

```tsx
<Btn onClick={cancel}>Cancel</Btn>
<Btn dark icon={Save} onClick={save}>Save changes</Btn>
<Btn dark icon={Plus} disabled>Add row</Btn>
```

---

#### Kpi

KPI stat tile — uppercase 10px label above a large `text-2xl` number with optional unit and colour tone.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Uppercase label above the value |
| `v` | `string \| number` | — | Main KPI value |
| `sub` | `string` | — | Small sub-text appended to value (e.g. `'AWBs'`) |
| `tone` | `string` | `neutral.ink` | Hex colour for the value (e.g. green for on-target) |

```tsx
<div className="grid grid-cols-4 gap-3">
  <Kpi label="Shipments today" v={412} sub="AWBs" />
  <Kpi label="On-time delivery" v="87%" tone="#16A34A" />
  <Kpi label="GPM" v="24.6%" tone="#16A34A" />
  <Kpi label="On Hold" v={7} tone="#B91C1C" />
</div>
```

---

#### KV

Key-value pair for detail grids. Faint uppercase key, bold value.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `k` | `string` | — | Key / label |
| `v` | `string` | — | Value |

```tsx
<div className="grid grid-cols-3 gap-3">
  <KV k="AWB" v="172-42154893" />
  <KV k="Origin" v="DXB" />
  <KV k="Destination" v="AMS" />
  <KV k="Weight" v="487 kg" />
</div>
```

---

#### Lbl

10px uppercase field label with letter-spacing. Use above `Input` or `Textarea` when not using `AField`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Label text |

```tsx
<Lbl>Username</Lbl>
<Input value="sophie.verhoeven" readOnly />
```

---

#### Badge

Coloured pill chip requiring explicit `color` and `bg`. For computed/dynamic colours use `Tag` instead.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Pill text |
| `color` | `string` | — | Text colour hex |
| `bg` | `string` | — | Background colour hex |

```tsx
<Badge label="Released"  color="#15803D" bg="#DCFCE7" />
<Badge label="On Hold"   color="#B91C1C" bg="#FEE2E2" />
<Badge label="In Review" color="#D97706" bg="#FEF3C7" />
```

---

#### Tag

Auto-tinted chip — background is `color + '1A'` (10% opacity). For mode labels, category tags, shipment flags.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Tag text |
| `color` | `string` | `neutral.sub` | Text colour; bg auto-computed as `color + '1A'` |

```tsx
<Tag label="Air Freight" color="#6366F1" />
<Tag label="Export"      color="#0E7490" />
<Tag label="Fragile"     color="#EA580C" />
```

---

#### Toggle

Pill toggle switch. Without `label`: bare track only. With `label`: full labelled settings row with optional sub-text.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `on` | `boolean` | — | Current state |
| `onChange` | `(next: boolean) => void` | — | Called with new state on click |
| `label` | `string` | — | If provided, renders as a soft-bg labelled row |
| `sub` | `string` | — | Secondary description under label (only with `label`) |

```tsx
// Bare (e.g. in a table cell via toggleCell helper)
<Toggle on={row.active} onChange={next => update(row.id, next)} />

// Labelled row (e.g. settings panel)
<Toggle
  on={emailNotif}
  onChange={setEmailNotif}
  label="Email notifications"
  sub="Shipment updates, custom alerts and escalations"
/>
```

---

#### Avatar

Initials circle. Admin → navy; any other role → indigo. Override with `bg`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Full name — first character used as initials |
| `role` | `'admin' \| string` | — | `'admin'` → navy; anything else → indigo |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | `sm`=24px `md`=32px `lg`=40px |
| `bg` | `string` | — | Override background hex |

```tsx
<Avatar name="Sophie Verhoeven" size="lg" />
<Avatar name="Root Admin" role="admin" />
<Avatar name="AI System" bg="#8B5CF6" />
```

---

#### Banner

Page-level alert strip. 4 variants matching `Toast` colours for consistent visual language.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Colour scheme |
| `icon` | `LucideIcon` | — | Lucide icon left of title |
| `title` | `string` | — | Bold heading |
| `body` | `ReactNode` | — | Body text below the title |
| `action` | `ReactNode` | — | Slot right of title (e.g. `<Btn>`) |
| `moduleId` | `string` | — | Monospace code chip after the title |

```tsx
<Banner
  variant="warning"
  icon={AlertTriangle}
  title="3 shipments on customs hold"
  body="Clear before end-of-day to avoid storage charges."
  action={<Btn onClick={review}>Review</Btn>}
/>

<Banner variant="info" icon={TrendingUp} title="Outcomes, not tasks" />
```

---

#### ActionRow

Tappable list row: optional icon + label + sub + right slot. Defaults to `<ArrowRight>` in the right slot.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Primary text |
| `sub` | `string` | — | Secondary text below label |
| `icon` | `LucideIcon` | — | Optional left icon |
| `iconColor` | `string` | `neutral.sub` | Icon colour |
| `right` | `ReactNode` | `<ArrowRight>` | Right slot |
| `onClick` | `() => void` | — | Click handler |

```tsx
<ActionRow label="Change password" sub="Last changed 3 months ago" onClick={openPwDialog} />
<ActionRow icon={Lock} label="API tokens" sub="1 token issued" right={<Badge label="1" color="#6366F1" bg="#EEF0FE" />} />
```

---

### Data Display

---

#### DataTable

Generic typed table using CSS grid columns (not `<table>`). Handles horizontal scroll, custom cell renderers, searchable mode, and click-through rows.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `TableCol<T>[]` | — | Column definitions |
| `rows` | `T[]` | — | Data rows |
| `keyFn` | `(row: T) => string` | — | **Required.** Returns a unique key per row |
| `onRowClick` | `(row: T) => void` | — | Makes rows clickable `<button>` elements |
| `empty` | `string` | `'No rows to show.'` | Empty-state message |
| `minWidth` | `number` | `600` | Min px width before horizontal scroll |
| `footer` | `string` | — | Footnote text below the table |
| `searchable` | `boolean` | `false` | Adds a search bar that filters rows client-side |
| `searchPlaceholder` | `string` | `'Search…'` | Search bar placeholder |

**`TableCol<T>` fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `key` | `string` | — | Property name on `T` |
| `label` | `string` | — | Column header |
| `width` | `string` | `'1fr'` | CSS grid track (`'100px'`, `'minmax(120px,2fr)'`) |
| `align` | `'left' \| 'right' \| 'center'` | `'left'` | Text alignment |
| `render` | `(row: T) => ReactNode` | — | Custom cell renderer |
| `searchable` | `boolean` | `true` | Set `false` to exclude from search filtering |

```tsx
interface ShipRow { awb: string; dest: string; status: string; active: boolean; agent: string }

<DataTable<ShipRow>
  searchable
  searchPlaceholder="Search AWB, destination..."
  cols={[
    { key: 'awb',    label: 'AWB',         width: '130px' },
    { key: 'dest',   label: 'Destination', width: '1fr' },
    { key: 'agent',  label: 'Agent',       width: '80px',
      render: avatarCell('agent') },
    { key: 'status', label: 'Status',      width: '110px',
      render: statusCell('status', {
        Released:  { color: '#15803D', bg: '#DCFCE7' },
        'On Hold': { color: '#B91C1C', bg: '#FEE2E2' },
      }) },
    { key: 'active', label: 'Active',      width: '70px',
      render: toggleCell('active', (row, next) => updateRow(row.awb, next)) },
  ]}
  rows={rows}
  keyFn={r => r.awb}
  onRowClick={r => openDetail(r.awb)}
  footer="Showing all shipments in the current warehouse cycle."
/>
```

---

#### TabSwitcher

Pill filter/tab row. Typically placed above `DataTable` to filter by category or status.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[] \| string[]` | — | Tabs. Strings auto-convert to `{ key, label }`. |
| `active` | `string` | — | Active tab key |
| `onChange` | `(key: string) => void` | — | Called on tab click |

```tsx
<TabSwitcher
  tabs={['All', 'In Transit', 'Delivered', 'On Hold', 'Cancelled']}
  active={tab}
  onChange={setTab}
/>
```

---

### Form

---

#### Input

Styled text input. Accepts all standard `<input>` attributes except `className`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | `boolean` | `false` | Red border |
| `...rest` | `InputHTMLAttributes<HTMLInputElement>` | — | value, onChange, placeholder, readOnly, type, etc. |

```tsx
<Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search…" />
<Input error value={email} onChange={e => setEmail(e.target.value)} />
<Input value="sophie.verhoeven" readOnly />
```

---

#### Textarea

Multi-line text input. Same border/radius/text styling as `Input`. Vertically resizable.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `error` | `boolean` | `false` | Red border |
| `...rest` | `TextareaHTMLAttributes<HTMLTextAreaElement>` | — | value, onChange, rows, placeholder, etc. |

```tsx
<Textarea
  value={notes}
  onChange={e => setNotes(e.target.value)}
  placeholder="Additional remarks..."
  rows={4}
/>
```

---

#### AField

AI-aware labeled form field — the platform's primary data-entry pattern. Renders `<select>` when `opts` is provided, `<input>` otherwise. Shows an AI confidence badge when `meta.conf` is set.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Field label (uppercase, 10px) |
| `value` | `string \| number \| null \| undefined` | — | Controlled value |
| `onChange` | `(v: string) => void` | — | Change handler |
| `opts` | `string[]` | — | If provided, renders `<select>` with these options |
| `placeholder` | `string` | `'—'` | First select option or input placeholder |
| `suffix` | `string` | — | Unit text right of input (e.g. `'kg'`) |
| `meta` | `FieldMeta` | — | AI badge metadata |

**`FieldMeta` fields:**

| Field | Type | Description |
|-------|------|-------------|
| `conf` | `number` | AI confidence 0–100. Shows `AI 94%` badge in indigo. |
| `src` | `string` | Tooltip text on the badge (AI source name) |
| `edited` | `boolean` | If `true`, shows `edited` instead of confidence badge |

```tsx
// Plain input
<AField label="Shipper name" value={name} onChange={setName} />

// Select
<AField label="Country of origin" value={country} onChange={setCountry}
  opts={['NL', 'DE', 'AE', 'US', 'CN']} />

// AI prefilled with confidence
<AField label="HS Code" value={hs} onChange={setHs}
  meta={{ conf: 94, src: 'Historical Match' }} />

// User overrode the AI value
<AField label="Net weight" value={weight} onChange={setWeight}
  suffix="kg" meta={{ edited: true }} />
```

---

#### Sel

Compact inline select — for toolbar filters and quick-pick dropdowns. For labeled form selects, use `Select`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `onChange` | `(v: string) => void` | — | Change handler |
| `opts` | `string[]` | — | Option list |

```tsx
<Sel value={dest} onChange={setDest} opts={['All', 'AMS', 'DXB', 'JFK', 'SIN']} />
```

---

#### Seg

Segmented button control for mutually exclusive options. Active segment: navy fill, white text.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `opts` | `string[]` | — | Option labels |
| `value` | `string` | — | Selected option |
| `onChange` | `(v: string) => void` | — | Change handler |

```tsx
<Seg opts={['Import', 'Export', 'Transit']} value={direction} onChange={setDirection} />
<Seg opts={['Daily', 'Weekly', 'Monthly']} value={period} onChange={setPeriod} />
```

---

#### Select

Full-width labeled `<select>` for use in form grids. Matches `Input` in height and border. Distinct from compact `Sel`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Rendered above select via `<Lbl>` |
| `value` | `string` | — | Controlled value |
| `onChange` | `(v: string) => void` | — | Change handler |
| `opts` | `Array<{ value: string; label: string }> \| string[]` | — | Options. Strings auto-convert to `{ value, label }`. |
| `placeholder` | `string` | — | First disabled `<option>` (e.g. `'Select a country...'`) |
| `error` | `boolean` | `false` | Red border |
| `disabled` | `boolean` | `false` | Dims and disables |

```tsx
<Select
  label="Time zone"
  value={tz}
  onChange={setTz}
  placeholder="Select a time zone..."
  opts={['Europe/Amsterdam', 'Europe/London', 'Asia/Dubai', 'America/New_York']}
/>

<Select
  label="Status"
  value={status}
  onChange={setStatus}
  error={!status}
  opts={[
    { value: 'active',   label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending',  label: 'Pending' },
  ]}
/>
```

---

#### FormSection

Titled section divider for grouping related fields in a multi-section form.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Section title (uppercase, 10px, `neutral.sub`) |
| `description` | `string` | — | Optional muted description below the title |
| `children` | `ReactNode` | — | Form fields |
| `className` | `string` | `''` | Extra Tailwind classes |

```tsx
<Card>
  <FormSection title="Shipper details" description="As listed on the booking confirmation">
    <div className="grid grid-cols-2 gap-x-4">
      <AField label="Name" value={shipperName} onChange={setShipperName} />
      <AField label="Country" value={shipperCountry} onChange={setShipperCountry} opts={COUNTRIES} />
    </div>
  </FormSection>

  <FormSection title="Consignee details">
    <div className="grid grid-cols-2 gap-x-4">
      <AField label="Name" value={consigneeName} onChange={setConsigneeName} />
      <AField label="EORI" value={eori} onChange={setEori} />
    </div>
  </FormSection>
</Card>
```

---

### Feedback & Utility

---

#### Spinner

CSS-animated loading ring. Inline by default (14px). Use `light` on dark backgrounds.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `14` | Diameter in px |
| `light` | `boolean` | `false` | White ring for dark backgrounds |

```tsx
// Inline in a navy button
<Btn dark disabled>
  <Spinner size={14} light /> Saving...
</Btn>

// Standalone page loader
<div className="flex justify-center py-8">
  <Spinner size={28} />
</div>
```

---

#### Toast

Single transient notification chip. Mount via `ToastStack`; build state via `useToast`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'warning' \| 'danger' \| 'info'` | `'info'` | Colour scheme |
| `message` | `string` | — | Notification text |
| `onDismiss` | `() => void` | — | × button click handler |

```tsx
// Standalone (rarely used directly — prefer ToastStack + useToast)
<Toast variant="success" message="Saved." onDismiss={() => dismiss(id)} />
```

---

#### ToastStack

Renders a stack of `Toast` items fixed to bottom-right (`z-50`). Mount once at app root.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `toasts` | `Array<{ id: string; variant?: ToastVariant; message: string }>` | — | Toast items |
| `onDismiss` | `(id: string) => void` | — | Called with toast `id` on × click |

```tsx
// In App.tsx — mount once, toasts come from useToast()
const { toasts, dismiss } = useToast()
return (
  <>
    <PageShell ...>...</PageShell>
    <ToastStack toasts={toasts} onDismiss={dismiss} />
  </>
)
```

---

#### useToast

Hook managing toast state. Returns `toast` shortcuts, `toasts` array (for `ToastStack`), and `dismiss`.

**Return value:**

| Field | Type | Description |
|-------|------|-------------|
| `toast.success` | `(msg: string, duration?: number) => void` | Green success toast. Default duration: 4000ms. |
| `toast.info` | `(msg: string, duration?: number) => void` | Indigo info toast |
| `toast.warning` | `(msg: string, duration?: number) => void` | Amber warning toast |
| `toast.danger` | `(msg: string, duration?: number) => void` | Red danger toast |
| `toasts` | `ToastItem[]` | Pass to `<ToastStack toasts={toasts}>` |
| `dismiss` | `(id: string) => void` | Manually dismiss a toast by ID |

```tsx
function App() {
  const { toast, toasts, dismiss } = useToast()

  return (
    <>
      <form onSubmit={async e => {
        e.preventDefault()
        try {
          await submit()
          toast.success('Declaration submitted.')
        } catch {
          toast.danger('Submission failed — try again.', 8000)
        }
      }}>
        <Btn dark type="submit">Submit</Btn>
      </form>

      <ToastStack toasts={toasts} onDismiss={dismiss} />
    </>
  )
}
```

---

#### Modal

Overlay dialog via `ReactDOM.createPortal`. Closes on Escape key or backdrop click.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Whether the modal is visible |
| `onClose` | `() => void` | — | Called on Escape, backdrop click, or × button |
| `title` | `string` | — | Header title. If omitted, no header bar is rendered. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | `sm`=448px `md`=576px `lg`=768px max-width |
| `children` | `ReactNode` | — | Scrollable body content |
| `footer` | `ReactNode` | — | Right-aligned footer slot (action buttons) |

```tsx
const [open, setOpen] = useState(false)

<Btn onClick={() => setOpen(true)}>Open</Btn>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm submission"
  size="sm"
  footer={
    <>
      <Btn onClick={() => setOpen(false)}>Cancel</Btn>
      <Btn dark onClick={() => { confirm(); setOpen(false) }}>Confirm</Btn>
    </>
  }
>
  <p className="text-[13px]">
    This will submit the declaration to customs. You cannot undo this.
  </p>
</Modal>
```

---

#### Stepper

Horizontal step progress bar. Steps at or before `current` are filled (done); later steps are unfilled (pending).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `stages` | `StepperStage[]` | — | Step definitions |
| `current` | `number` | — | 0-based index of the current (latest done) step |

**`StepperStage` fields:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Unique key |
| `label` | `string` | Text below the circle |
| `icon` | `LucideIcon` | Icon inside the circle |

```tsx
import { FileCheck, Package, Plane, Landmark, CheckCircle2 } from 'lucide-react'

const STAGES: StepperStage[] = [
  { key: 'booked',    label: 'Booked',         icon: FileCheck    },
  { key: 'pickup',    label: 'Picked up',      icon: Package      },
  { key: 'inflight',  label: 'In flight',      icon: Plane        },
  { key: 'customs',   label: 'Customs',        icon: Landmark     },
  { key: 'delivered', label: 'Delivered',      icon: CheckCircle2 },
]

// Shows steps 0–2 as done, 3–4 as pending
<Stepper stages={STAGES} current={2} />
```

---

#### DropZone

Drag-and-drop file upload. Empty state shows upload zone; when `file` is set shows filename + Replace button.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onFile` | `(file: File) => void` | — | Called when file is selected |
| `file` | `File \| null` | — | Currently selected file (controls which state renders) |
| `accept` | `string` | `'.csv,.xlsx,.xls,.json'` | Accepted MIME types / extensions |
| `label` | `string` | `'Drag & drop your file here'` | Primary upload zone label |
| `sub` | `string` | `'or click to browse'` | Secondary upload zone label |
| `locked` | `boolean` | `false` | Disables all interaction (read-only) |

```tsx
const [file, setFile] = useState<File | null>(null)

<DropZone
  file={file}
  onFile={setFile}
  accept=".pdf,.xlsx,.csv"
  label="Upload customs manifest"
/>
```

---

#### NoAccess

Permission-denied empty state. Shown instead of page content when the user's role can't access a module.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | `'Ask an administrator to grant access in Access Control.'` | Explanation shown below the lock icon |
| `onBack` | `() => void` | — | If provided, shows a "Go to dashboard" button |

```tsx
{canAccess ? <CfoDashboard /> : (
  <NoAccess
    message="CFO access required. Request elevated access from your administrator."
    onBack={() => setPage('home')}
  />
)}
```

---

### Charts

---

#### Donut

SVG donut ring with centred percentage label. No external chart library.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Percentage 0–100 |
| `color` | `string` | — | Arc fill colour hex |
| `size` | `number` | `52` | Diameter in px |

```tsx
<Donut value={87} color="#6366F1" size={64} />
<Donut value={42} color="#B91C1C" />
```

---

#### TrendSpark

84×26px SVG polyline sparkline with a directional ▲/▼ arrow. Fits inline in KPI rows and widget cards.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `number[]` | — | Data points — auto-scaled to fit the SVG |
| `color` | `string` | — | Line stroke colour hex |
| `upGood` | `boolean` | `false` | `true` = up trend is green (e.g. revenue). `false` = up trend is red (e.g. incident count). |

```tsx
// Revenue trend — up is good (green arrow when going up)
<TrendSpark data={[12, 15, 11, 18, 22, 19, 25]} color="#6366F1" upGood />

// Risk trend — up is bad (red arrow when going up)
<TrendSpark data={[3, 2, 4, 7, 5, 8, 6]} color="#EF4444" />
```

---

#### CompareBar

Dual-bar: declared vs measured. Flags >10% deviation in red. Handles `null` gracefully (shows "not captured").

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric name (e.g. `'Weight'`) |
| `declared` | `number \| null \| undefined` | — | Declared value |
| `measured` | `number \| null \| undefined` | — | Measured value |
| `unit` | `string` | — | Unit suffix (e.g. `' kg'`, `' m³'`) |

```tsx
<CompareBar label="Weight" declared={450} measured={487} unit=" kg" />
<CompareBar label="Volume" declared={2.8} measured={2.6} unit=" m³" />
<CompareBar label="Pieces" declared={12} measured={null} unit="" />
```

---

#### Factor

Small labelled progress bar with automatic 3-tier colouring: green (<15%), orange (<35%), red (≥35%).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Factor name |
| `v` | `number` | — | Value 0–100 (percentage) |

```tsx
<div className="flex flex-wrap gap-3">
  <Factor label="Document risk"     v={8}  />
  <Factor label="Value discrepancy" v={28} />
  <Factor label="Restricted goods"  v={67} />
</div>
```

---

#### DistBars

Vertical distribution bar chart — labelled rows with percentage. Replaces pie charts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Optional section title |
| `rows` | `DistBarRow[]` | — | Bar rows |

**`DistBarRow` fields:**

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Row label |
| `pct` | `number` | Percentage 0–100 |
| `color` | `string` | Bar fill hex |

```tsx
<DistBars
  title="Revenue by mode"
  rows={[
    { label: 'Air freight', pct: 52, color: '#6366F1' },
    { label: 'Sea freight', pct: 31, color: '#0EA5E9' },
    { label: 'Trucking',    pct: 17, color: '#14B8A6' },
  ]}
/>
```

---

### Composite / Cards

---

#### ModuleCard

Dashboard module tile: icon + GPM badge + inbound/outbound counts + "Open dashboard" link. GPM colour: green (≥20%), orange (≥14%), red (<14%).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | — | Module icon |
| `label` | `string` | — | Module name |
| `gpm` | `number` | — | Gross profit margin % (controls badge colour) |
| `inbound` | `number` | — | Inbound shipment count |
| `outbound` | `number` | — | Outbound shipment count |
| `onOpen` | `() => void` | — | "Open dashboard" click handler |

```tsx
<div className="grid grid-cols-3 gap-4">
  <ModuleCard icon={Plane} label="Air freight"  gpm={24.6} inbound={412} outbound={388} onOpen={() => setPage('airdash')} />
  <ModuleCard icon={Ship}  label="Sea freight"  gpm={18.2} inbound={96}  outbound={74}  onOpen={() => setPage('seadash')} />
  <ModuleCard icon={Truck} label="Trucking"     gpm={14.1} inbound={210} outbound={240} onOpen={() => setPage('truckdash')} />
</div>
```

---

#### EscalationRow

Single escalation list row. Dept pill colours: COO=indigo, CFO=teal, CCO=purple. Days badge: red (≥10d), orange (≥6d), slate (<6d).

Props are spread directly (not wrapped in an `item={}` prop):

| Prop | Type | Description |
|------|------|-------------|
| `dept` | `string` | Department (`'COO'`, `'CFO'`, `'CCO'`) |
| `text` | `string` | Escalation description |
| `days` | `number` | Days outstanding |
| `onClick` | `() => void` | Opens the owning dashboard |

```tsx
<EscalationRow
  dept="CFO"
  text="Supplier invoices >30 days awaiting approval"
  days={12}
  onClick={() => setPage('acct_app_pending')}
/>
```

---

#### EscalationsPanel

Titled card wrapping a list of `EscalationRow` items. Shows "Nothing overdue" when `items` is empty.

| Prop | Type | Description |
|------|------|-------------|
| `items` | `EscalationItem[]` | Escalation items. Pass `[]` to show the all-clear state. |

```tsx
<EscalationsPanel items={ESCALATIONS} />
```

---

#### Top5Card

Ranked list with scaled bar chart. `barScale` multiplies pct for visual width (e.g. `pct=14`, `barScale=5` → 70% bar width).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Card heading |
| `icon` | `LucideIcon` | — | Icon left of title |
| `iconTone` | `string` | — | Icon colour hex |
| `items` | `Top5Item[]` | — | Ranked items |
| `barTone` | `string` | — | Bar fill hex |
| `barScale` | `number` | `4` | Bar width multiplier |
| `footnote` | `string` | — | Note below the list |

**`Top5Item` fields:** `{ label: string; pct: number }`

```tsx
<Top5Card
  title="Top 5 customers — share of GPM"
  icon={Users}
  iconTone="#6366F1"
  barTone="#6366F1"
  barScale={5}
  footnote="Share of total gross profit margin contributed by each customer."
  items={[
    { label: 'Lumitech Electronics B.V.', pct: 14.2 },
    { label: 'Gulf Components Trading',   pct: 11.8 },
    { label: 'Pacific Foods Ltd',         pct: 9.6  },
    { label: 'NorthSea Marine BV',        pct: 7.4  },
    { label: 'Apex Robotics',             pct: 6.1  },
  ]}
/>
```

---

#### WidgetCard

Titled dashboard widget wrapper with an optional "Open →" link.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Widget heading |
| `onOpen` | `() => void` | — | Renders a clickable "Open →" link |
| `children` | `ReactNode` | — | Widget content |

```tsx
<WidgetCard title="On-time delivery" onOpen={() => setPage('airdash')}>
  <Donut value={87} color="#6366F1" size={56} />
</WidgetCard>
```

---

#### MiniRow

3-column stat tile grid. Fits inside `WidgetCard` or `Card` as a quick-stats summary.

| Prop | Type | Description |
|------|------|-------------|
| `items` | `MiniRowItem[]` | 3 stat items (always renders in a 3-col grid) |

**`MiniRowItem` fields:**

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Stat label (uppercase, 10px) |
| `v` | `string \| number` | Stat value |
| `tone` | `string` | Optional hex colour for the value |

```tsx
<MiniRow items={[
  { label: 'Inbound',  v: 412 },
  { label: 'Outbound', v: 388 },
  { label: 'On Hold',  v: 7,   tone: '#B91C1C' },
]} />
```

---

#### OpsToDoRow

Action todo tile with a count badge, description, and navy "Open" button. Props are spread directly.

| Prop | Type | Description |
|------|------|-------------|
| `count` | `number` | Count shown in the badge |
| `label` | `string` | Action description |
| `tone` | `string` | Badge background hex |
| `onOpen` | `() => void` | "Open" click handler |

```tsx
<OpsToDoRow
  count={7}
  label="Shipments awaiting customs clearance"
  tone="#EA580C"
  onOpen={() => setPage('clearance')}
/>
```

---

#### OpsToDoList

Wraps multiple `OpsToDoRow` tiles. Shows "No open actions — all clear." when `actions` is empty.

| Prop | Type | Description |
|------|------|-------------|
| `actions` | `OpsAction[]` | Action items |

```tsx
<OpsToDoList actions={[
  { count: 7,  label: 'Awaiting customs clearance', tone: '#EA580C', onOpen: () => {} },
  { count: 3,  label: 'Missing shipping documents', tone: '#B91C1C', onOpen: () => {} },
  { count: 12, label: 'Pending invoices for review', tone: '#6366F1', onOpen: () => {} },
]} />
```

---

### Shell / Layout

---

#### PageShell

The fundamental app shell: 224px sidebar + 58px topbar + scrollable `<main>`. Wraps every page.

| Prop | Type | Description |
|------|------|-------------|
| `sidebar` | `ReactNode` | Pass a configured `<Sidebar>` |
| `topbar` | `ReactNode` | Pass a configured `<Topbar>` |
| `children` | `ReactNode` | Page content — rendered in `<main className="px-6 py-5">` |

```tsx
<PageShell
  sidebar={
    <Sidebar
      logoSrc="/logo.png"
      roleLabel="Air Freight Operator"
      isAdmin={false}
      branches={BRANCHES}
      activeBranch={branch}
      onBranchChange={setBranch}
      sections={FULL_NAV}
      page={page}
      onPageChange={setPage}
    />
  }
  topbar={
    <Topbar userId={userId} users={USERS} onUserChange={setUser} />
  }
>
  {renderPage(page)}
</PageShell>
```

---

#### Sidebar

Full navigation sidebar. 224px wide, sticky. Group dividers, section accordions, sub-section accordions, active-page highlighting with auto-expand on `page` change.

| Prop | Type | Description |
|------|------|-------------|
| `logoSrc` | `string` | Logo image URL |
| `roleLabel` | `string` | Role badge text (e.g. `'Air Freight Operator'`) |
| `isAdmin` | `boolean` | Shows lock icon vs users icon in the role badge |
| `branches` | `Array<{ id: string; name: string }>` | Branch options for `WorkspaceSwitcher` |
| `activeBranch` | `string` | Selected branch id |
| `onBranchChange` | `(id: string) => void` | Branch change handler |
| `sections` | `NavSection[]` | Navigation tree — see `src/data/nav.ts` for the full structure |
| `page` | `string` | Active page id (used for highlighting and auto-expanding sections) |
| `onPageChange` | `(page: string) => void` | Called when a nav item is clicked |

```tsx
import { FULL_NAV } from '@/data/nav'

<Sidebar
  logoSrc="/logo.png"
  roleLabel="CEO"
  isAdmin={false}
  branches={[{ id: 'ams', name: 'Amsterdam HQ' }, { id: 'dxb', name: 'Dubai Branch' }]}
  activeBranch="ams"
  onBranchChange={setBranch}
  sections={FULL_NAV}
  page={page}
  onPageChange={setPage}
/>
```

---

#### SidebarItem

Single nav row: icon + label + active highlight. Used internally by `Sidebar`; available standalone.

| Prop | Type | Description |
|------|------|-------------|
| `icon` | `LucideIcon` | Nav icon |
| `label` | `string` | Nav label |
| `active` | `boolean` | Highlights in indigo when true |
| `onClick` | `() => void` | Click handler |

```tsx
<SidebarItem
  icon={LayoutGrid}
  label="CEO Dashboard"
  active={page === 'ceo'}
  onClick={() => setPage('ceo')}
/>
```

---

#### Topbar

58px header bar with search input, language selector, notification bell, and user-switcher dropdown.

| Prop | Type | Description |
|------|------|-------------|
| `userId` | `string` | Key of the currently active user in `users` |
| `users` | `Record<string, TopbarUser>` | All users available for switching |
| `onUserChange` | `(id: string) => void` | Called when user selects from the dropdown |

**`TopbarUser` fields:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Full name |
| `roleLabel` | `string` | Displayed below the name |
| `role` | `string` | `'admin'` → navy avatar; any other → indigo |
| `active` | `boolean` | `false` hides user from the switcher list |

```tsx
const USERS: Record<string, TopbarUser> = {
  ops:  { name: 'Sophie Verhoeven', roleLabel: 'Air Freight Operator', role: 'ops'   },
  ceo:  { name: 'Marcus van Dam',   roleLabel: 'CEO',                  role: 'ceo'   },
  root: { name: 'Root Admin',       roleLabel: 'System Administrator', role: 'admin' },
}

<Topbar userId="ops" users={USERS} onUserChange={setUser} />
```

---

#### PageHeader

Breadcrumb trail + page title + optional action button. Placed above every page's content area.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `crumb` | `string[]` | — | 2–3 breadcrumb segments |
| `title` | `string` | — | Page title (`text-xl font-bold`) |
| `action` | `ReactNode` | — | Right-aligned slot (e.g. `<Btn>`) |

```tsx
<PageHeader
  crumb={['Air Freight', 'Warehouse']}
  title="Air Freight · Warehouse"
  action={<Btn dark icon={Plus} onClick={newShipment}>New shipment</Btn>}
/>
```

---

#### Breadcrumb

2–3 level breadcrumb trail with `ChevronRight` separators. Used internally by `PageHeader`.

| Prop | Type | Description |
|------|------|-------------|
| `crumb` | `string[]` | Segments. First is parent (sub-colour), last is current (ink). |

```tsx
<Breadcrumb crumb={['Customs', 'Single Declaration']} />
```

---

#### Footer

Version + legal footnote. Sits at the bottom of the sidebar.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `company` | `string` | `'© Customs Gateways LLC-FZ'` | Company / copyright line |
| `tagline` | `string` | `'White-label platform'` | Tagline |

```tsx
<Footer />
<Footer company="© YCC B.V. 2025" tagline="All rights reserved" />
```

---

#### WorkspaceSwitcher

Branch/network dropdown in a bordered pill row at the top of the sidebar. Used internally by `Sidebar`.

| Prop | Type | Description |
|------|------|-------------|
| `branches` | `Array<{ id: string; name: string }>` | Branch options |
| `activeBranch` | `string` | Selected branch id |
| `onBranchChange` | `(id: string) => void` | Change handler |

```tsx
<WorkspaceSwitcher
  branches={[
    { id: 'ams', name: 'Amsterdam HQ' },
    { id: 'dxb', name: 'Dubai Branch' },
    { id: 'sgp', name: 'Singapore Office' },
  ]}
  activeBranch={branch}
  onBranchChange={setBranch}
/>
```

---

## Cell Renderer Helpers

Factory functions returning `(row: T) => ReactNode` callbacks for `DataTable` column `render` props.

```ts
import { statusCell, avatarCell, toggleCell, badgeCell } from '@/components'
```

---

### statusCell

Renders a `<Badge>` by looking up the cell value in a colour map.

```ts
statusCell<T>(
  key: keyof T,
  map: Record<string, { color: string; bg: string }>
): (row: T) => ReactNode
```

```tsx
{
  key: 'status',
  label: 'Status',
  width: '110px',
  render: statusCell('status', {
    Released:  { color: '#15803D', bg: '#DCFCE7' },
    'On Hold': { color: '#B91C1C', bg: '#FEE2E2' },
    'In Review': { color: '#D97706', bg: '#FEF3C7' },
    Cancelled:   { color: '#64748B', bg: '#F1F5F9' },
  })
}
```

---

### avatarCell

Renders an `<Avatar>` initials circle from a string field.

```ts
avatarCell<T>(key: keyof T, size?: 'sm' | 'md' | 'lg'): (row: T) => ReactNode
```

```tsx
{ key: 'agent', label: 'Agent', width: '80px', render: avatarCell('agent') }
{ key: 'assignee', label: '', width: '50px', render: avatarCell('assignee', 'sm') }
```

---

### toggleCell

Renders a `<Toggle>` that reads a boolean field. Wraps in a `stopPropagation` div so row-click doesn't also fire.

```ts
toggleCell<T>(
  key: keyof T,
  onChange: (row: T, next: boolean) => void
): (row: T) => ReactNode
```

```tsx
{
  key: 'active',
  label: 'Active',
  width: '80px',
  searchable: false,
  render: toggleCell('active', (row, next) => updateRow(row.id, { active: next }))
}
```

---

### badgeCell

Like `statusCell` but colour is computed per-value by a function — use for numeric thresholds or conditional logic.

```ts
badgeCell<T>(
  key: keyof T,
  colorFn: (val: string) => { color: string; bg: string }
): (row: T) => ReactNode
```

```tsx
{
  key: 'riskScore',
  label: 'Risk',
  width: '80px',
  render: badgeCell('riskScore', val =>
    Number(val) >= 70 ? { color: '#B91C1C', bg: '#FEE2E2' }
    : Number(val) >= 35 ? { color: '#D97706', bg: '#FEF3C7' }
    : { color: '#15803D', bg: '#DCFCE7' }
  )
}
```

---

## Token Quick Reference

```ts
import { primary, neutral, status, semantic } from '@yourcargoc/ui'

// Status chip colours (from status token)
status.released  // { text: '#16A34A', bg: '#DCFCE7' }
status.review    // { text: '#EA580C', bg: '#FEF3C7' }
status.hold      // { text: '#C2410C', bg: '#FFEDD5' }
status.inspect   // { text: '#B91C1C', bg: '#FEE2E2' }
status.unknown   // { text: '#6D28D9', bg: '#EDE9FE' }
status.missing   // { text: '#475569', bg: '#E2E8F0' }

// Semantic signal colours
semantic.success // '#16A34A'
semantic.warning // '#EA580C'
semantic.danger  // '#B91C1C'
```

---

## Development (contributing to this library)

```bash
git clone https://github.com/TahaKhan192004/ycc-ui && cd ycc-ui
npm install
npm run dev          # reference app at http://localhost:5173
npm run typecheck    # tsc --noEmit (no emit, just check)
npm run build        # build:lib (Vite + tsc d.ts) + build:css (Tailwind)
```

### Build output (`dist/`)

| File | Description |
|------|-------------|
| `index.mjs` | ES module — consumed by Vite, Next.js, Rollup, modern bundlers |
| `index.cjs` | CommonJS — consumed by Jest, older build tools |
| `components/index.d.ts` | TypeScript declarations entry point |
| `ycc-ui.css` | Pre-built Tailwind CSS — for non-Tailwind consumers |

### Adding a component

1. Create `src/components/MyComponent.tsx`
2. Export from `src/components/index.ts`
3. Run `npm run build` — the new component is included in all three outputs
4. Document in `COMPONENTS.md` (add a row) and `README.md` (add a section)

---

## Publishing

The package is scoped to the `@ycc` npm organisation. First-time setup:

```bash
# Create the npm org (one-time, on npmjs.com)
# Then login:
npm login

# Publish (scoped packages default to private — use --access public)
npm publish --access public
```

Subsequent releases:

```bash
# Bump the version in package.json, then:
npm run build
npm publish --access public
```

Consumers update with a standard `npm install`:

```bash
npm install @yourcargoc/ui@latest
```
