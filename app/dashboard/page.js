export default function Dashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f0f4f8'
    }}>
      <div style={{
        backgroundColor: '#2d6a4f',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{color: 'white', margin: 0}}>
          🐾 CCAH Vet Clinic
        </h1>
        <button style={{
          backgroundColor: 'white',
          color: '#2d6a4f',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>

      <div style={{padding: '30px'}}>
        <h2 style={{color: '#2d6a4f'}}>Main Menu - CCAH</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '20px'
        }}>
          {[
            { title: '👥 Owners', desc: 'Manage pet owners' },
            { title: '🐾 Pets', desc: 'Manage patients' },
            { title: '🏥 Visits', desc: 'Clinical records' },
            { title: '💊 Prescriptions', desc: 'Medications' },
            { title: '🧪 Lab Results', desc: 'Blood work & tests' },
            { title: '📅 Appointments', desc: 'Schedule visits' },
            { title: '💉 Vaccinations', desc: 'Vaccine records' },
            { title: '📦 Inventory', desc: 'Stock management' },
            { title: '👨‍⚕️ Staff', desc: 'Manage staff' },
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.2s'
            }}>
              <h3 style={{color: '#2d6a4f', margin: '0 0 10px 0'}}>
                {item.title}
              </h3>
              <p style={{color: '#666', margin: 0}}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
