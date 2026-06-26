import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  Package, FileText, Plus, Download, AlertTriangle, Info, CheckCircle2, XCircle,
  Home, Plane, Warehouse, Settings, Truck, Lock, BarChart2, Ship, LayoutGrid,
} from 'lucide-react'
import { primary, neutral } from '@/tokens'
import {
  Container, Row, Col,
  Card, PanelCard, Btn, Kpi, KV, Lbl, Badge, Tag, Toggle, Avatar, Banner, ActionRow,
  DataTable, TabSwitcher,
  Input, Textarea, AField, Sel, Seg,
  Spinner, Toast, ToastStack, Stepper, DropZone, NoAccess,
  Donut, TrendSpark, CompareBar, Factor, DistBars,
  ModuleCard, EscalationRow, EscalationsPanel, Top5Card, WidgetCard, MiniRow,
  OpsToDoRow, OpsToDoList,
  PageShell, Sidebar, SidebarItem, Topbar, PageHeader, Breadcrumb, Footer, WorkspaceSwitcher,
} from '@/components'
import type { TopbarUser, TableCol, TabItem, ToastVariant, StepperStage, EscalationItem, OpsAction } from '@/components'
import { FULL_NAV } from '@/data/nav'

// Pages
import { CeoDashboard }  from '@/pages/CeoDashboard'
import { AirWarehouse }  from '@/pages/AirWarehouse'
import { AirTrackTrace } from '@/pages/AirTrackTrace'
import { ScdForm }       from '@/pages/ScdForm'
import { SettingsPage }  from '@/pages/SettingsPage'
import { NotBuilt }      from '@/pages/NotBuilt'

// ─── Shell constants ──────────────────────────────────────────────────────────

const DEMO_USERS: Record<string, TopbarUser> = {
  sophie: { name: 'Sophie Verhoeven', roleLabel: 'Air Freight', role: 'air' },
  admin:  { name: 'Admin User',       roleLabel: 'Administrator', role: 'admin' },
  omar:   { name: 'Omar Al-Rashid',   roleLabel: 'Customs',       role: 'customs' },
}

const DEMO_BRANCHES = [
  { id: 'ycc-nl',  name: 'Your Cargo Contact (HQ)' },
  { id: 'ycc-col', name: 'YCC Colchester' },
  { id: 'lgg',     name: 'YCC Liège' },
]

// ─── Toast helpers ────────────────────────────────────────────────────────────

function useToasts() {
  const [toasts, setToasts] = useState<{ id: string; variant?: ToastVariant; message: string }[]>([])
  const idRef = useRef(0)
  function add(variant: ToastVariant, message: string) {
    const id = String(++idRef.current)
    setToasts(p => [...p, { id, variant, message }])
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4000)
  }
  function dismiss(id: string) { setToasts(p => p.filter(t => t.id !== id)) }
  return { toasts, add, dismiss }
}

// ─── Gallery (component showcase) ────────────────────────────────────────────

const SECTIONS = [
  'Layout Primitives', 'Core Primitives', 'Display Atoms', 'Data Display',
  'Form Fields', 'Feedback & Utility', 'Charts', 'Composite Cards', 'Shell / Layout',
]

function slug(s: string) { return s.toLowerCase().replace(/[^a-z]+/g, '-') }

function GS({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section id={slug(title)} className="mb-14">
      <h2 className="mb-4 border-b pb-2 text-[11px] font-bold uppercase tracking-widest"
        style={{ color: neutral.sub, borderColor: neutral.border }}>{title}</h2>
      {children}
    </section>
  )
}

function Blk({ label, children, wide }: { label: string; children: ReactNode; wide?: boolean }) {
  return (
    <div className="mb-6">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: neutral.faint }}>{label}</div>
      <div className={wide ? '' : 'max-w-xl'}>{children}</div>
    </div>
  )
}

