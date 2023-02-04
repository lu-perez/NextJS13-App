import React from 'react'
import Navigation from './components/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next 13 App</title>
      </head>
      <body>
        <Navigation />
        <div style={{ padding: '20px' }}>
          <h1 style={{ marginBottom: '20px' }}>App</h1>
          {children}
        </div>
      </body>
    </html>
  )
}
