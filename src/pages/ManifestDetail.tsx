import { useState } from 'react'
import { ArrowLeft, Paperclip, Plus, Search, Trash2, X } from 'lucide-react'
import { PanelCard, KV, Badge, Btn } from '@/components'
import { neutral, primary } from '@/tokens'

// ─── Mock data ────────────────────────────────────────────────────────────────

const DETAILS = {
  reference:       'JJFI6151825009199156',
  status:          'cleared',
  reference2:      'T1',
  ioss:            'IM3720000960',
  containerLabel:  'N-20250812-EUDI-18',
  mpn:             '25BEH700000DCN8XR3',
  weight:          '0.45 KG',
  value:           '7.54 EUR',
}

const MANIFEST = {
  number:    '15705015765',
  status:    'finalized',
  route:     'HKG → ✈ → -',
  flight:    'QR8157',
  country:   'NL',
  eta:       '18 Aug 2025, 02:00',
  uploaded:  '18 Aug 2025, 14:21',
  weight:    '917',
  created:   '18 Aug 2025, 14:21',
  updated:   '19 Aug 2025, 10:47',
}

const FILES: { name: string; type: string }[] = [
  { name: '2046.html', type: 'INVOICE' },
]

const STATUS_MAP: Record<string, { color: string; bg: string }> = {
  cleared:   { color: '#15803D', bg: '#DCFCE7' },
  finalized: { color: '#475569', bg: '#E2E8F0' },
  arrived:   { color: '#1D4ED8', bg: '#DBEAFE' },
  on_hold:   { color: '#B91C1C', bg: '#FEE2E2' },
}

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_MAP[status] ?? { color: '#475569', bg: '#F1F5F9' }
  return <Badge label={status.replace('_', ' ')} color={s.color} bg={s.bg} />
}

// ─── Sub-sections ─────────────────────────────────────────────────────────────

function DetailsCard() {
  return (
    <PanelCard title="Details" icon={Search}>
      {/* Reference + status */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[14px] font-bold" style={{ color: neutral.ink }}>
          {DETAILS.reference}
        </span>
        <StatusBadge status={DETAILS.status} />
      </div>

      <div className="grid grid-cols-1 gap-y-3">
        <KV k="Reference 2"     v={DETAILS.reference2} />
        <KV k="IOSS"            v={DETAILS.ioss} />
        <KV k="Container label" v={DETAILS.containerLabel} />
        <KV k="MPN"             v={DETAILS.mpn} />
        <KV k="Weight"          v={DETAILS.weight} />
        <KV k="Value"           v={DETAILS.value} />
      </div>

      <div className="mt-4 flex gap-2">
        <Btn>Action ▾</Btn>
        <Btn icon={undefined}>✏</Btn>
      </div>
    </PanelCard>
  )
}

function ManifestCard() {
  return (
    <PanelCard title="Manifest" icon={Paperclip}>
      {/* Manifest number + status */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[14px] font-bold" style={{ color: neutral.ink }}>
          {MANIFEST.number}
        </span>
        <StatusBadge status={MANIFEST.status} />
      </div>

      <div className="grid grid-cols-1 gap-y-3">
        <KV k="Route"           v={MANIFEST.route} />
        <KV k="Flight"          v={MANIFEST.flight} />
        <KV k="Vehicle country" v={MANIFEST.country} />
        <KV k="ETA"             v={MANIFEST.eta} />
        <KV k="Uploaded"        v={MANIFEST.uploaded} />
        <KV k="Weight"          v={MANIFEST.weight} />
        <KV k="Created"         v={MANIFEST.created} />
        <KV k="Last updated"    v={MANIFEST.updated} />
      </div>
    </PanelCard>
  )
}

function FilesCard() {
  const [files, setFiles] = useState(FILES)

  return (
    <PanelCard title="Files" icon={Paperclip}>
      <div className="mb-3">
        <Btn dark icon={Plus}>Add File</Btn>
      </div>

      {files.length === 0 ? (
        <p className="text-[11px]" style={{ color: neutral.faint }}>No files attached.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg px-3 py-2"
              style={{ background: neutral.soft, border: `1px solid ${neutral.border}` }}
            >
              <div>
                <span className="text-[12px] font-semibold" style={{ color: primary.indigo }}>
                  {f.name}
                </span>
                <span className="ml-2 text-[10px] font-bold uppercase tracking-wide" style={{ color: neutral.faint }}>
                  {f.type}
                </span>
              </div>
              <button
                onClick={() => setFiles(p => p.filter((_, j) => j !== i))}
                className="rounded p-1 transition hover:opacity-70"
                style={{ color: neutral.faint }}
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}
        </div>
      )}
    </PanelCard>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface ManifestDetailProps {
  onBack?: () => void
}

export function ManifestDetail({ onBack }: ManifestDetailProps) {
  const [query, setQuery] = useState('')

  return (
    <>
      {/* Global search bar */}
      <div
        className="mb-4 flex items-center gap-3 rounded-xl px-4 py-2.5"
        style={{ background: neutral.card, border: `1px solid ${neutral.border}` }}
      >
        <Search size={15} color={neutral.faint} />
        <input
          className="flex-1 bg-transparent text-[13px] outline-none"
          style={{ color: neutral.ink }}
          placeholder="Global search…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button onClick={() => setQuery('')}>
            <X size={13} color={neutral.faint} />
          </button>
        )}
        <div className="h-4 w-px mx-1" style={{ background: neutral.border }} />
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[12px] font-semibold"
          style={{ color: primary.indigo }}
        >
          <ArrowLeft size={13} />
          Back to search
        </button>
      </div>

      {/* Three-column layout */}
      <div className="grid gap-4" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
        <DetailsCard />
        <ManifestCard />
        <FilesCard />
      </div>
    </>
  )
}
