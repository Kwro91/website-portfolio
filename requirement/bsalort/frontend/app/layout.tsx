// app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google';
import { Dancing_Script } from 'next/font/google';
import { Navbar, BottomBar } from './components';

const poppins = Poppins ({
  weight: ['400', '500', '600','700'],
  display: 'swap',
  subsets: ['latin']
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export const metadata = {
  title: 'Mon Portfolio',
  description: 'Bienvenue sur mon portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="{poppins.className}">
        <Navbar />
        {children}
        <BottomBar />
      </body>
    </html>
  )
}
