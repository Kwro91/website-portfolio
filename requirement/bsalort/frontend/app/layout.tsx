// app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google';
import { Navbar, BottomBar, ScrollTop } from './components';

const poppins = Poppins ({
  weight: ['400', '500', '600','700'],
  display: 'swap',
  subsets: ['latin']
});

export const metadata = {
  title: 'bsalort.fr',
  description: 'Portfolio de Benjamin Salort, etudiant en architecture informatique a l\'ecole 42 Paris.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`h-full ${poppins.className}`}>
        <div className="flex flex-col">
          <Navbar />
            {children}
            <ScrollTop />
          <BottomBar />
        </div>
      </body>
    </html>
  )
}
