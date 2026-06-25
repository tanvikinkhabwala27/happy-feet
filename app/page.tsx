import Link from "next/link";

export default function Home() {
  const showcasePrograms = [
    {
      title: "Elite Team",
      location: "Manhattan",
      price: "$300",
    },
    {
      title: "BollyHop Team",
      location: "Jersey City",
      price: "$300",
    },
    {
      title: "Pre-Teens",
      location: "Jersey City",
      price: "$300",
    },
    {
      title: "Adult Bollywood",
      location: "Manhattan",
      price: "$300",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
          <h1 className="font-bold text-2xl">
            Happy Feet Dance Academy
          </h1>

          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/classes">Classes</Link>
            <Link href="/showcase">Showcase</Link>
            <Link href="/portal">Portal</Link>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-40">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6">
              Learn. Perform. Belong.
            </h1>

            <p className="text-xl mb-8">
              Bollywood, BollyHop, Contemporary, Hip-Hop,
              Semi-Classical, Workshops and Showcase Programs
              across NYC & NJ.
            </p>

            <div className="flex gap-4">
            <Link
              href="/register"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Join A Class
            </Link>

            <Link
              href="/showcase"
              className="border border-white px-6 py-3 rounded-xl"
            >
              Fall Showcase 2026
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-3">
            Fall Showcase 2026
          </h2>

          <p className="text-gray-600 mb-10">
            Train for months and perform on stage in our
            signature showcase production.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcasePrograms.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-bold text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.location}
                </p>

                <p className="mt-4 font-semibold">
                  {item.price}
                </p>

                <Link
                  href="/register"
                  className="block text-center w-full mt-5 bg-black text-white py-2 rounded-lg"
                >
                  Register
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                Bollywood
              </h3>
              <p>
                High-energy choreography for all levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                BollyHop
              </h3>
              <p>
                Bollywood meets Hip-Hop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-2">
                Contemporary
              </h3>
              <p>
                Expression, movement and storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Meet Anitha
          </h2>

          <p className="text-lg text-gray-700">
            Director, choreographer and instructor bringing
            together students from NYC and NJ through dance,
            performance and community.
          </p>
        </div>
      </section>
    </main>
  );
}