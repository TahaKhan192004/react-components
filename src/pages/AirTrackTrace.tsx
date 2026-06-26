import { useState } from 'react'
import {
  Plane, Warehouse, Lock, CheckCircle2, AlertTriangle, FileText, Download,
} from 'lucide-react'
import {
  PageHeader, Banner, Card, KV, Badge, Tag, Stepper, CompareBar, Factor,
  Btn, PanelCard, MiniRow,
} from '@/components'
import type { StepperStage } from '@/components'

const STAGES: StepperStage[] = [
  { key: 'booked',    label: 'Booked',        icon: CheckCircle2 },
  { key: 'received',  label: 'Received at WH', icon: Warehouse },
  { key: 'customs',   label: 'Customs OK',    icon: Lock },
  { key: 'departed',  label: 'Departed',      icon: Plane },
  { key: 'delivered', label: 'Delivered',     icon: CheckCircle2 },
]

export function AirTrackTrace() {
  const [step, setStep] = useState(2)

  return (
    <>
      <PageHeader
        crumb={['Air Freight', 'Track & Trace']}
        title="AWB 176-1234 5675"
        action={
          <div className="flex gap-2">
            <Btn icon={FileText}>View documents</Btn>
            <Btn icon={Download} dark>Export PDF</Btn>
          </div>
        }
      />

      <Banner
        variant="warning"
        icon={AlertTriangle}
        title="Customs hold placed — awaiting release from Dutch Customs (NVWA)"
        body="Contact your customs officer. Current hold started 2024-06-24 09:14."
      />

      {/* Status strip */}
      <div className="mb-3 flex items-center gap-2">
        <Badge label="In loods" color="#6366F1" bg="#EEF0FE" />
        <Tag label="Air" color="#6366F1" />
        <Tag label="Priority" color="#EA580C" />
        <Tag label="Dangerous goods" color="#B91C1C" />
      </div>

      {/* Stepper */}
      <Card>
        <div className="mb-3 text-[11px] font-semibold" style={{ color: '#8A93AD' }}>
          Shipment progress — step {step + 1} of {STAGES.length}
        </div>
        <Stepper stages={STAGES} current={step} />
        {/* Demo controls */}
        <div className="mt-3 flex gap-2">
          <Btn onClick={() => setStep(s => Math.max(0, s - 1))}>← Back</Btn>
          <Btn dark onClick={() => setStep(s => Math.min(STAGES.length - 1, s + 1))}>Advance →</Btn>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-2 gap-4">

        {/* Shipment details */}
        <PanelCard title="Shipment details" icon={FileText}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-1">
            <KV k="AWB number"     v="176-1234 5675" />
            <KV k="Customer"       v="Lumitech Electronics B.V." />
            <KV k="Origin"         v="AMS" />
            <KV k="Destination"    v="DXB" />
            <KV k="Flight"         v="EK150" />
            <KV k="ETD"            v="26 Jun 2024 23:45" />
            <KV k="ETA"            v="27 Jun 2024 06:30" />
            <KV k="Pieces"         v="6 colli" />
          </div>
        </PanelCard>

        {/* Measurement comparison */}
        <PanelCard title="Weight & volume check" icon={AlertTriangle}>
          <div className="flex flex-col gap-3 mt-1">
            <CompareBar label="Gross weight" declared={480}  measured={492}  unit=" kg" />
            <CompareBar label="Volume"       declared={2.40} measured={2.65} unit=" m³" />
            <CompareBar label="Chargeable"   declared={2800} measured={2860} unit=" kg" />
            <CompareBar label="Pieces"       declared={6}    measured={6}    unit=" pcs" />
          </div>
        </PanelCard>

      </div>

      {/* Risk + quick stats */}
      <div className="mt-4 grid grid-cols-2 gap-4">

        <Card>
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>
            Risk factors
          </div>
          <div className="flex flex-wrap gap-3">
            <Factor label="Delay risk"          v={12} />
            <Factor label="Weight deviation"    v={41} />
            <Factor label="Dangerous goods"     v={65} />
            <Factor label="Customs compliance"  v={8}  />
            <Factor label="Route risk"          v={18} />
            <Factor label="Documentation"       v={5}  />
          </div>
        </Card>

        <Card>
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>
            Shipment summary
          </div>
          <MiniRow items={[
            { label: 'Colli',   v: 6 },
            { label: 'Gross',   v: '492 kg' },
            { label: 'Volume',  v: '2.65 m³' },
          ]} />
          <div className="mt-2">
            <MiniRow items={[
              { label: 'Days stored',  v: 4 },
              { label: 'Chargeable',   v: '2,860 kg' },
              { label: 'GPM est.',     v: '16.8%', tone: '#EA580C' },
            ]} />
          </div>
        </Card>

      </div>
    </>
  )
}