type ShipRow = { awb: string; dest: string; pcs: number; kg: number; status: string }
const TABLE_COLS: TableCol<ShipRow>[] = [
  { key: 'awb',    label: 'AWB',    width: 'minmax(130px,1.4fr)' },
  { key: 'dest',   label: 'Dest',   width: '80px', align: 'center' },
  { key: 'pcs',    label: 'Pcs',    width: '60px', align: 'right' },
  { key: 'kg',     label: 'kg',     width: '70px', align: 'right' },
  { key: 'status', label: 'Status', width: 'minmax(100px,1fr)',
    render: r => <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
      style={{ background: r.status === 'In loods' ? '#EEF0FE' : '#DCFCE7', color: r.status === 'In loods' ? '#6366F1' : '#16A34A' }}>{r.status}</span> },
]
const TABLE_ROWS: ShipRow[] = [
  { awb: '176-1234 5675', dest: 'DXB', pcs: 6,  kg: 482, status: 'In loods' },
  { awb: '176-9876 1230', dest: 'AMS', pcs: 12, kg: 201, status: 'Delivered' },
  { awb: '176-0011 2233', dest: 'LHR', pcs: 2,  kg: 88,  status: 'In loods' },
]

const ESC_ITEMS: EscalationItem[] = [
  { dept: 'COO', text: 'Customs hold on DXB shipment', days: 4, onClick: () => {} },
  { dept: 'CFO', text: 'Overdue invoice EK150 client', days: 7, onClick: () => {} },
  { dept: 'CCO', text: 'Damaged pallet complaint',     days: 2, onClick: () => {} },
]

const OPS: OpsAction[] = [
  { count: 3, label: 'Shipments to announce',  tone: '#6366F1', onOpen: () => {} },
  { count: 1, label: 'Pending customs release', tone: '#EA580C', onOpen: () => {} },
]

const STEPS: StepperStage[] = [
  { key: 'booked',    label: 'Booked',    icon: CheckCircle2 },
  { key: 'arrived',   label: 'Arrived',   icon: Warehouse },
  { key: 'customs',   label: 'Customs',   icon: Lock },
  { key: 'departed',  label: 'Departed',  icon: Plane },
  { key: 'delivered', label: 'Delivered', icon: CheckCircle2 },
]

