import { Boxes, Plane, Ship, TrendingUp, Truck, Users } from 'lucide-react'
import { PageHeader, Banner, ModuleCard, EscalationsPanel, Top5Card } from '@/components'
import type { EscalationItem } from '@/components'

const ESCALATIONS: EscalationItem[] = [
  { dept: 'COO', text: 'Customs clearance backlog not cleared',           days: 8,  onClick: () => {} },
  { dept: 'COO', text: 'Inbound shipments stuck >1 week in the loods',   days: 8,  onClick: () => {} },
  { dept: 'CFO', text: 'Supplier invoices >30 days awaiting approval',   days: 12, onClick: () => {} },
  { dept: 'CCO', text: 'Quotations awaiting response',                   days: 5,  onClick: () => {} },
]

export function CeoDashboard() {
  return (
    <>
      <PageHeader crumb={['Home', 'CEO Dashboard']} title="CEO Dashboard" />

      <Banner
        variant="info"
        icon={TrendingUp}
        title="Outcomes, not tasks"
        body="Volumes and margin per mode, what we move and who drives the margin — plus only the COO/CFO/CCO items that have been outstanding too long. Figures are illustrative in this prototype."
      />

      {/* Module cards — 3 columns */}
      <div className="mb-4 grid grid-cols-3 gap-4">
        <ModuleCard icon={Plane} label="Air freight"  gpm={24.6} inbound={412} outbound={388} onOpen={() => {}} />
        <ModuleCard icon={Ship}  label="Sea freight"  gpm={18.2} inbound={96}  outbound={74}  onOpen={() => {}} />
        <ModuleCard icon={Truck} label="Trucking"     gpm={14.1} inbound={210} outbound={240} onOpen={() => {}} />
      </div>

      {/* Escalations */}
      <div className="mb-4">
        <EscalationsPanel items={ESCALATIONS} />
      </div>

      {/* Top 5 panels */}
      <div className="grid grid-cols-2 gap-4">
        <Top5Card
          title="Top 5 goods categories"
          icon={Boxes}
          iconTone="#6366F1"
          barTone="#6366F1"
          barScale={4}
          footnote="High-level categories by share of shipments moved."
          items={[
            { label: 'Electronics & components', pct: 22 },
            { label: 'Machinery & parts',        pct: 18 },
            { label: 'Perishables & food',       pct: 15 },
            { label: 'Pharma & healthcare',      pct: 12 },
            { label: 'Apparel & textiles',       pct: 9  },
          ]}
        />
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
      </div>
    </>
  )
}
