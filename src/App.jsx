import React, { useState } from 'react';
import { ChevronLeft, Terminal, Cpu, PenTool, BookOpen, Smartphone } from 'lucide-react';

// Custom CSS for the Brushed Metal & Silver Aesthetic
const customStyles = `
  .brushed-metal-bg {
    background: linear-gradient(105deg, #121212 0%, #1e1e1e 12%, #0f0f0f 24%, #1e1e1e 35%, #121212 50%, #1e1e1e 65%, #0f0f0f 76%, #1e1e1e 88%, #121212 100%);
    background-size: 200% 200%;
    position: relative;
  }
  .brushed-metal-bg::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
  .silver-screen-panel {
    background: rgba(10, 10, 14, 0.85);
    backdrop-filter: blur(10px);
    border: 2px solid #a0aec0; /* Silver accent */
    box-shadow: 0 0 15px rgba(160, 174, 192, 0.2), inset 0 0 20px rgba(0,0,0,0.8);
    position: relative;
    z-index: 1;
  }
  .silver-text {
    background: linear-gradient(to bottom, #ffffff 0%, #a0aec0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .vintage-font {
    font-family: 'Courier New', Courier, monospace;
  }
  .bullet-1 { font-size: 1.5rem; font-weight: bold; color: #e2e8f0; margin-bottom: 0.25rem; }
  .bullet-2 { font-size: 1.125rem; color: #cbd5e1; margin-bottom: 0.25rem; }
  .bullet-3 { font-size: 0.875rem; color: #94a3b8; font-style: italic; }
`;

