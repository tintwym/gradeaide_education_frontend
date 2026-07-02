const advantages = [
  {
    title: 'Direct University Partnerships',
    description: 'We are the official representative for over 500+ top-tier institutions worldwide.',
  },
  {
    title: '100% Student-Centric',
    description: 'Our advice is tailored to your academic background and career aspirations.',
  },
  {
    title: 'Professional Expertise',
    description:
      'Our counselors are trained by international bodies and have years of industry experience.',
  },
]

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function Advantages() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-navy">THE GRADEAIDE ADVANTAGE</p>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Why Students Trust Us</h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-gray-100">
                <CheckIcon />
              </div>
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
