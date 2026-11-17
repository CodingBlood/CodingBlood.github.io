import { useEffect, useId, useRef, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { ArrowSquareOut, Check, Copy, DownloadSimple, X } from '@phosphor-icons/react'
import { shareLinks } from '../data/content'

// QR codes for career fairs. Pick a destination, show the code, or open,
// copy or download it. Uses the native <dialog> so Escape and focus trapping
// come for free.
export default function ShareDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const canvasWrap = useRef<HTMLDivElement>(null)
  const [choice, setChoice] = useState(shareLinks[0].id)
  const [copied, setCopied] = useState(false)
  const selectId = useId()
  const current = shareLinks.find((l) => l.id === choice) ?? shareLinks[0]

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  useEffect(() => setCopied(false), [choice])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked; the link is visible to copy by hand */
    }
  }

  const download = () => {
    const canvas = canvasWrap.current?.querySelector('canvas')
    if (!canvas) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `kartik-agarwal-${current.id}-qr.png`
    a.click()
  }

  return (
    <dialog
      ref={dialog}
      className="share"
      aria-labelledby="share-title"
      onClose={onClose}
      onClick={(e) => {
        // A click on the backdrop lands on the dialog element itself.
        if (e.target === dialog.current) onClose()
      }}
    >
      {open && (
      <div className="share__inner">
        <div className="share__head">
          <h2 id="share-title" className="share__title">
            Share
          </h2>
          <button className="iconbtn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <label className="share__label" htmlFor={selectId}>
          Code links to
        </label>
        <select id={selectId} className="share__select" value={choice} onChange={(e) => setChoice(e.target.value)}>
          {shareLinks.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>

        <div className="share__code" ref={canvasWrap}>
          <QRCodeCanvas
            value={current.url}
            size={560}
            level="M"
            marginSize={2}
            bgColor="#ffffff"
            fgColor="#1d1d1f"
            role="img"
            aria-label={`QR code that opens ${current.label}`}
          />
        </div>
        <p className="share__url" aria-live="polite">{current.url.replace(/^mailto:|^tel:/, '')}</p>

        <div className="share__actions">
          <a className="pill pill--primary" href={current.url} target={current.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <ArrowSquareOut size={18} /> Open
          </a>
          <button className="pill" onClick={copy}>
            {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Copied' : 'Copy link'}
          </button>
          <button className="pill" onClick={download}>
            <DownloadSimple size={18} /> Download
          </button>
        </div>
      </div>
      )}
    </dialog>
  )
}
