export default function LoginPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        width: '400px'
      }}>
        <h1 style={{textAlign: 'center', color: '#2d6a4f'}}>
          🐾 CCAH Vet Clinic
        </h1>
        <p style={{textAlign: 'center', color: '#666'}}>
          Staff Login
        </p>
        <div style={{marginTop: '20px'}}>
          <input 
            type="text" 
            placeholder="Username"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
          <input 
            type="password" 
            placeholder="Password"
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              borderRadius: '5px',
              border: '1px solid #ddd',
              fontSize: '16px'
            }}
          />
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#2d6a4f',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
