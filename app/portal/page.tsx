export default function PortalPage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
  
          <h1 className="text-4xl font-bold mb-8">
            Student Portal
          </h1>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-4">
                My Programs
              </h2>
  
              <ul className="space-y-2">
                <li>✓ Fall Showcase 2026</li>
                <li>✓ BollyHop Team</li>
              </ul>
            </div>
  
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-4">
                Announcements
              </h2>
  
              <p>
                Rehearsal moved to Sept 10 at 6 PM.
              </p>
            </div>
  
            <div className="bg-white rounded-xl p-6 shadow">
              <h2 className="font-bold text-xl mb-4">
                Practice Videos
              </h2>
  
              <ul className="space-y-2">
                <li>Week 1 Choreo</li>
                <li>Week 2 Choreo</li>
                <li>Week 3 Choreo</li>
              </ul>
            </div>
  
          </div>
        </div>
      </main>
    );
  }