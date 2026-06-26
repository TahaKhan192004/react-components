import { useState } from 'react'
import { FileCheck, Send, X } from 'lucide-react'
import {
  PageHeader, Card, PanelCard, AField, Seg, Btn, DropZone, Spinner, Banner, Tag,
} from '@/components'
import type { ToastVariant } from '@/components'

interface ScdFormProps {
  onToast: (variant: ToastVariant, message: string) => void
}

export function ScdForm({ onToast }: ScdFormProps) {
  const [dir,     setDir]     = useState('Import')
  const [awb,     setAwb]     = useState('')
  const [origin,  setOrigin]  = useState('AMS')
  const [dest,    setDest]    = useState('DXB')
  const [flight,  setFlight]  = useState('')
  const [pcs,     setPcs]     = useState('')
  const [weight,  setWeight]  = useState('')
  const [goods,   setGoods]   = useState('')
  const [hsCode,  setHsCode]  = useState('')
  const [value,   setValue]   = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [manifest, setManifest] = useState<File | null>(null)
  const [loading,  setLoading]  = useState(false)

  function submit() {
    if (!awb || !flight || !manifest) {
      onToast('warning', 'Please fill AWB, flight and upload a manifest before submitting.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onToast('success', `Declaration for AWB ${awb} submitted successfully.`)
    }, 1800)
  }

  return (
    <>
      <PageHeader
        crumb={['Customs', 'Single Declaration', 'New']}
        title="New Single Declaration"
        action={
          <div className="flex items-center gap-2">
            <Tag label="Draft" color="#8A93AD" />
            <Btn icon={X}>Cancel</Btn>
          </div>
        }
      />

      <Banner
        variant="info"
        icon={FileCheck}
        title="AI pre-fill active — fields prefilled from recent bookings"
        body="Confidence scores shown next to each field. Review before submitting."
        moduleId="SCD"
      />

      <div className="grid grid-cols-3 gap-4">

        {/* Left column — shipment info */}
        <div className="col-span-2 flex flex-col gap-4">

          <PanelCard title="Shipment details" icon={FileCheck}>
            <div className="mt-2">
              <div className="mb-3">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>Direction</div>
                <Seg opts={['Import', 'Export', 'Transit']} value={dir} onChange={setDir} />
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <AField label="AWB number"    value={awb}    onChange={setAwb}    placeholder="176-XXXX XXXX" />
                <AField label="Flight number" value={flight} onChange={setFlight} placeholder="EK150" meta={{ conf: 88, src: 'Booking API' }} />
                <AField label="Origin"        value={origin} onChange={setOrigin} opts={['AMS','LHR','CDG','DXB','JFK']} meta={{ conf: 99 }} />
                <AField label="Destination"   value={dest}   onChange={setDest}   opts={['DXB','AMS','LHR','CDG','JFK']} meta={{ conf: 97 }} />
                <AField label="Pieces"        value={pcs}    onChange={setPcs}    placeholder="0" suffix="pcs" />
                <AField label="Gross weight"  value={weight} onChange={setWeight} placeholder="0.0" suffix="kg" meta={{ conf: 91 }} />
              </div>
            </div>
          </PanelCard>

          <PanelCard title="Goods & customs classification" icon={FileCheck}>
            <div className="mt-2 grid grid-cols-2 gap-x-4">
              <AField label="Description of goods" value={goods}  onChange={setGoods}  placeholder="Electronic components" meta={{ conf: 76 }} />
              <AField label="HS code"              value={hsCode} onChange={setHsCode} placeholder="8542.31.00" meta={{ conf: 82 }} />
              <AField label="Customs value"        value={value}  onChange={setValue}  placeholder="0.00" suffix={currency} />
              <AField label="Currency"             value={currency} onChange={setCurrency} opts={['EUR','USD','GBP','AED']} />
            </div>
          </PanelCard>

        </div>

        {/* Right column — manifest + submit */}
        <div className="flex flex-col gap-4">

          <Card>
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>Manifest upload</div>
            <DropZone
              file={manifest}
              onFile={setManifest}
              accept=".csv,.xlsx,.xls,.json,.pdf"
              label="Drag & drop manifest here"
              sub=".csv, .xlsx, .json, .pdf"
            />
          </Card>

          <Card>
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>Submit declaration</div>
            <p className="mb-3 text-[11px]" style={{ color: '#8A93AD' }}>
              Filing will be sent to Dutch Customs (AGS). You'll receive confirmation within 15 minutes.
            </p>
            <Btn
              dark
              icon={loading ? undefined : Send}
              onClick={submit}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Spinner size={13} light />
                  Submitting…
                </span>
              ) : 'Submit declaration'}
            </Btn>
          </Card>

        </div>
      </div>
    </>
  )
}
