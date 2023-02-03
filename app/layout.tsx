import React from 'react'
import Link from 'next/link'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Next 13 App</title>
      </head>
      <body>
        <nav>
          <ul>
            {
              links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
