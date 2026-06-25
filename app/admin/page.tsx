export default function AdminPage() {
    return (
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
  
          <h1 className="text-4xl font-bold mb-8">
            Admin Dashboard
          </h1>
  
          <div className="grid md:grid-cols-4 gap-6 mb-8">
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold">Students</h2>
              <p className="text-3xl mt-2">128</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold">Programs</h2>
              <p className="text-3xl mt-2">12</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold">Workshops</h2>
              <p className="text-3xl mt-2">5</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold">Showcases</h2>
              <p className="text-3xl mt-2">1</p>
            </div>
  
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold text-xl mb-4">
                Add Announcement
              </h2>
  
              <input
                className="w-full border p-3 rounded-lg mb-3"
                placeholder="Title"
              />
  
              <textarea
                className="w-full border p-3 rounded-lg mb-3"
                rows={4}
                placeholder="Message"
              />
  
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg">
                Publish
              </button>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="font-bold text-xl mb-4">
                Add Program
              </h2>
  
              <input
                className="w-full border p-3 rounded-lg mb-3"
                placeholder="Program Name"
              />
  
              <input
                className="w-full border p-3 rounded-lg mb-3"
                placeholder="Location"
              />
  
              <input
                className="w-full border p-3 rounded-lg mb-3"
                placeholder="Price"
              />
  
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Create Program
              </button>
            </div>
  
          </div>
  
        </div>
      </main>
    );
  }