import './App.css'

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
          B's Workshop
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#a0a0a0', 
          marginBottom: '40px',
          borderBottom: '1px solid #333',
          paddingBottom: '20px'
        }}>
          High-tech alchemy and arcanepunk machinery in progress.
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
            <li><span style={{ color: '#50c878' }}>[ OK ]</span> Mainframe connected.</li>
            <li><span style={{ color: '#50c878' }}>[ OK ]</span> Optical monocle interface online.</li>
            <li><span style={{ color: '#50c878' }}>[ OK ]</span> OBD-II datastream routing...</li>
            <li><span style={{ color: '#e6cc00' }}>[WARN]</span> Awaiting structural deployment.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
