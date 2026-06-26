import { BarChart2, Globe, Info, Plane, Ship, Truck } from 'lucide-react'
import {
  PageHeader, Banner, Kpi, ModuleCard, EscalationsPanel, Top5Card,
  WidgetCard, MiniRow, OpsToDoList, Donut, TrendSpark, DistBars,
} from '@/components'
import type { EscalationItem, OpsAction } from '@/components'

const ESCALATIONS: EscalationItem[] = [
  { dept: 'COO', text: 'Customs hold on DXB consignment — 4 days without clearance',  days: 4, onClick: () => {} },
  { dept: 'CFO', text: 'Invoice dispute with GHA Rotterdam — €14,200 outstanding',     days: 7, onClick: () => {} },
  { dept: 'CCO', text: 'Key account Lumitech filed a formal complaint re: EK150',      days: 2, onClick: () => {} },
  { dept: 'COO', text: 'PGTS daily threshold exceeded — RTO score 94/100',             days: 1, onClick: () => {} },
]

const CEO_ACTIONS: OpsAction[] = [
  { count: 2, label: 'Pending board resolutions to sign',  tone: '#6366F1', onOpen: () => {} },
  { count: 1, label: 'Q2 financial report to review',      tone: '#0E7490', onOpen: () => {} },
  { count: 3, label: 'HR appraisals awaiting approval',    tone: '#7C3AED', onOpen: () => {} },
]

export function CeoDashboard() {
  return (
    <>
      <PageHeader
        crumb={['C-Suite', 'CEO Dashboard']}
        title="CEO Dashboard"
      />

      <Banner
        variant="info"
        icon={Info}
        title="Q2 board pack due Friday 28 June — 3 items outstanding"
        body="Financial report, CO₂ audit certificate, HR appraisal summary. Assign owners before Thursday."
      />

      {/* KPI strip */}
      <div className="mb-4 grid grid-cols-4 gap-3">
        <Kpi label="Shipments in transit" v={342} />
        <Kpi label="Active escalations"   v={4}   tone="#EA580C" />
        <Kpi label="Monthly GPM"          v="18.4%" sub="↑ 1.2 pp vs last month" />
        <Kpi label="CO₂ target hit"       v="94%"  sub="target: 90%" />
      </div>

      {/* Module cards + performance donut */}
      <div className="mb-4 grid grid-cols-4 gap-3">
        <ModuleCard icon={Plane} label="Air Freight" gpm={18.4} inbound={47} outbound={38} onOpen={() => {}} />
        <ModuleCard icon={Ship}  label="Sea Freight" gpm={12.1} inbound={23} outbound={19} onOpen={() => {}} />
        <ModuleCard icon={Truck} label="Road / Trucking" gpm={22.7} inbound={89} outbound={76} onOpen={() => {}} />

        <WidgetCard title="On-time performance">
          <div className="flex items-center gap-4 mt-1">
            <Donut value={87} color="#16A34A" size={64} />
            <div>
              <div className="text-[20px] font-black leading-none">87%</div>
              <div className="text-[10px] font-semibold mt-0.5" style={{ color: '#16A34A' }}>↑ 3pp vs last month</div>
              <div className="text-[10px] mt-1" style={{ color: '#8A93AD' }}>Target: 85%</div>
            </div>
          </div>
        </WidgetCard>
      </div>

      {/* Trends + distribution + escalations */}
      <div className="mb-4 grid grid-cols-3 gap-3">

        <WidgetCard title="Shipment trend (last 6 weeks)">
          <div className="mt-1 flex flex-col gap-2">
            {[
              { label: 'Air',  data: [38,42,37,45,41,47], color: '#6366F1', upGood: true },
              { label: 'Sea',  data: [19,21,22,20,23,23], color: '#0E7490', upGood: true },
              { label: 'Road', data: [72,78,81,79,84,89], color: '#7C3AED', upGood: true },
            ].map(t => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="w-8 text-[10px] font-semibold" style={{ color: '#8A93AD' }}>{t.label}</span>
                <TrendSpark data={t.data} color={t.color} upGood={t.upGood} />
              </div>
            ))}
          </div>
        </WidgetCard>

        <WidgetCard title="Revenue by destination">
          <DistBars rows={[
            { label: 'Dubai (DXB)',     pct: 34, color: '#6366F1' },
            { label: 'Amsterdam (AMS)', pct: 22, color: '#0E7490' },
            { label: 'London (LHR)',    pct: 18, color: '#7C3AED' },
            { label: 'Paris (CDG)',     pct: 14, color: '#16A34A' },
            { label: 'Other',           pct: 12, color: '#8A93AD' },
          ]} />
        </WidgetCard>

        <WidgetCard title="Quick stats">
          <div className="flex flex-col gap-2 mt-1">
            <MiniRow items={[
              { label: 'Clients',    v: 214 },
              { label: 'Countries',  v: 38 },
              { label: 'Staff',      v: 127 },
            ]} />
            <MiniRow items={[
              { label: 'Invoices',   v: 89 },
              { label: 'Overdue',    v: 7, tone: '#EA580C' },
              { label: 'Net 30d',    v: '€1.2M' },
            ]} />
          </div>
        </WidgetCard>

      </div>

      {/* Escalations + top 5 + ceo actions */}
      <div className="mb-4 grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <EscalationsPanel items={ESCALATIONS} />
        </div>
        <div className="flex flex-col gap-3">
          <OpsToDoList actions={CEO_ACTIONS} />
        </div>
      </div>

      {/* Top 5 panels */}
      <div className="grid grid-cols-2 gap-3">
        <Top5Card
          title="Top 5 destinations" icon={Globe} iconTone="#6366F1" barTone="#6366F1"
          footnote="Last 30 days · all freight modes combined"
          items={[
            { label: 'Dubai (DXB)',     pct: 34 },
            { label: 'Amsterdam (AMS)', pct: 22 },
            { label: 'London (LHR)',    pct: 18 },
            { label: 'Paris (CDG)',     pct: 14 },
            { label: 'Other',           pct: 12 },
          ]}
        />
        <Top5Card
          title="Top 5 customers" icon={BarChart2} iconTone="#16A34A" barTone="#16A34A"
          footnote="By shipped volume (kg) · last 30 days"
          items={[
            { label: 'Lumitech Electronics B.V.', pct: 22 },
            { label: 'PharmaBridge B.V.',          pct: 18 },
            { label: 'AeroParts GmbH',             pct: 14 },
            { label: 'FreshRoute NL',              pct: 12 },
            { label: 'Other',                      pct: 9  },
          ]}
        />
      </div>
    </>
  )
}
