import Link from "next/link";

export default function ShowcasePage() {
  const teams = [
    {
      name: "Elite Team",
      location: "Manhattan",
      level: "Advanced",
    },
    {
      name: "BollyHop Team",
      location: "Jersey City",
      level: "Intermediate",
    },
    {
      name: "Pre-Teens",
      location: "Jersey City",
      level: "Youth",
    },
    {
      name: "Adult Bollywood",
      location: "Manhattan",
      level: "Open Level",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Fall Showcase 2026
          </h1>

          <p className="text-xl text-gray-300">
            Join a team, train with dedicated instructors,
            and perform on stage this September.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Showcase Teams
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {teams.map((team) => (
            <div
              key={team.name}
              className="border rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-2">
                {team.name}
              </h3>

              <p className="text-gray-600">
                📍 {team.location}
              </p>

              <p className="text-gray-600 mb-4">
                Level: {team.level}
              </p>

              <p className="font-semibold mb-4">
                Registration Fee: $300
              </p>

              <Link
                href="/register"
                className="inline-block bg-black text-white px-4 py-2 rounded-lg"
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold">
                When does rehearsal start?
              </h3>
              <p>
                Rehearsals begin approximately 8–10 weeks
                before the showcase.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Is performance experience required?
              </h3>
              <p>
                No. Programs are available for multiple
                experience levels.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                What is included in registration?
              </h3>
              <p>
                Training, rehearsals, showcase participation,
                and access to student resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Perform?
        </h2>

        <p className="mb-6">
          Reserve your spot for Fall Showcase 2026.
        </p>

        <Link
          href="/"
          className="bg-pink-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}