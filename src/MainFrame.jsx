import React from 'react';

const apps = Array.from({ length: 8 }, (_, index) => {
  const slot = String(index + 1).padStart(2, '0');
  return {
    id: index + 1,
    title: `App Slot ${slot}`,
    description: `Placeholder description for App Slot ${slot}. Replace this text with app details.`,
    image: `/Image ${slot}.png`,
  };
});

const styles = {
  frame: {
    padding: '24px',
    background: '#111214',
    color: '#e4e4e4',
    minHeight: '100vh',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  box: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '18px',
    background: '#17181c',
    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35)',
    padding: '20px',
    marginBottom: '24px',
  },
  header: {
    marginBottom: '16px',
    color: '#f2f2f2',
  },
  diagnosticGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '14px',
  },
  diagnosticCard: {
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '14px',
    background: '#1c1e23',
    padding: '14px',
  },
  appStore: {
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '20px',
    background: '#141618',
    padding: '20px',
  },
  appGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '18px',
  },
  appCard: {
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '16px',
    overflow: 'hidden',
    background: '#181b20',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '320px',
  },
  appImage: {
    width: '100%',
    height: '170px',
    objectFit: 'cover',
    background: '#202329',
  },
  appContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  appTitle: {
    margin: 0,
    marginBottom: '8px',
    fontSize: '1rem',
    color: '#ffffff',
  },
  appDescription: {
    margin: 0,
    flexGrow: 1,
    color: '#c9c9cc',
    lineHeight: 1.5,
    fontSize: '0.95rem',
  },
  appFooter: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    border: 'none',
    borderRadius: '10px',
    padding: '10px 14px',
    background: '#3b82f6',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.95rem',
  },
  smallText: {
    color: '#8f97a4',
    fontSize: '0.88rem',
  },
};

export default function MainFrame() {
  return (
    <div style={styles.frame}>
      <div style={styles.box}>
        <div style={styles.header}>
          <h1 style={{ margin: 0, fontSize: '1.7rem' }}>System Diagnostics</h1>
          <p style={{ marginTop: '10px', color: '#b8bfc7' }}>
            Live system status and health checks. Keep an eye on the main metrics before browsing apps.
          </p>
        </div>
        <div style={styles.diagnosticGrid}>
          <div style={styles.diagnosticCard}>
            <strong>CPU</strong>
            <p style={{ margin: '10px 0 0', color: '#cfd6dc' }}>42% utilization</p>
          </div>
          <div style={styles.diagnosticCard}>
            <strong>Memory</strong>
            <p style={{ margin: '10px 0 0', color: '#cfd6dc' }}>6.8 GB / 16 GB</p>
          </div>
          <div style={styles.diagnosticCard}>
            <strong>Storage</strong>
            <p style={{ margin: '10px 0 0', color: '#cfd6dc' }}>214 GB free</p>
          </div>
          <div style={styles.diagnosticCard}>
            <strong>Network</strong>
            <p style={{ margin: '10px 0 0', color: '#cfd6dc' }}>Online • 128 Mbps</p>
          </div>
        </div>
      </div>

      <div style={styles.appStore}>
        <div style={styles.header}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>App Store</h2>
          <p style={{ marginTop: '10px', color: '#b8bfc7' }}>
            Eight app slots are ready. Replace placeholders and drop the matching images into the app assets folder.
          </p>
        </div>
        <div style={styles.appGrid}>
          {apps.map((app) => (
            <article key={app.id} style={styles.appCard}>
              <img
                src={app.image}
                alt={app.title}
                style={styles.appImage}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22320%22 height=%22170%22 viewBox=%220 0 320 170%22%3E%3Crect width=%22320%22 height=%22170%22 fill=%22%231c1e23%22/%3E%3Ctext x=%22160%22 y=%2288%22 fill=%22%238b929f%22 font-family=%22Arial, sans-serif%22 font-size=%2214%22 text-anchor=%22middle%22%3EImage not found%3C/text%3E%3C/svg%3E';
                }}
              />
              <div style={styles.appContent}>
                <h3 style={styles.appTitle}>{app.title}</h3>
                <p style={styles.appDescription}>{app.description}</p>
                <div style={styles.appFooter}>
                  <span style={styles.smallText}>Slot {app.id}</span>
                  <button type="button" style={styles.button}>View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
