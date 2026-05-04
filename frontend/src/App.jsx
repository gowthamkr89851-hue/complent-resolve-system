import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Complaint Portal</h1>
        <p className="text-gray-300 mb-8">Submit and track complaints with transparency and accountability</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Submit Complaint</h2>
            <p className="text-gray-300">File a new complaint with evidence and documentation</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Track Status</h2>
            <p className="text-gray-300">Monitor your complaint progress in real-time</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h2 className="text-xl font-bold text-red-400 mb-2">Escalate</h2>
            <p className="text-gray-300">Direct escalation to commissioners within 48 hours</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started ({count})
          </button>
        </div>
      </div>
    </div>
  );
}
