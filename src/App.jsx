import { Routes, Route, Link } from 'react-router-dom';
import Vitae from './Vitae';
import Portal from './Portal';
import './App.css';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#121212', 
      color: '#e0e0e0', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'monospace',
      margin: 0,
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ 
          color: '#0f52ba', 
          fontSize: '3.5rem', 
          marginBottom: '10px',
          textShadow: '0 0 15px rgba(15, 82, 186, 0.5)'
        }}>
          The Workspace of B
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#a0a0a0', 
          marginBottom: '40px',
          borderBottom: '1px solid #333',
          paddingBottom: '20px'
        }}>
          Alchemical Ponderings on the Art of Arcane Engineering
        </p>

        <div style={{ 
          display: 'inline-block',
          textAlign: 'left',
          backgroundColor: '#1a1a1a',
          padding: '25px', 
          border: '1px solid #c0c0c0', 
          borderRadius: '4px', 
          boxShadow: '0 0 20px rgba(80, 200, 120, 0.15)',
          borderLeft: '4px solid #50c878'
        }}>
          <h2 style={{ marginTop: 0, color: '#c0c0c0', fontSize: '1.2rem' }}>System Diagnostics</h2>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
            <li>
              <Link to="/" style={{ color: '#e0e0e0', textDecoration: 'none' }}>
                <span style={{ color: '#50c878' }}>[ OK ]</span> Mainframe Connection
              </Link>
            </li>
            <li>
              <Link to="/interface" style={{ color: '#e0e0e0', textDecoration: 'none' }}>
                <span style={{ color: '#50c878' }}>[ OK ]</span> Arcane Interface System
              </Link>
            </li>
            <li>
              <Link to="/datastream" style={{ color: '#e0e0e0', textDecoration: 'none' }}>
                <span style={{ color: '#50c878' }}>[ OK ]</span> Alchemical Datastream
              </Link>
            </li>
            <li>
              <Link to="/vitae" style={{ color: '#e0e0e0', textDecoration: 'none' }}>
                <span style={{ color: '#e6cc00' }}>[updating]</span> Vitae d'Artificer
              </Link>
            </li>
          </ul>
        </div>

        {/* --- DISPLAY SCREEN --- */}
        <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px dashed #333', width: '100%', textAlign: 'left' }}>
          <Routes>
            <Route path="/" element={<p style={{ color: '#777', fontStyle: 'italic' }}>// Mainframe active. Awaiting operator input...</p>} />
            <Route path="/interface" element={<Portal />} /> 
            <Route path="/datastream" element={<p style={{ color: '#777', fontStyle: 'italic' }}>// Alchemical datastream compiling...</p>} />
            <Route path="/vitae" element={<Vitae />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}

export default App;