import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-2xl text-slate-900">
            Happy Feet Dance Academy
          </h1>

          <div className="flex gap-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/showcase">Showcase</Link>
            <Link href="/register">Register</Link>
            <Link href="/portal">Portal</Link>

            <Link
              href="/register"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg"
            >
              Join Now
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-700 text-white pt-40 pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.3em] text-teal-300 mb-4">
              NYC • Jersey City
            </p>

            <h1 className="text-7xl font-black leading-tight mb-6">
              Dance.
              <br />
              Perform.
              <br />
              Inspire.
            </h1>

            <p className="text-2xl text-slate-200 mb-10">
              Bollywood, BollyHop, Contemporary and Showcase
              programs for dancers of all ages and levels.
            </p>

            <div className="flex gap-4">

              <Link
                href="/register"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-bold"
              >
                Register Today
              </Link>

              <Link
                href="/showcase"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
              >
                Fall Showcase
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-slate-900 mb-14">
            Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">💃</div>

              <h3 className="text-2xl font-bold mb-3">
                Bollywood
              </h3>

              <p className="text-slate-600">
                Dynamic choreography and performance training
                for all experience levels.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🔥</div>

              <h3 className="text-2xl font-bold mb-3">
                BollyHop
              </h3>

              <p className="text-slate-600">
                A fusion of Bollywood and Hip-Hop designed
                for stage performance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">✨</div>

              <h3 className="text-2xl font-bold mb-3">
                Contemporary
              </h3>

              <p className="text-slate-600">
                Expression, movement, musicality and
                storytelling through dance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SHOWCASE */}
      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-widest text-teal-400 mb-4">
            September 2026
          </p>

          <h2 className="text-6xl font-bold mb-6">
            Fall Showcase
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Train, perform, and shine on stage with dancers
            from NYC and New Jersey.
          </p>

          <Link
            href="/showcase"
            className="bg-teal-600 px-8 py-4 rounded-xl inline-block"
          >
            Learn More
          </Link>

        </div>

      </section>

      {/* INSTRUCTOR */}
      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6 text-slate-900">
            Meet Anitha
          </h2>

          <p className="text-xl text-slate-600">
            Choreographer, instructor and mentor helping
            students build confidence, technique and stage
            presence through dance.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">
          © 2026 Happy Feet Dance Academy
        </div>

      </footer>

    </main>
  );
}