function ComponentGallery({ onBack }: { onBack: () => void }) {
  const [toasts,      setToasts]      = useState<{ id: string; variant?: ToastVariant; message: string }[]>([])
  const [toggleA,     setToggleA]     = useState(true)
  const [toggleB,     setToggleB]     = useState(false)
  const [seg,         setSeg]         = useState('Week')
  const [sel,         setSel]         = useState('All')
  const [tab,         setTab]         = useState('all')
  const [step,        setStep]        = useState(2)
  const [dropFile,    setDropFile]    = useState<File | null>(null)
  const [inputVal,    setInputVal]    = useState('')
  const [textareaVal, setTextareaVal] = useState('')
  const [aVal,        setAVal]        = useState('EK150')
  const [aSelVal,     setASelVal]     = useState('Amsterdam')
  const [sidebarPage, setSidebarPage] = useState('airwh')
  const [branch,      setBranch]      = useState('ycc-nl')
  const toastId = useRef(0)

  const TABS: TabItem[] = [
    { key: 'all',  label: 'All shipments' },
    { key: 'air',  label: 'Air' },
    { key: 'sea',  label: 'Sea' },
    { key: 'road', label: 'Road' },
  ]

  function addToast(variant: ToastVariant, message: string) {
    const id = String(++toastId.current)
    setToasts(p => [...p, { id, variant, message }])
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4000)
  }

  return (
    <div style={{ minHeight: '100vh', background: neutral.soft, fontFamily: "'Poppins', sans-serif" }}>
      {/* Gallery nav bar */}
      <div className="sticky top-0 z-30 flex items-center gap-4 px-8 py-3"
        style={{ background: neutral.card, borderBottom: `1px solid ${neutral.border}` }}>
        <button onClick={onBack} className="text-[11px] font-semibold flex items-center gap-1"
          style={{ color: primary.accent }}>
          ← Back to app
        </button>
        <div className="mx-2 h-4 w-px" style={{ background: neutral.border }} />
        <div className="text-sm font-bold" style={{ color: neutral.ink }}>Component Gallery</div>
        <div className="rounded-full px-3 py-0.5 text-[11px] font-semibold"
          style={{ background: primary.indigoBg, color: primary.indigo }}>
          47 exports · Phase 1
        </div>
        <nav className="ml-auto flex gap-5 overflow-x-auto">
          {SECTIONS.map(s => (
            <a key={s} href={`#${slug(s)}`}
              className="shrink-0 text-[11px] font-semibold opacity-50 hover:opacity-100 transition"
              style={{ color: neutral.ink }}>{s}</a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-4xl px-8 py-10">

        <GS title="Layout Primitives">
          <Blk label="Container — max-w-screen-xl wrapper" wide>
            <div className="rounded-xl p-1" style={{ background: neutral.border }}>
              <Container className="rounded-xl py-3 text-center text-[11px] font-semibold"
                style={{ background: primary.indigoBg, color: primary.indigo }}>
                Container · max-w-screen-xl · px-6
              </Container>
            </div>
          </Blk>
          <Blk label="Row + Col — flex row with optional span (1–12)" wide>
            <div className="flex flex-col gap-2">
              <div className="rounded-xl p-1" style={{ background: neutral.border }}>
                <Row gap={2}>{[0,1,2].map(i => <Col key={i}><div className="rounded-lg py-2.5 text-center text-[10px] font-semibold" style={{ background: primary.indigoBg, color: primary.indigo }}>flex-1</div></Col>)}</Row>
              </div>
              <div className="rounded-xl p-1" style={{ background: neutral.border }}>
                <Row gap={2}>
                  <Col span={4}><div className="rounded-lg py-2.5 text-center text-[10px] font-semibold" style={{ background: primary.indigoBg, color: primary.indigo }}>span=4</div></Col>
                  <Col span={8}><div className="rounded-lg py-2.5 text-center text-[10px] font-semibold" style={{ background: '#DCFCE7', color: '#166534' }}>span=8</div></Col>
                </Row>
              </div>
            </div>
          </Blk>
        </GS>

        <GS title="Core Primitives">
          <Blk label="Card">
            <div className="grid grid-cols-2 gap-3">
              <Card><p className="text-[12px]" style={{ color: neutral.sub }}>Default pad=4</p></Card>
              <Card pad={false}><div className="border-b px-4 py-3 text-[12px] font-semibold" style={{ borderColor: neutral.border }}>pad=false</div><div className="px-4 py-3 text-[12px]" style={{ color: neutral.sub }}>flush body</div></Card>
            </div>
          </Blk>
          <Blk label="PanelCard">
            <div className="grid grid-cols-2 gap-3">
              <PanelCard title="Announced shipments" icon={Package}><p className="text-[12px]" style={{ color: neutral.sub }}>Children below header.</p></PanelCard>
              <PanelCard title="Documents & files" icon={FileText}><p className="text-[12px]" style={{ color: neutral.sub }}>Any Lucide icon.</p></PanelCard>
            </div>
          </Blk>
          <Blk label="Btn">
            <div className="flex flex-wrap gap-2">
              <Btn>Light</Btn><Btn dark>Dark</Btn><Btn icon={Plus} dark>New arrival</Btn><Btn icon={Download}>Export</Btn><Btn icon={AlertTriangle} disabled>Disabled</Btn>
            </div>
          </Blk>
          <Blk label="Kpi">
            <div className="grid grid-cols-4 gap-2">
              <Kpi label="In loods" v={14} /><Kpi label="Alerts >7d" v={3} tone="#B91C1C" /><Kpi label="Damage" v={2} tone="#EA580C" /><Kpi label="Out-scanned" v={47} sub="this week" />
            </div>
          </Blk>
          <Blk label="KV">
            <Card><div className="grid grid-cols-3 gap-x-6 gap-y-3"><KV k="AWB" v="176-1234 5675" /><KV k="Customer" v="Lumitech B.V." /><KV k="Dest" v="DXB" /><KV k="Flight" v="EK150" /><KV k="Colli" v="6 pcs" /><KV k="Weight" v="482 kg" /></div></Card>
          </Blk>
          <Blk label="Lbl"><div className="flex gap-6"><Lbl>AWB number</Lbl><Lbl>Customer ref</Lbl><Lbl>Destination</Lbl></div></Blk>
        </GS>

        <GS title="Display Atoms">
          <Blk label="Badge">
            <div className="flex flex-wrap gap-2">
              <Badge label="In loods" color="#6366F1" bg="#EEF0FE" /><Badge label="Delivered" color="#16A34A" bg="#DCFCE7" /><Badge label="Customs" color="#9A3412" bg="#FEF3C7" /><Badge label="Damaged" color="#B91C1C" bg="#FEE2E2" /><Badge label="Pending" color="#8A93AD" bg="#F6F7FB" />
            </div>
          </Blk>
          <Blk label="Tag">
            <div className="flex flex-wrap gap-2">
              <Tag label="Air" color="#6366F1" /><Tag label="Sea" color="#0E7490" /><Tag label="Road" color="#7C3AED" /><Tag label="Dangerous goods" color="#B91C1C" /><Tag label="Default" />
            </div>
          </Blk>
          <Blk label="Avatar">
            <div className="flex items-end gap-4">
              <Avatar name="Sophie Verhoeven" role="air" size="sm" /><Avatar name="Sophie Verhoeven" role="air" size="md" /><Avatar name="Sophie Verhoeven" role="air" size="lg" /><Avatar name="Admin User" role="admin" size="md" />
            </div>
          </Blk>
          <Blk label="Toggle">
            <div className="flex flex-col gap-2 max-w-xs">
              <div className="flex gap-3 items-center"><Toggle on={toggleA} onChange={setToggleA} /><span className="text-[12px]" style={{ color: neutral.sub }}>On</span></div>
              <div className="flex gap-3 items-center"><Toggle on={toggleB} onChange={setToggleB} /><span className="text-[12px]" style={{ color: neutral.sub }}>Off</span></div>
              <Toggle on={toggleA} onChange={setToggleA} label="Email notifications" sub="Receive alerts for shipment events" />
            </div>
          </Blk>
          <Blk label="Banner — 4 variants" wide>
            <div className="flex flex-col gap-2">
              <Banner variant="info"    icon={Info}          title="RTO policy update effective 2024-07-01" moduleId="PGTS" />
              <Banner variant="success" icon={CheckCircle2}  title="Shipment EK150 cleared customs" />
              <Banner variant="warning" icon={AlertTriangle} title="Weight discrepancy on AWB 176-0011" body="Declared 88 kg — measured 101 kg (+14.8%)." />
              <Banner variant="danger"  icon={XCircle}       title="Customs hold placed on DXB consignment" />
            </div>
          </Blk>
          <Blk label="ActionRow">
            <div className="flex flex-col gap-2">
              <ActionRow icon={Package}  label="Announce new arrival"     sub="Creates AWB entry + notifies warehouse" />
              <ActionRow icon={FileText} label="Upload customs declaration" sub="PDF, max 10 MB" />
              <ActionRow icon={Settings} label="Manage users" right={<Badge label="Admin only" color="#B91C1C" bg="#FEE2E2" />} />
            </div>
          </Blk>
        </GS>

        <GS title="Data Display">
          <Blk label="TabSwitcher" wide>
            <TabSwitcher tabs={TABS} active={tab} onChange={setTab} />
            <div className="mt-2 text-[12px]" style={{ color: neutral.sub }}>Active: <strong>{tab}</strong></div>
          </Blk>
          <Blk label="DataTable — typed, clickable rows" wide>
            <DataTable cols={TABLE_COLS} rows={TABLE_ROWS} keyFn={r => r.awb} onRowClick={r => alert(r.awb)} />
          </Blk>
        </GS>

        <GS title="Form Fields">
          <Blk label="Input + error state">
            <div className="flex flex-col gap-2">
              <Input placeholder="AWB number…" value={inputVal} onChange={e => setInputVal(e.target.value)} />
              <Input placeholder="Error state" error />
            </div>
          </Blk>
          <Blk label="Textarea">
            <Textarea placeholder="Notes…" value={textareaVal} onChange={e => setTextareaVal(e.target.value)} rows={3} />
          </Blk>
          <Blk label="Sel + Seg">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <Sel value={sel} onChange={setSel} opts={['All','Air','Sea','Road']} />
                <Sel value="Inbound" onChange={() => {}} opts={['Inbound','Outbound','Both']} />
              </div>
              <Seg opts={['Day','Week','Month','Year']} value={seg} onChange={setSeg} />
            </div>
          </Blk>
          <Blk label="AField — labeled field with AI confidence badge" wide>
            <div className="grid grid-cols-2 gap-x-4">
              <AField label="Flight number" value={aVal}    onChange={setAVal}    meta={{ conf: 94 }} />
              <AField label="Origin"        value="AMS"     onChange={() => {}}   meta={{ conf: 99 }} />
              <AField label="Destination"   value={aSelVal} onChange={setASelVal} opts={['Amsterdam','Dubai','London']} meta={{ conf: 87 }} />
              <AField label="Gross weight"  value="482"     onChange={() => {}}   suffix="kg" meta={{ edited: true }} />
            </div>
          </Blk>
        </GS>

        <GS title="Feedback & Utility">
          <Blk label="Spinner">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2"><Spinner size={14} /><span className="text-[11px]" style={{ color: neutral.sub }}>14px</span></div>
              <div className="flex items-center gap-2"><Spinner size={20} /><span className="text-[11px]" style={{ color: neutral.sub }}>20px</span></div>
              <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: primary.navy }}><Spinner size={14} light /><span className="text-[11px] text-white">light</span></div>
            </div>
          </Blk>
          <Blk label="Toast — static + live (fire buttons)" wide>
            <div className="flex flex-col gap-2 mb-3">
              <Toast variant="success" message="Shipment EK150 announced." />
              <Toast variant="info"    message="Customs scan completed." />
              <Toast variant="warning" message="Weight discrepancy on AWB 176-0011." />
              <Toast variant="danger"  message="Customs hold — action required." onDismiss={() => {}} />
            </div>
            <div className="flex gap-2 flex-wrap">
              {(['success','info','warning','danger'] as ToastVariant[]).map(v => (
                <Btn key={v} onClick={() => addToast(v, `${v} toast · auto-dismisses in 4s`)}>Fire {v}</Btn>
              ))}
            </div>
            <ToastStack toasts={toasts} onDismiss={id => setToasts(p => p.filter(t => t.id !== id))} />
          </Blk>
          <Blk label="Stepper (Prev / Next to test)" wide>
            <Card>
              <Stepper stages={STEPS} current={step} />
              <div className="mt-3 flex items-center gap-2">
                <Btn onClick={() => setStep(s => Math.max(0, s - 1))}>← Prev</Btn>
                <Btn dark onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))}>Next →</Btn>
                <span className="ml-2 text-[11px]" style={{ color: neutral.sub }}>Step {step + 1}/{STEPS.length}</span>
              </div>
            </Card>
          </Blk>
          <Blk label="DropZone (drag a file or click)" wide>
            <DropZone file={dropFile} onFile={setDropFile} label="Drag & drop manifest here" />
            {dropFile && <div className="mt-2"><Btn onClick={() => setDropFile(null)}>Clear</Btn></div>}
          </Blk>
          <Blk label="NoAccess" wide><NoAccess onBack={() => {}} /></Blk>
        </GS>

        <GS title="Charts">
          <Blk label="Donut">
            <div className="flex items-end gap-8">
              <div className="flex flex-col items-center gap-1"><Donut value={78} color="#6366F1" /><span className="text-[10px]" style={{ color: neutral.sub }}>On-time</span></div>
              <div className="flex flex-col items-center gap-1"><Donut value={34} color="#EA580C" /><span className="text-[10px]" style={{ color: neutral.sub }}>Risk</span></div>
              <div className="flex flex-col items-center gap-1"><Donut value={91} color="#16A34A" /><span className="text-[10px]" style={{ color: neutral.sub }}>GPM ok</span></div>
              <div className="flex flex-col items-center gap-1"><Donut value={62} color="#6366F1" size={80} /><span className="text-[10px]" style={{ color: neutral.sub }}>size=80</span></div>
            </div>
          </Blk>
          <Blk label="TrendSpark">
            <div className="flex gap-8 flex-wrap">
              <div className="flex flex-col gap-1"><TrendSpark data={[12,18,14,22,19,27]} color="#6366F1" upGood /><span className="text-[10px]" style={{ color: neutral.sub }}>Revenue ↑ good</span></div>
              <div className="flex flex-col gap-1"><TrendSpark data={[3,5,4,8,12,10]} color="#EF4444" /><span className="text-[10px]" style={{ color: neutral.sub }}>Risk ↑ bad</span></div>
            </div>
          </Blk>
          <Blk label="CompareBar" wide>
            <Card><div className="flex flex-col gap-3">
              <CompareBar label="Gross weight" declared={480} measured={492} unit=" kg" />
              <CompareBar label="Volume"       declared={2.4} measured={2.6} unit=" m³" />
              <CompareBar label="Pieces"       declared={6}   measured={6}   unit=" pcs" />
            </div></Card>
          </Blk>
          <Blk label="Factor">
            <div className="flex flex-wrap gap-3">
              <Factor label="Delay risk" v={8} /><Factor label="Compliance gap" v={28} /><Factor label="Damage rate" v={47} />
            </div>
          </Blk>
          <Blk label="DistBars" wide>
            <Card><DistBars title="Shipment distribution" rows={[
              { label: 'Dubai (DXB)', pct: 38, color: '#6366F1' },{ label: 'London (LHR)', pct: 24, color: '#0E7490' },
              { label: 'Liège (LGG)', pct: 19, color: '#7C3AED' },{ label: 'Other', pct: 19, color: '#8A93AD' },
            ]} /></Card>
          </Blk>
        </GS>

        <GS title="Composite Cards">
          <Blk label="MiniRow" wide><MiniRow items={[{ label: 'In loods', v: 14 },{ label: 'Alerts', v: 3, tone: '#B91C1C' },{ label: 'Delivered', v: 47, tone: '#16A34A' }]} /></Blk>
          <Blk label="WidgetCard" wide>
            <div className="grid grid-cols-2 gap-3">
              <WidgetCard title="Air overview" onOpen={() => {}}><MiniRow items={[{ label: 'Active', v: 14 },{ label: 'Pending', v: 3 },{ label: 'GPM', v: '18.4%', tone: '#16A34A' }]} /></WidgetCard>
              <WidgetCard title="Risk dist."><DistBars rows={[{ label: 'Low', pct: 54, color: '#16A34A' },{ label: 'Med', pct: 32, color: '#EA580C' },{ label: 'High', pct: 14, color: '#B91C1C' }]} /></WidgetCard>
            </div>
          </Blk>
          <Blk label="ModuleCard" wide>
            <div className="grid grid-cols-3 gap-3">
              <ModuleCard icon={Plane} label="Air Freight" gpm={18.4} inbound={14} outbound={9} onOpen={() => {}} />
              <ModuleCard icon={Ship}  label="Sea Freight" gpm={11.2} inbound={7}  outbound={5} onOpen={() => {}} />
              <ModuleCard icon={Truck} label="Road"        gpm={22.7} inbound={31} outbound={28} onOpen={() => {}} />
            </div>
          </Blk>
          <Blk label="Top5Card" wide>
            <div className="grid grid-cols-2 gap-3">
              <Top5Card title="Top 5 destinations" icon={Plane} iconTone="#6366F1" barTone="#6366F1" footnote="Last 30 days" items={[{ label: 'Dubai (DXB)', pct: 38 },{ label: 'London (LHR)', pct: 24 },{ label: 'Liège (LGG)', pct: 19 },{ label: 'AMS', pct: 12 },{ label: 'Other', pct: 7 }]} />
              <Top5Card title="Top 5 customers" icon={BarChart2} iconTone="#16A34A" barTone="#16A34A" footnote="By volume" items={[{ label: 'Lumitech', pct: 22 },{ label: 'PharmaBridge', pct: 18 },{ label: 'AeroParts', pct: 14 },{ label: 'FreshRoute', pct: 12 },{ label: 'Other', pct: 9 }]} />
            </div>
          </Blk>
          <Blk label="EscalationRow + EscalationsPanel" wide>
            <div className="flex flex-col gap-2">
              <EscalationRow {...ESC_ITEMS[0]} />
              <EscalationsPanel items={ESC_ITEMS} />
            </div>
          </Blk>
          <Blk label="OpsToDoRow + OpsToDoList + empty state" wide>
            <div className="flex flex-col gap-2">
              <OpsToDoRow {...OPS[0]} />
              <OpsToDoList actions={OPS} />
              <OpsToDoList actions={[]} />
            </div>
          </Blk>
        </GS>

        <GS title="Shell / Layout">
          <Blk label="Breadcrumb">
            <div className="flex flex-col gap-2">
              <Breadcrumb crumb={['Air Freight', 'Warehouse']} />
              <Breadcrumb crumb={['Customs', 'Bulk declaration', 'Compliance check']} />
            </div>
          </Blk>
          <Blk label="PageHeader" wide>
            <div className="rounded-xl p-4" style={{ background: neutral.page }}>
              <PageHeader crumb={['Air Freight', 'Warehouse']} title="Warehouse" action={<Btn dark icon={Plus}>Announce</Btn>} />
            </div>
          </Blk>
          <Blk label="WorkspaceSwitcher" wide>
            <div style={{ maxWidth: 224 }}>
              <WorkspaceSwitcher branches={DEMO_BRANCHES} activeBranch={branch} onBranchChange={setBranch} />
            </div>
          </Blk>
          <Blk label="Footer" wide>
            <div style={{ maxWidth: 224, border: `1px solid ${neutral.border}`, borderRadius: 12, overflow: 'hidden' }}>
              <Footer />
            </div>
          </Blk>
          <Blk label="SidebarItem" wide>
            <div className="flex flex-col gap-1 rounded-xl p-2" style={{ maxWidth: 224, background: neutral.card, border: `1px solid ${neutral.border}` }}>
              <SidebarItem icon={Home}      label="Dashboard"   active={true}  onClick={() => {}} />
              <SidebarItem icon={Plane}     label="Air Freight" active={false} onClick={() => {}} />
              <SidebarItem icon={Warehouse} label="Warehouse"   active={false} onClick={() => {}} />
            </div>
          </Blk>
          <Blk label="Topbar" wide>
            <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${neutral.border}` }}>
              <Topbar userId="sophie" users={DEMO_USERS} onUserChange={() => {}} />
            </div>
          </Blk>
          <Blk label="Sidebar — 160 pages, collapsible" wide>
            <div className="flex rounded-xl overflow-hidden" style={{ height: 480, border: `1px solid ${neutral.border}` }}>
              <Sidebar logoSrc="" roleLabel="Air Freight" isAdmin={false} branches={DEMO_BRANCHES} activeBranch={branch} onBranchChange={setBranch} sections={FULL_NAV} page={sidebarPage} onPageChange={setSidebarPage} />
              <div className="flex-1 p-5" style={{ background: neutral.soft }}>
                <span className="text-[11px]" style={{ color: neutral.sub }}>Active: <strong style={{ color: neutral.ink }}>{sidebarPage}</strong></span>
              </div>
            </div>
          </Blk>
          <Blk label="PageShell — full layout (Sidebar + Topbar + slot)" wide>
            <div className="rounded-xl overflow-hidden" style={{ height: 420, border: `1px solid ${neutral.border}` }}>
              <PageShell
                sidebar={<Sidebar logoSrc="" roleLabel="Air" isAdmin={false} branches={DEMO_BRANCHES} activeBranch={branch} onBranchChange={setBranch} sections={FULL_NAV} page={sidebarPage} onPageChange={setSidebarPage} />}
                topbar={<Topbar userId="sophie" users={DEMO_USERS} onUserChange={() => {}} />}
              >
                <PageHeader crumb={['Air Freight', 'Dashboard']} title="Dashboard" />
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <Kpi label="In loods" v={14} /><Kpi label="Alerts" v={3} tone="#B91C1C" /><Kpi label="Delivered" v={47} />
                </div>
              </PageShell>
            </div>
          </Blk>
        </GS>

      </div>
    </div>
  )
}

// ─── App (router) ─────────────────────────────────────────────────────────────

export default function App() {
  const [page,   setPage]   = useState('ceo')
  const [user,   setUser]   = useState('sophie')
  const [branch, setBranch] = useState('ycc-nl')
  const { toasts, add: addToast, dismiss } = useToasts()

  function renderContent(p: string) {
    switch (p) {
      case 'ceo':      return <CeoDashboard />
      case 'airwh':    return <AirWarehouse />
      case 'airtt':    return <AirTrackTrace />
      case 'scd':      return <ScdForm onToast={addToast} />
      case 'settings': return <SettingsPage onToast={addToast} />
      default:         return <NotBuilt pageId={p} />
    }
  }

  if (page === 'gallery') {
    return <ComponentGallery onBack={() => setPage('ceo')} />
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <PageShell
        sidebar={
          <Sidebar
            logoSrc=""
            roleLabel={DEMO_USERS[user]?.roleLabel ?? 'User'}
            isAdmin={user === 'admin'}
            branches={DEMO_BRANCHES}
            activeBranch={branch}
            onBranchChange={setBranch}
            sections={FULL_NAV}
            page={page}
            onPageChange={setPage}
          />
        }
        topbar={
          <Topbar userId={user} users={DEMO_USERS} onUserChange={setUser} />
        }
      >
        {renderContent(page)}
      </PageShell>

      {/* Floating gallery button */}
      <button
        onClick={() => setPage('gallery')}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold text-white shadow-lg transition hover:opacity-90"
        style={{ background: primary.navy }}
      >
        <LayoutGrid size={14} />
        Component Gallery
      </button>

      <ToastStack toasts={toasts} onDismiss={dismiss} />
    </div>
  )
}
