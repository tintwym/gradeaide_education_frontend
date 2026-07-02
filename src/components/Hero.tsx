export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark">
      <div className="absolute right-0 top-0 h-full w-1/2 skew-x-[-12deg] translate-x-1/4 bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Empowering Your Future in Education
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Leading education consultancy in Myanmar, connecting ambitious students with
            prestigious universities worldwide since 2018.
          </p>

          <div className="mt-10 inline-flex items-center gap-6 rounded-full bg-black/30 px-8 py-4 backdrop-blur">
            <div className="text-center">
              <span className="text-2xl font-bold text-gold">15,000+</span>
              <p className="text-sm text-white/70">Students Placed</p>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <span className="text-2xl font-bold text-gold">500+</span>
              <p className="text-sm text-white/70">Partner Unis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