export default function BecksBrainstorms() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'aethers-dart'

  // --- COMPONENT: HOMEPAGE ---
  const HomeView = () => (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 relative z-10">
      
      {/* Header Panel */}
      <div className="silver-screen-panel rounded-xl p-6 md:p-10 max-w-4xl w-full text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black tracking-widest uppercase mb-6 silver-text">
          Beck's Brainstorms
        </h1>
        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-serif italic border-y border-slate-600 py-4">
          ↔ From data streams to knotwork ↔<br className="hidden md:block" />
          From inking flesh for art to transmuting physical properties for a desired affect ↔<br className="hidden md:block" />
          Arcane Alchemy is a mastery of all forms of Aetheric Constructs ↔
        </p>
      </div>

      {/* Directory Sections */}
      <div className="w-full max-w-3xl space-y-8 text-center">
        
        {/* Section 1: Aether's Dart (Interactive Button) */}
        <button 
          onClick={() => setCurrentView('aethers-dart')}
          className="w-full silver-screen-panel rounded-lg p-6 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(74,144,226,0.3)] transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <div className="flex flex-col items-center">
             <div className="bullet-1 group-hover:text-blue-400 transition-colors flex items-center justify-center">
               <Smartphone className="w-5 h-5 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
               » Æthers Dart -
             </div>
             <div className="bullet-2">»» Mobile app build with multifaceted data inputs with invaluable output</div>
             <div className="bullet-3">»»» OBD II - Bluetooth - NFC</div>
          </div>
        </button>

        {/* Section 2: The Overture */}
        <div className="w-full silver-screen-panel rounded-lg p-6">
          <div className="flex flex-col items-center">
             <div className="bullet-1 flex items-center justify-center"><BookOpen className="w-5 h-5 mr-2 text-slate-500" /> » The Overture</div>
             <div className="bullet-2">»» The original words that bring the ArcanePunk World to life</div>
             <div className="bullet-3">»»» Chapt 1-4 Sneak Peek Coming before the Sun is in Gemini</div>
          </div>
        </div>

        {/* Section 3: Physical Alchemy */}
        <div className="w-full silver-screen-panel rounded-lg p-6">
          <div className="flex flex-col items-center">
             <div className="bullet-1 flex items-center justify-center"><PenTool className="w-5 h-5 mr-2 text-slate-500" /> » Physical Alchemy</div>
             <div className="bullet-2">»» Creations of HandMade artisanship to be showcased soon!</div>
          </div>
        </div>

        {/* Section 4: Artistic Ventures */}
        <div className="w-full silver-screen-panel rounded-lg p-6">
          <div className="flex flex-col items-center">
             <div className="bullet-1 flex items-center justify-center"><Terminal className="w-5 h-5 mr-2 text-slate-500" /> » Artistic Ventures of Faux Flesh- A journal of progression</div>
             <div className="bullet-2">»» Showcase of Tattoo Journeyman Coming Soon!</div>
          </div>
        </div>

      </div>
    </div>
  );

  // --- COMPONENT: AETHER'S DART DEV LOG ---
  const DevLogView = () => (
    <div className="flex flex-col min-h-screen py-8 px-4 sm:px-6 relative z-10 max-w-4xl mx-auto">
      
      {/* Navigation */}
      <button 
        onClick={() => setCurrentView('home')}
        className="flex items-center text-slate-400 hover:text-white mb-6 transition-colors w-fit group"
      >
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        <span className="uppercase tracking-widest text-xs font-bold">Return to Main Terminal</span>
      </button>

      {/* Log Header */}
      <div className="silver-screen-panel rounded-xl p-8 mb-8">
        <h1 className="text-3xl font-black tracking-widest uppercase mb-2 silver-text flex items-center">
          <Cpu className="w-8 h-8 mr-3 text-blue-400" /> Project Aether: Dev Log
        </h1>
        <p className="text-slate-400 vintage-font text-sm">Target: 2015 Dodge Dart Rallye | Lead: B. Beck</p>
      </div>

      {/* Log Entries */}
      <div className="space-y-6">
        
        {/* Entry 1 */}
        <div className="silver-screen-panel rounded-lg p-6 border-l-4 border-l-blue-500">
          <h3 className="text-xl font-bold text-slate-200 mb-2">Phase 1: Conceptualization & UI Architecture</h3>
          <p className="text-slate-400 text-sm mb-3">The initial blueprint. We established the need for a Copilot that bridges physical driving telemetry with digital convenience.</p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 ml-2">
            <li>Established the Arcanepunk aesthetic: Brushed metal, Sapphire Blue (Active), Emerald Green (Passive/Good), and Red (Alert).</li>
            <li>Outlined core modules: Leyline Navigation, Comms Interception, DJ Media Controls, and OBD-II Telemetry.</li>
          </ul>
        </div>

        {/* Entry 2 */}
        <div className="silver-screen-panel rounded-lg p-6 border-l-4 border-l-emerald-500">
          <h3 className="text-xl font-bold text-slate-200 mb-2">Phase 2: Browser-Based React Simulation</h3>
          <p className="text-slate-400 text-sm mb-3">Constructed the first interactive UI prototype using React and Tailwind CSS to safely test logic loops.</p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 ml-2">
            <li>Built an event-driven logging system ("Aether's Resonance Log").</li>
            <li>Simulated speed alerts (&gt;6mph threshold) and POI triggers (Vegan spots, Dog parks).</li>
            <li>Created logic for muting background media during active system announcements.</li>
          </ul>
        </div>

        {/* Entry 3 */}
        <div className="silver-screen-panel rounded-lg p-6 border-l-4 border-l-purple-500">
          <h3 className="text-xl font-bold text-slate-200 mb-2">Phase 3: Mobile-First Constraints & Offline UX</h3>
          <p className="text-slate-400 text-sm mb-3">Refactored the dashboard specifically for the Pixel 10 Pro viewport, focusing on driver safety and readability.</p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 ml-2">
            <li>Designed a high-contrast "Offline Mode" that removes map tiles and centers hyper-legible turn directions for dead zones.</li>
            <li>Overhauled the Comms Relay to feature "Read Aloud" and "Dismiss" quick-actions for incoming texts.</li>
          </ul>
        </div>

        {/* Entry 4 */}
        <div className="silver-screen-panel rounded-lg p-6 border-l-4 border-l-yellow-500 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 bg-yellow-500 text-black text-[10px] font-black uppercase px-8 py-1 rotate-45">Current</div>
          <h3 className="text-xl font-bold text-slate-200 mb-2">Phase 4: Hardware Infrastructure Staging</h3>
          <p className="text-slate-400 text-sm mb-3">Bridging the software to the physical realm using the Konnwei MAXOBD scanner and Mifare Classic 1k NFC tags.</p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 ml-2">
            <li>Hardcoded the ELM327 hexadecimal dictionary (e.g., <code className="bg-black px-1 rounded text-yellow-400">010C</code> for RPM) into the infrastructure.</li>
            <li>Prepped NFC tags with <code className="bg-black px-1 rounded text-yellow-400">aether_auth_driver</code> payloads via NFC Tools.</li>
            <li><em>Next Step:</em> Porting the React UI into React Native to utilize the Pixel 10 Pro's Bluetooth and NFC hardware.</li>
          </ul>
        </div>

      </div>
    </div>
  );

  return (
    <div className="brushed-metal-bg min-h-screen font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <style>{customStyles}</style>
      {currentView === 'home' ? <HomeView /> : <DevLogView />}
    </div>
  );
}