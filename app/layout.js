export const metadata = {
  title: 'CCAH Vet Clinic',
  description: 'Veterinary Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
