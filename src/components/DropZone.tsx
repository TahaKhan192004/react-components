import { useRef, useState } from 'react'
import { Upload } from 'lucide-react'
import { primary, neutral } from '@/tokens'

interface DropZoneProps {
  onFile: (file: File) => void
  file?: File | null
  accept?: string
  label?: string
  sub?: string
  locked?: boolean
}

// Drag-and-drop file upload zone. Source: DropZone() in apip.html
export function DropZone({
  onFile,
  file,
  accept = '.csv,.xlsx,.xls,.json',
  label = 'Drag & drop your file here',
  sub = 'or click to browse',
  locked = false,
}: DropZoneProps) {
  const [drag, setDrag] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  const pick = () => { if (!locked) ref.current?.click() }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDrag(false)
    if (locked) return
    const f = e.dataTransfer.files?.[0]
    if (f) onFile(f)
  }

  return (
    <div>
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={e => {
          const f = e.target.files?.[0]
          if (f) onFile(f)
          e.target.value = ''
        }}
      />

      {!file ? (
        <div
          onClick={pick}
          onDragOver={e => { e.preventDefault(); if (!locked) setDrag(true) }}
          onDragLeave={() => setDrag(false)}
          onDrop={onDrop}
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl py-10 text-center transition"
          style={{
            border: `2px dashed ${drag ? primary.accent : neutral.border}`,
            background: drag ? '#EEF2FF' : '#fff',
          }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ background: neutral.soft }}
          >
            <Upload size={24} color={primary.accent} />
          </div>
          <div className="mt-2 text-sm font-bold">{label}</div>
          <div className="text-xs" style={{ color: neutral.sub }}>
            or <span style={{ color: primary.accent }}>browse</span>
            {sub !== 'or click to browse' && ` — ${sub}`}
          </div>
        </div>
      ) : (
        <div
          className="flex items-center justify-between rounded-2xl px-4 py-3 text-[12px]"
          style={{ background: neutral.soft, border: `1px solid ${neutral.border}` }}
        >
          <span className="font-semibold">{file.name}</span>
          {!locked && (
            <button
              onClick={pick}
              className="text-[11px] font-semibold"
              style={{ color: primary.accent }}
            >
              Replace
            </button>
          )}
        </div>
      )}
    </div>
  )
}
