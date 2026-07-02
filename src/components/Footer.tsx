import { Logo } from './Logo'

export function Partners() {
  return (
    <section className="border-t border-gray-100 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center">
        <p className="shrink-0 text-xs font-semibold tracking-widest text-muted">
          OUR GLOBAL PARTNERS
        </p>
        <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex h-14 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-400"
            >
              Partner
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <Logo
          textClassName="text-lg font-bold text-navy"
          imageClassName="h-9 w-9"
        />
        <div className="flex gap-6 text-xs font-semibold tracking-widest text-muted">
          <a href="#" className="hover:text-navy">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-navy">
            LINKEDIN
          </a>
          <a href="#" className="hover:text-navy">
            INSTAGRAM
          </a>
        </div>
      </div>
    </footer>
  )
}
