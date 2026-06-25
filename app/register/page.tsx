export default function RegisterPage() {
    return (
      <main className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
  
          <h1 className="text-4xl font-bold mb-6">
            Register for a Program
          </h1>
  
          <form className="space-y-5">
  
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                className="w-full border rounded-lg p-3"
                placeholder="Jane Doe"
              />
            </div>
  
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg p-3"
                placeholder="jane@email.com"
              />
            </div>
  
            <div>
              <label className="block mb-2">Phone Number</label>
              <input
                className="w-full border rounded-lg p-3"
                placeholder="(555) 555-5555"
              />
            </div>
  
            <div>
              <label className="block mb-2">Program</label>
  
              <select className="w-full border rounded-lg p-3">
                <option>Elite Team - Manhattan</option>
                <option>BollyHop Team - Jersey City</option>
                <option>Pre-Teens - Jersey City</option>
                <option>Adult Bollywood - Manhattan</option>
              </select>
            </div>
  
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg"
            >
              Continue to Payment
            </button>
  
          </form>
        </div>
      </main>
    );
  }