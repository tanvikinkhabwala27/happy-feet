import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-2xl">
            Happy Feet Dance Academy
          </h1>

          <div className="flex gap-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/showcase">Showcase</Link>
            <Link href="/register">Register</Link>
            <Link href="/portal">Portal</Link>

            <Link
              href="/register"
              className="bg-pink-600 text-white px-4 py-2 rounded-lg"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-white pt-40 pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="uppercase tracking-widest mb-4">
              NYC • Jersey City
            </p>

            <h1 className="text-7xl font-black leading-tight mb-6">
              Dance. Perform.
              <br />
              Inspire.
            </h1>

            <p className="text-2xl mb-10 text-pink-100">
              Bollywood, BollyHop, Contemporary and Showcase
              programs designed for dancers of all ages.
            </p>

            <div className="flex gap-4">
              <Link
                href="/register"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold"
              >
                Register Today
              </Link>

              <Link
                href="/showcase"
                className="border border-white px-8 py-4 rounded-xl"
              >
                View Showcase
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-14">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl shadow-lg p-8 border">
              <div className="text-5xl mb-4">💃</div>
              <h3 className="text-2xl font-bold mb-3">
                Bollywood
              </h3>
              <p>
                High-energy choreography for beginners and
                experienced dancers alike.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-8 border">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3">
                BollyHop
              </h3>
              <p>
                Bollywood fusion with hip-hop grooves and
                performance training.
              </p>
            </div>

            <div className="rounded-3xl shadow-lg p-8 border">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">
                Contemporary
              </h3>
              <p>
                Technique, storytelling and expressive
                movement training.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SHOWCASE */}

      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-widest text-pink-400 mb-4">
            September 2026
          </p>

          <h2 className="text-6xl font-bold mb-6">
            Fall Showcase
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Join a team, train for months, and perform on
            stage in our annual showcase production.
          </p>

          <Link
            href="/showcase"
            className="bg-pink-600 px-8 py-4 rounded-xl inline-block"
          >
            Learn More
          </Link>

        </div>
      </section>

      {/* INSTRUCTOR */}

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Meet Anitha
          </h2>

          <p className="text-xl text-gray-600">
            Choreographer, instructor and community leader
            helping dancers grow through performance,
            confidence and creativity.
          </p>

        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          © 2026 Happy Feet Dance Academy
        </div>
      </footer>

    </main>
  );
}
