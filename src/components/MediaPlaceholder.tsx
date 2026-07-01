import { ImageIcon } from 'lucide-react'

export default function MediaPlaceholder({
  src,
  alt,
  label,
  className = '',
}: {
  src?: string
  alt: string
  label: string
  className?: string
}) {
  if (src) {
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
  }

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6 border border-dashed border-white/15 bg-white/[0.03] ${className}`}
    >
      <ImageIcon className="text-norvan-500" size={28} />
      <p className="text-sm text-norvan-500 max-w-[220px] leading-relaxed">{label}</p>
    </div>
  )
}
