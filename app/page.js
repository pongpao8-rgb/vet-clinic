eimport Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding: '40px', textAlign: 'center'}}>
      <h1>🐾 CCAH Veterinary Clinic System</h1>
      <p>Welcome to the Clinic Management System</p>
      <div style={{marginTop: '20px'}}>
        <Link href="/login" style={{
          backgroundColor: '#2d6a4f',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none',
          marginRight: '10px'
        }}>
          Go to Login
        </Link>
        <Link href="/dashboard" style={{
          backgroundColor: '#1a759f',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          Go to Dashboard
        </Link>
      </div>
    </main>
  )
}
