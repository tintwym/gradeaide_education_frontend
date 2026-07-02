import type { ServiceOffering } from '../types'

interface ServicesProps {
  services: ServiceOffering[]
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <span className="inline-block rounded-md bg-navy/10 px-3 py-1 text-xs font-bold text-navy">
                {service.badge}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
