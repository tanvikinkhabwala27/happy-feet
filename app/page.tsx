import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <div className="text-3xl">🗽💃</div>

            <div>
              <h1 className="font-bold text-xl text-slate-900">
                Happy Feet
              </h1>

              <p className="text-xs text-slate-500">
                Dance Academy
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/showcase">Showcase</Link>
            <Link href="/register">Register</Link>

            <Link
              href="/register"
              className="bg-teal-600 text-white px-5 py-2 rounded-lg"
            >
              Join Now
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-teal-700 text-white pt-40 pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-teal-300 mb-4">
            NYC • New Jersey
          </p>

          <h1 className="text-7xl font-black leading-tight mb-6">
            Dance.
            <br />
            Perform.
            <br />
            Inspire.
          </h1>

          <p className="text-2xl text-slate-200 mb-10 max-w-3xl">
            Bollywood • BollyHop • Contemporary • Showcase Teams
            <br />
            Serving NYC, New Jersey, and beyond.
          </p>

          <div className="flex gap-4">

            <Link
              href="/register"
              className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold"
            >
              Join A Class
            </Link>

            <Link
              href="/showcase"
              className="border border-white px-8 py-4 rounded-xl"
            >
              Fall Showcase
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
