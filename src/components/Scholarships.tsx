import type { Scholarship } from '../types'

interface ScholarshipsProps {
  scholarships: Scholarship[]
}

export function Scholarships({ scholarships }: ScholarshipsProps) {
  return (
    <section id="scholarships" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-navy">FINANCIAL SUPPORT</p>
            <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
              Elite Scholarship Opportunities
            </h2>
            <p className="mt-4 text-muted">
              We help you secure the funding you need. Last year, our students secured over $2.5M
              in scholarships.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gold px-6 py-3 text-sm font-bold tracking-wide text-navy transition hover:bg-gold-light"
          >
            VIEW ALL SCHOLARSHIPS
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {scholarships.map((scholarship) => (
            <article
              key={scholarship.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
            >
              <p className="text-xs font-semibold tracking-widest text-muted">
                {scholarship.country.toUpperCase()}
              </p>
              <h3 className="mt-3 text-lg font-bold text-navy">{scholarship.title}</h3>

              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-muted">FUNDING</span>
                <span className="font-bold text-navy">{scholarship.fundingAmount}</span>
              </div>
              <hr className="my-4 border-gray-100" />
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">DEADLINE</span>
                <span className="font-bold text-navy">{scholarship.deadline}</span>
              </div>

              <a
                href={scholarship.applyUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-navy hover:text-gold"
              >
                APPLY NOW →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
