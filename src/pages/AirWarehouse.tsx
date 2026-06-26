import { useState } from 'react'
import { AlertTriangle, Download, Plus } from 'lucide-react'
import {
  PageHeader, Banner, Kpi, TabSwitcher, DataTable, Btn, Badge, Tag, Sel,
} from '@/components'
import type { TableCol, TabItem } from '@/components'

type ShipRow = {
  awb: string
  customer: string
  dest: string
  flight: string
  pcs: number
  kg: number
  stored: number
  status: string
}

const ALL_ROWS: ShipRow[] = [
  { awb: '176-1234 5675', customer: 'Lumitech Electronics B.V.', dest: 'DXB', flight: 'EK150', pcs: 6,  kg: 482, stored: 1, status: 'In loods' },
  { awb: '176-9876 1230', customer: 'PharmaBridge B.V.',          dest: 'AMS', flight: 'KL601', pcs: 12, kg: 201, stored: 0, status: 'Released'  },
  { awb: '176-0011 2233', customer: 'AeroParts GmbH',             dest: 'LHR', flight: 'BA432', pcs: 2,  kg: 88,  stored: 8, status: 'Alert'     },
  { awb: '176-4455 6677', customer: 'FreshRoute NL',              dest: 'CDG', flight: 'AF112', pcs: 24, kg: 340, stored: 3, status: 'In loods'  },
  { awb: '176-2200 9988', customer: 'SkyParts Ltd',               dest: 'DXB', flight: 'EK152', pcs: 4,  kg: 127, stored: 2, status: 'In loods'  },
  { awb: '176-3344 5500', customer: 'Lumitech Electronics B.V.', dest: 'DXB', flight: 'EK150', pcs: 8,  kg: 612, stored: 0, status: 'Dispatched' },
]

const STATUS_CONFIG: Record<string, { color: string; bg: string }> = {
  'In loods':   { color: '#6366F1', bg: '#EEF0FE' },
  'Released':   { color: '#16A34A', bg: '#DCFCE7' },
  'Alert':      { color: '#B91C1C', bg: '#FEE2E2' },
  'Dispatched': { color: '#8A93AD', bg: '#F6F7FB' },
}

function StatusBadge({ s }: { s: string }) {
  const c = STATUS_CONFIG[s] ?? { color: '#8A93AD', bg: '#F6F7FB' }
  return <Badge label={s} color={c.color} bg={c.bg} />
}

const COLS: TableCol<ShipRow>[] = [
  { key: 'awb',      label: 'AWB',           width: 'minmax(130px,1.5fr)' },
  { key: 'customer', label: 'Customer',       width: 'minmax(160px,2fr)' },
  { key: 'dest',     label: 'Dest',           width: '60px', align: 'center' },
  { key: 'flight',   label: 'Flight',         width: '80px' },
  { key: 'pcs',      label: 'Pcs',            width: '56px', align: 'right' },
  { key: 'kg',       label: 'kg',             width: '64px', align: 'right' },
  { key: 'stored',   label: 'Days',           width: '56px', align: 'right',
    render: r => <span style={{ color: r.stored >= 7 ? '#B91C1C' : r.stored >= 3 ? '#EA580C' : '#1B2440' }}>{r.stored}d</span> },
  { key: 'status',   label: 'Status',         width: 'minmax(100px,1fr)',
    render: r => <StatusBadge s={r.status} /> },
]

const TABS: TabItem[] = [
  { key: 'all',      label: 'All (24)' },
  { key: 'inbound',  label: 'Inbound (18)' },
  { key: 'outbound', label: 'Outbound (6)' },
  { key: 'hold',     label: 'On hold (3)' },
]

const DESTS = ['All destinations', 'DXB', 'AMS', 'LHR', 'CDG']

export function AirWarehouse() {
  const [tab,  setTab]  = useState('all')
  const [dest, setDest] = useState('All destinations')

  const rows = ALL_ROWS.filter(r => {
    if (tab === 'inbound'  && !['In loods', 'Alert'].includes(r.status)) return false
    if (tab === 'outbound' && !['Released', 'Dispatched'].includes(r.status)) return false
    if (tab === 'hold'     && r.status !== 'Alert') return false
    if (dest !== 'All destinations' && r.dest !== dest) return false
    return true
  })

  return (
    <>
      <PageHeader
        crumb={['Air Freight', 'Warehouse']}
        title="Warehouse"
        action={
          <div className="flex gap-2">
            <Btn icon={Download}>Export</Btn>
            <Btn icon={Plus} dark>Announce arrival</Btn>
          </div>
        }
      />

      {/* Alert banner — only shows when there are 'Alert' rows */}
      <Banner
        variant="warning"
        icon={AlertTriangle}
        title="3 shipments have been in the warehouse for 7+ days without customs release"
        body="Review and escalate to customs if clearance has not been initiated."
      />

      {/* KPIs */}
      <div className="mb-4 grid grid-cols-4 gap-3">
        <Kpi label="In loods"       v={24} />
        <Kpi label="Alerts >7d"     v={3}  tone="#B91C1C" />
        <Kpi label="Damage reports" v={1}  tone="#EA580C" />
        <Kpi label="Out-scanned"    v={189} sub="this month" />
      </div>

      {/* Tags — active mode filters */}
      <div className="mb-3 flex items-center gap-2 flex-wrap">
        <Tag label="Air" color="#6366F1" />
        <Tag label="Inbound" color="#0E7490" />
        <Tag label="HQ warehouse" color="#7C3AED" />
        <Tag label="This week" />
      </div>

      {/* Tabs + filter */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <TabSwitcher tabs={TABS} active={tab} onChange={setTab} />
        <Sel value={dest} onChange={setDest} opts={DESTS} />
      </div>

      <DataTable
        cols={COLS}
        rows={rows}
        keyFn={r => r.awb}
        onRowClick={r => alert(`Open shipment: ${r.awb}`)}
        empty="No shipments match the current filter."
        footer={`Showing ${rows.length} of ${ALL_ROWS.length} shipments`}
      />
    </>
  )
}
