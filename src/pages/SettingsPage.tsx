import { useState } from 'react'
import { Save, Shield, Bell, Globe } from 'lucide-react'
import {
  PageHeader, Card, PanelCard, AField, Toggle, Avatar, Btn, Tag, ActionRow, Lbl, Input,
} from '@/components'
import type { ToastVariant } from '@/components'

interface SettingsPageProps {
  onToast: (variant: ToastVariant, message: string) => void
}

export function SettingsPage({ onToast }: SettingsPageProps) {
  const [name,      setName]      = useState('Sophie Verhoeven')
  const [email,     setEmail]     = useState('sophie@ycc.nl')
  const [lang,      setLang]      = useState('English')
  const [tz,        setTz]        = useState('Europe/Amsterdam')

  const [emailNot, setEmailNot]   = useState(true)
  const [smsNot,   setSmsNot]     = useState(false)
  const [slackNot, setSlackNot]   = useState(true)
  const [autoDoc,  setAutoDoc]    = useState(true)
  const [aiPrefill,setAiPrefill]  = useState(true)
  const [twoFa,    setTwoFa]      = useState(true)

  function save() {
    onToast('success', 'Settings saved successfully.')
  }

  return (
    <>
      <PageHeader
        crumb={['General', 'Settings']}
        title="Settings"
        action={<Btn dark icon={Save} onClick={save}>Save changes</Btn>}
      />

      <div className="grid grid-cols-3 gap-4">

        {/* Profile */}
        <div className="col-span-2 flex flex-col gap-4">

          <PanelCard title="Profile" icon={Globe}>
            <div className="mt-3 flex items-center gap-4 mb-4">
              <Avatar name={name} role="air" size="lg" />
              <div>
                <div className="text-sm font-bold">{name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Tag label="Air Freight" color="#6366F1" />
                  <Tag label="Operator" color="#0E7490" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <AField label="Full name"    value={name}  onChange={setName}  />
              <AField label="Email"        value={email} onChange={setEmail} />
              <AField label="Language"     value={lang}  onChange={setLang}  opts={['English','Nederlands','Français','Deutsch']} />
              <AField label="Time zone"    value={tz}    onChange={setTz}    opts={['Europe/Amsterdam','Europe/London','Asia/Dubai']} />
            </div>
          </PanelCard>

          <PanelCard title="Notifications" icon={Bell}>
            <div className="mt-2 flex flex-col gap-1.5">
              <Toggle on={emailNot}  onChange={setEmailNot}  label="Email notifications"  sub="Shipment updates, custom alerts and escalations" />
              <Toggle on={smsNot}    onChange={setSmsNot}    label="SMS alerts"            sub="Critical events only (customs hold, urgent escalations)" />
              <Toggle on={slackNot}  onChange={setSlackNot}  label="Slack integration"     sub="Post shipment events to your connected Slack channel" />
            </div>
          </PanelCard>

          <PanelCard title="AI & automation" icon={Globe}>
            <div className="mt-2 flex flex-col gap-1.5">
              <Toggle on={autoDoc}   onChange={setAutoDoc}   label="Auto-generate customs docs"  sub="Drafts are created automatically from booking data" />
              <Toggle on={aiPrefill} onChange={setAiPrefill} label="AI pre-fill on forms"        sub="Fields are prefilled from historical data + booking APIs" />
            </div>
          </PanelCard>

        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">

          <PanelCard title="Security" icon={Shield}>
            <div className="mt-2 flex flex-col gap-2">
              <Toggle on={twoFa} onChange={setTwoFa} label="Two-factor authentication" sub="Recommended for all accounts" />
              <ActionRow label="Change password"    sub="Last changed 3 months ago" />
              <ActionRow label="Active sessions"    sub="2 active sessions" />
              <ActionRow label="API tokens"         sub="1 token issued" />
            </div>
          </PanelCard>

          <Card>
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wide" style={{ color: '#8A93AD' }}>Quick access</div>
            <div className="flex flex-col gap-2">
              <div>
                <Lbl>Username</Lbl>
                <div className="mt-1">
                  <Input value="sophie.verhoeven" readOnly />
                </div>
              </div>
              <div>
                <Lbl>Role</Lbl>
                <div className="mt-1 flex gap-1">
                  <Tag label="Air Freight" color="#6366F1" />
                  <Tag label="Operator" color="#0E7490" />
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </>
  )
}
