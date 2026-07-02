export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Students collaborating"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-6 -right-4 rounded-xl bg-navy px-6 py-4 text-center shadow-xl md:-right-6">
            <p className="text-3xl font-bold text-gold">Over 10</p>
            <p className="text-xs font-semibold tracking-widest text-white">YEARS OF TRUST</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-navy">ABOUT GRADEAIDE</p>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Empowering Myanmar&apos;s Next Generation Since 2018
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            GradeAide is a premier overseas educational consultancy in Myanmar. We are dedicated
            to providing ethical, professional, and comprehensive career counseling to students.
          </p>

          <blockquote className="mt-8 border-l-4 border-gold pl-6 italic text-muted">
            &ldquo;Our mission is to bridge the gap between local talent and global opportunities,
            ensuring every student finds the path that fits their unique potential.&rdquo;
          </blockquote>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-navy">VISION</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                To be the most trusted gateway for international education in Southeast Asia.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest text-navy">INTEGRITY</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Transparent processes and honest guidance are the pillars of our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
