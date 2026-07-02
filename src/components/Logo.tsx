type LogoProps = {
  className?: string
  imageClassName?: string
  showText?: boolean
  textClassName?: string
  href?: string
}

export function Logo({
  className = '',
  imageClassName = 'h-10 w-10',
  showText = true,
  textClassName = 'text-xl font-bold tracking-wide text-white',
  href = '#home',
}: LogoProps) {
  return (
    <a href={href} className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="GradeAide"
        className={`rounded-lg object-contain ${imageClassName}`}
      />
      {showText && (
        <span className={textClassName}>
          GRADE<span className="text-gold">AIDE</span>
        </span>
      )}
    </a>
  )
}
