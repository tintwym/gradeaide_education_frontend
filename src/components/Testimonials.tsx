import type { Testimonial } from '../types'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-navy">STUDENT STORIES</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Empowering the Future Leaders of Myanmar
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Leading education excellence since 2018. Listen to our successful students who have
            gained admission to prestigious universities.
          </p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.studentName}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-bold text-navy">{testimonial.studentName}</p>
                  <p className="text-xs font-semibold tracking-widest text-gold">
                    {testimonial.university.toUpperCase()}
                  </p>
                </div>
              </div>
              <p className="mt-4 italic leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
